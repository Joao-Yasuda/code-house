"use client";
import { CodeEditor } from '@/components/Editor/CodeEditor';
import { GitHubImport } from '@/components/GithubImport/GitHubImport';
import { FileExplorer } from '@/components/fileTree/fileExplorer';
import { Directory, File, FileSystemItem } from '@/types/fileSystem';
import { getAllIds } from '@/utils/fileSystem';
import { useState } from 'react';

const App = () => {
  const [fileSystem, setFileSystem] = useState<FileSystemItem[]>([
    {
      id: 1,
      name: 'src',
      path: '/src',
      type: 'directory',
      isOpen: true,
      children: [
        {
          id: 2,
          name: 'index.js',
          path: '/src/index.js',
          type: 'file',
          content: '// Welcome to your Web IDE!\nconsole.log("Hello, World!");'
        }
      ]
    }
  ]);
  const [activeFile, setActiveFile] = useState<File | null>(null);
  const [newItemPath, setNewItemPath] = useState<string | null>(null);
  const [newItemType, setNewItemType] = useState<'file' | 'directory' | null>(null);

  
  let nextId = Math.max(...getAllIds(fileSystem)) + 1;

  const createNewItem = (parentPath: string, type: 'file' | 'directory') => {
    setNewItemPath(parentPath);
    setNewItemType(type);
  };

  const handleNewItemSubmit = (name: string) => {
    if (!newItemPath || !newItemType) return;

    const newItem: FileSystemItem = newItemType === 'file' 
      ? {
          id: nextId++,
          name,
          path: `${newItemPath}/${name}`,
          type: 'file',
          content: ''
        }
      : {
          id: nextId++,
          name,
          path: `${newItemPath}/${name}`,
          type: 'directory',
          children: [],
          isOpen: true
        };

    const updateTree = (items: FileSystemItem[], path: string): FileSystemItem[] => {
      return items.map(item => {
        if (item.type === 'directory') {
          if (item.path === path) {
            return { ...item, children: [...item.children, newItem] };
          }
          return { ...item, children: updateTree(item.children, path) };
        }
        return item;
      });
    };

    setFileSystem(updateTree(fileSystem, newItemPath));
    setNewItemPath(null);
    setNewItemType(null);
  };

  const handleRename = (id: number, newName: string) => {
    const updateTree = (items: FileSystemItem[]): FileSystemItem[] => {
      return items.map(item => {
        if (item.id === id) {
          const newPath = item.path.split('/').slice(0, -1).concat(newName).join('/');
          return { ...item, name: newName, path: newPath };
        }
        if (item.type === 'directory') {
          return { ...item, children: updateTree(item.children) };
        }
        return item;
      });
    };

    setFileSystem(updateTree(fileSystem));
  };

  const toggleDirectory = (dir: Directory) => {
    const updateTree = (items: FileSystemItem[]): FileSystemItem[] => {
      return items.map(i => {
        if (i.id === dir.id) {
          return { ...i, isOpen: !dir.isOpen };
        }
        if (i.type === 'directory') {
          return { ...i, children: updateTree(i.children) };
        }
        return i;
      });
    };
    setFileSystem(updateTree(fileSystem));
  };

  const handleEditorChange = (value: string | undefined) => {
    if (!activeFile || !value) return;
    
  /**
   * Recursively updates the file system tree to update the content of a file with the given id.
   * @param items The file system tree to update.
   * @returns The updated file system tree.
   */
    const updateFiles = (items: FileSystemItem[]): FileSystemItem[] => {
      return items.map(item => {
        if (item.type === 'file' && item.id === activeFile.id) {
          return { ...item, content: value };
        }
        if (item.type === 'directory') {
          return { ...item, children: updateFiles(item.children) };
        }
        return item;
      });
    };
    
    setFileSystem(updateFiles(fileSystem));
  };

  const handleGitHubImport = (importedFiles: FileSystemItem[]) => {
    setFileSystem(importedFiles);
  };

  const [isExplorerOpen, setIsExplorerOpen] = useState(true); // State to track FileExplorer visibility

  return (
    <div className="flex flex-col h-screen dark:black rounded-sm ">
    {/* Header */}
    <div className="flex items-center p-4 border-b dark:black  ">
      <h1 className="text-xl font-bold">Code Editor</h1>
      <div className="ml-auto flex gap-2">
        <GitHubImport onImport={handleGitHubImport} />
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-1 overflow-hidden ">
      {isExplorerOpen && (
        <div>
        <FileExplorer
         isVisible={isExplorerOpen}
          fileSystem={fileSystem}
          activeFileId={activeFile?.id}
          onFileSelect={setActiveFile}
          onDirectoryToggle={toggleDirectory}
          onCreateItem={createNewItem}
          onRename={handleRename}
          newItemPath={newItemPath}
          newItemType={newItemType}
          onNewItemSubmit={handleNewItemSubmit}
          onNewItemCancel={() => {
            setNewItemPath(null);
            setNewItemType(null);
          }}
        />
        </div>
      )}

      <div className={`flex-1 flex flex-col ${isExplorerOpen ? '' : 'ml-0'}`}>
        <CodeEditor
          file={activeFile}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  </div>
  );
};

export default App;