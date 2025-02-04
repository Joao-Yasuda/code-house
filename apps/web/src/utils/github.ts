export async function fetchGitHubRepo(repoUrl: string) {
  // Extract owner and repo from URL
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) throw new Error('Invalid GitHub URL');
  
  const [, owner, repo] = match;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`;
  
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  if (data.message) throw new Error(data.message);
  
  return Promise.all(
    data.tree
      .filter((item: any) => item.type === 'blob')
      .map(async (item: any) => {
        const contentResponse = await fetch(item.url);
        const contentData = await contentResponse.json();
        
        const content = decodeBase64Content(contentData.content);
        
        return {
          path: item.path,
          content
        };
      })
  );
}


function decodeBase64Content(encoded: string) {
  try {
    const cleaned = encoded.replace(/\s/g, '');
    return decodeURIComponent(escape(atob(cleaned)));
  } catch (error) {
    console.warn('Failed to decode content:', error);
    return encoded;
  }
} 