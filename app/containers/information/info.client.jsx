import {Zoom} from '~/components';

const data = [
  {
    src: 'MUKLjr2gOUw',
    heading: 'iTorus Micro',
    text: 'iTorus Micro Shungite Shield Test',
  },
  {
    src: 'opP557peoBs',
    heading: 'Behind The Scenes',
    text: 'Behind The Scenes at iPyramids Making The iTorus',
  },
  {
    src: 'xNG8kRYHsvs',
    heading: 'STAY IN THE VORTEX',
    text: 'STAY IN THE VORTEX',
  },
  {
    src: 'x1xXWhHWRVs',
    heading: 'WHAT IS THE iTORUS?',
    text: 'WHAT IS THE iTORUS?',
  },
  {
    src: 'PJc8037Q2XI',
    heading: 'Accelerated Rejuvenation Chamber',
    text: 'Accelerated Rejuvenation Chamber',
  },
  {
    src: 'bnz2ZR7ln3Q',
    heading: 'iPyramids Ambassador Program',
    text: 'iPyramids Ambassador Program',
  },
  {
    src: 'fIzFmpC6gfQ',
    heading: 'iTorus 5 Vortex Generator Levitating Magnet',
    text: 'iTorus 5 Vortex Generator Levitating Magnet',
  },
  {
    src: 'F3pRKf5DuyQ',
    heading: 'iPyramids at Clair-i-Tea',
    text: 'iPyramids at Clair-i-Tea',
  },
  {
    src: 'AF3KTQvbJ8o',
    heading: 'Micro iTorus 5G Protection Pendant',
    text: 'Micro iTorus 5G Protection Pendant',
  },
  {
    src: '-Ki1idcOiik',
    heading: 'The Mini iTorus: A Therapeutic Tool Thats Art',
    text: 'The Mini iTorus: A Therapeutic Tool Thats Art',
  },
];

export const Info = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] px-[20px] md:px-[160px]">
      {data.map((el, idx) => {
        return (
          <div key={idx}>
            <Card src={el.src} heading={el.heading} text={el.text} />
          </div>
        );
      })}
    </section>
  );
};

const Card = ({src, heading, text}) => {
  return (
    <div className="bg-[rgba(244,244,244,0.1)] p-[30px]  rounded-[30px]">
      <div className="flex flex-col gap-[20px] z-20">
        <Zoom>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${src}`}
          />
        </Zoom>
        <Zoom>
          <h1 className="text-[24px] font-[500] text-[#EDB311]">{heading}</h1>
        </Zoom>
        <Zoom>
          <p className="text-[12px] font-[500] text-white">{text}</p>
        </Zoom>
      </div>
    </div>
  );
};
