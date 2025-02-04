import { Directory, File, FileSystemItem } from '@/types/fileSystem';
import { ChevronDoubleLeft, ChevronDoubleRight } from "@mynaui/icons-react";
import { useState } from 'react';
import { FileTreeItem } from './fileTreeItem';
interface FileExplorerProps {
  isVisible: boolean;
  fileSystem: FileSystemItem[];
  activeFileId?: number;
  onFileSelect: (file: File) => void;
  onDirectoryToggle: (dir: Directory) => void;
  onCreateItem: (parentPath: string, type: 'file' | 'directory') => void;
  onRename: (id: number, newName: string) => void;
  newItemPath: string | null;
  newItemType: 'file' | 'directory' | null;
  onNewItemSubmit: (name: string) => void;
  onNewItemCancel: () => void;
}

export const FileExplorer = ({
  fileSystem,
  activeFileId,
  onFileSelect,
  onDirectoryToggle,
  onCreateItem,
  onRename,
  newItemPath,
  newItemType,
  onNewItemSubmit,
  onNewItemCancel,
}: FileExplorerProps) => {
  const [isTreeVisible, setIsTreeVisible] = useState(true);

  const toggleTreeVisibility = () => {
    setIsTreeVisible(!isTreeVisible);
  };

  return (
    <div className="flex ">
      {isTreeVisible ? (
        <div className="w-64 dark:black  border-r overflow-y-auto">
          <div className="p-2">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-semibold mb-2">Explorer</h2>
              <button
                  onClick={toggleTreeVisibility}
                  className=" top-2 px-2 py-1 "
                  style={{ zIndex: 10 }}
                >
                  <ChevronDoubleLeft/>
              </button>
            </div>

            {fileSystem.map((item) => (
              <FileTreeItem
                key={item.id}
                item={item}
                onFileSelect={onFileSelect}
                onDirectoryToggle={onDirectoryToggle}
                onCreateItem={onCreateItem}
                onRename={onRename}
                activeFileId={activeFileId}
                newItemPath={newItemPath}
                newItemType={newItemType}
                onNewItemSubmit={onNewItemSubmit}
                onNewItemCancel={onNewItemCancel}
              />
            ))}
          </div>
        </div>) : (
           <button
           onClick={toggleTreeVisibility}
           className=" top-2 px-2 py-1 "
           style={{ zIndex: 10 }}
         >
           <ChevronDoubleRight/>
       </button>
      )}
    </div>
  );
};
