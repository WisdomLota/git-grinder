import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Edit2 } from 'lucide-react';
import Button from '../components/Button';
import BrainstormInputModal from '../components/BrainstormInputModal';
import ConvertProjectModal from '../components/ConvertProjectModal';
import "../styles/index.css";

const BrainstormDetail = () => {
  const { brainstormId } = useParams();
  const navigate = useNavigate();
  
  const [showInputModal, setShowInputModal] = useState(true);
  const [showConvertModal, setShowConvertModal] = useState(false);

  // Mock brainstorm data
  const brainstorm = {
    id: brainstormId,
    title: 'Ekda Mobile app (Brainstorm)',
    isViewOnly: false,
    messages: [
      {
        type: 'ai',
        content: "Hello there, I'm Grinder AI, here to help you Brainstorm on your project. Where it's a feature addition to an already existing project, figuring out the best way to go about building your project or just a simple side project you would like to work on, I am here to help you out."
      },
      {
        type: 'user',
        content: "Ekda is a mobile application that helps it's uses to practice stock investment in a safe simulation environment, after which they can now either move on to the investor section of the app where they can now actually invest in the stock market. We would want the app to be available on both mobile and android, it should also have an AI feature as well where the AI gives them suggestions and explicitly states that these are ust suggestions and not financial advise."
      },
      {
        type: 'ai',
        content: "Ekda sounds like a wonder undertaking, and based on your description of the project here is a break down of all the tasks and subtasks to help you go from this idea to a finished product;",
        tasks: [
          {
            id: 1,
            title: 'Task 1;',
            description: 'Ekda sounds like a wonder undertaking, and based on your description of the project here is a break down of all the tasks and subtasks to help you go from this idea to a finished product;',
            subtasks: [
              {
                id: 1,
                title: 'Subtask 1.1;',
                description: 'Ekda sounds like a wonder undertaking, and based on your description of the project here is a break down of all the tasks and subtasks to help you go from this idea to a finished product;'
              },
              {
                id: 2,
                title: 'Subtask 1.1;',
                description: 'Ekda sounds like a wonder undertaking, and based on your description of the project here is a break down of all the tasks and subtasks to help you go from this idea to a finished product;'
              }
            ]
          },
          {
            id: 2,
            title: 'Task 2;',
            description: 'Ekda sounds like a wonder undertaking, and based on your description of the project here is a break down of all the tasks and subtasks to help you go from this idea to a finished product;',
            subtasks: [
              {
                id: 1,
                title: 'Subtask 2.1;',
                description: 'Ekda sounds like a wonder undertaking, and based on your description of the project here is a break down of all the tasks and subtasks to help you go from this idea to a finished product;'
              },
              {
                id: 2,
                title: 'Subtask 2.1;',
                description: 'Ekda sounds like a wonder undertaking, and based on your description of the project here is a break down of all the tasks and subtasks to help you go from this idea to a finished product;'
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="h-screen bg-[#1b1f1f] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-[#1b1f1f] border-b border-[#324b3f] px-4 lg:px-8 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="text-[#01ec87] hover:text-emerald-300 flex items-center gap-2 text-sm"
          >
            &lt; Back
          </button>
          
          <h1 className="text-[#e6fdf3] text-base lg:text-lg font-medium">
            {brainstorm.title} {brainstorm.isViewOnly && '- View Only'}
          </h1>

          <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#01ec87] text-[#01ec87] rounded-lg hover:bg-[#01ec87]/10 transition-colors text-sm">
            <Edit2 size={16} />
            Share
          </button>
        </div>
      </header>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Today Badge */}
          <div className="flex justify-center mb-8">
            <span className="px-4 py-1.5 bg-transparent border border-[#324b3f] text-[#e6fdf3] rounded-full text-sm">
              Today
            </span>
          </div>

          {/* Messages */}
          <div className="space-y-6">
            {brainstorm.messages.map((message, idx) => (
              <div key={idx}>
                {message.type === 'ai' && !message.tasks && (
                  <div className="text-[#e6fdf3] text-sm leading-relaxed max-w-2xl">
                    <p>{message.content}</p>
                  </div>
                )}

                {message.type === 'user' && (
                  <div className="flex justify-end mb-6">
                    <div className="bg-[#2a3a35] rounded-lg p-5 max-w-3xl">
                      <p className="text-[#e6fdf3] text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                )}

                {/* AI message with tasks */}
                {message.type === 'ai' && message.tasks && (
                  <div>
                    <div className="text-[#e6fdf3] text-sm leading-relaxed mb-6 max-w-2xl">
                      <p>{message.content}</p>
                    </div>

                    {/* Tasks */}
                    <div className="space-y-6 mt-6">
                      {message.tasks.map((task) => (
                        <div key={task.id}>
                          <h3 className="text-[#e6fdf3] font-semibold mb-3 text-base">{task.title}</h3>
                          <p className="text-[#e6fdf3] mb-4 text-sm max-w-2xl">{task.description}</p>
                          
                          {/* Subtasks */}
                          <div className="ml-8 space-y-4">
                            {task.subtasks.map((subtask) => (
                              <div key={subtask.id}>
                                <h4 className="text-[#e6fdf3] font-medium mb-2 text-sm">{subtask.title}</h4>
                                <p className="text-[#e6fdf3] text-sm max-w-2xl">{subtask.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Convert to Project Button */}
      {!brainstorm.isViewOnly && (
        <div className="fixed bottom-6 left-8">
          <Button 
            variant="primary" 
            className="flex items-center gap-2 text-sm"
            onClick={() => setShowConvertModal(true)}
          >
            <Edit2 size={16} />
            Convert to a project
          </Button>
        </div>
      )}

      {/* Help Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#324b3f] text-[#e6fdf3] flex items-center justify-center hover:bg-gray-600 z-30 text-lg font-semibold">
        ?
      </button>

      {/* Modals */}
      {showInputModal && !brainstorm.isViewOnly && (
        <BrainstormInputModal 
          onClose={() => setShowInputModal(false)} 
          onClickOutside={() => setShowInputModal(false)}
        />
      )}
      
      {showConvertModal && (
        <ConvertProjectModal 
          onClose={() => setShowConvertModal(false)}
          onConfirm={() => {
            setShowConvertModal(false);
            alert('Converting to project...');
          }}
        />
      )}
    </div>
  );
};

export default BrainstormDetail;