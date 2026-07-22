import { useState } from 'react';
import { RefreshCw, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AccountMenu from '../components/AccountMenu';
import PlansModal from '../components/PlansModal';
import NotificationsPanel from '../components/NotificationsPanel';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import gitThumbnailPattern1 from '../assets/gitThumbailPattern1.png';
import gitThumbnailPattern2 from '../assets/gitThumbailPattern2.png';
import gitThumbnailPattern3 from '../assets/gitThumbailPattern3.png';
import "../styles/index.css";

// Contribution heatmap grid (generated, matching signup page style)
const ContributionGrid = () => {
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cols = 53;

  const getColor = (col, row) => {
    const rand = Math.sin(col * 7 + row * 13) * 0.5 + 0.5;
    if (rand > 0.96) return 'bg-emerald-400';
    if (rand > 0.93) return 'bg-emerald-600';
    if (rand > 0.91) return 'bg-emerald-800';
    return 'bg-[#1e2d27]';
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      {/* Month labels */}
      <div className="flex mb-1 ml-8">
        {months.map((m, i) => (
          <div key={i} className="text-[10px] text-gray-400 flex-1 text-center">{m}</div>
        ))}
      </div>
      <div className="flex gap-1">
        {/* Day labels */}
        <div className="flex flex-col gap-1 mr-1">
          {days.map(d => (
            <div key={d} className="text-[10px] text-gray-400 w-6 h-3 flex items-center">{d}</div>
          ))}
        </div>
        {/* Grid */}
        <div className="flex gap-0.5 flex-1">
          {Array.from({ length: cols }).map((_, col) => (
            <div key={col} className="flex flex-col gap-0.5">
              {Array.from({ length: 7 }).map((_, row) => (
                <div
                  key={row}
                  className={`w-2.5 h-2.5 rounded-sm ${getColor(col, row)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GitPatternThumbnail = ({ variant }) => {
  const patterns = {
    1: gitThumbnailPattern1,
    2: gitThumbnailPattern2,
    3: gitThumbnailPattern3,
  };
  return (
    <div className="absolute inset-0">
      <img src={patterns[variant] || gitThumbnailPattern1} alt="thumbnail" className="w-full h-full object-cover" />
    </div>
  );
};

const Toggle = ({ defaultOn = true }) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <div
      onClick={() => setOn(!on)}
      className={`relative w-11 h-6 rounded-full cursor-pointer transition-colors flex-shrink-0 ${on ? 'bg-[#01ec87]' : 'bg-gray-600'}`}
    >
      <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${on ? 'translate-x-5' : 'translate-x-0'}`} />
    </div>
  );
};

const GrinderGoal = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [seseGrindExpanded, setSeseGrindExpanded] = useState(true);
  const [selectedProjects, setSelectedProjects] = useState([]);

  const toggleProject = (id) => {
    setSelectedProjects(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const suggestions = [
    { id: 1, title: 'Mini two player strike game', status: 'Unity, C#' },
    { id: 2, title: 'Mini two player strike game', status: 'Unity, C#' },
    { id: 3, title: 'Mini two player strike game', status: 'Unity, C#' },
  ];

  const topProjects = [
    { id: 4, title: 'Ekda mobile app', status: 'Edited 10 days ago' },
    { id: 5, title: 'Ekda mobile app', status: 'Edited 10 days ago' },
  ];

  const completedProjects = [
    { id: 6, title: 'Ghoole', status: 'Edited 7 months ago' },
    { id: 7, title: 'Water Marker', status: 'Edited 1 year ago' },
  ];

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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
              >
                <Menu size={24} className="text-[#e6fdf3]" />
              </button>
              <h1 className="text-[#e6fdf3] text-xl font-semibold">Grinder Goal</h1>
            </div>
            <Button variant="primary">
              Change Grinder Goal
            </Button>
          </div>
        </header>

        <div className="px-4 lg:px-8 py-6 space-y-6">

          {/* Grinder Goal Badge */}
          <div className="border border-[#01ec87] bg-[#1a3a2a] rounded-lg py-3 px-6 text-center max-w-2xl mx-auto">
            <span className="text-[#e6fdf3] font-medium">Grinder Goal: Acolyte</span>
          </div>

          {/* Progress Section */}
          <div className="bg-[#1b1f1f] rounded-lg">
            <h2 className="text-[#e6fdf3] font-semibold mb-4">Grinder Goal Progress:</h2>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Heatmap */}
              <div className="flex-1">
                <ContributionGrid />
              </div>
              {/* Stats */}
              <div className="lg:w-48 space-y-2 flex-shrink-0">
                <p className="text-[#e6fdf3] font-semibold mb-3">Progress stats:</p>
                {[
                  { label: 'Commits:', value: '124' },
                  { label: 'Missed Commits:', value: '2' },
                  { label: 'Next Commit:', value: 'Tomorrow' },
                  { label: 'Last Commit:', value: 'Today' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-gray-400 text-sm">{label}</span>
                    <span className="text-[#e6fdf3] text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-b border-[#324b3f] py-4">
            <div className="flex items-center gap-3">
              <span className="text-[#01ec87] text-sm">Scheduled Reminders</span>
              <span className="text-gray-400 text-sm">ON</span>
              <Toggle defaultOn={true} />
              <span className="text-gray-400 text-sm">OFF</span>
              <Button variant="primary" size="sm" className="flex items-center gap-2 text-sm">
                <span>⚙</span> Customize
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#01ec87] text-sm">Auto Commit:</span>
              <span className="text-gray-400 text-sm">ON</span>
              <Toggle defaultOn={true} />
              <span className="text-gray-400 text-sm">OFF</span>
              <Button variant="primary" size="sm" className="flex items-center gap-2 text-sm">
                <span>⚙</span> Customize
              </Button>
            </div>
          </div>

          {/* Project Suggestions */}
          <div className="bg-[#282d2d] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#e6fdf3] font-semibold text-lg">Project Suggestions</h2>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <RefreshCw size={18} className="text-[#e6fdf3]" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {suggestions.map((p, i) => (
                <div key={p.id} className="group cursor-pointer">
                  <div className="h-36 bg-gradient-to-br from-teal-800 to-teal-900 rounded-lg mb-3 overflow-hidden relative">
                    <GitPatternThumbnail variant={(i % 3) + 1} />
                  </div>
                  <h3 className="text-[#e6fdf3] font-medium text-sm mb-1 group-hover:text-emerald-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-xs">{p.status}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button className="text-[#01ec87] hover:text-emerald-300 text-sm flex items-center gap-1">
                See more projects &gt;
              </button>
            </div>
          </div>

          {/* Top Projects */}
          <div>
            <h2 className="text-[#e6fdf3] font-semibold mb-4">Top Projects:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  thumbnail={<GitPatternThumbnail variant={(i % 3) + 1} />}
                  isSelected={selectedProjects.includes(project.id)}
                  onSelect={(e) => { e.stopPropagation(); toggleProject(project.id); }}
                />
              ))}
            </div>
          </div>

          {/* Completed Projects */}
          <div className="pb-8">
            <h2 className="text-[#e6fdf3] font-semibold mb-4">Completed Projects:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  thumbnail={<GitPatternThumbnail variant={(i % 3) + 1} />}
                  isSelected={selectedProjects.includes(project.id)}
                  onSelect={(e) => { e.stopPropagation(); toggleProject(project.id); }}
                />
              ))}
            </div>
          </div>

        </div>
      </main>

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

export default GrinderGoal;