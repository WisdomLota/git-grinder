import { X } from 'lucide-react';
import "../styles/index.css";

const ContributorsModal = ({ contributors, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1b1f1f] rounded-lg max-w-md w-full border border-[#324b3f]">
        <div className="flex items-center justify-between p-4 border-b border-[#324b3f]">
          <h3 className="text-[#e6fdf3] font-semibold">
            Project Contributors [{contributors.length}]
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-[#e6fdf3] transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
          {contributors.map((contributor, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e6fdf3]"></div>
              <span className={`font-medium ${contributor.isMe ? 'text-[#01ec87]' : 'text-[#e6fdf3]'}`}>
                {contributor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorsModal;