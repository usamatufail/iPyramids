import {Collapse} from 'antd';
const {Panel} = Collapse;
const data = [
  {
    id: '1',
    icon: '/svg/faq/setting.svg',
    heading: 'Does iPyramids do custom orders?',
    text: 'Yes we do, we have a 50 piece minimum on custom orders, please email Sheepsclothing20@gmail.com for info',
  },
  {
    id: '2',
    icon: '/svg/faq/flag.svg',
    heading: 'Does iPyramids do custom orders?',
    text: 'Yes we do, we have a 50 piece minimum on custom orders, please email Sheepsclothing20@gmail.com for info',
  },
  {
    id: '3',
    icon: '/svg/faq/card.svg',
    heading: 'Does iPyramids do custom orders?',
    text: 'Yes we do, we have a 50 piece minimum on custom orders, please email Sheepsclothing20@gmail.com for info',
  },
  {
    id: '4',
    icon: '/svg/faq/fire.svg',
    heading: 'Does iPyramids do custom orders?',
    text: 'Yes we do, we have a 50 piece minimum on custom orders, please email Sheepsclothing20@gmail.com for info',
  },
  {
    id: '5',
    icon: '/svg/faq/shop.svg',
    heading: 'Does iPyramids do custom orders?',
    text: 'Yes we do, we have a 50 piece minimum on custom orders, please email Sheepsclothing20@gmail.com for info',
  },
  {
    id: '6',
    icon: '/svg/faq/cap.svg',
    heading: 'Does iPyramids do custom orders?',
    text: 'Yes we do, we have a 50 piece minimum on custom orders, please email Sheepsclothing20@gmail.com for info',
  },
];

export const FAQContainer = () => {
  return (
    <div>
      <div className="mt-[60px] ">
        <Questions />
      </div>
    </div>
  );
};

const Questions = () => {
  const onChange = ({key}) => {
    console.log(key);
  };

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        {data.map((data) => {
          return (
            <div className="bg-white p-[5px] rounded-[10px]" key={data.id}>
              <Collapse defaultActiveKey={[data.id]} onChange={onChange}>
                <Panel
                  showArrow={false}
                  header={
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-[20px]">
                        <img src={data.icon} alt={data.heading} />
                        <h1 className="mb-[0px] text-[18px] font-[700] text-black">
                          {data.heading}
                        </h1>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.17599 9.13207L11.833 5.47507C11.8995 5.40198 11.9801 5.34299 12.0699 5.30159C12.1596 5.26018 12.2568 5.23721 12.3556 5.23403C12.4544 5.23084 12.5528 5.24751 12.6451 5.28305C12.7373 5.31859 12.8215 5.37227 12.8926 5.44092C12.9637 5.50957 13.0203 5.59179 13.0591 5.68272C13.0979 5.77364 13.1181 5.87143 13.1184 5.97028C13.1187 6.06913 13.0992 6.16704 13.061 6.25821C13.0228 6.34938 12.9667 6.43197 12.896 6.50107L12.878 6.51907L8.69899 10.6991C8.5604 10.8376 8.37246 10.9155 8.17649 10.9155C7.98052 10.9155 7.79257 10.8376 7.65399 10.6991L3.47499 6.52007C3.40519 6.45264 3.34936 6.37212 3.31068 6.2831C3.272 6.19409 3.25123 6.09834 3.24956 6.0013C3.24789 5.90426 3.26535 5.80784 3.30094 5.71755C3.33653 5.62726 3.38955 5.54487 3.45699 5.47507C3.52442 5.40527 3.60494 5.34944 3.69395 5.31076C3.78296 5.27208 3.87872 5.25132 3.97576 5.24964C4.0728 5.24797 4.16921 5.26543 4.2595 5.30102C4.34979 5.33661 4.43219 5.38964 4.50199 5.45707L4.51999 5.47507L8.17599 9.13207Z"
                          fill="#CE2029"
                          stroke="#CE2029"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  }
                  key=""
                >
                  <p className="text-[rgba(60,60,67,0.85)] text-[18px] font-[400]">
                    {data.text}
                  </p>
                </Panel>
              </Collapse>
            </div>
          );
        })}
      </div>
    </>
  );
};
