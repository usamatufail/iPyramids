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
    text: 'Unleash Higher Consciousness',
  },
];

export const Features = () => {
  return (
    <section className="min-h-[450px] bg-[url('https://cdn.shopify.com/s/files/1/0771/2768/0277/files/features-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col gap-[12px] items-center justify-center py-[50px]">
      <Animate>
        <h1 className="text-[28px] md:text-[48px] font-[500] text-white">
          Coherence Within The Mind
        </h1>
      </Animate>
      <Animate>{/* <CustomButton /> */}</Animate>
      <Zoom>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-[50px] mt-[30px]">
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
    <div className=" bg-transparent relative flex flex-col gap-[50px] items-center justify-center rounded-[128px] py-[30px]">
      <div className="h-full w-full bg-[rgba(0,0,0,0.5)] absolute top-0 opacity-30 rounded-[128px] z-10" />
      <div className="flex flex-col gap-[50px] items-center justify-center relative z-30 rounded-[128px]">
        <img src={src} alt={text} />
        <h1 className="text-[16px] font-[700] text-white text-center max-w-[105px] md:max-w-[180px] max-h-[40px]">
          {text}
        </h1>
      </div>
    </div>
  );
};
