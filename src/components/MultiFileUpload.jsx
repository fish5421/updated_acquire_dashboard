import React, { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import { v4 as uuidv4 } from 'uuid';

const MultiFileUpload = ({ onFilesUploaded, triggerUploadRef }) => {
    const [localFiles, setLocalFiles] = useState([]);
    const [error, setError] = useState(null);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (triggerUploadRef) {
            triggerUploadRef.current = handleUploadClick;
        }
    }, [triggerUploadRef]);

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        processFiles(files);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        processFiles(droppedFiles);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const parseCSV = (file) => {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                complete: (results) => {
                    if (results.errors.length > 0) {
                        reject(new Error(`Error parsing ${file.name}: ${results.errors[0].message}`));
                    } else {
                        resolve(results.data);
                    }
                },
                error: (err) => reject(err),
                header: true,
                skipEmptyLines: true
            });
        });
    };

    const processFiles = async (files) => {
        setError(null);
        setUploading(true);

        // Create a Set to track unique file names being processed
        const uniqueFileNames = new Set();
        const newFiles = [];

        // Only process files with unique names
        for (const file of files) {
            if (!uniqueFileNames.has(file.name)) {
                uniqueFileNames.add(file.name);
                newFiles.push({
                    id: uuidv4(),
                    name: file.name || 'Untitled', // Ensure we always have a name
                    status: 'uploading',
                    rawFile: file
                });
            }
        }

        setLocalFiles(prev => [...prev, ...newFiles]);

        // We'll collect processed results here and call onFilesUploaded once after processing all files
        const processedResults = [];

        for (const fileObj of newFiles) {
            try {
                const data = await parseCSV(fileObj.rawFile);
                const finalName = fileObj.name || fileObj.rawFile?.name || 'Untitled';

                // Log what we're passing to onFilesUploaded for debugging
                console.log('Processing file:', {
                    id: fileObj.id,
                    name: finalName,
                    dataLength: data.length
                });

                // Instead of calling onFilesUploaded here directly, accumulate results
                processedResults.push({
                    id: fileObj.id,
                    name: finalName,
                    data: Array.isArray(data) ? data : [],
                    status: 'done'
                });

                // Remove the file from localFiles since upload is done
                setLocalFiles(prev => prev.filter(item => item.id !== fileObj.id));

            } catch (err) {
                console.error('Upload error:', err);
                setError(err.message);
                // Mark it as error
                setLocalFiles(prev =>
                    prev.map(item =>
                        item.id === fileObj.id ? { ...item, status: 'error' } : item
                    )
                );
            }
        }

        // Now call onFilesUploaded once with all processed files
        if (processedResults.length > 0) {
            onFilesUploaded(processedResults);
        }

        setUploading(false);
    };

    return (
        <div>
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                    border-2 border-dashed p-10 text-center rounded-lg cursor-pointer transition-colors
                    ${isDragging ? 'border-primary bg-tertiary/20' : 'border-neutral-light bg-white'}
                `}
                role="button"
                aria-label="Drop files here to upload"
                onClick={handleUploadClick}
            >
                <p className="text-neutral-light">Drag and drop files here, or click to select</p>
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".csv"
                    className="hidden"
                    onChange={handleFileSelect}
                />
            </div>

            {error && <p className="mt-4 text-red-600">{error}</p>}

            {localFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                    {localFiles.map((file) => (
                        <div
                            key={file.id}
                            className="flex items-center justify-between p-2 bg-tertiary/10 rounded"
                        >
                            <span className="text-neutral-dark text-sm truncate">{file.name}</span>
                            <span className={`text-xs ${file.status === 'error' ? 'text-red-600' : 'text-neutral-light'}`}>
                                {file.status}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiFileUpload;