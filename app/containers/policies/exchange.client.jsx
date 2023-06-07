import {Zoom} from '~/components';

export const Exchange = () => {
  return (
    <section className="min-h-[522px]  relative flex flex-col justify-center  bg-cover bg-center bg-no-repeat bg-[url('https://cdn.shopify.com/s/files/1/0729/2082/6157/files/exchange.jpg')] py-[30px]">
      <div className="absolute w-full h-full z-10 bg-black opacity-40" />
      <Zoom>
        <div className="relative z-20 px-[20px] lg:px-[150px] font-raleway">
          <h1 className="text-[58px] font-[400] font-style text-center uppercase text-white">
            How we use your information
          </h1>
          <p className="text-[18px] font-[400] text-white font-raleway">
            We use the information we collect in various ways, including to:
          </p>
          <div className="text-[18px] font-[400] text-white md:max-w-[780px] font-raleway">
            <ul className="flex flex-col gap-[20px] list-disc">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>

              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes.
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </div>
        </div>
      </Zoom>
    </section>
  );
};
