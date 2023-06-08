import React, {useState} from 'react';
import {InlineWidget} from 'react-calendly';

export const Calender = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="px-[12px] lg:px-[100px]">
      <div className="px-[10px] py-[20px] md:p-[40px] bg-[rgba(36,36,36,0.6)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[16px] flex flex-col gap-[20px]">
        <div className="bg-[#EDB311] rounded-[16px] flex justify-center items-center gap-[80px] py-[0px] pb-[12px] md:pb-0">
          <button
            className={`px-[20px] md:px-[50px] py-[20px]  ${
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
            className={`px-[20px] md:px-[50px] py-[20px] ${
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

        {visible ? (
          <InlineWidget
            url="https://calendly.com/ipyramids/therapy-session-30-days"
            styles={{
              //   backgroundColor: 'rgba(36, 36, 36, 0.6)',
              height: '880px',
              //   padding : '20px'
            }}
            pageSettings={{
              padding: '12px',
              backgroundColor: '#000',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '#EDB311',
              textColor: '#d5d5d5',
            }}
          />
        ) : (
          <InlineWidget
            url="https://calendly.com/ipyramids/itoris-1"
            styles={{
              //   backgroundColor: 'rgba(36, 36, 36, 0.6)',
              height: '880px',
              //   padding : '20px'
            }}
            pageSettings={{
              padding: '12px',
              backgroundColor: '#000',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '#EDB311',
              textColor: '#d5d5d5',
            }}
          />
        )}
      </div>
    </div>
  );
};
