import {Animate, CustomButton, Link, Zoom} from '~/components';

export const Cards = () => {
  return (
    <div className="flex flex-col items-center gap-[5px] justify-center bg-white">
      <div className="grid grid-cols-2 gap-[5px] md:gap-[10px] p-[5px] md:p-[10px] justify-center items-center w-full">
        <Zoom>
          <Card1
            image="/home/card1.png"
            heading="Star Gate 4.0"
            to="/products/star-gate-4-0"
          />
        </Zoom>
        <Zoom>
          <Card2
            image="/home/card3.png"
            heading="6 Sided Orgone Pyramid"
            to="/products/6-sided-orgone-pyramid"
          />
        </Zoom>
        <Zoom>
          <Card1
            image="/home/card2.png"
            heading="ARC-6"
            to="/products/accelerated-rejuvenation-chamber-arc-6"
          />
        </Zoom>
        <Zoom>
          <Card2
            image="/home/card4.png"
            heading="Custom Travel Case"
            to="/products/case-only-custom-travel-case-for-itorus-1-and-2"
          />
        </Zoom>
      </div>
      {/* <div className="grid grid-cols-2 gap-[5px] md:gap-[10px] justify-center items-center w-full h-full">

      </div> */}
    </div>
  );
};

const Card1 = ({image, heading, to}) => {
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
          <Link to={to}>
            <CustomButton text="Buy" />
          </Link>
        </Animate>
      </div>
    </div>
  );
};

const Card2 = ({image, heading, to}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[17px] bg-[#f2f2f2] px-[10px] md:px-[50px] py-[20px] md:py-[32px] h-[270px] md:h-[unset]">
      <div className="flex flex-col gap-[7px] justify-center items-center">
        <Animate>
          <h1 className="text-[16px] md:text-[28px] font-[700] text-black text-center">
            {heading}
          </h1>
        </Animate>
        <Animate>
          <Link to={to}>
            <CustomButton text="Buy" />
          </Link>
        </Animate>
      </div>
      <Zoom>
        <img src={image} alt={heading} className="object-contain h-[150px]" />
      </Zoom>
    </div>
  );
};
