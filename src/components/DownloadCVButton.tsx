import React from "react";
import { generateCV } from "../services/GenerateCV";
import { Download } from "lucide-react";

const DownloadCVButton: React.FC = () => {
  return (
    <button
      onClick={generateCV}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 active:bg-green-800 gap-1"
    >
      <div className="flex items-center justify-center space-x-2">
        <Download size={20} />
        <span>Download CV</span>
      </div>
    </button>
  );
};

export default DownloadCVButton;
