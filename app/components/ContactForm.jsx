import {CustomInput} from './CustomInput';
import {TextArea} from './TextArea';

export const ContactForm = () => {
  return (
    <div
      className="w-full min-h-[400px] relative mt-[4px] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(/cd/contact.png)`,
      }}
    >
      {/* Form Container */}
      <div className="text-center relative pt-[45px]">
        <div>
          <h1 className="text-[45px] font-[900] uppercase text-Black">
            Get in Touch
          </h1>
        </div>
        {/* Form */}
        <form className="grid gap-[18px] max-w-[700px] mx-auto mt-[35px] pb-[50px]">
          <CustomInput
            placeholder="Name"
            icon="/svg/contact/name.svg"
            className="col-span-2 md:col-span-1 w-full"
          />
          <CustomInput
            placeholder="Email"
            icon="/svg/contact/email.svg"
            className="col-span-2 md:col-span-1"
          />
          <CustomInput
            placeholder="Phone"
            icon="/svg/contact/phone.svg"
            className="col-span-2"
          />
          <TextArea
            placeholder="Write a text"
            icon="/svg/contact/message.svg"
            className="col-span-2"
          />

          <button
            className={`h-[54px] flex items-center justify-center font-[900] uppercase text-white
          text-[20px] bg-[#2d2b31] focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[#2d2b32] transition-all rounded-[8px] mt-[20px] col-span-2`}
          >
            SEND
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] max-w-[700px] mx-auto md:mt-[35px] px-[20px] pb-[50px] overflow-hidden"></div>
      </div>
    </div>
  );
};
