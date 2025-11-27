import { X } from 'lucide-react';
import Button from './Button';
import grinderGoalImgPattern from "../assets/grinderGoalImgPattern.png"

const GrinderGoalModal = ({ onClose, onViewProgress = onClose, onNoted = onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1b1f1f] rounded-lg h-3/4 w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-[#1b1f1f]">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-[#e6fdf3] transition z-10"
          >
            <X size={28} />
          </button>

          <div className="max-w-md mx-auto lg:mx-0">
            <h2 className="text-[#e6fdf3] text-3xl poppins-semibold mb-2 leading-tight">
              Grinder Goal Update
            </h2>
            <p className="text-[#e6fdf3] poppins-regular leading-relaxed mb-12">
              You haven't been keeping up with your git grinder goal, you are{' '}
              <span className="text-[#01ec87] font-bold">124 commits</span> away from
              accomplishing your grinder goal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                className="px-6 py-2 poppins-semibold rounded-lg"
                onClick={onViewProgress}
              >
                View Grinder Progress
              </Button>
              <Button
                variant="secondary"
                className="px-4 py-2 poppins-semibold rounded-lg border-2 border-[#01ec87] text-[#01ec87] bg-transparent hover:bg-[#01ec87]/10 transition"
                onClick={onNoted}
              >
                Noted
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Pattern Background */}
        <div className="relative w-full lg:w-1/2 bg-[#282d2d] overflow-hidden">
          <div className="absolute inset-0 opacity-90">
            <img
              src={grinderGoalImgPattern}
              alt="Git pattern background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#e6fdf3] hover:text-white transition z-10 hidden lg:block"
          >
            <X size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrinderGoalModal;