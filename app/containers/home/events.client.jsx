import {Animate, Link, Zoom} from '~/components';

export const Event = () => {
  return (
    <section className="min-h-[630px] bg-[url('https://cdn.shopify.com/s/files/1/0771/2768/0277/files/event-bg.png')] bg-cover bg-no-repeat flex flex-col gap-[18px] justify-center items-center px-[20px] py-[40px]">
      <Animate>
        <h1 className="text-[28px] md:text-[48px] font-[700] text-center text-[#fff]">
          See Our Events
        </h1>
      </Animate>
      <Zoom>
        <Link to="/calendar">
          <img src="/home/event-cal.png" alt="Event Calender" />
        </Link>
      </Zoom>
      <Animate>
        <p className="text-[16px] md:text-[20px] font-[400] text-white text-center block md:hidden">
          We aim to bridge the worlds future of health and wellness by providing
          energy tools that restore coherence within the mind, body and spirit.
          Think next-level whole-body rejuvenation when you think of Vortex
          Pulsing ElectroMagnetic Field (VPEMF) therapy.
        </p>
        <p className="text-[16px] md:text-[20px] font-[400] text-white text-center hidden md:block">
          We aim to bridge the worlds future of health and wellness by providing
          energy tools that restore <br /> coherence within the mind, body and
          spirit. Think next-level whole-body rejuvenation when you think <br />
          of Vortex Pulsing ElectroMagnetic Field (VPEMF) therapy.{' '}
        </p>
      </Animate>
    </section>
  );
};
