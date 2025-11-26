import { X } from 'lucide-react';
import Button from './Button';

const PlansModal = ({onClose}) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
    <div className="bg-[#1b1f1f] rounded-lg max-w-5xl w-full max-h-[96vh] overflow-y-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[#e6fdf3] poppins-bold text-3xl">Need more projects?</h2>
        <button onClick={onClose} className="text-[#e6fdf3] hover:text-gray-400">
          <X size={24} />
        </button>
      </div>
      
      <p className="text-gray-200 mb-8">The Starter plan only comes with 1 project, but getting more is easy.</p>
      
      <div className="grid md:grid-cols-2 border border-[#324b3f] rounded-lg px-6">
        {/* Starter Plan */}
        <div className="p-6 border-r border-[#324b3f]">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-[#e6fdf3] text-2xl font-bold">Starter</h3>
            <span className="text-xs text-[#e6fdf3] px-2 py-1 rounded-lg border border-[#324b3f]">Current Plan</span>
          </div>
          <p className="text-gray-200 text-md mb-12 md:mb-26">Best for anyone who wants to try out grinding with git grinder</p>
          
          <div className="space-y-3 mb-6">
            <p className="text-[#e6fdf3] font-semibold border-b border-[#32463f] pb-2 mb-6">Free, but limited features</p>
            <div className="flex items-start gap-2 text-gray-200 text-sm">
              <span>✓</span>
              <span>2 self-grind projects</span>
            </div>
            <div className="flex items-start gap-2 text-gray-200 text-sm">
              <span>✓</span>
              <span>1 open source grinder project</span>
            </div>
            <div className="flex items-start gap-2 text-gray-200 text-sm">
              <span>✓</span>
              <span>Limited grinder AI use</span>
            </div>
          </div>
        </div>
        
        {/* Professional Plan */}
        <div className="p-6 border-l border-[#324b3f]">
          <h3 className="text-[#e6fdf3] text-2xl font-bold mb-2">Professional</h3>
          <p className="text-gray-200 text-md md:mb-20 mb-12">Best for indie teams to create and collaborate</p>
          
          <div className="pb-6 flex justify-between border-b border-[#324b3f] mb-6">
            <p className="text-[#e6fdf3] text-2xl poppins-bold">$5/mo</p>
            <p className="text-[#e6fdf3] text-2xl poppins-bold">● Full seat</p>
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
  )
}

export default PlansModal
