import React, { useContext, useRef, useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardContext';
import MultiFileUpload from './MultiFileUpload';
import FileList from './FileList';

const FileManagement = () => {
  const { files, setFiles, replaceFiles, selectedFileIds, setSelectedFileIds } = useContext(DashboardContext);
  const triggerUploadRef = useRef(null);
  const hasFiles = files.length > 0;

  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    if (triggerUploadRef.current) {
      triggerUploadRef.current();
    }
  };

  const handleFilesUploaded = useCallback((uploadedFiles) => {
    const wasEmpty = files.length === 0;
    const existingNames = new Set(files.map(file => file.name));
    const filtered = uploadedFiles.filter(f => !existingNames.has(f.name));
    const newFiles = [...files, ...filtered];
    setFiles(newFiles);

    setSelectedFileIds(prev => {
      const prevIds = new Set(prev);
      const newIds = filtered.map(f => f.id).filter(id => !prevIds.has(id));
      return [...prev, ...newIds];
    });

    // Only trigger success message and redirect if this is the first upload (wasEmpty)
    if (wasEmpty && filtered.length > 0) {
      setUploadSuccess(true);
    }
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
    const updatedFiles = files.filter(f => f.id !== id);
    replaceFiles(updatedFiles);
    setSelectedFileIds(prev => prev.filter(fid => fid !== id));
  };

  useEffect(() => {
    if (uploadSuccess) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [uploadSuccess, navigate]);

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

      <AnimatePresence>
        {uploadSuccess && (
          <motion.div
            key="upload-success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-primary text-white py-2 px-4 rounded shadow-lg"
          >
            File uploaded successfully! Redirecting to dashboard...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FileManagement;