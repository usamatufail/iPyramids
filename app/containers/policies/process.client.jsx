import {Zoom} from '~/components';

const data = [
  {
    title: 'Log Files',
    text: `iPyramids follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
  },
  {
    title: 'Cookies and Web Beacons',
    text: `Like any other website, iPyramids uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.`,
  },
  {
    title: 'Advertising Partners Privacy Policies',
    text: `You may consult this list to find the Privacy Policy for each of the advertising partners of iPyramids.

    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on iPyramids, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
    
    Note that iPyramids has no access to or control over these cookies that are used by third-party advertisers.`,
  },
  {
    title: 'Third Party Privacy Policies',
    text: `iPyramids's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.`,
  },
  {
    title: 'CCPA Privacy Rights (Do Not Sell My Personal Information)',
    text: `Under the CCPA, among other rights, California consumers have the right to:

    Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
    
    Request that a business delete any personal data about the consumer that a business has collected.
    
    Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
    
    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
  },
  {
    title: 'GDPR Data Protection Rights',
    text: `We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

    The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
    
    The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
    
    The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
    
    The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
    
    The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
    
    The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
    
    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
  },
  {
    title: `Children's Information`,
    text: `Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

    iPyramids does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`,
  },
  {
    title: `Changes to This Privacy Policy`,
    text: `We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.`,
  },
  {
    title: `Contact Us`,
    text: `If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.`,
  },
];

export const Process = () => {
  return (
    <section className="min-h-[400px] flex flex-col gap-[20px] justify-center items-center bg-white px-[20px] md:px-[80px] lg:px-[120px] mt-[20px] pb-[50px]">
      {data.map((data) => {
        return (
          <div key={data.title} className="flex flex-col gap-[20px]">
            <Zoom>
              <h1 className="text-[58px] font-[400] font-style text-center uppercase text-black font-raleway">
                {data.title}
              </h1>
            </Zoom>
            <Zoom>
              <p className="text-[18px] font-[400] text-black text-center whitespace-pre-wrap font-raleway">
                {data.text}
              </p>
            </Zoom>
          </div>
        );
      })}
    </section>
  );
};
