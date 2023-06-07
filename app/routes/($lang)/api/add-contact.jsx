import {redirect} from '@shopify/remix-oxygen';
import {newsLetterSignup} from '../../../lib/ghl.server';
// import {redirect} from '@shopify/remix-oxygen';

const validateEmail = (email) => {
  if (!email) {
    return 'Email is Required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid emaill address';
  }
};

export async function action({request}) {
  const data = Object.fromEntries(await request.formData());

  const formErrors = {
    email: validateEmail(data.email),
  };

  if (Object.values(formErrors).some(Boolean)) return {formErrors};

  await newsLetterSignup({
    email: data.email,
  });
  return redirect(request.url);
}

export default function AddContact() {
  // TODO: skeletons vs placeholders
  // const skeletons = getHeroPlaceholder([{}, {}, {}]);

  return (
    <section className='min-h-screen flex flex-col gap-[20px] pt-[200px] items-center bg-[url("https://res.cloudinary.com/dkptxfotz/image/upload/v1680355155/train_besqjm.png")] bg-cover bg-center bg-no-repeat '>
      <h1 className="uppercase text-[58px] font-[400] text-white font-style text-center px-[20px]">
        Thank you for <span className="text-[#040353]">Joining US</span>
      </h1>
      <p className="text-[18px] font-[400] text-white text-center px-[20px]">
        We will keep you posted about new products, trainings, and all other
        stuff.
      </p>
    </section>
  );
}
