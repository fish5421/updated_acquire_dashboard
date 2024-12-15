import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUpload from './FileUpload';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DashboardContext } from '../context/DashboardContext';

const FileManagement = () => {
  const navigate = useNavigate();
  const { setData, updateFilterRanges } = useContext(DashboardContext);

  const handleFileUpload = async (processedData, metadata) => {
    console.log('Data processed:', processedData);
    setData(processedData);
    updateFilterRanges(processedData);
    navigate('/'); // Redirect to the Dashboard page after successful upload
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">File Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>Files and Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <FileUpload onUpload={handleFileUpload} />
        </CardContent>
      </Card>
    </div>
  );
};

export default FileManagement;