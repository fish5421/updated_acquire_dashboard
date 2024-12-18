// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Card } from './ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
// import Papa from 'papaparse';

// const FileUpload = ({ onUpload }) => {
//   const [files, setFiles] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     setFiles(Array.from(event.target.files));
//     setError(null);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setFiles(Array.from(event.dataTransfer.files));
//     setError(null);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const processCSV = (file) => {
//     return new Promise((resolve, reject) => {
//       Papa.parse(file, {
//         complete: (results) => {
//           resolve(results.data);
//         },
//         error: (error) => {
//           reject(error);
//         },
//         header: true,
//         skipEmptyLines: true,
//       });
//     });
//   };

//   const handleUpload = async () => {
//     setUploading(true);
//     setUploadProgress(0);
//     setError(null);

//     try {
//       const processedData = [];
//       let lastFileMetadata = null;

//       for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         setUploadProgress(Math.round((i / files.length) * 100));

//         if (file.type === 'text/csv') {
//           const data = await processCSV(file);
//           processedData.push(...data);

//           lastFileMetadata = {
//             name: file.name,
//             type: file.type,
//             size: file.size,
//             lastModified: file.lastModified,
//           };
//         } else {
//           throw new Error(`Unsupported file type: ${file.type}. Please upload CSV files only.`);
//         }
//       }

//       const newUploadedFile = {
//         name: lastFileMetadata.name,
//         dateUploaded: new Date().toLocaleDateString(),
//         lastUpdated: new Date().toLocaleDateString(),
//         uploadedBy: 'Current User',
//       };

//       setUploadedFiles((prev) => [...prev, newUploadedFile]);
//       await onUpload(processedData, lastFileMetadata);

//       setUploadProgress(100);
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setUploading(false);
//       setFiles([]);
//     } catch (error) {
//       console.error('Upload error:', error);
//       setError(error.message);
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       <div
//         className="border-2 border-dashed border-neutral-light rounded-lg p-8 text-center cursor-pointer"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onClick={() => document.getElementById('fileInput').click()}
//       >
//         <input
//           data-testid="file-input"
//           id="fileInput"
//           type="file"
//           multiple
//           accept=".csv"
//           onChange={handleFileChange}
//           className="hidden"
//         />
//         <p className="text-lg mb-2 text-neutral-dark">Click to upload or drag and drop</p>
//         <p className="text-sm text-neutral-light">CSV files only, maximum file size 50 MB</p>
//       </div>
//       {error && <p className="mt-4 text-red-600">{error}</p>}
//       {files.length > 0 && (
//         <div className="mt-4">
//           <h3 className="font-semibold mb-2 text-neutral-dark">Selected files:</h3>
//           <ul className="list-disc pl-5 text-neutral-dark">
//             {files.map((file, index) => (
//               <li key={index}>{file.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {uploading && (
//         <div className="mt-4">
//           <div className="w-full bg-tertiary/20 rounded-full h-2.5">
//             <div className="bg-primary h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
//           </div>
//           <p className="text-center mt-2 text-neutral-dark">{uploadProgress}% Uploaded</p>
//         </div>
//       )}
//       <Button className="mt-4 bg-primary text-white hover:bg-primary/90" onClick={handleUpload} disabled={files.length === 0 || uploading} data-testid="upload-button">
//         {uploading ? 'Uploading...' : 'Upload File'}
//       </Button>
//       {uploadedFiles.length > 0 && (
//         <Table className="mt-8">
//           <TableHeader>
//             <TableRow>
//               <TableHead className="text-neutral-dark">File name</TableHead>
//               <TableHead className="text-neutral-dark">Date uploaded</TableHead>
//               <TableHead className="text-neutral-dark">Last updated</TableHead>
//               <TableHead className="text-neutral-dark">Uploaded by</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {uploadedFiles.map((file, index) => (
//               <TableRow key={index}>
//                 <TableCell className="text-neutral-dark">{file.name}</TableCell>
//                 <TableCell className="text-neutral-dark">{file.dateUploaded}</TableCell>
//                 <TableCell className="text-neutral-dark">{file.lastUpdated}</TableCell>
//                 <TableCell className="text-neutral-dark">{file.uploadedBy}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default FileUpload;