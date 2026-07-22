import { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AccountMenu from '../components/AccountMenu';
import PlansModal from '../components/PlansModal';
import NotificationsPanel from '../components/NotificationsPanel';
import gitThumbnailPattern1 from '../assets/gitThumbailPattern1.png';
import gitThumbnailPattern2 from '../assets/gitThumbailPattern2.png';
import gitThumbnailPattern3 from '../assets/gitThumbailPattern3.png';
import brainstorm from '../assets/brainstorm.svg';
import startGrinding from '../assets/startGrinding.svg';
import "../styles/index.css";

const patterns = [gitThumbnailPattern1, gitThumbnailPattern2, gitThumbnailPattern3];

const GitPatternThumbnail = ({ variant }) => (
  <div className="absolute inset-0">
    <img src={patterns[variant % 3]} alt="thumbnail" className="w-full h-full object-cover" />
  </div>
);

const projects = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: 'Mini two player strike game',
  tech: 'Unity, C#',
  variant: i,
}));

// Kick Start Modal
const KickStartModal = ({ onClose, onBrainstorm, onStartGrinding }) => (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-[#1e2d27] rounded-xl max-w-lg w-full p-10 text-center shadow-2xl">
      <h2 className="text-[#e6fdf3] text-2xl font-semibold mb-4">
        How would you like to kick start<br />your grinding?
      </h2>
      <p className="text-[#e6fdf3] text-sm mb-8 leading-relaxed font-medium">
        You can plan out the idea further with a new brainstorm session or you can dive head first into your grinding session
      </p>
      <div className="flex flex-col gap-4">
        <button
          onClick={onBrainstorm}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-[#01ec87] hover:bg-emerald-400 text-[#1b1f1f] font-semibold rounded-lg transition-colors"
        >
          <img src={brainstorm} alt="brainstorm" className="w-5 h-5" />
          Brainstorm
        </button>
        <button
          onClick={onStartGrinding}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-[#01ec87] text-[#01ec87] font-semibold rounded-lg hover:bg-[#01ec87]/10 transition-colors"
        >
          <img src={startGrinding} alt="grind" className="w-5 h-5" />
          Start Grinding
        </button>
      </div>
    </div>
  </div>
);

const OpenSourceProjects = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [seseGrindExpanded, setSeseGrindExpanded] = useState(true);
  const [showKickStart, setShowKickStart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tech.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {/* Header */}
        <header className="bg-[#1b1f1f] border-b border-[#324b3f] px-4 lg:px-8 py-4 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
            >
              <Menu size={24} className="text-[#e6fdf3]" />
            </button>
            <button
              onClick={() => navigate(-1)}
              className="text-[#01ec87] hover:text-emerald-300 text-sm flex items-center gap-1"
            >
              &lt; Back
            </button>
          </div>
        </header>

        <div className="px-4 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Projects"
              className="w-full pl-12 pr-4 py-3 bg-[#1b1f1f] border border-[#324b3f] rounded-lg text-[#e6fdf3] placeholder-gray-500 focus:outline-none focus:border-[#01ec87] transition-colors"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setShowKickStart(true)}
                className="group cursor-pointer"
              >
                <div className="h-44 bg-gradient-to-br from-teal-800 to-teal-900 rounded-lg mb-3 overflow-hidden relative">
                  <GitPatternThumbnail variant={project.variant} />
                </div>
                <h3 className="text-[#e6fdf3] font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Kick Start Modal */}
      {showKickStart && (
        <KickStartModal
          onClose={() => setShowKickStart(false)}
          onBrainstorm={() => {
            setShowKickStart(false);
            navigate('/brainstorm');
          }}
          onStartGrinding={() => {
            setShowKickStart(false);
            navigate('/dashboard');
          }}
        />
      )}

      {showAccountMenu && (
        <AccountMenu onClose={() => setShowAccountMenu(false)} onViewPlans={() => {
          setShowAccountMenu(false);
          setShowPlansModal(true);
        }} />
      )}
      {showPlansModal && <PlansModal onClose={() => setShowPlansModal(false)} />}
      {showNotifications && <NotificationsPanel onClose={() => setShowNotifications(false)} />}
    </div>
  );
};

export default OpenSourceProjects;