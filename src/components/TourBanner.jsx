import { X } from 'lucide-react';
import Button from './Button';

const TourBanner = ({ onClose, onTakeTour }) => {
  return (
    <div className="fixed bottom-2 md:right-20 max-w-md bg-[#01ec87] rounded-lg p-8 shadow-2xl z-50">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-900 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h3 className="text-gray-900 font-bold text-lg mb-2">
          Take a quick tour of your grinder browser?
        </h3>
        <p className="text-gray-800 text-sm mb-4">
          See how to create projects, learn how to brainstorm with the grinder AI, ways to work on open source projects, and more.
        </p>
        <div className="flex absolute bottom-1 right-3 gap-3">
          <Button variant="ghost" onClick={onClose} className="text-gray-900 hover:bg-emerald-500 cursor-pointer">
            No thanks
          </Button>
          <Button variant="outline" onClick={onTakeTour} className='cursor-pointer'>
            Let's go
          </Button>
        </div>
    </div>
  )
}

export default TourBanner