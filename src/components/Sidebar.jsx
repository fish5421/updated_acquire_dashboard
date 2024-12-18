import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? 'bg-primary/10 text-neutral-dark border-l-4 border-primary'
      : 'text-neutral-light hover:bg-tertiary/30 hover:text-neutral-dark';
  };

  return (
    <div className="flex flex-col w-64 bg-white border-r border-neutral-light h-screen">
      <div className="flex items-center justify-center h-16 border-b border-neutral-light">
        <span className="text-neutral-dark font-bold text-lg">Micro Startup Dashboard</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 py-4">
          <li>
            <Link to="/" className={`flex items-center px-4 py-2 text-sm font-medium ${isActive('/')}`}>
              <Home className="mr-3 h-6 w-6 text-neutral-light" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/file-management" className={`flex items-center px-4 py-2 text-sm font-medium ${isActive('/file-management')}`}>
              <FileText className="mr-3 h-6 w-6 text-neutral-light" />
              File Management
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-neutral-light mb-2">Quick Actions</h3>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/file-management">
            <Button
              className="w-full flex items-center justify-center bg-primary text-white hover:bg-primary/90"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload File
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;