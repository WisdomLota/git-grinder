import gitGrinderLogo from "../assets/GG-logo.png";
import gitGrinderLogogDark from "../assets/GG-logo-dark.png";
import { useNavigate } from "react-router-dom";

const CheckInbox = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col">
      {/* Logo in top left */}
      <div className="p-4 sm:p-6 md:p-8 cursor-pointer" onClick={()=>navigate('/')}>
        <img src={gitGrinderLogo} alt="git-grinder-logo" width={60} height={60}/>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-2xl w-full text-center">
          {/* Git Icon */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <img src={gitGrinderLogogDark} alt="git-grinder-logo-dark" width={320} height={320}/>
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-semibold text-[#053235] mb-6">
            Check your inbox
          </h1>

          {/* Description */}
          <p className="text-[#053235] text-base sm:text-lg mb-1 px-4">
            Click on the link we sent to <span className="font-semibold">contact.sese.a@gmail.com</span>
          </p>
          <p className="text-[#053235] text-base sm:text-lg mb-8 px-4">
            to finish your account setup
          </p>

          {/* Open Inbox Button */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <button className="group cursor-pointer bg-[#053235] hover:bg-teal-800 text-[#e6fdf3] font-medium px-20 py-3 rounded-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center">
              Open Inbox
            </button>
          </div>

          {/* Resend Link */}
          <p className="text-gray-700 text-sm sm:text-base mb-4 px-4">
            No email in your inbox or spam folder?{' '}
            <button className="font-bold underline hover:text-teal-800 transition-colors cursor-pointer">
              Let's resend it.
            </button>
          </p>

          {/* Log Out Link */}
          <p className="text-sm sm:text-base px-4">
            Wrong address?{' '}
            <button className="font-bold hover:text-teal-800 transition-colors underline cursor-pointer">
              Log out
            </button>{' '}
            to sign in with a different email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckInbox;