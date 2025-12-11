import { useState, useEffect } from 'react';
import "../styles/index.css";

const BrainstormInputModal = ({ onClose, onSubmit, onClickOutside }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if click is outside the modal content
      if (e.target.classList.contains('modal-overlay')) {
        onClickOutside && onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClickOutside]);

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit && onSubmit(input);
      onClose();
    }
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="w-full bg-[#01ec87] border-t-4 border-[#01ec87] rounded-t-2xl p-6 max-w-4xl mb-0">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Let me know any thoughts ideas or issues you might have with this project and we can brainstorm together"
          className="w-full bg-[#2a3a35] text-[#e6fdf3] placeholder-[#7a9a8a] rounded-lg p-4 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#1b1f1f] resize-none text-sm"
          autoFocus
        />
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-6 py-2 text-[#1b1f1f] hover:bg-[#1b1f1f]/10 rounded-lg transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="px-6 py-2 bg-[#1b1f1f] hover:bg-gray-900 text-[#01ec87] font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrainstormInputModal;