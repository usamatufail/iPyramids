export const Checkbox = ({name = '', label = '', className = ''}) => {
  return (
    <div className={`flex items-center gap-[10px] w-full ${className}`}>
      <input
        type="checkbox"
        id={name}
        className="w-[24px] h-[24px] text-gray-800 bg-white border-black outline-none rounded focus:ring-gray-900"
      />
      <label htmlFor={name} className="text-black text-[18px]">
        {label}
      </label>
    </div>
  );
};
