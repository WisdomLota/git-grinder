const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, icon: Icon }) => {
  const baseStyles = 'font-semibold rounded-lg transition-all flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-[#01ec87] hover:bg-emerald-500 text-gray-900',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-[#e6fdf3]',
    outline: 'border-2 border-[#1b1f1f] text-[#1b1f1f] hover:bg-[#e6fdf3] hover:text-gray-900',
    ghost: 'text-gray-400 hover:text-[#e6fdf3] hover:bg-gray-800'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default Button