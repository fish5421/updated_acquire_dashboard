// FileManagementContainer.jsx
import React, { useContext, useCallback } from 'react';
import MultiFileUpload from './MultiFileUpload';
import FileList from './FileList';
import { DashboardContext } from '../context/DashboardContext';

/**
 * Updated to handle toggling multiple file selections.
 */

const FileManagementContainer = () => {
    const { files, setFiles, selectedFileIds, setSelectedFileIds } = useContext(DashboardContext);

    const handleFilesUploaded = useCallback((uploadedFiles) => {
        setFiles(prev => [...prev, ...uploadedFiles]);
        // No automatic selection here; user will select files manually.
    }, [setFiles]);

    const handleToggleFileSelection = (fileId) => {
        setSelectedFileIds(prev => {
            if (prev.includes(fileId)) {
                return prev.filter(id => id !== fileId);
            } else {
                return [...prev, fileId];
            }
        });
    };

    const handleDeleteFile = (id) => {
        setFiles(prev => prev.filter(f => f.id !== id));
        setSelectedFileIds(prev => prev.filter(fid => fid !== id));
    };

    return (
        <div className="flex flex-col md:flex-row p-4">
            <FileList
                files={files}
                selectedFileIds={selectedFileIds}
                onToggleFileSelection={handleToggleFileSelection}
                onDeleteFile={handleDeleteFile}
            />
            <div className="w-full md:w-3/4 p-4">
                <MultiFileUpload onFilesUploaded={handleFilesUploaded} />
            </div>
        </div>
    );
};

export default FileManagementContainer;