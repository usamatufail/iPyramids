import React, {useState} from 'react';
import {InlineWidget} from 'react-calendly';

export const Calender = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="px-[20px]">
      <div className="px-[20px] lg:px-[100px] pt-[40px]">
        <div className="bg-[#EDB311] rounded-[16px] flex justify-center items-center gap-[80px] py-[24px]">
          <button
            className={`px-[20px] md:px-[50px]  ${
              !visible
                ? 'font-[700] border-b-solid border-b-[2px] border-b-[#fff] py-[10px]'
                : ''
            }`}
            onClick={() => {
              setVisible(false);
            }}
          >
            7 Days
          </button>
          <button
            className={`px-[20px] md:px-[50px] ${
              visible
                ? 'font-[700] border-b-solid border-b-[2px] border-b-[#fff] py-[10px]'
                : ''
            }`}
            onClick={() => {
              setVisible(true);
            }}
          >
            30 Days
          </button>
        </div>
      </div>
      {visible ? (
        <InlineWidget
          url="https://calendly.com/ipyramids/30min"
          styles={{
            //   backgroundColor: 'rgba(36, 36, 36, 0.6)',
            height: '800px',
            //   padding : '20px'
          }}
          pageSettings={{
            padding: '12px',
          }}
        />
      ) : (
        <InlineWidget
          url="https://calendly.com/ipyramids/itoris-1"
          styles={{
            //   backgroundColor: 'rgba(36, 36, 36, 0.6)',
            height: '800px',
            //   padding : '20px'
          }}
          pageSettings={{
            padding: '12px',
          }}
        />
      )}
    </div>
  );
};
