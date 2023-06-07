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

export default function Shipping() {
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
    <section className="min-h-[40vh] relative flex flex-col justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/0729/2082/6157/files/shiping.jpg')] bg-cover bg-bottom bg-no-repeat">
      <div className="absolute w-full h-full z-10 bg-black opacity-40" />
      <Zoom>
        <h1 className="md:text-[75px] text-[45px] leading-[1.14] relative z-20 md:leading-[unset] font-[400] fancy-text text-white uppercase text-center font-style">
          Shipping Policy
        </h1>
      </Zoom>
    </section>
  );
};

const Policy = () => {
  return (
    <div className="min-h-[600px] flex flex-col gap-[20px] justify-center items-center bg-white px-[20px] md:px-[50px] lg:px-[100px]">
      <Zoom>
        <p className="text-[18px] font-[400] text-black text-center whitespace-pre-wrap mt-[50px] pt-[50] pb-[50px]">
          We offer free shipping to any location in the United States!
          <br /> <br />
          Shipping costs for locations outside of the United States will be
          assessed based on location. <br />
          To understand the shipping fees before you purchase an item for an
          international location, <br />
          please feel free to contact us at &nbsp;
          <strong>maustin@majestic-designs.com</strong> and we can give you an
          estimate.
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
