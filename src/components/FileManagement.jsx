import React, { useContext, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { DashboardContext } from '../context/DashboardContext';
import MultiFileUpload from './MultiFileUpload';
import FileList from './FileList';

const FileManagement = () => {
  const { files, setFiles, replaceFiles, selectedFileIds, setSelectedFileIds } = useContext(DashboardContext);
  const triggerUploadRef = useRef(null);
  const hasFiles = files.length > 0;

  const handleUploadClick = () => {
    if (triggerUploadRef.current) {
      triggerUploadRef.current();
    }
  };

  // The logic below is the same, we just adjust which array we use when selecting new file IDs
  const handleFilesUploaded = useCallback((uploadedFiles) => {
    // Check for duplicates based on file names instead of IDs
    const existingNames = new Set(files.map(file => file.name));
    const filtered = uploadedFiles.filter(f => !existingNames.has(f.name));
    const newFiles = [...files, ...filtered];
    setFiles(newFiles);

    // Automatically select newly uploaded *filtered* files so that dashboard updates
    // Changed from uploadedFiles to filtered to avoid re-selecting previously uploaded files.
    setSelectedFileIds(prev => {
      const prevIds = new Set(prev);
      const newIds = filtered.map(f => f.id).filter(id => !prevIds.has(id));
      return [...prev, ...newIds];
    });
  }, [files, setFiles, setSelectedFileIds]);

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
    // Instead of appending, we must now replace the files array to remove the file completely
    const updatedFiles = files.filter(f => f.id !== id);
    replaceFiles(updatedFiles);

    // Also remove it from selected file IDs
    setSelectedFileIds(prev => prev.filter(fid => fid !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-dark">
          File Management
        </h1>
      </div>

      {!hasFiles && (
        <div className="flex flex-col items-center justify-center mt-16">
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8 w-full max-w-lg border border-neutral-light"
            aria-label="Empty state upload prompt"
          >
            <h1 className="text-xl font-semibold text-neutral-dark mb-4">No data uploaded</h1>
            <p className="text-neutral-light mb-6 text-center">
              Start by uploading your dataset to begin exploring insights.
            </p>
            <motion.button
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-primary text-white font-medium py-2 px-4 rounded shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transform transition-all mb-6"
              onClick={handleUploadClick}
            >
              Upload Data
            </motion.button>

            <MultiFileUpload onFilesUploaded={handleFilesUploaded} triggerUploadRef={triggerUploadRef} />
          </motion.section>
        </div>
      )}

      {hasFiles && (
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-neutral-dark mb-4">Upload More Files</h2>
            <MultiFileUpload onFilesUploaded={handleFilesUploaded} triggerUploadRef={triggerUploadRef} />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-neutral-dark mb-4">Uploaded Files</h2>
            <FileList
              files={files}
              selectedFileIds={selectedFileIds}
              onToggleFileSelection={handleToggleFileSelection}
              onDeleteFile={handleDeleteFile}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FileManagement;