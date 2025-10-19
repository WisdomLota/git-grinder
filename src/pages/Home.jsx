import gitGrinderLogo from "../assets/GG-logo.png";
import { Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#e6fdf3] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Git Logo */}
        <div className="flex flex-col items-center justify-center">
            <img src={gitGrinderLogo} alt="git-grinder-logo" />
        </div>

        {/* Welcome Text */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#053235] mt-4 mb-12 poppins-medium">
          Welcome to Git grinder
        </h1>

        {/* Signup Button */}
        <div className="flex justify-center items-center" onClick={() => navigate('/check-inbox')}>
            <button className="group cursor-pointer bg-[#053235] hover:bg-teal-800 text-[#e6fdf3] font-medium px-12 py-3 rounded-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center">
                <Github className="w-5 h-5 mr-2" />
                Signup with Github
            </button>
        </div>

      </div>
    </div>
  )
}

export default Home