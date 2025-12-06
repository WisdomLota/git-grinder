import { useState } from 'react';
import { Clock, Edit2, Eye, EyeOff } from 'lucide-react';
import "../styles/index.css";

const SubtaskCard = ({ subtask, isCompleted }) => {
  const cardBgColor = isCompleted ? 'bg-[#c7f5e6]' : 'bg-[#3a4f47]';
  const textColor = isCompleted ? 'text-[#1b1f1f]' : 'text-[#e6fdf3]';
  
  return (
    <div className={`${cardBgColor} rounded-lg p-4 border border-[#324b3f] relative group`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className={`${textColor} font-medium text-sm`}>{subtask.title}</h4>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <Edit2 size={14} className={textColor} />
            </button>
          </div>
          <p className={`${textColor} text-xs mb-2`}>{subtask.description}</p>
        </div>
        <input 
          type="radio" 
          checked={isCompleted}
          readOnly
          className="w-5 h-5 rounded-full border-2 border-[#324b3f] cursor-pointer flex-shrink-0"
        />
      </div>
      <div className="flex items-center gap-2 text-gray-400 text-xs">
        <Clock size={12} />
        <span>{subtask.duration}</span>
      </div>
    </div>
  );
};

const TaskCard = ({ task, onViewContributors }) => {
  const [showOtherContributors, setShowOtherContributors] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  
  // Filter subtasks based on contributor visibility
  const visibleSubtasks = showOtherContributors 
    ? task.subtasks 
    : task.subtasks.filter(st => st.contributor === 'Me' || st.contributor.includes('Me'));

  // Group subtasks by contributor for display
  const groupedSubtasks = visibleSubtasks.reduce((acc, subtask) => {
    const contributor = subtask.contributor || 'Unassigned';
    if (!acc[contributor]) {
      acc[contributor] = [];
    }
    acc[contributor].push(subtask);
    return acc;
  }, {});

  return (
    <div className="bg-[#1b1f1f] rounded-lg border border-[#324b3f] flex-shrink-0 w-full min-w-[350px] max-w-[400px] flex flex-col">
      {/* Task Header */}
      <div className="p-4 border-b border-[#324b3f]">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[#e6fdf3] font-semibold">
                Task {task.id}:
              </h3>
              <button className="p-1 hover:bg-[#324b3f] rounded transition-colors">
                <Edit2 size={14} className="text-[#e6fdf3]" />
              </button>
            </div>
            <p className="text-[#e6fdf3] text-sm mb-2">{task.title}</p>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Clock size={12} />
              <span>{task.duration}</span>
            </div>
          </div>
          
          {/* Menu Toggle Button */}
          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-[#324b3f] rounded-lg transition-colors"
            >
              <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-[#01ec87] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#01ec87] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#01ec87] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#01ec87] rounded-sm"></div>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <>
                <div 
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-[#1b1f1f] border border-[#324b3f] rounded-lg shadow-lg z-20 p-2 min-w-[220px]">
                  <button 
                    className="w-full text-left px-3 py-2 text-[#01ec87] hover:bg-[#324b3f] rounded text-sm transition-colors"
                    onClick={() => {
                      setShowMenu(false);
                      onViewContributors();
                    }}
                  >
                    View Contributors
                  </button>
                  <button
                    onClick={() => {
                      setShowOtherContributors(!showOtherContributors);
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-[#01ec87] hover:bg-[#324b3f] rounded text-sm transition-colors flex items-center gap-2"
                  >
                    {showOtherContributors ? (
                      <>
                        <EyeOff size={14} />
                        Hide other contributors
                      </>
                    ) : (
                      <>
                        <Eye size={14} />
                        Show other contributors
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Subtasks - Scrollable */}
      <div className="p-4 space-y-4 flex-1 overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 400px)' }}>
        {Object.entries(groupedSubtasks).map(([contributor, subtasks], idx) => (
          <div key={idx}>
            {/* Show contributor name */}
            <div className="mb-3">
              <p className="text-[#01ec87] font-medium text-sm">{contributor}</p>
            </div>
            <div className="space-y-3">
              {subtasks.map((subtask, subIdx) => (
                <SubtaskCard 
                  key={subIdx}
                  subtask={subtask}
                  isCompleted={subtask.completed}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Subtask Button */}
      <div className="p-4 border-t border-[#324b3f]">
        <button className="w-full px-6 py-2 bg-[#01ec87] hover:bg-[#00d976] text-[#1b1f1f] font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
          <span className="text-xl">+</span>
          Add Subtask
        </button>
      </div>
    </div>
  );
};

export default TaskCard;