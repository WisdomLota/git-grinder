import React, { useState } from 'react';
import { Search, Grid, List, Bell, ChevronDown, Heart, Users, RefreshCw, X, Lightbulb, Trash2, Grid3x3, Menu } from 'lucide-react';
import gitGrinderIcon from '../assets/gitGrinderIcon.svg';
import openSourceProjectIcon from '../assets/openSourceProjectIcon.svg';
import trashIcon from '../assets/trashIcon.svg';
import brainstormIcon from '../assets/brainstormIcon.svg';
import opensourcegrinderIcon from '../assets/opensourcegrinderIcon.svg';
import selfGrindProjectsIcon from '../assets/selfGrindProjectsIcon.svg';
import gitThumbnailPattern1 from '../assets/gitThumbailPattern1.png';
import gitThumbnailPattern2 from '../assets/gitThumbailPattern2.png';
import gitThumbnailPattern3 from '../assets/gitThumbailPattern3.png';
import GGlogoDashboard from '../assets/GG-logo-Dashboard.png';
import gridIcon from '../assets/gridIcon.svg';
import listIcon from '../assets/listIcon.svg';
import "../styles/index.css"

// Reusable Components
const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, icon: Icon }) => {
  const baseStyles = 'font-semibold rounded-lg transition-all flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-[#01ec87] hover:bg-emerald-500 text-gray-900',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-[#e6fdf3]',
    outline: 'border-2 border-[#1b1f1f] text-[#1b1f1f] hover:bg-[#e6fdf3] hover:text-gray-900',
    ghost: 'text-gray-400 hover:text-[#e6fdf3] hover:bg-gray-800'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

const ProjectCard = ({ title, status, thumbnail, onSelect, isSelected }) => (
  <div className="group relative bg-[#1b1f1f] rounded-lg overflow-hidden hover:border-2 hover:border-[#01ec87] transition-all cursor-pointer">
    <div className="aspect-video bg-gradient-to-br from-teal-800 to-teal-900 relative overflow-hidden">
      {thumbnail}
    </div>
    <div className="p-4 flex items-start gap-2 border-x-2 border-b-2 border-[#01ec87]">
      <div className='mt-1'>
       <input 
         type="checkbox" 
         checked={isSelected}
         onChange={onSelect}
         className="w-5 h-5 rounded border-2 border-[#324b3f] bg-[#1b1f1f]/50 cursor-pointer"
       />
      </div>
      <div className=''>
        <h3 className="text-[#e6fdf3] font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-3">{status}</p>
      </div>
    </div>
  </div>
);

const Sidebar = ({ isOpen, onClose, showAccountMenu, setShowAccountMenu, showNotifications, setShowNotifications, setShowPlansModal, seseGrindExpanded, setSeseGrindExpanded }) => (
  <>
    {/* Mobile Overlay */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
    )}
    
    {/* Sidebar */}
    <aside className={`
      fixed lg:sticky top-0 left-0 h-screen w-76 bg-[#1b1f1f] border-r border-[#324b3f]
      flex flex-col z-50 transition-transform duration-300 overflow-y-auto scrollbar-hide
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}
    style={{
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      WebkitOverflowScrolling: 'touch'
    }}>
      {/* User Profile */}
      <div className="p-4 border-b border-[#324b3f]">
        <div className="flex items-center gap-3 cursor-pointer mb-4" onClick={() => setShowAccountMenu(!showAccountMenu)}>
          <div className="w-12 h-12 rounded-full bg-[#e6fdf3]"></div>
          <div className="flex items-center gap-2">
            <span className="text-[#e6fdf3] font-semibold">Sese</span>
            <ChevronDown size={16} className="text-[#e6fdf3]" />
          </div>
          <Bell 
            size={20} 
            className="text-gray-400 cursor-pointer hover:text-[#e6fdf3] flex justify-end ml-auto" 
            onClick={() => setShowNotifications(!showNotifications)}
          />
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e6fdf3]" size={18} />
          <input 
            type="text"
            placeholder="Search for anything"
            className="w-full pl-10 pr-4 py-2 bg-[#1b1f1f] border border-[#324b3f] rounded-lg text-[#e6fdf3] placeholder-gray-500 focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
        <div className="space-y-1 mb-6 px-4">
          <NavItem iconImg={gitGrinderIcon} text="Grinder goal" />
          <NavItem iconImg={openSourceProjectIcon} text="Open Source Projects" />
        </div>

        {/* Sese's grind section */}
        <div className="mb-6 text-[#e6fdf3] border-b border-[#324b3f] px-4 pb-2">
          <div className="flex items-center justify-between mb-2 px-2">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSeseGrindExpanded(!seseGrindExpanded)}>
              <div className="w-6 h-6 rounded-full bg-[#e6fdf3]"></div>
              <span className="text-[#e6fdf3] font-medium">Sese's grind</span>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${seseGrindExpanded ? '' : '-rotate-90'}`} />
            </div>
            <span className="text-xs bg-[#324b3f] text-[#e6fdf3] px-2 py-1 rounded">Free</span>
          </div>
          {seseGrindExpanded && (
            <div className="space-y-1 ml-8">
              <NavItem iconImg={selfGrindProjectsIcon} text="Self grind projects" active />
              <NavItem iconImg={opensourcegrinderIcon} text="Open source grinder projects" />
              <NavItem iconImg={brainstormIcon} text="Brainstorm" />
              <NavItem iconImg={trashIcon} text="Trash" />
            </div>
          )}
        </div>

        {/* Upgrade Section */}
        <div className='p-2 border-b border-[#324b3f] mb-6'>
            <div className="bg-[#282d2d] rounded-lg p-4 mb-4">
              <div className="flex justify-center mb-3">
                <img src={GGlogoDashboard} alt="gg-dashbaord-logo"/>
              </div>
              <p className="text-[#e6fdf3] text-md text-center mb-4">
                Upgrade to pro and take your grind to the next level.
              </p>
              <Button variant="primary" className="w-full" onClick={() => setShowPlansModal(true)}>
                View plans
              </Button>
            </div>
        </div>

        {/* Favorite */}
        <div className='p-2'>
          <h3 className="text-[#e6fdf3] text-sm font-semibold mb-2 px-2">Favorite</h3>
          <NavItem iconImg={gridIcon} text="Ekda mobile app" />
        </div>
      </nav>
    </aside>
  </>
);

const NavItem = ({ iconImg: IconImg, text, active = false }) => (
  <button className={`
    w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left poppins-medium text-xs
    ${active ? 'bg-[#324b3f] text-[#e6fdf3]' : 'text-[#e6fdf3] hover:bg-[#324b3f]'}
  `}>
    {IconImg ? (
      <img src={IconImg} alt={text} className="w-4 h-4" />
    ) : (
      <Grid size={20} className="text-gray-400" />
    )}
    <span>{text}</span>
  </button>
);

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

const TourBanner = ({ onClose, onTakeTour }) => (
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
);

const AccountMenu = ({ onClose, onViewPlans }) => (
  <div className="absolute top-20 left-4 w-64 bg-[#282d2d] border border-[#324b3f] rounded-lg shadow-xl z-50 p-4">
    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#324b3f]">
      <div className="w-16 h-16 rounded-full bg-[#e6fdf3]"></div>
      <div>
        <h3 className="text-[#e6fdf3] font-semibold">Sese</h3>
        <p className="text-gray-400 text-sm">contact.sese.a@gmail.com</p>
      </div>
    </div>
    
    <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left">
      <Grid3x3 size={18} />
      <span>Grinder Goal</span>
      <ChevronDown size={16} className="ml-auto rotate-[-90deg]" />
    </button>
    
    <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left">
      <Grid size={18} />
      <span>Get grinder CLI tool</span>
    </button>
    
    <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left">
      <Grid size={18} />
      <span>Settings</span>
    </button>
    
    <div className="border-t border-[#324b3f] mt-3 pt-3">
      <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left">
        <div className="w-8 h-8 rounded-full bg-[#01ec87]"></div>
        <div>
          <p className="text-sm font-semibold">Create an open source profile</p>
          <p className="text-xs text-gray-400">contact.sese.a@gmail.com</p>
        </div>
      </button>
      
      <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left mt-2">
        <span>+ Add account</span>
      </button>
      
      <button className="w-full flex items-center gap-3 px-3 py-2 text-[#e6fdf3] hover:bg-[#324b3f] rounded-lg text-left mt-2">
        <span>Log out</span>
      </button>
    </div>
  </div>
);

const PlansModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
    <div className="bg-[#1b1f1f] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[#e6fdf3] text-3xl font-bold">Need more projects?</h2>
        <button onClick={onClose} className="text-[#e6fdf3] hover:text-gray-400">
          <X size={24} />
        </button>
      </div>
      
      <p className="text-gray-400 mb-8">The Starter plan only comes with 1 project, bit getting more is easy.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Starter Plan */}
        <div className="border border-[#324b3f] rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-[#e6fdf3] text-2xl font-bold">Starter</h3>
            <span className="text-xs bg-[#324b3f] text-[#e6fdf3] px-2 py-1 rounded">Current Plan</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">Best for anyone who wants to try out grinding with git grinder</p>
          
          <div className="space-y-3 mb-6">
            <p className="text-[#e6fdf3] font-semibold">Free, but limited features</p>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <span>✓</span>
              <span>2 self-grind projects</span>
            </div>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <span>✓</span>
              <span>1 open source grinder project</span>
            </div>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <span>✓</span>
              <span>Limited grinder AI use</span>
            </div>
          </div>
        </div>
        
        {/* Professional Plan */}
        <div className="border-2 border-[#01ec87] rounded-lg p-6 bg-[#282d2d]">
          <h3 className="text-[#e6fdf3] text-2xl font-bold mb-4">Professional</h3>
          <p className="text-gray-400 text-sm mb-6">Best for indie teams to create and collaborate</p>
          
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-[#e6fdf3] text-4xl font-bold">$5</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">● Full seat</p>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2 text-[#e6fdf3] text-sm">
              <span>✓</span>
              <span>Unlimited self-grind projects</span>
            </div>
            <div className="flex items-start gap-2 text-[#e6fdf3] text-sm">
              <span>✓</span>
              <span>Unlimited open source grinder projects</span>
            </div>
            <div className="flex items-start gap-2 text-[#e6fdf3] text-sm">
              <span>✓</span>
              <span>Unlimited grinder AI use</span>
            </div>
            <button className="text-[#01ec87] text-sm hover:underline">
              See all features →
            </button>
          </div>
          
          <Button variant="primary" className="w-full">
            Upgrade to Professional
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const NotificationsPanel = ({ onClose }) => (
  <div className="absolute top-20 right-4 w-96 max-h-[600px] bg-[#282d2d] border border-[#324b3f] rounded-lg shadow-xl z-50 overflow-hidden">
    <div className="p-4 border-b border-[#324b3f] flex items-center justify-between">
      <h3 className="text-[#e6fdf3] font-semibold text-lg">All notifications</h3>
      <button onClick={onClose}>
        <X size={20} className="text-[#e6fdf3]" />
      </button>
    </div>
    
    <div className="p-4 border-b border-[#324b3f] flex items-center justify-between">
      <div className="flex gap-2">
        <button className="px-4 py-1 bg-[#01ec87] text-gray-900 rounded-full text-sm font-medium">
          All
        </button>
        <button className="px-4 py-1 text-[#e6fdf3] hover:bg-[#324b3f] rounded-full text-sm">
          Unread (29)
        </button>
      </div>
      <button className="text-[#01ec87] text-sm hover:underline">
        Mark all as read
      </button>
    </div>
    
    <div className="overflow-y-auto max-h-[400px] scrollbar-hide">
      <div className="p-3 border-b border-[#324b3f]">
        <p className="text-gray-400 text-xs mb-2">Last 7 days</p>
        
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex gap-3 p-3 hover:bg-[#324b3f] rounded-lg cursor-pointer mb-2">
            <div className="w-10 h-10 rounded-full bg-[#e6fdf3] flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <p className="text-[#e6fdf3] font-semibold text-sm">Oryz</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs">Jul 23</span>
                  <div className="w-2 h-2 rounded-full bg-[#01ec87]"></div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Replied • Oryzon website</p>
              <p className="text-[#e6fdf3] text-sm">Great Work Kome</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3">
        <p className="text-gray-400 text-xs mb-2">Older</p>
        {/* Add more notifications here */}
      </div>
    </div>
  </div>
);

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
  const [seseGrindExpanded, setSeseGrindExpanded] = useState(true); // Add this

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
              + Project
            </Button>
            <Button variant="primary" className="sm:hidden">
              +
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
          </div>
        );
      };

export default MainDashboard;