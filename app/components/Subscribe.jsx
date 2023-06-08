import {Animate, Zoom} from './Animate';
import {Link} from './Link';
import {CustomButton} from './CustomButton';

export const Subscribe = () => {
  return (
    <section className="grid min-h-[400px] md:grid-cols-2 gap-[50px] items-center bg-[url('https://cdn.shopify.com/s/files/1/0771/2768/0277/files/pexels-philippe-donn-1169754_1.jpg')] px-[20px] bg-cover relative bg-center bg-no-repeat py-[40px]">
      <div className="h-full w-full bg-[rgba(0,0,0,0.5)] absolute top-0 opacity-70 z-10" />

      <div className=" flex flex-col gap-[32px] m-auto justify-center items-center md:items-start relative z-20">
        <Animate>
          <h2 className="text-[28px] md:text-[42px] font-[700] text-white">
            Subscribe Now
          </h2>
        </Animate>
        <Animate>
          <p className="text-white font-[400] text-[16px] max-w-[500px] text-center md:text-left">
            Enables the bodies own natural healing system through charged
            coherent fields which reverses aging and activates dormant parts of
            our DNA.
          </p>
        </Animate>
        {/* Input */}
        <Zoom>
          <Link to="/account/register">
            <CustomButton text="Subscribe" />
          </Link>
        </Zoom>
      </div>
      <div className="flex justify-center relative z-20">
        <Zoom>
          <img
            src="/home/diamond.png"
            alt="Diamond"
            className="w-[300px] h-[350px] md:w-[unset] md:h-[unset]"
          />
        </Zoom>
      </div>
    </section>
  );
};
