import {Animate, Zoom} from '~/components';

export const Header = () => {
  return (
    <section className="min-h-[350px] md:min-h-[550px] flex justify-center items-end bg-[url('/about/banner-bg.png')] py-[24px] bg-cover bg-no-repeat bg-bottom">
      {/* <div className="absolute w-full h-full z-10 bg-black opacity-40" /> */}

      <div className="flex flex-col items-center justify-center">
        <Animate>
          <h1 className="text-[22px] px-[20px] md:text-[52px] font-[700] text-white text-center">
            We are where you can reach Us
          </h1>
        </Animate>
        <Zoom>
          <button className="text-[white] text-[14px] md:text-[20px] font-[700] flex flex-col items-center gap-[0px] md:gap-[2px] justify-center">
            Our Location
            <img src="/svg/down-arrow.svg" alt="arrow" className="pt-[2px]" />
          </button>
        </Zoom>
      </div>
    </section>
  );
};
