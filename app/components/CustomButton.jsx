export const CustomButton = ({text = 'Learn More', type = 'button'}) => {
  return (
    <button
      type={type}
      className="text-[#EDB311] text-[18px] md:text-[20px] font-[500] flex items-center gap-[0px] md:gap-[5px] justify-center"
    >
      {text}
      <img src="/svg/home-arrow.svg" alt="arrow" className="pt-[2px]" />
    </button>
  );
};
