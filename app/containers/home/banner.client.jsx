import {Animate, CustomButton, Link, Zoom} from '~/components';

export const Banner = () => {
  return (
    <header className="min-h-[350px] md:min-h-[550px] flex items-center justify-center transition-all bg-[url('/home/banner-bg.png')] bg-cover bg-no-repeat overflow-hidden px-[20px]">
      {/* <div className="h-full w-full bg-[#000] absolute top-0 opacity-20 z-20" /> */}
      <div className="flex flex-col gap-[12px] justify-center items-center">
        <Animate>
          <h1 className="text-[white] text-[28px] md:text-[48px] font-[700]">
            Quantum Therapy
          </h1>
        </Animate>
        <Animate>
          <Link to="/collections/itorus">
            <CustomButton text="iTorus" />
          </Link>
        </Animate>
        <Zoom>
          <img
            src="/home/circles.png"
            alt="diamonds"
            className="w-full md:max-w-[900px]"
          />
        </Zoom>
      </div>
    </header>
  );
};
