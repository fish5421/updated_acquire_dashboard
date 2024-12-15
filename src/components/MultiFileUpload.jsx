// MultiFileUpload.jsx
import React, { useState, useRef } from 'react';
import Papa from 'papaparse';

const MultiFileUpload = ({ onFilesUploaded }) => {
    const [localFiles, setLocalFiles] = useState([]);
    const [error, setError] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        setLocalFiles(files);
        setError(null);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        setLocalFiles(files);
        setError(null);
    };

    const handleDragOver = (e) => e.preventDefault();

    const handleUpload = async () => {
        if (localFiles.length === 0) return;
        setUploading(true);
        setError(null);
        try {
            const parsedFiles = [];
            for (let i = 0; i < localFiles.length; i++) {
                const file = localFiles[i];
                if (file.type !== 'text/csv' && file.name.slice(-4) !== '.csv') {
                    throw new Error(`Unsupported file type for ${file.name}. Only CSV allowed.`);
                }
                const data = await parseCSV(file);
                parsedFiles.push({
                    id: `${file.name}-${file.lastModified}`,
                    name: file.name,
                    data,
                    metadata: {
                        size: file.size,
                        lastModified: file.lastModified
                    }
                });
                setProgress(Math.round(((i + 1) / localFiles.length) * 100));
            }
            onFilesUploaded(parsedFiles);
            setLocalFiles([]);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setUploading(false);
        }
    };

    const parseCSV = (file) => {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                complete: results => {
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

    return (
        <div className="p-4">
            <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current.click()}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".csv"
                    className="hidden"
                    onChange={handleFileSelect}
                />
                <p className="text-lg mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">CSV files only, max size ~50MB</p>
            </div>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {localFiles.length > 0 && (
                <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-gray-700">
                    {localFiles.map((f, idx) => <li key={idx}>{f.name}</li>)}
                </ul>
            )}
            {uploading && (
                <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-center mt-2">{progress}% Uploaded</p>
                </div>
            )}
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                onClick={handleUpload}
                disabled={localFiles.length === 0 || uploading}
            >
                {uploading ? 'Uploading...' : 'Upload Files'}
            </button>
        </div>
    );
};

export default MultiFileUpload;