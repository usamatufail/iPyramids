import {Zoom} from '~/components';

export const PolicyHeader = () => {
  return (
    <section className="min-h-[40vh] relative flex flex-col justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/0729/2082/6157/files/about-bg.jpg')] bg-cover bg-bottom bg-no-repeat">
      <div className="absolute w-full h-full z-10 bg-black opacity-40" />
      <Zoom>
        <h1 className="md:text-[75px] text-[45px] leading-[1.14] relative z-20 md:leading-[unset] font-[400]  text-white uppercase text-center text-odor">
          Privacy Policy
        </h1>
      </Zoom>
    </section>
  );
};
