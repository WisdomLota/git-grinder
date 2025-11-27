import { X } from 'lucide-react';
import Button from './Button';

const ProfilePreviewModal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-[#1b1f1f]/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#324b3f] rounded-lg max-w-2xl w-full p-8 relative">
        
        <div className="text-center py-12 px-6">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-[#e6fdf3]"></div>
          </div>
          
          <h2 className="text-[#e6fdf3] text-2xl poppins-medium mb-4">Sese</h2>
          
          <p className="text-[#e6fdf3] text-lg mb-8">
            Here's how you'll look when using<br />
            Git grinder alongside other users.
          </p>
  
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              className="px-16 py-2"
              onClick={onConfirm}
            >
              Looks good
            </Button>
            <Button 
              variant="secondary" 
              className="px-16 py-2 bg-transparent border-2 border-[#01ec87] text-[#01ec87] hover:bg-[#01ec87]/10"
              onClick={onClose}
            >
              Change it
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreviewModal;