import React, { useState } from 'react';
import { ChevronDown, Heart, Users, RefreshCw, X, Menu } from 'lucide-react';
import gitThumbnailPattern1 from '../assets/gitThumbailPattern1.png';
import gitThumbnailPattern2 from '../assets/gitThumbailPattern2.png';
import gitThumbnailPattern3 from '../assets/gitThumbailPattern3.png';
import gridIcon from '../assets/gridIcon.svg';
import listIcon from '../assets/listIcon.svg';
import plusIconBlack from '../assets/plusIconBlack.svg';
import "../styles/index.css";
import PlansModal from '../components/PlansModal';
import NotificationsPanel from '../components/NotificationsPanel';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';
import AccountMenu from '../components/AccountMenu';
import TourBanner from '../components/TourBanner';
import ProfilePreviewModal from '../components/ProfilePreviewModal';
import GrinderGoalModal from '../components/GrinderGoalModal';
import ProjectCard from '../components/ProjectCard';

// Reusable Components
const TrendingSection = ({ onClose }) => (
  <div className="bg-[#282d2d] rounded-lg p-6 mb-8">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-[#e6fdf3] text-2xl poppins-medium font-bold">Trending Open Source Projects</h2>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
          <RefreshCw size={20} className="text-[#e6fdf3]" />
        </button>
        <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
          <X size={20} className="text-[#e6fdf3]" />
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="group cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-teal-800 to-teal-900 rounded-lg mb-3 overflow-hidden relative">
            <GitPatternThumbnail variant={i} />
          </div>
          <h3 className="text-[#e6fdf3] font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
            Dev Mode playground
          </h3>
          <p className="text-gray-400 text-sm mb-2">by Akbar Mirza and 2 others</p>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <Heart size={14} />
              2.5k
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} />
              89.3k
            </span>
          </div>
        </div>
      ))}
    </div>
    
    <div className="flex justify-end mt-4">
      <button className="text-[#01ec87] hover:text-emerald-300 flex items-center gap-1">
        See more projects
        <ChevronDown size={16} className="rotate-[-90deg]" />
      </button>
    </div>
  </div>
);

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

// Main Dashboard Component
const MainDashboard = () => {
  const [view, setView] = useState('grid');
  const [showTrending, setShowTrending] = useState(true);
  const [showTour, setShowTour] = useState(true);
  const [activeTab, setActiveTab] = useState('recent');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [seseGrindExpanded, setSeseGrindExpanded] = useState(true);

  const [showProfilePreview, setShowProfilePreview] = useState(true);
  const [showGrinderGoal, setShowGrinderGoal] = useState(false);

  const projects = [
    { id: 1, title: 'Ekda mobile app', status: 'Edited 10 days ago' },
    { id: 2, title: 'Ekda mobile app', status: 'Edited 10 days ago' }
  ];

  const toggleProject = (id) => {
    setSelectedProjects(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

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

      {/* Main Content */}
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
              <h1 className="text-[#e6fdf3] text-xl poppins-regular font-semibold">Self Grind Projects</h1>
            </div>
            <Button variant="primary" icon={null} className="hidden sm:flex">
              <img src={plusIconBlack} alt="plus-icon-black" className='w-4 h-4'/>
              <p>New Project</p>
            </Button>
            <Button variant="primary" className="sm:hidden">
                <img src={plusIconBlack} alt="plus-icon-black" className='w-4 h-4'/>
            </Button>
          </div>
        </header>

        <div className="px-4 lg:px-8 py-6">
          {/* Trending Section */}
          {showTrending && <TrendingSection onClose={() => setShowTrending(false)} />}

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
        <button className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-[#324b3f] text-[#e6fdf3] flex items-center justify-center hover:bg-gray-600">
          ?
        </button>
      </main>

      {/* Tour Banner */}
      {showTour && (
        <TourBanner 
          onClose={() => setShowTour(false)}
          onTakeTour={() => {
            setShowTour(false);
            alert('Starting tour...');
          }}
        />
      )}

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
      {showGrinderGoal && (
        <GrinderGoalModal 
          onClose={() => setShowGrinderGoal(false)}
          onViewProgress={() => {
            setShowGrinderGoal(false);
            // Navigate to grinder progress page
          }}
          onNoted={() => setShowGrinderGoal(false)}
        />
      )}
    </div>
  );
};

export default MainDashboard;