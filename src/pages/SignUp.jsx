import React, { useState } from 'react';
import { Link2 } from 'lucide-react';

// Decorative background patterns
const GeometricPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-20 w-32 h-64 bg-emerald-400 opacity-80 rotate-45 rounded-lg"></div>
    <div className="absolute top-40 right-60 w-24 h-12 bg-emerald-400 opacity-80 rotate-12"></div>
    <div className="absolute bottom-32 right-40 w-40 h-80 bg-emerald-400 opacity-80 -rotate-12 rounded-lg"></div>
    <div className="absolute bottom-10 right-10 w-20 h-10 bg-gray-800 opacity-90 rotate-45"></div>
    <div className="absolute top-1/2 right-32 w-16 h-4 bg-gray-800 opacity-90 -rotate-12"></div>
  </div>
);

const GitPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="absolute" style={{
        top: `${15 + i * 15}%`,
        right: `${10 + (i % 3) * 15}%`,
        transform: `rotate(${-20 + i * 10}deg)`
      }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="15" cy="40" r="12" fill="#1f2937" className="opacity-90" />
          <circle cx="15" cy="40" r="12" fill="#10b981" className="opacity-30" 
            style={{ transform: 'translate(3px, 3px)' }} />
          <line x1="27" y1="40" x2="53" y2="40" stroke="#10b981" strokeWidth="6" />
          <circle cx="65" cy="40" r="12" fill="#1f2937" className="opacity-90" />
          <circle cx="65" cy="40" r="12" fill="#10b981" className="opacity-30"
            style={{ transform: 'translate(3px, 3px)' }} />
        </svg>
      </div>
    ))}
  </div>
);

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    subscribe: false,
    usage: '',
    workRole: '',
    schoolRole: '',
    otherRole: '',
    schoolLevel: '',
    teammates: ['', '', ''],
    grinderGoal: '',
    firstAction: ''
  });

  const generateContributionGrid = (density) => {
    const grid = [];
    const rows = 7;
    const cols = density === 'sparse' ? 20 : density === 'decorative' ? 30 : 52;
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const hasContribution = density === 'full' ? true : 
          density === 'decorative' ? Math.random() > 0.7 :
          Math.random() > 0.5;
        const intensity = hasContribution ? Math.floor(Math.random() * 4) + 1 : 0;
        grid.push(
          <div
            key={`${i}-${j}`}
            className={`w-2 h-2 rounded-sm ${
              intensity === 0 ? 'bg-gray-700' :
              intensity === 1 ? 'bg-emerald-900' :
              intensity === 2 ? 'bg-emerald-700' :
              intensity === 3 ? 'bg-emerald-500' : 'bg-emerald-400'
            }`}
          />
        );
      }
    }
    return grid;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTeammateChange = (index, value) => {
    const newTeammates = [...formData.teammates];
    newTeammates[index] = value;
    setFormData(prev => ({ ...prev, teammates: newTeammates }));
  };

  const nextStep = () => {
    // Determine next step based on current step and user selections
    if (step === 1) {
      setStep(2); // Username -> Usage
    } else if (step === 2) {
      setStep(3); // Usage -> Role
    } else if (step === 3) {
      // Role -> School Level (only if usage is "School")
      if (formData.usage === 'School') {
        setStep(4);
      } else {
        setStep(5); // Skip to teammates
      }
    } else if (step === 4) {
      setStep(5); // School Level -> Teammates
    } else if (step === 5) {
      setStep(6); // Teammates -> Grinder Goal
    } else if (step === 6) {
      setStep(7); // Grinder Goal -> First Action
    } else if (step === 7) {
      setStep(8); // First Action -> Welcome
    }
  };

  const skipStep = () => {
    // Same logic as nextStep for skippable steps
    nextStep();
  };

  const canSkip = () => {
    // Steps that can be skipped
    return [5, 6, 7].includes(step);
  };

  const canContinue = () => {
    // Check if required fields are filled
    if (step === 1) return formData.username.trim() !== '';
    if (step === 2) return formData.usage !== '';
    if (step === 3) {
      if (formData.usage === 'School') return formData.schoolRole !== '';
      if (formData.usage === 'Work') return formData.workRole !== '';
      return formData.otherRole !== '';
    }
    if (step === 4) return formData.schoolLevel !== '';
    return true; // Steps 5, 6, 7 are optional
  };

  // Step 1: What's your name?
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What's your name?
            </h1>
            <p className="text-gray-300 text-lg mb-8">This is what others see when you are grinding together</p>

            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              placeholder="Username"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors mb-8"
            />

            <label className="flex items-start gap-3 mb-8 cursor-pointer group">
              <div className={`w-6 h-6 mt-1 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                formData.subscribe ? 'bg-emerald-400 border-emerald-400' : 'border-gray-600 group-hover:border-emerald-400'
              }`}
              onClick={() => handleInputChange('subscribe', !formData.subscribe)}>
                {formData.subscribe && (
                  <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-gray-300 text-base">Subscribe to Git grinder tips and updates</span>
            </label>

            <p className="text-gray-400 text-sm leading-relaxed mb-12">
              By opting in, you are consenting to receive product, service and events updates from Git grinder. 
              You can unsubscribe at any time.
            </p>

            <div className="flex justify-end">
              <button
                onClick={nextStep}
                disabled={!canContinue()}
                className={`px-16 py-4 font-semibold text-lg rounded-lg transition-all ${
                  canContinue()
                    ? 'bg-emerald-400 hover:bg-emerald-500 text-gray-900'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-teal-800 to-teal-900">
          <GitPattern />
        </div>
      </div>
    );
  }

  // Step 2: How do you plan to use Git Grinder
  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How do you plan to use Git Grinder
            </h1>
            <p className="text-gray-300 text-lg mb-8">If you'll use Git grinder for a few reasons, pick the main one.</p>

            <div className="flex flex-wrap gap-4 mb-12">
              {['School', 'Work', 'Personal projects', 'Open Source Collaboration', 'Something else'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange('usage', option)}
                  className={`px-8 py-4 rounded-lg border-2 text-lg transition-all ${
                    formData.usage === option
                      ? 'border-emerald-400 bg-emerald-400/10 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-emerald-400/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={nextStep}
                disabled={!canContinue()}
                className={`px-16 py-4 font-semibold text-lg rounded-lg transition-all ${
                  canContinue()
                    ? 'bg-emerald-400 hover:bg-emerald-500 text-gray-900'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-teal-800 to-teal-900">
          <GitPattern />
        </div>
      </div>
    );
  }

  // Step 3: What's your role (conditional based on usage)
  if (step === 3) {
    const isSchool = formData.usage === 'School';
    const isWork = formData.usage === 'Work';
    
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {isSchool ? "What's your role at school?" : isWork ? "What's your role at Work?" : "What's your role?"}
            </h1>
            <p className="text-gray-300 text-lg mb-8">This helps us know what tips and resources to share with you.</p>

            <div className="flex flex-wrap gap-4 mb-12">
              {isSchool && ['Educator', 'Student', 'Other'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange('schoolRole', option)}
                  className={`px-8 py-4 rounded-lg border-2 text-lg transition-all ${
                    formData.schoolRole === option
                      ? 'border-emerald-400 bg-emerald-400/10 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-emerald-400/50'
                  }`}
                >
                  {option}
                </button>
              ))}
              
              {isWork && ['Project Manager', 'UI/UX Designer', 'Developer'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange('workRole', option)}
                  className={`px-8 py-4 rounded-lg border-2 text-lg transition-all ${
                    formData.workRole === option
                      ? 'border-emerald-400 bg-emerald-400/10 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-emerald-400/50'
                  }`}
                >
                  {option}
                </button>
              ))}

              {!isSchool && !isWork && ['Hobbyist', 'Contributor', 'Other'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange('otherRole', option)}
                  className={`px-8 py-4 rounded-lg border-2 text-lg transition-all ${
                    formData.otherRole === option
                      ? 'border-emerald-400 bg-emerald-400/10 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-emerald-400/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={nextStep}
                disabled={!canContinue()}
                className={`px-16 py-4 font-semibold text-lg rounded-lg transition-all ${
                  canContinue()
                    ? 'bg-emerald-400 hover:bg-emerald-500 text-gray-900'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-teal-800 to-teal-900">
          <GeometricPattern />
        </div>
      </div>
    );
  }

  // Step 4: What type or level of school? (Only shown if usage is School)
  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What type or level of school?
            </h1>
            <p className="text-gray-300 text-lg mb-8">Pick the one that feels closest to your solution.</p>

            <div className="space-y-4 mb-8">
              {['College / University', 'Online course / Bootcamp', 'Something else'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange('schoolLevel', option)}
                  className={`w-full md:w-auto px-8 py-4 rounded-lg border-2 text-left text-lg transition-all ${
                    formData.schoolLevel === option
                      ? 'border-emerald-400 bg-emerald-400/10 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-emerald-400/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="bg-teal-900/40 border border-teal-700/50 rounded-lg p-6 mb-12">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-semibold">Reminder:</span> You must be old enough to consent (on your own behalf) to our{' '}
                <span className="text-emerald-400 cursor-pointer hover:underline">Terms</span> to use Git grinder. 
                For example, you must be 13 in the US (16 in California), and 18 in the EU and UK
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={nextStep}
                disabled={!canContinue()}
                className={`px-16 py-4 font-semibold text-lg rounded-lg transition-all ${
                  canContinue()
                    ? 'bg-emerald-400 hover:bg-emerald-500 text-gray-900'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-teal-800 to-teal-900">
          <GeometricPattern />
        </div>
      </div>
    );
  }

  // Step 5: Will anyone else be joining you? (Skippable)
  if (step === 5) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Will anyone else be joining you?
            </h1>
            <p className="text-gray-300 text-lg mb-8">You can invite others to grind with you.</p>

            <div className="space-y-4 mb-8">
              {formData.teammates.map((email, index) => (
                <input
                  key={index}
                  type="email"
                  value={email}
                  onChange={(e) => handleTeammateChange(index, e.target.value)}
                  placeholder={index === 0 ? 'contact.sese.a@gmail.com' : index === 1 ? 'ulcan.genesis@gmail.com' : 'yariemmanuel@gmail.com'}
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              ))}
            </div>

            <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-12 transition-colors">
              <Link2 size={20} />
              <span className="text-lg">Copy link to invite</span>
            </button>

            <div className="flex items-center justify-between">
              <button onClick={skipStep} className="text-gray-400 text-lg hover:text-white transition-colors">
                Skip
              </button>
              <button
                onClick={nextStep}
                className="px-16 py-4 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-semibold text-lg rounded-lg transition-all"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-teal-800 to-teal-900">
          <GitPattern />
        </div>
      </div>
    );
  }

  // Step 6: Which grinder goal would you like? (Skippable)
  if (step === 6) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Which grinder goal would you like?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { name: 'Acolyte', density: 'sparse' },
              { name: 'Pro', density: 'sparse' },
              { name: '10x Developer', density: 'full' },
              { name: 'Decorative', density: 'decorative' }
            ].map((goal) => (
              <button
                key={goal.name}
                onClick={() => handleInputChange('grinderGoal', goal.name)}
                className={`p-6 rounded-lg border-2 transition-all ${
                  formData.grinderGoal === goal.name
                    ? 'border-emerald-400 bg-emerald-400/10'
                    : 'border-gray-700 hover:border-emerald-400/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.grinderGoal === goal.name
                      ? 'border-emerald-400'
                      : 'border-gray-600'
                  }`}>
                    {formData.grinderGoal === goal.name && (
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    )}
                  </div>
                  <span className="text-white text-xl font-medium">{goal.name}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {generateContributionGrid(goal.density)}
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button onClick={skipStep} className="text-gray-400 text-lg hover:text-white transition-colors">
              Skip
            </button>
            <button
              onClick={nextStep}
              className="px-16 py-4 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-semibold text-lg rounded-lg transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 7: What would you like to do first? (Skippable)
  if (step === 7) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What would you like to do first?
            </h1>
            <p className="text-gray-300 text-lg mb-8">Select just one</p>

            <div className="space-y-4 mb-12">
              {['Check out the Features', 'Start Grinding', 'Join an Open Source Project'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange('firstAction', option)}
                  className={`w-full md:w-auto px-8 py-4 rounded-lg border-2 text-left text-lg transition-all ${
                    formData.firstAction === option
                      ? 'border-emerald-400 bg-emerald-400/10 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-emerald-400/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button onClick={skipStep} className="text-gray-400 text-lg hover:text-white transition-colors">
                Skip
              </button>
              <button
                onClick={nextStep}
                className="px-16 py-4 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-semibold text-lg rounded-lg transition-all"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-teal-800 to-teal-900">
          <GeometricPattern />
        </div>
      </div>
    );
  }

  // Step 8: Welcome Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 to-teal-900 relative overflow-hidden">
      <GitPattern />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome to Git Grinder!</h1>
          <p className="text-xl sm:text-2xl text-gray-200">Let's start grinding</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;