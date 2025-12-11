import { X } from 'lucide-react';
import Button from './Button';
import "../styles/index.css";

const ConvertProjectModal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#01ec87] rounded-lg max-w-xl w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1b1f1f] hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <p className="text-[#1b1f1f] text-lg mb-6 font-medium p-4">
            Would you like to convert this to a new task or overwrite the already existing tasks in the corresponding project file?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-transparent border-2 border-[#1b1f1f] text-[#1b1f1f] rounded-lg hover:bg-[#1b1f1f] hover:text-[#01ec87] transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-6 py-3 bg-[#1b1f1f] text-[#01ec87] rounded-lg hover:bg-gray-900 transition-colors font-medium"
            >
              Yes Please
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertProjectModal;