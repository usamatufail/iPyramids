import {Animate, CustomButton, Zoom} from '~/components';

export const Cards = () => {
  return (
    <div className="flex flex-col items-center gap-[8px] justify-center md:py-[8px] bg-white">
      <div className="grid grid-cols-2 gap-[5px] md:gap-[10px] justify-center items-center w-full h-full">
        <Zoom>
          <Card1 image="/home/card1.png" heading="Star Gate 4.0" />
        </Zoom>
        <Zoom>
          <Card2 image="/home/card3.png" heading="6 Sided Orgone Pyramid" />
        </Zoom>
      </div>
      <div className="grid grid-cols-2 gap-[5px] md:gap-[10px] justify-center items-center w-full h-full">
        <Zoom>
          <Card1 image="/home/card2.png" heading="ARC" />
        </Zoom>
        <Zoom>
          <Card2 image="/home/card4.png" heading="Custom Travel Case" />
        </Zoom>
      </div>
    </div>
  );
};

const Card1 = ({image, heading}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[17px] bg-[black] px-[10px] md:px-[50px] py-[20px] md:py-[32px] h-[270px] md:h-[unset]">
      <Zoom>
        <img src={image} alt={heading} className="object-contain h-[150px]" />
      </Zoom>
      <div className="flex flex-col gap-[7px] justify-center items-center">
        <Animate>
          <h1 className="text-[16px] md:text-[28px] font-[700] text-white text-center ">
            {heading}
          </h1>
        </Animate>
        <Animate>
          <CustomButton text="Buy" />
        </Animate>
      </div>
    </div>
  );
};

const Card2 = ({image, heading}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[17px] bg-[#f2f2f2] px-[10px] md:px-[50px] py-[20px] md:py-[32px] h-[270px] md:h-[unset]">
      <div className="flex flex-col gap-[7px] justify-center items-center">
        <Animate>
          <h1 className="text-[16px] md:text-[28px] font-[700] text-black text-center">
            {heading}
          </h1>
        </Animate>
        <Animate>
          <CustomButton text="Buy" />
        </Animate>
      </div>
      <Zoom>
        <img src={image} alt={heading} className="object-contain h-[150px]" />
      </Zoom>
    </div>
  );
};
