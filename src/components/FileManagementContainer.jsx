// import React, { useContext, useCallback } from 'react';
// import MultiFileUpload from './MultiFileUpload';
// import { DashboardContext } from '../context/DashboardContext';

// const FileManagementContainer = () => {
//     const { files, setFiles, selectedFileIds, setSelectedFileIds } = useContext(DashboardContext);

//     const handleFilesUploaded = useCallback((uploadedFiles) => {
//         setFiles(prev => [...prev, ...uploadedFiles]);
//     }, [setFiles]);

//     const handleToggleFileSelection = (fileId) => {
//         setSelectedFileIds(prev => {
//             if (prev.includes(fileId)) {
//                 return prev.filter(id => id !== fileId);
//             } else {
//                 return [...prev, fileId];
//             }
//         });
//     };

//     const handleDeleteFile = (id) => {
//         setFiles(prev => prev.filter(f => f.id !== id));
//         setSelectedFileIds(prev => prev.filter(fid => fid !== id));
//     };

//     return (
//         <div className="flex items-center justify-center w-full">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//                 <MultiFileUpload onFilesUploaded={handleFilesUploaded} />
//             </div>
//         </div>
//     );
// };

// export default FileManagementContainer;