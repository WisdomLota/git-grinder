import { Search, Bell, ChevronDown } from 'lucide-react';
import gitGrinderIcon from '../assets/gitGrinderIcon.svg';
import openSourceProjectIcon from '../assets/openSourceProjectIcon.svg';
import trashIcon from '../assets/trashIcon.svg';
import brainstormIcon from '../assets/brainstormIcon.svg';
import opensourcegrinderIcon from '../assets/opensourcegrinderIcon.svg';
import selfGrindProjectsIcon from '../assets/selfGrindProjectsIcon.svg';
import GGlogoDashboard from '../assets/GG-logo-Dashboard.png';
import gridIcon from '../assets/gridIcon.svg';
import "../styles/index.css";
import Button from '../components/Button';

const NavItem = ({ iconImg: IconImg, text, path, currentPath }) => {
  const isActive = currentPath === path;

  return (
    <button className={`
      w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left poppins-medium text-xs
      ${isActive ? 'bg-[#324b3f] text-[#e6fdf3]' : 'text-[#e6fdf3] hover:bg-[#324b3f]'}
    `}>
      {IconImg ? (
        <img src={IconImg} alt={text} className="w-4 h-4" />
      ) : null}
      <span>{text}</span>
    </button>
  );
};

const Sidebar = ({ isOpen, onClose, showAccountMenu, setShowAccountMenu, showNotifications, setShowNotifications, setShowPlansModal, seseGrindExpanded, setSeseGrindExpanded, currentPath }) => {
  return (
    <div>
        {/* Mobile Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-0 left-0 h-screen w-84 bg-[#1b1f1f] border-r border-[#324b3f]
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
            <div className="flex items-center gap-3 cursor-pointer mb-4">
              <div className="w-12 h-12 rounded-full bg-[#e6fdf3]" onClick={() => setShowAccountMenu(!showAccountMenu)}></div>
              <div className="flex items-center gap-2" onClick={() => setShowAccountMenu(!showAccountMenu)}>
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
              <div onClick={() => window.location.href = '/grinder-goal'}>
                <NavItem iconImg={gitGrinderIcon} text="Grinder goal" path='/grinder-goal' currentPath={currentPath}/>
              </div>
              <div onClick={() => window.location.href = '/open-source-projects'}>
                <NavItem iconImg={openSourceProjectIcon} text="Open Source Projects" path='/open-source-projects' currentPath={currentPath}/>
              </div>
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
                  <div onClick={() => window.location.href = '/dashboard'}>
                    <NavItem iconImg={selfGrindProjectsIcon} text="Self grind projects" path='/dashboard' currentPath={currentPath}/>
                  </div>
                  <div onClick={() => window.location.href = '/open-source-grinder-projects'}>
                    <NavItem iconImg={opensourcegrinderIcon} text="Open source grinder projects" path='/open-source-grinder-projects' currentPath={currentPath}/>
                  </div>
                  <div onClick={() => window.location.href = '/brainstorm'}>
                    <NavItem iconImg={brainstormIcon} text="Brainstorm" path='/brainstorm' currentPath={currentPath}/>
                  </div>
                  <div onClick={() => window.location.href = '/trash'}>
                    <NavItem iconImg={trashIcon} text="Trash" path='/trash' currentPath={currentPath}/>
                  </div>
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
                  <Button variant="primary" className="w-full cursor-pointer" onClick={() => setShowPlansModal(true)}>
                    View plans
                  </Button>
                </div>
            </div>

            {/* Favorite */}
            <div className='p-2'>
              <h3 className="text-[#e6fdf3] text-sm font-semibold mb-2 px-2">Favorite</h3>
              <NavItem iconImg={gridIcon} text="Ekda mobile app" path='/ekda' currentPath={currentPath}/>
            </div>
          </nav>
        </aside>
    </div>
  )
}

export default Sidebar
