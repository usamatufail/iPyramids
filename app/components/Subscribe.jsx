import {useState} from 'react';
import {Animate, Zoom} from './Animate';
import {Link} from './Link';
import {CustomButton} from './CustomButton';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  return (
    <section className="min-h-[400px] grid md:grid-cols-2 gap-[50px] items-center bg-[url('/home/mail-bg.png')] px-[20px] bg-cover bg-no-repeat py-[40px]">
      <div className=" flex flex-col gap-[32px] m-auto justify-center items-center md:items-start">
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
          {/* <input
            className="h-[48px] text-black focus-visible:outline-none rounded-[50px] bg-white w-[300px] px-[30px] placeholder:text-[#242424] placeholder:text-opacity-50 xl:w-[450px] text-[16px] font-[400]"
            placeholder="Your Email"
            onChange={(e) => setEmail(e?.target?.value)}
            value={email}
          /> */}
        </Zoom>
      </div>
      <div className="flex justify-center">
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
