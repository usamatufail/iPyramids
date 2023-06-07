import {defer} from '@shopify/remix-oxygen';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {seoPayload} from '~/lib/seo.server';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {routeHeaders, CACHE_SHORT} from '~/data/cache';
import {Zoom} from '~/components';
import {Suspense} from 'react';
// const settleImages = ['/images/settle-men.png', '/images/settle-women.png'];

export const headers = routeHeaders;

export async function loader({params, context}) {
  const {language, country} = context.storefront.i18n;

  if (
    params.lang &&
    params.lang.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the lang URL param is defined, yet we still are on `EN-US`
    // the the lang param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  const headerImages = ['/images/header-men.png', '/images/header-women.png'];

  const seo = seoPayload.home();

  return defer(
    {
      // These different queries are separated to illustrate how 3rd party content
      // fetching can be optimized for both above and below the fold.
      featuredProducts: context.storefront.query(
        HOMEPAGE_FEATURED_PRODUCTS_QUERY,
        {
          variables: {
            /**
             * Country and language properties are automatically injected
             * into all queries. Passing them is unnecessary unless you
             * want to override them from the following default:
             */
            country,
            language,
          },
        },
      ),
      analytics: {
        pageType: AnalyticsPageType.home,
      },
      seo,
      bannerImage:
        headerImages[Math.floor(Math.random() * headerImages.length)],
    },
    {
      headers: {
        'Cache-Control': CACHE_SHORT,
      },
    },
  );
}

export default function Refund() {
  // TODO: skeletons vs placeholders
  // const skeletons = getHeroPlaceholder([{}, {}, {}]);

  return (
    <section className="">
      <Suspense>
        <Header />
        <Policy />
      </Suspense>
    </section>
  );
}

export const Header = () => {
  return (
    <section className="min-h-[40vh] relative flex flex-col justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/0729/2082/6157/files/pexels-dids-3761224.jpg')] bg-cover bg-bottom bg-no-repeat">
      <div className="absolute w-full h-full z-10 bg-black opacity-40" />
      <Zoom>
        <h1 className="md:text-[75px] text-[45px] leading-[1.14] relative z-20 md:leading-[unset] font-[400] font-odor text-white uppercase text-center ">
          Refund Policy
        </h1>
      </Zoom>
    </section>
  );
};

const Policy = () => {
  return (
    <div className="flex flex-col gap-[20px] justify-center items-center bg-white px-[20px] md:px-[50px] lg:px-[100px]">
      <Zoom>
        <p className="text-[18px] font-[400] text-black text-center whitespace-pre-wrap mt-[50px] pb-[50px] font-raleway">{`Returns

Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.


To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.


To complete your return, we require a receipt or proof of purchase.


Please do not send your purchase back to the manufacturer.


There are certain situations where only partial refunds are granted (if applicable)


Any item not in its original condition, is damaged or missing parts for reasons not due to our error

Any item that is returned more than 30 days after delivery


Refunds (if applicable)

Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.

If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.`}</p>
      </Zoom>
      <Zoom>
        <p className="text-[18px] font-[400] text-black text-center whitespace-pre-wrap mt-[50px] pb-[50px]">
          {`Late or missing refunds (if applicable)

If you haven’t received a refund yet, first check your bank account again.

Then contact your credit card company, it may take some time before your refund is officially posted.

Next contact your bank. There is often some processing time before a refund is posted.

If you’ve done all of this and you still have not received your refund yet, please contact us at maustin@majestic-designs.com.



Sale items (if applicable)

Only regular priced items may be refunded, unfortunately sale items cannot be refunded.



Exchanges (if applicable)

We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at maustin@majestic-designs.com and send your item to:

iPyramids

108 W 13th St, Wilmington, DE 19801.
          `}
        </p>
      </Zoom>
    </div>
  );
};

// @see: https://shopify.dev/api/storefront/latest/queries/products
export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 4) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
