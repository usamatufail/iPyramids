import {Animate, Zoom} from '~/components';

const data = [
  {
    src: 'https://cdn.shopify.com/videos/c/o/v/53b897f836404550bc186c218dd1a1a3.mov',
    src2: 'https://res.cloudinary.com/dlgjiabvd/video/upload/v1687361032/heRT02_yxliwb.webm',
    img: 'https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_3.gif',
    text: 'Live Longer',
  },
  {
    src: 'https://cdn.shopify.com/videos/c/o/v/ed1a95373e654e4bb220e8a7ef17e047.mov',
    src2: 'https://res.cloudinary.com/dlgjiabvd/video/upload/v1687362550/drop02_qynb8k.mkv',
    img: 'https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_1.gif',

    text: 'Increased  Blood Flow ',
  },
  {
    src: 'https://cdn.shopify.com/videos/c/o/v/9c9a607b46f7410e9d5077d3aa0aca3c.mov',
    src2: 'https://res.cloudinary.com/dlgjiabvd/video/upload/v1687364434/watch02_fugeny.webm',
    img: 'https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_4.gif',

    text: 'Faster Recovery',
  },
  {
    src: 'https://cdn.shopify.com/videos/c/o/v/c45a12ed92b4401aae8ec6648ef095dc.mov',
    src2: 'https://res.cloudinary.com/dlgjiabvd/video/upload/v1687364447/face02_i0tbog.webm',
    img: 'https://cdn.shopify.com/s/files/1/0771/2768/0277/files/ezgif.com-video-to-gif_2.gif',

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
                <Card
                  text={data.text}
                  src={data.src}
                  src2={data.src2}
                  img={data.img}
                />
              </div>
            );
          })}
        </div>
      </Zoom>
    </section>
  );
};

const Card = ({text, src, src2, img}) => {
  return (
    <div className=" bg-transparent flex flex-col gap-[50px] items-center justify-center rounded-[128px] py-[30px]">
      <div className="flex flex-col gap-[20px] md:gap-[50px] items-center justify-center">
        <div className="md:block hidden ">
          <video
            width="100%"
            height="100%"
            autoPlay
            // loop
            muted
            // playsInline
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
          >
            <source src={src} type='video/mp4; codecs="hvc1"' />
            <source src={src2} type="video/mp4" />
          </video>
        </div>
        <div className="md:hidden block">
          <img
            src={img}
            alt="green itorus"
            className="w-[50px] h-[50px] rounded-[50px]"
          />
        </div>
        <h1 className="text-[11px] md:text-[16px] font-[600] md:font-[700] text-white text-center md:max-w-[180px] max-h-[40px]">
          {text}
        </h1>
      </div>
    </div>
  );
};
