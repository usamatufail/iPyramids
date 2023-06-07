import {useState, useEffect} from 'react';
import {Modal, message} from 'antd';
import {Triangle} from 'react-loader-spinner';
import {subscribe} from '~/lib';

export const Discount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyDone = localStorage.getItem('discount');
    if (alreadyDone !== null) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        footer={[]}
        style={{padding: 0}}
        bodyStyle={{marginTop: 10}}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        centered
      >
        {!show ? <EmailBox setShow={setShow} /> : <Congratulations />}
      </Modal>
    </>
  );
};

const EmailBox = ({setShow}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center md:text-left">
      <h2 className="text-[20px] font-[700]">Limited Time Discount Offer</h2>
      <p className="mt-[10px] text-center md:mt-[20px] flex text-[16px] justify-center gap-[8px] text-black">
        Sign up to our newsletter and get a 10% off coupon code on all products
        right now.
      </p>
      {/* Input */}
      <div className="flex items-center justify-center h-[40px] mt-[10px]">
        {/* Email Icon */}
        <div className="relative w-[300px]">
          <img
            src="/svg/email-small.svg"
            className="left-[10px] absolute top-[50%] translate-y-[-50%]"
            alt="asdas"
          />
          <input
            className="h-[40px] border border-black border-solid rounded-[7px] bg-transparent w-full pl-[40px] placeholder:text-whtie"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button
        disabled={loading}
        onClick={async () => {
          await subscribe({
            setLoading,
            email,
            setEmail,
            message,
            tags: ['discount-box, rdf-10'],
          });
          localStorage.setItem('discount', 'KODIAK10');
          setShow(true);
        }}
        className="mt-[10px] h-[40px] flex items-center justify-center gap-[2px] min-w-[150px] border border-black border-solid bg-black text-white text-[12px] tracking-[0.16em] font-[700] px-[16px] rounded-[7px] relative"
      >
        {loading ? (
          <Triangle
            height="24"
            width="24"
            color="#fff"
            ariaLabel="triangle-loading"
            visible
          />
        ) : (
          <></>
        )}
        <span>SUBMIT</span>
      </button>
    </div>
  );
};

const Congratulations = () => {
  return (
    <div className="flex flex-col justify-center items-center md:text-left">
      <h2 className="text-[20px] font-[700]">🎉 Congratulations!</h2>
      <p className="mt-[10px] md:mt-[20px] flex text-center text-[16px] justify-center gap-[8px] text-black">
        You can use following coupon code to get 10% off when you checkout.
        Please copy the code before closing this box.
      </p>
      <h2 className="text-[18px] font-[900] mt-[20px]">REDEFINE10</h2>
    </div>
  );
};
