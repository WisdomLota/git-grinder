import settingsIconWheel from '../assets/settingsIconWheel.svg';

const NotificationsPanel = ({onClose}) => {
  return (
    <div className="absolute top-20 lg:left-72 md:left-60 left-4 w-88 max-h-[600px] bg-[#1b1f1f] border border-[#324b3f] rounded-lg shadow-xl z-50 overflow-hidden">
        <div className="p-4 border-b border-[#324b3f] flex items-center justify-between">
          <h3 className="text-[#e6fdf3] font-semibold poppins-regular">All notifications</h3>
          <button onClick={onClose}>
            <img src={settingsIconWheel} alt="settings-icon" />
          </button>
        </div>

        <div className="p-4 border-b border-[#324b3f] flex items-center justify-between">
          <div className="flex gap-2">
            <button className="px-2 py-1 border-2 border-[#01ec87] text-[#e6fdf3] bg-[#b3f9db]/50 rounded-md text-sm poppins-regular">
              All
            </button>
            <button className="px-2 py-1 text-[#e6fdf3] hover:bg-[#324b3f] rounded-md text-sm poppins-regular">
              Unread (29)
            </button>
          </div>
          <button className="text-[#01ec87] text-sm hover:underline poppins-regular">
            Mark all as read
          </button>
        </div>

        <div className="overflow-y-auto max-h-[400px] scrollbar-hide poppins-regular">
          <div className="p-3 border-b border-[#324b3f]">
            <p className="text-gray-200 text-xs mb-2">Last 7 days</p>

            {[1, 2].map((i) => (
              <div key={i} className="flex gap-3 p-3 hover:bg-[#324b3f] rounded-lg cursor-pointer mb-2">
                <div className="w-10 h-10 rounded-full bg-[#e6fdf3] flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-[#e6fdf3] font-semibold text-sm">Oryz</p>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-200 text-xs">Jul 23</span>
                      <div className="w-2 h-2 rounded-full bg-[#01ec87]"></div>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm">Replied • Oryzon website</p>
                  <p className="text-[#e6fdf3] text-sm">Great Work Kome</p>
                </div>
              </div>
            ))}
          </div>
        
          <div className="p-3">
            <p className="text-gray-200 text-xs mb-2">Older</p>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex gap-3 p-3 hover:bg-[#324b3f] rounded-lg cursor-pointer mb-2">
                <div className="w-10 h-10 rounded-full bg-[#e6fdf3] flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-[#e6fdf3] font-semibold text-sm">Oryz</p>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-200 text-xs">Jul 23</span>
                      <div className="w-2 h-2 rounded-full bg-[#01ec87]"></div>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm">Replied • Oryzon website</p>
                  <p className="text-[#e6fdf3] text-sm">Great Work Kome</p>
                </div>
              </div>
            ))}
            {/* Add more notifications here */}
          </div>
        </div>
    </div>
  )
}

export default NotificationsPanel