import {Zoom} from '~/components';

export const Update = () => {
  return (
    <section className="min-h-[400px] flex flex-col gap-[20px] justify-center items-center bg-white px-[20px] md:px-[50px] lg:px-[100px]">
      <Zoom>
        <div className="flex flex-col gap-[20px] font-raleway">
          <h1 className="text-[58px] font-[400] font-style text-center uppercase text-black mt-[12px]">
            Privacy Policy for iPyramids
          </h1>
          <p className="text-[18px] font-[400] text-black text-center">
            At iPyramids, accessible from c56398-2.myshopify.com, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by iPyramids and how we use it.
            <br /> If you have additional questions or require more information
            about our Privacy Policy, do not hesitate to contact us.
            <br />
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in iPyramids. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </p>
        </div>
      </Zoom>
      <Zoom>
        <div className="flex flex-col gap-[20px] font-raleway">
          <h1 className="text-[58px] font-[400] font-style text-center uppercase text-black mt-[12px] mb-0">
            Consent
          </h1>
          <p className="text-[18px] font-[400] text-black text-center">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
        </div>
      </Zoom>
      <Zoom>
        <div className="flex flex-col gap-[20px] font-raleway">
          <h1 className="text-[58px] font-[400] font-style text-center uppercase text-black mt-[12px] mb-0">
            Information we collect
          </h1>
          <p className="text-[18px] font-[400] text-black text-center pb-[12px]">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
            <br />
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
            <br />
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
        </div>
      </Zoom>
    </section>
  );
};
