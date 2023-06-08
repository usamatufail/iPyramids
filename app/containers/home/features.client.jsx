import {Animate, Zoom} from '~/components';

const data = [
  {
    src: '/svg/live.svg',
    text: 'Live Longer',
  },
  {
    src: '/svg/blood.svg',
    text: 'Increased  Blood Flow ',
  },
  {
    src: '/svg/recover.svg',
    text: 'Faster Recovery',
  },
  {
    src: '/svg/brain.svg',
    text: 'Higher Consciousness',
  },
];

export const Features = () => {
  return (
    <section className="min-h-[450px] bg-[url('https://cdn.shopify.com/s/files/1/0771/2768/0277/files/features-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col gap-[12px] items-center justify-center py-[50px] px-[10px]">
      <Animate>
        <h1 className="text-[28px] md:text-[48px] font-[500] text-white">
          Coherence Within The Mind
        </h1>
      </Animate>
      <Zoom>
        <div className="grid grid-cols-4 justify-center items-center gap-[15px] md:gap-[50px] mt-[30px]">
          {data.map((data) => {
            return (
              <div key={data.text}>
                <Card text={data.text} src={data.src} />
              </div>
            );
          })}
        </div>
      </Zoom>
    </section>
  );
};

const Card = ({text, src}) => {
  return (
    <div className=" bg-transparent flex flex-col gap-[50px] items-center justify-center rounded-[128px] py-[30px]">
      <div className="flex flex-col gap-[20px] md:gap-[50px] items-center justify-center">
        <img
          src={src}
          alt={text}
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
        />
        <h1 className="text-[11px] md:text-[16px] font-[600] md:font-[700] text-white text-center md:max-w-[180px] max-h-[40px]">
          {text}
        </h1>
      </div>
    </div>
  );
};
