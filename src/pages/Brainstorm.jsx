import { useState } from 'react';
import gridIcon from '../assets/gridIcon.svg';
import listIcon from '../assets/listIcon.svg';
import gitThumbnailPattern1 from '../assets/gitThumbailPattern1.png';
import gitThumbnailPattern2 from '../assets/gitThumbailPattern2.png';
import gitThumbnailPattern3 from '../assets/gitThumbailPattern3.png';
import { Menu } from 'lucide-react';
import "../styles/index.css";
import ProjectCard from '../components/ProjectCard';
import Sidebar from '../components/Sidebar';
import AccountMenu from '../components/AccountMenu';
import PlansModal from '../components/PlansModal';
import plusIconBlack from '../assets/plusIconBlack.svg';
import Button from '../components/Button';
import NotificationsPanel from '../components/NotificationsPanel';
import ProfilePreviewModal from '../components/ProfilePreviewModal';

const GitPatternThumbnail = ({ variant }) => {
  if (variant === 1) {
    return (
      <div className="absolute inset-0">
        <img src={gitThumbnailPattern1} alt="git-thumbnail" className='w-full'/>
      </div>
    );
  }
  
  if (variant === 2) {
    return (
      <div className="absolute inset-0">
        <img src={gitThumbnailPattern2} alt="git-thumbnail" className='w-full'/>
      </div>
    );
  }
  
  return (
    <div className="absolute inset-0">
      <img src={gitThumbnailPattern3} alt="git-thumbnail" className='w-full'/>
    </div>
  );
};

const Brainstorm = () => {

    const [activeTab, setActiveTab] = useState('recent');
    const [view, setView] = useState('grid');
    const [selectedProjects, setSelectedProjects] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showPlansModal, setShowPlansModal] = useState(false);
    const [seseGrindExpanded, setSeseGrindExpanded] = useState(true);
    const [showProfilePreview, setShowProfilePreview] = useState(false);

    const projects = [
      { id: 1, title: 'Ekda mobile app', status: 'Edited 10 days ago' },
      { id: 2, title: 'Ekda mobile app', status: 'Edited 10 days ago' }
    ];

  return (
    <div className="flex h-screen bg-[#1b1f1f] overflow-hidden">
        {/* Sidebar */}
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
            {/* Header */}
            <header className="bg-[#1b1f1f] border-b border-[#324b3f] px-4 lg:px-8 py-4 sticky top-0 z-30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
                  >
                    <Menu size={24} className="text-[#e6fdf3]" />
                  </button>
                  <h1 className="text-[#e6fdf3] text-xl poppins-regular font-semibold">Brainstorm</h1>
                </div>
                <Button variant="primary" icon={null} className="hidden sm:flex">
                  <img src={plusIconBlack} alt="plus-icon-black" className='w-4 h-4'/>
                  <p>Brainstorm</p>
                </Button>
                <Button variant="primary" className="sm:hidden">
                    <img src={plusIconBlack} alt="plus-icon-black" className='w-4 h-4'/>
                </Button>
              </div>
            </header>
            <div className="px-4 lg:px-8 py-6">
              {/* Tabs and Filters */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('recent')}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'recent'
                        ? 'bg-[#32463f] text-[#e6fdf3] border border-[#01ec87]'
                        : 'bg-[#1b1f1f] text-[#01ec87] border border-[#01ec87]'
                    }`}
                  >
                    Recently Viewed
                  </button>
                  <button
                    onClick={() => setActiveTab('shared')}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'shared'
                        ? 'bg-[#32463f] text-[#e6fdf3] border border-[#01ec87]'
                        : 'bg-[#1b1f1f] text-[#01ec87] border border-[#01ec87]'
                    }`}
                  >
                    Shared Projects
                  </button>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <select className="flex-1 sm:flex-initial px-4 py-2 bg-[#324b3f] border border-[#324b3f] rounded-lg text-[#e6fdf3] poppins-regular focus:outline-none focus:border-emerald-400">
                    <option>All Files</option>
                  </select>
                  <select className="flex-1 sm:flex-initial px-4 py-2 bg-[#324b3f] border border-[#324b3f] rounded-lg text-[#e6fdf3] poppins-regular focus:outline-none focus:border-emerald-400">
                    <option>Last Viewed</option>
                  </select>
                  <div className="flex items-center gap-2 bg-[#324b3f] rounded-lg p-1">
                    <button
                      onClick={() => setView('grid')}
                      className={`p-2 rounded ${view === 'grid' ? 'bg-[#1b1f1f] text-gray-900' : 'text-gray-400'}`}
                    >
                      <img src={gridIcon} alt="grid-icon" className='w-5 h-5'/>
                    </button>
                    <button
                      onClick={() => setView('list')}
                      className={`p-2 rounded ${view === 'list' ? 'bg-[#01ec87] text-gray-900' : 'text-gray-400'}`}
                    >
                      <img src={listIcon} alt="list-icon" className='w-6 h-6'/>
                    </button>
                  </div>
                </div>
              </div>
              {/* Projects Grid */}
              <div className={`grid gap-6 ${
                view === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    thumbnail={<GitPatternThumbnail variant={(project.id % 3) + 1} />}
                    isSelected={selectedProjects.includes(project.id)}
                    onSelect={() => toggleProject(project.id)}
                  />
                ))}
              </div>
            </div>
        </main>

        {/* Modals and Panels */}
        {showAccountMenu && <AccountMenu onClose={() => setShowAccountMenu(false)} onViewPlans={() => {
          setShowAccountMenu(false);
          setShowPlansModal(true);
        }} />}
        {showPlansModal && <PlansModal onClose={() => setShowPlansModal(false)} />}
        {showNotifications && <NotificationsPanel onClose={() => setShowNotifications(false)} />}

        {showProfilePreview && (
          <ProfilePreviewModal 
            onConfirm={() => {
              setShowProfilePreview(false);
              setShowGrinderGoal(true);
            }}
          />
        )}
    </div>
  )
}

export default Brainstorm