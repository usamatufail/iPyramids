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
            video="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806188/iTorus/green0001-0240_nvusas.webm"
            // video="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806188/iTorus/green0001-0240_nvusas.webm"
            video1="https://cdn.shopify.com/videos/c/o/v/a4d8776e0d1b4c6792a0d35401d3a4d3.mov"
            src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_8.gif"
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
            video="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806158/iTorus/blue0001-0240_x6kl5o.webm"
            video1="https://cdn.shopify.com/videos/c/o/v/23e073182d634398a639788e5279aa1c.mov"
            src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_6.gif"
          />
        </Zoom>
      </div>
    </div>
  );
};

const Card1 = ({image, video, heading, to, video1}) => {
  return (
    <div className="max-h-[310px] flex flex-col items-center justify-center gap-[17px] bg-[white] md:bg-[black] px-[10px] md:px-[50px] py-[20px] md:py-[32px] h-[270px] md:h-[unset]">
      <Zoom>
        {video || video1 ? (
          <>
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="w-[120px] lg:w-[120px] "
            >
              <source src={video1} type='video/mp4; codecs="hvc1"' />
              <source src={video} type="video/mp4" />
            </video>
          </>
        ) : (
          <img src={image} alt={heading} className="object-contain h-[150px]" />
        )}
      </Zoom>
      <div className="flex flex-col gap-[7px] justify-center items-center">
        <Animate>
          <h1 className="text-[16px] md:text-[28px] font-[700] text-[#000] md:text-white text-center ">
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

const Card2 = ({video, image, heading, to, video1, src}) => {
  return (
    <div className="max-h-[310px] flex flex-col items-center justify-center gap-[17px] bg-[#000] md:bg-[#FBFAFE] px-[10px] md:px-[50px] py-[20px] md:py-[32px] h-[270px] md:h-[unset]">
      <div className="flex flex-col gap-[7px] justify-center items-center">
        <Animate>
          <h1 className="text-[16px] md:text-[28px] font-[700] text-white md:text-black text-center">
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
        {video || video1 || src ? (
          <>
            <video
              width="280"
              height="100%"
              autoPlay
              loop
              muted
              className="w-[120px] hidden md:block  "
            >
              <source src={video1} type='video/mp4; codecs="hvc1"' />
              <source src={video} type="video/mp4" />
            </video>
            <div className="block md:hidden ">
              <img src={src} alt="green itorus" className="w-[120px] h-auto" />
            </div>
          </>
        ) : (
          <img src={image} alt={heading} className="object-contain h-[150px]" />
        )}
      </Zoom>
    </div>
  );
};
