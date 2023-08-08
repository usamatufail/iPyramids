import {Animate, CustomButton, Link, Zoom} from '~/components';

export const Banner = () => {
  return (
    <header className="min-h-[350px] md:min-h-[550px] flex items-center bg-[#000] lg:bg-[url('https://cdn.shopify.com/s/files/1/0771/2768/0277/files/banner-bg.png')] bg-cover bg-no-repeat justify-center transition-all overflow-hidden px-[20px]">
      {/* <div className="h-full w-full bg-[#000] absolute top-0 opacity-20 z-20" /> */}
      <div className="flex flex-col gap-[12px] justify-center items-center">
        <Animate>
          <h1 className="text-[#fff] text-[28px] md:text-[48px] font-[700]">
            Quantum Therapy
          </h1>
        </Animate>
        <Animate>
          <Link to="/collections/itorus">
            <CustomButton text="iTorus" />
          </Link>
        </Animate>
        <Zoom>
          <div className="hidden lg:grid grid-cols-4 max-w-[700px] gap-[4px] lg:gap-[20px] mx-auto">
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              playsInline
              className="w-[250px] lg:w-[500px]"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/23e073182d634398a639788e5279aa1c.mov"
                type='video/mp4; codecs="hvc1"'
              ></source>
              <source
                src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806158/iTorus/blue0001-0240_x6kl5o.webm"
                type="video/mp4"
              />
            </video>
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="w-[250px] lg:w-[500px]"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/4d2369e10ced468694ce6d3442d66de6.mov"
                type='video/mp4; codecs="hvc1"'
              ></source>
              <source
                src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806175/iTorus/cream0241-0480_saz6hc.webm"
                type="video/mp4"
              />
            </video>
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="w-[250px] lg:w-[500px]"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/a4d8776e0d1b4c6792a0d35401d3a4d3.mov"
                type='video/mp4; codecs="hvc1"'
              ></source>
              <source
                src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806188/iTorus/green0001-0240_nvusas.webm"
                type="video/mp4"
              />
            </video>
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="w-[250px] lg:w-[500px]"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/6c94b85c869d488e8da51f540cd9fb43.mov"
                type='video/mp4; codecs="hvc1"'
              ></source>
              <source
                src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806201/iTorus/purple0001-0240_fawidw.webm"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="lg:hidden grid grid-cols-4 max-w-[700px] gap-[4px] mx-auto">
            <img
              src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_6.gif"
              alt="green itorus"
              className="w-full h-auto"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_7.gif"
              alt="green itorus"
              className="w-full h-auto"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_8.gif"
              alt="green itorus"
              className="w-full h-auto"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_9.gif"
              alt="green itorus"
              className="w-full h-auto"
            />
          </div>
        </Zoom>
      </div>
    </header>
  );
};
