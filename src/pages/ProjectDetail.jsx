import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Edit2 } from 'lucide-react';
import TaskCard from '../components/TaskCard';
import ContributorsModal from '../components/ContributorsModal';
import Button from '../components/Button';
import plusIconBlack from '../assets/plusIconBlack.svg';
import "../styles/index.css";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const [showContributorsModal, setShowContributorsModal] = useState(false);

  // Mock project data - Replace with actual data fetching
  const project = {
    id: projectId,
    title: 'Ekda Mobile app (Open Source)',
    contributors: [
      { name: 'Me', isMe: true },
      { name: 'Sese', isMe: false },
      { name: 'Jaiye', isMe: false },
      { name: 'Frank_002', isMe: false },
      { name: 'd3no', isMe: false },
      { name: 'ben0', isMe: false }
    ],
    tasks: [
      {
        id: 1,
        title: 'Setting Up the Development Environment',
        duration: '5 days - 1 hour/day',
        subtasks: [
          {
            title: 'Subtask 1.1:',
            description: 'Install a cross-compilation toolchain for the target architecture.',
            duration: '2 days - 1 hour/day',
            contributor: 'Jaiye, Sese',
            completed: false
          },
          {
            title: 'Subtask 1.2:',
            description: 'Install a Compilers',
            duration: '3 days - 1 hour/day',
            contributor: 'Sese',
            completed: false
          },
          {
            title: 'Subtask 1.3:',
            description: 'Install a Compilers',
            duration: '3 days - 1 hour/day',
            contributor: 'Me',
            completed: true
          },
          {
            title: 'Subtask 1.4:',
            description: 'Install a cross-compilation toolchain for the target architecture.',
            duration: '2 days - 1 hour/day',
            contributor: 'Me',
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: 'Setting Up the Development Environment',
        duration: '6 days - 1 hour/day',
        subtasks: [
          {
            title: 'Subtask 2.1:',
            description: 'Install a cross-compilation toolchain for the target architecture.',
            duration: '3 days - 1 hour/day',
            contributor: 'Frank_002',
            completed: false
          },
          {
            title: 'Subtask 2.2:',
            description: 'Install a Compilers',
            duration: '3 days - 1 hour/day',
            contributor: 'd3no',
            completed: false
          }
        ]
      },
      {
        id: 3,
        title: 'Setting Up the Development Environment',
        duration: '5 days - 1 hour/day',
        subtasks: [
          {
            title: 'Subtask 3.1:',
            description: 'Install a cross-compilation toolchain for the target architecture.',
            duration: '2 days - 1 hour/day',
            contributor: 'Me',
            completed: false
          },
          {
            title: 'Subtask 3.2:',
            description: 'Install a Compilers',
            duration: '3 days - 1 hour/day',
            contributor: 'Me',
            completed: true
          }
        ]
      }
    ]
  };
  
  return (
    <div className="h-screen bg-[#1b1f1f] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-[#1b1f1f] border-b border-[#324b3f] px-4 lg:px-8 py-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="text-[#01ec87] hover:text-emerald-300 flex items-center gap-2 text-sm"
            >
              &lt; Back
            </button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" icon={null} className="hidden sm:flex">
              <img src={plusIconBlack} alt="plus-icon-black" className='w-4 h-4'/>
              <p>Add New Task</p>
            </Button>
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 border-2 border-[#01ec87] text-[#01ec87] rounded-lg hover:bg-[#01ec87]/10 transition-colors">
              <Edit2 size={16} />
              Share
            </button>
            <button className="p-2 hover:bg-[#324b3f] rounded-lg transition-colors">
              <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                <div className="w-2.5 h-2.5 bg-[#01ec87] rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-[#01ec87] rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-[#01ec87] rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-[#01ec87] rounded-sm"></div>
              </div>
            </button>
          </div>
        </div>

        <h1 className="text-[#e6fdf3] text-xl lg:text-2xl poppins-regular font-semibold">
          {project.title}
        </h1>
      </header>

      {/* Tasks Container */}
      <div className="flex-1 px-4 lg:px-8 py-6 overflow-x-auto overflow-y-hidden">
        <div className="flex gap-6 h-full">
          {project.tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task}
              onViewContributors={() => setShowContributorsModal(true)}
            />
          ))}
        </div>
      </div>

      {/* Help Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#324b3f] text-[#e6fdf3] flex items-center justify-center hover:bg-gray-600 z-30">
        ?
      </button>

      {/* Modals */}
      {showContributorsModal && (
        <ContributorsModal 
          contributors={project.contributors}
          onClose={() => setShowContributorsModal(false)}
        />
      )}
    </div>
  );
};

export default ProjectDetail;