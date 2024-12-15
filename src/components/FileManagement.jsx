import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import FileManagementContainer from './FileManagementContainer';

const FileManagement = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">File Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Files and Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <FileManagementContainer />
        </CardContent>
      </Card>
    </div>
  );
};

export default FileManagement;