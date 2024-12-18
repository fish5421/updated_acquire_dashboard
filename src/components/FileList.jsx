import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { Tooltip } from "./ui/tooltip";

const FileList = ({ files, selectedFileIds, onToggleFileSelection, onDeleteFile }) => {
    return (
        <div className="w-full p-2 space-y-2 bg-white rounded shadow-sm border border-neutral-light">
            <h2 className="font-bold text-lg text-neutral-dark">Uploaded Files</h2>
            {files.length === 0 ? (
                <p className="text-neutral-light text-sm">No files uploaded yet.</p>
            ) : (
                <ul className="space-y-1">
                    {files.map((file) => {
                        const isSelected = selectedFileIds.includes(file.id);
                        const isDone = file.status === 'done';
                        const icon = isSelected
                            ? <CheckCircle className="w-5 h-5 text-primary" />
                            : <Circle className="w-5 h-5 text-neutral-light" />;

                        const rowClasses = [
                            "flex items-center justify-between p-2 rounded hover:bg-tertiary/30 space-x-2 transition-colors",
                            isSelected ? 'bg-primary/10 border-l-4 border-primary' : ''
                        ].join(' ');

                        return (
                            <li key={file.id} className={rowClasses}>
                                <div className="flex items-center space-x-2">
                                    {/* Use the Tooltip wrapper directly */}
                                    <Tooltip content={isSelected ? "Selected for Dashboard" : "Click to Select"}>
                                        <button
                                            type="button"
                                            className="cursor-pointer inline-flex items-center justify-center"
                                            onClick={() => onToggleFileSelection(file.id)}
                                            aria-label={isSelected ? "Deselect file" : "Select file"}
                                        >
                                            {icon}
                                        </button>
                                    </Tooltip>

                                    <span className="font-medium truncate flex-grow text-neutral-dark">
                                        {file.name}
                                    </span>

                                    {isDone && (
                                        <Tooltip content="File ready for visualization">
                                            <CheckCircle className="w-4 h-4 text-green-600" aria-label="Ready" />
                                        </Tooltip>
                                    )}
                                </div>

                                <button
                                    className="text-red-600 hover:text-red-700"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDeleteFile(file.id);
                                    }}
                                    aria-label="Delete file"
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