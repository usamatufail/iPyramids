import {Animate, CustomButton, Link, Zoom, Animation} from '~/components';
import green from '../../animations/g.json';
import lightblue from '../../animations/l.json';
import purple from '../../animations/pur.json';
import pearl from '../../animations/p.json';

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
          <div className="grid grid-cols-4">
            <Animation animation={green} />
            <Animation animation={lightblue} />
            <Animation animation={purple} />
            <Animation animation={pearl} />
          </div>
        </Zoom>
      </div>
    </header>
  );
};
