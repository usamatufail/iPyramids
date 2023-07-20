import {Animate, Zoom} from '~/components';

export const Explore = () => {
  return (
    <section className="grid min-h-[400px] md:grid-cols-2 gap-[50px] items-center bg-[url('https://cdn.shopify.com/s/files/1/0771/2768/0277/files/explore-bg.png')] px-[20px] md:px-[100px] bg-cover relative bg-bottom bg-no-repeat py-[40px]">
      <div className="h-full w-full bg-[rgba(0,0,0,0.5)] absolute top-0 opacity-30 z-10" />

      <div className=" flex flex-col gap-[32px] m-auto justify-center items-center md:items-start relative z-20">
        <Animate>
          <h2 className="text-center md:text-left text-[28px] md:text-[38px] font-[700] text-white px-[40px] md:px-[unset]">
            Download and explore our App
          </h2>
        </Animate>
        <Zoom>
          <div className="p-[10px] bg-[rgba(0,100,170,0.2)] relative rounded-[12px]">
            <div className="flex flex-col gap-[10px] relative">
              <a
                href="https://play.google.com/store/apps/details?id=com.goodbarber.itorus&hl=en_US&pli=1"
                className="corsur-pointer"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/google.png"
                  alt="Mobiles"
                  className="w-[220px]"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/itorus/id1642472150"
                className="corsur-pointer"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/app.png"
                  alt="Mobiles"
                  className="w-[220px]"
                />
              </a>
            </div>
          </div>
        </Zoom>
      </div>
      <div className="hidden md:flex justify-center relative z-20">
        <Zoom>
          <img
            src="https://cdn.shopify.com/s/files/1/0771/2768/0277/files/explore-img.png"
            alt="Mobiles"
            className="w-[300px] h-[350px] md:w-[400px] md:h-[320px]"
          />
        </Zoom>
      </div>
    </section>
  );
};
