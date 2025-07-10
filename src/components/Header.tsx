import { motion } from 'framer-motion';
import { Download, Moon, Sun } from 'lucide-react';
import React from 'react';
import { navItems } from '../data/navItems';
import { useTheme } from '../hooks/useTheme';

import useToast from '../hooks/useToast';
import resumePdf from '/src/assets/Rahul_MERN_AI_Resume.pdf'; // adjust the path as needed

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { showSuccess } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Uncomment the following code if you want to use fetch and saveAs for downloading
  // Note: This method requires the PDF to be hosted on a server that allows CORS.
  // If the PDF is in the public folder, you can directly link to it as shown below.
  // If you want to use the fetch method, make sure to install file-saver package

  // const handleDownload = async () => {
  //   try {
  //     const response = await fetch(resumePdf); // Replace with your PDF URL
  //     const blob = await response.blob();
  //     saveAs(blob, "rahul_resume.pdf"); // Replace with desired filename
  //   } catch (error) {
  //     console.error("Error downloading PDF:", error);
  //   }
  // };

  const handleDownload = () => {
    console.log('click');
    const link = document.createElement('a');
    link.href = resumePdf; // path relative to public
    link.download = 'rahul_resume.pdf'; // ✅ correct filename
    link.click();
    showSuccess('Resume downloaded successfully!');
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl text-gray-900 dark:text-white"
          >
            RC
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Resume</span>
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
