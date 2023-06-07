export const CustomInput = ({icon, placeholder, className}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <img
        src={icon}
        className="absolute top-[50%] -translate-y-[50%] left-[12.5px]"
        alt={placeholder}
      />
      <input
        className="h-[52px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)] border border-[#e0dfe0] rounded-[8px] w-full pl-[54px] placeholder:text-black transition-all"
        placeholder={placeholder}
      />
    </div>
  );
};
