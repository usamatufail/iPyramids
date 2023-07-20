import {Animate, CustomButton, Link, Zoom} from '~/components';

export const Cards = () => {
  return (
    <div className="flex flex-col items-center gap-[5px] justify-center bg-white">
      <div className="grid grid-cols-2 gap-[5px] md:gap-[10px] p-[5px] md:p-[10px] justify-center items-center w-full">
        <Zoom>
          <Card1
            image="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/card1.png"
            heading="Star Gate 4.0"
            to="/products/star-gate-4-0"
          />
        </Zoom>
        <Zoom>
          <Card2
            image="/home/card3.png"
            heading="iTorus 9"
            to="/products/itorus-9-9-5-tachyon-vortex-pemf-5-0"
            video="https://cdn.shopify.com/videos/c/o/v/8e7b7e61f2694e98b813bb57bfcad68d.mp4"
          />
        </Zoom>
        <Zoom>
          <Card1
            image="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/card2.png"
            heading="ARC-6"
            to="/products/accelerated-rejuvenation-chamber-arc-6-dup"
          />
        </Zoom>
        <Zoom>
          <Card2
            image="/home/card4.png"
            heading="iTorus 2 Mini"
            to="/products/itorus-2-mini-2-8-tachyon-vortex-pemf-4-0"
            video="https://cdn.shopify.com/videos/c/o/v/1ef20bac95e94addaab0d1b0e207c7c2.mp4"
          />
        </Zoom>
      </div>
    </div>
  );
};

const Card1 = ({image, video, heading, to}) => {
  return (
    <div className="max-h-[310px] flex flex-col items-center justify-center gap-[17px] bg-[black] px-[10px] md:px-[50px] py-[20px] md:py-[32px] h-[270px] md:h-[unset]">
      <Zoom>
        {video ? (
          <video
            width="300"
            height="100%"
            autoPlay
            loop
            muted
            className="mt-[-10px]"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img src={image} alt={heading} className="object-contain h-[150px]" />
        )}
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

const Card2 = ({video, image, heading, to}) => {
  return (
    <div className="max-h-[310px] flex flex-col items-center justify-center gap-[17px] bg-[#FBFAFE] px-[10px] md:px-[50px] py-[20px] md:py-[32px] h-[270px] md:h-[unset]">
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
        {/* <img src={image} alt={heading} className="object-contain h-[150px]" /> */}
        {video ? (
          <video
            width="280"
            height="100%"
            autoPlay
            loop
            muted
            className="mt-[-10px]"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img src={image} alt={heading} className="object-contain h-[150px]" />
        )}
      </Zoom>
    </div>
  );
};
