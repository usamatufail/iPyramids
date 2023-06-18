import {Animate, CustomButton, Link, Zoom} from '~/components';
// import green from '../../animations/g.json';
// import lightblue from '../../animations/l.json';
// import purple from '../../animations/pur.json';
// import pearl from '../../animations/p.json';

export const Banner = () => {
  return (
    // bg-[url('https://cdn.shopify.com/s/files/1/0771/2768/0277/files/banner-bg.png')] bg-cover bg-no-repeat
    <header className="min-h-[350px] md:min-h-[550px] flex items-center bg-[#FAF9FD] justify-center transition-all overflow-hidden px-[20px]">
      {/* <div className="h-full w-full bg-[#000] absolute top-0 opacity-20 z-20" /> */}
      <div className="flex flex-col gap-[12px] justify-center items-center">
        <Animate>
          <h1 className="text-[#000] text-[28px] md:text-[48px] font-[700]">
            Quantum Therapy
          </h1>
        </Animate>
        <Animate>
          <Link to="/collections/itorus">
            <CustomButton text="iTorus" />
          </Link>
        </Animate>
        <Zoom>
          <div className="grid grid-cols-1 gap-[40px] lg:gap-[unset] mx-auto">
            {/* <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="mt-[-10px] w-[250px] lg:w-full"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/105e9ddc3720463291fac7651eadbecc.mp4"
                type="video/mp4"
              />
            </video>
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="mt-[-10px] w-[250px] lg:w-full"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/8e7b7e61f2694e98b813bb57bfcad68d.mp4"
                type="video/mp4"
              />
            </video>
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="mt-[-10px] w-[250px] lg:w-full"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/1ef20bac95e94addaab0d1b0e207c7c2.mp4"
                type="video/mp4"
              />
            </video> */}
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="w-[250px] lg:w-[500px]"
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/258354e3139240adbd6d079619dfc960.mp4"
                type="video/mp4"
              />
            </video>
            {/* <Animation animation={green} />
            <Animation animation={lightblue} /> */}
            {/* <Animation animation={purple} /> */}
            {/* <Animation animation={pearl} /> */}
          </div>
        </Zoom>
      </div>
    </header>
  );
};
