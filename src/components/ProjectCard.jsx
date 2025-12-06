import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ title, status, thumbnail, onSelect, isSelected }) => {

    const navigate = useNavigate();

  return (
    <div 
    onClick={() => navigate(`/project/${id}`)}
    className="group relative bg-[#1b1f1f] rounded-lg overflow-hidden hover:border-2 hover:border-[#01ec87] transition-all cursor-pointer"
    >
      <div className="aspect-video bg-gradient-to-br from-teal-800 to-teal-900 relative overflow-hidden">
        {thumbnail}
      </div>
      <div className="p-4 flex items-start gap-2 border-x-2 border-b-2 border-[#01ec87]">
        <div className='mt-1'>
         <input 
           type="checkbox" 
           checked={isSelected}
           onChange={onSelect}
           className="w-5 h-5 rounded border-2 border-[#324b3f] bg-[#1b1f1f]/50 cursor-pointer"
         />
        </div>
        <div className=''>
          <h3 className="text-[#e6fdf3] font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-200 text-sm mb-3">{status}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard