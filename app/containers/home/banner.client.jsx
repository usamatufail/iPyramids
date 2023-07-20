import {Animate, CustomButton, Link, Zoom} from '~/components';
// import green from '../../animations/g.json';
// import lightblue from '../../animations/l.json';
// import purple from '../../animations/pur.json';
// import pearl from '../../animations/p.json';

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
                // src="https://cdn.shopify.com/videos/c/o/v/121bcb4978004bbb8c65ffe3940aa2c1.mov"
                src="https://cdn.shopify.com/videos/c/o/v/7914795c9fa84ba3a9b670a417663bc8.mov"
                type='video/mp4; codecs="hvc1"'
              ></source>
              <source
                src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806158/iTorus/blue0001-0240_x6kl5o.webm"
                // src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1687129985/green_jefb2r.webm"
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
                src="https://cdn.shopify.com/videos/c/o/v/043604247e9e4d30aec8bedaa7955d33.mov"
                type='video/mp4; codecs="hvc1"'
              ></source>
              <source
                src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806175/iTorus/cream0241-0480_saz6hc.webm"
                // src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1687130002/light-blue_p7ad8a.webm"

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
                src="https://cdn.shopify.com/videos/c/o/v/689278e77ed2484194f3f75d0dc96cda.mov"
                type='video/mp4; codecs="hvc1"'
              ></source>
              <source
                src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806188/iTorus/green0001-0240_nvusas.webm"
                // src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1687130005/pearl_tge5ps.webm"
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
                src="https://cdn.shopify.com/videos/c/o/v/5d55d268345841ac93257bb6c87a15ff.mov"
                type='video/mp4; codecs="hvc1"'
              ></source>
              <source
                src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1689806201/iTorus/purple0001-0240_fawidw.webm"
                // src="https://res.cloudinary.com/dfy77jd7z/video/upload/v1687130010/purple_m8vyq3.webm"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="lg:hidden grid grid-cols-4 max-w-[700px] gap-[4px] mx-auto">
            <img
              src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_6.gif"
              // src="https://res.cloudinary.com/dfy77jd7z/image/upload/v1687130627/ezgif.com-optimize_wyj10g.gif"

              alt="green itorus"
              className="w-full h-auto"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_7.gif"
              // src="https://res.cloudinary.com/dfy77jd7z/image/upload/v1687131160/ezgif.com-optimize_1_q93amt.gif"

              alt="green itorus"
              className="w-full h-auto"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_8.gif"
              // src="https://res.cloudinary.com/dfy77jd7z/image/upload/v1687131335/ezgif.com-optimize_3_qxez8y.gif"

              alt="green itorus"
              className="w-full h-auto"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_9.gif"
              // src="https://res.cloudinary.com/dfy77jd7z/image/upload/v1687131442/ezgif.com-optimize_4_rw4moq.gif"

              alt="green itorus"
              className="w-full h-auto"
            />
          </div>
        </Zoom>
      </div>
    </header>
  );
};
