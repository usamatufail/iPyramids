import {Animate, Zoom} from '~/components';

const data = [
  {
    img1: '/about/card1.png',
    img2: '/svg/diamond.svg',
    heading: 'Shop one-on-one',
  },
  {
    img1: '/about/card2.png',
    img2: '/svg/buy.svg',
    heading: 'Get it today. Buy online and we’ll have it ready for pickup.',
  },
];

export const OurStory = () => {
  return (
    <section className="minh-[750px] bg-[url('/about/card-bg.png')] bg-cover bg-no-repeat px-[20px] py-[20px] md:py-[46px] gap-[40px]">
      <Zoom>
        <div className="grid md:grid-cols-2 m-auto xl:px-[130px] gap-[30px]">
          {data.map((el) => {
            return (
              <Card
                img1={el.img1}
                img2={el.img2}
                heading={el.heading}
                key={el.heading}
              />
            );
          })}
        </div>
      </Zoom>
    </section>
  );
};

const Card = ({heading, img1, img2}) => {
  return (
    <div className="flex flex-col gap-[20px] justify-center items-center">
      <Zoom>
        <img src={img1} alt={heading} className="w-full" />
      </Zoom>
      <div className="flex flex-col gap-[12px] mt-[20px] items-center justify-center bg-transparent relative md:w-[550px] md:h-[350px]">
        <div className="h-full w-full bg-[rgba(0,0,0,0.5)] absolute top-0 opacity-80 z-10" />
        <div className="relative z-20 flex flex-col gap-[12px] justify-center items-center p-[40px]">
          <Zoom>
            <img src={img2} alt={heading} className="w-[50px] h-[50px]" />
          </Zoom>
          <Animate>
            <h1 className="text-[18px] md:text-[32px] font-[700] text-white text-center md:h-[200px]">
              {heading}
            </h1>
          </Animate>
        </div>
      </div>
    </div>
  );
};
