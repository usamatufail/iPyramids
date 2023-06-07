import {defer} from '@shopify/remix-oxygen';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {seoPayload} from '~/lib/seo.server';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {routeHeaders, CACHE_SHORT} from '~/data/cache';
import {Suspense} from 'react';
import {Zoom} from '~/components';
import {ContactForm} from '../../components/ContactForm';
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

export default function Contact() {
  // TODO: skeletons vs placeholders
  // const skeletons = getHeroPlaceholder([{}, {}, {}]);

  return (
    <Suspense>
      <Header />
      <div className="md:min-h-[430px] mt-[30px] mb-[30px] flex justify-center items-center flex-col gap-[50px] pb-[50px] px-[20px]">
        <Zoom>
          <div className="flex justify-center items-center max-w-[1366px]">
            <div className="shadow-lg">
              <ContactForm />
            </div>
          </div>
        </Zoom>
      </div>
    </Suspense>
  );
}

export const Header = () => {
  return (
    <section className="min-h-[450px] relative flex flex-col justify-center items-center bg-[url('/contact-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute w-full h-full z-10 bg-black opacity-40" />
      <Zoom>
        <h1 className="md:text-[75px] text-[45px] leading-[1.14] relative z-20 md:leading-[unset] font-[400] fancy-text text-white uppercase text-center font-style">
          Contact us
        </h1>
      </Zoom>
    </section>
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
