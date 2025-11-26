import { ChevronDown } from 'lucide-react';
import grinderGoalIcon from '../assets/grinderGoalIcon.svg';
import cliDownloadIcon from '../assets/cliDownloadIcon.svg';
import settingsIcon from '../assets/settingsIcon.svg';
import plusIcon from '../assets/plusIcon.svg';
import logoutIcon from '../assets/logout.svg';

const AccountMenu = ({ onClose, onViewPlans }) => {
  return (
    <div className="absolute top-20 left-4 w-76 bg-[#1b1f1f] border border-[#324b3f] rounded-lg shadow-xl z-50 p-4">
        <div className="flex flex-col items-center gap-3 mb-4 pb-4 border-b border-[#324b3f]">
          <div className="w-16 h-16 rounded-full bg-[#e6fdf3]"></div>
          <div className='text-center'>
            <h3 className="text-[#e6fdf3] font-semibold text-2xl">Sese</h3>
            <p className="text-gray-200 text-md">contact.sese.a@gmail.com</p>
          </div>
        </div>

        <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left">
          <img src={grinderGoalIcon} alt="git-grinder-icon" />
          <span>Grinder Goal</span>
          <ChevronDown size={16} className="ml-auto rotate-[-90deg]" />
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left">
          <img src={cliDownloadIcon} alt="cli-download" />
          <span>Get grinder CLI tool</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left">
          <img src={settingsIcon} alt="settings-icon" />
          <span>Settings</span>
        </button>

        <div className="border-t border-[#324b3f] mt-3 pt-3">
          <button className="w-full flex items-center gap-3 px-2 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left">
            <div className="w-8 h-8 rounded-full bg-[#01ec87]"></div>
            <div>
              <p className="text-sm poppins-regular">Create an open source profile</p>
              <p className="text-xs text-[#01ec87]">contact.sese.a@gmail.com</p>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left mt-2">
            <img src={plusIcon} alt="plus-icon" />
            <span>Add account</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left mt-2">
            <img src={logoutIcon} alt="log-out" />
            <span>Log out</span>
          </button>
        </div>
    </div>
  )
}

export default AccountMenu
