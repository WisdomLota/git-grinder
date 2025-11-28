import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import AccountMenu from '../components/AccountMenu';
import PlansModal from '../components/PlansModal';
import NotificationsPanel from '../components/NotificationsPanel';
import gridIcon from '../assets/gridIcon.svg';
import listIcon from '../assets/listIcon.svg';
import "../styles/index.css";

const Trash = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [seseGrindExpanded, setSeseGrindExpanded] = useState(true);
  const [view, setView] = useState('grid'); 

  return (
    <div className="flex h-screen bg-[#1b1f1f] overflow-hidden">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        showAccountMenu={showAccountMenu}
        setShowAccountMenu={setShowAccountMenu}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        setShowPlansModal={setShowPlansModal}
        seseGrindExpanded={seseGrindExpanded}
        setSeseGrindExpanded={setSeseGrindExpanded}
        currentPath={window.location.pathname}
      />

      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <header className="bg-[#1b1f1f] border-b border-[#324b3f] px-4 lg:px-8 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
              >
                <Menu size={24} className="text-[#e6fdf3]" />
              </button>
              <h1 className="text-[#e6fdf3] text-2xl poppins-semibold font-bold">Trash</h1>
            </div>
          </div>
        </header>

        {/*Tabs and Controls*/}
        <div className="px-8 py-6 flex justify-end items-center gap-3">
          <select className="px-4 py-2 bg-[#324b3f] border border-[#324b3f] rounded-lg text-[#e6fdf3] poppins-regular focus:outline-none focus:border-emerald-400">
            <option>All Files</option>
          </select>
          <select className="px-4 py-2 bg-[#324b3f] border border-[#324b3f] rounded-lg text-[#e6fdf3] poppins-regular focus:outline-none focus:border-emerald-400">
            <option>Last Viewed</option>
          </select>
          <div className="flex items-center gap-2 bg-[#324b3f] rounded-lg p-1">
            <button onClick={() => setView('grid')} className={`p-2 rounded ${view === 'grid' ? 'bg-[#1b1f1f] text-gray-900' : 'text-gray-400'}`}>
              <img src={gridIcon} alt="grid" className="w-5 h-5" />
            </button>
            <button onClick={() => setView('list')} className={`p-2 rounded ${view === 'list' ? 'bg-[#01ec87] text-gray-900' : 'text-gray-400'}`}>
              <img src={listIcon} alt="list" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <p className="text-[#e6fdf3] text-lg">You don't have any trashed files</p>
        </div>

        <button className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-[#324b3f] text-[#e6fdf3] flex items-center justify-center hover:bg-gray-600">
          ?
        </button>
      </main>

      {showAccountMenu && <AccountMenu onClose={() => setShowAccountMenu(false)} onViewPlans={() => {
        setShowAccountMenu(false);
        setShowPlansModal(true);
      }} />}
      {showPlansModal && <PlansModal onClose={() => setShowPlansModal(false)} />}
      {showNotifications && <NotificationsPanel onClose={() => setShowNotifications(false)} />}
    </div>
  );
};

export default Trash;