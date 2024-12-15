import React from 'react';
import { Trash2 } from 'lucide-react';

/**
 * Updated to include checkboxes for multiple file selection.
 * Props:
 *  - files: array of {id, name, data, metadata}
 *  - selectedFileIds: array of currently selected file IDs
 *  - onToggleFileSelection: (id: string) => void
 *  - onDeleteFile: (id: string) => void
 */

const FileList = ({ files, selectedFileIds, onToggleFileSelection, onDeleteFile }) => {
    return (
        <div className="w-full md:w-1/4 border-r border-gray-200 p-2 space-y-2">
            <h2 className="font-bold text-lg">Uploaded Files</h2>
            {files.length === 0 ? (
                <p className="text-gray-500 text-sm">No files uploaded yet.</p>
            ) : (
                <ul className="space-y-1">
                    {files.map(file => {
                        const isSelected = selectedFileIds.includes(file.id);
                        return (
                            <li
                                key={file.id}
                                className={`flex items-center justify-between p-2 rounded hover:bg-gray-100 space-x-2 ${isSelected ? 'bg-blue-50' : ''
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                    checked={isSelected}
                                    onChange={() => onToggleFileSelection(file.id)}
                                />
                                <span className="font-medium truncate flex-grow">{file.name}</span>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDeleteFile(file.id);
                                    }}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default FileList;