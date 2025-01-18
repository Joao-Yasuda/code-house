'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

dayjs.extend(relativeTime)

export default function ProjectListClient({ projects }: { projects: any[] }) {
  const { slug: orgSlug, project: projectSlug } = useParams<{
    slug: string
    project: string
  }>()

  const { data, isLoading } = useQuery({
    queryKey: [orgSlug, 'projects'],
    queryFn: () => Promise.resolve({ projects }), // Optionally fetch again
    enabled: !!orgSlug,
  })

  const currentProject =
    data && projectSlug
      ? data.projects.find((project) => project.slug === projectSlug)
      : null

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-xl font-medium">{project.name}</CardTitle>
            <CardDescription className="line-clamp-2 leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center gap-1.5">
            <Avatar className="size-4">
              {project.owner.avatarUrl && <AvatarImage src={project.owner.avatarUrl} />}
              <AvatarFallback />
            </Avatar>
            <span className="truncate text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                {project.owner.name}
              </span>{' '}
              {dayjs(project.createdAt).fromNow()}
            </span>
            <Link href={`/org/${orgSlug}/project/${project.slug}`}>
              <Button size="xs" variant="outline" className="ml-auto">
                View <ArrowRight className="ml-2 size-3" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}