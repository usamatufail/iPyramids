import {defer} from '@shopify/remix-oxygen';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {seoPayload} from '~/lib/seo.server';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {routeHeaders, CACHE_SHORT} from '~/data/cache';
import {Suspense} from 'react';
import {Calender as CustomCalender} from '~/containers';
import {Animate} from '~/components';
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

export default function Calendar() {
  // TODO: skeletons vs placeholders
  // const skeletons = getHeroPlaceholder([{}, {}, {}]);

  return (
    <Suspense>
      <div className="bg-[url('https://cdn.shopify.com/s/files/1/0771/2768/0277/files/info-bg.png')] bg-cover bg-no-repeat py-[50px] md:py-[40px] flex flex-col gap-[10px]">
        <Animate>
          <h1 className="text-[28px] md:text-[48px] font-[700] text-white text-center font-apple">
            Book Now For
          </h1>
        </Animate>
        <Animate>
          <p className="text-[18px] md:text-[32px] font-[400] text-white text-center">
            Everyday Therapy Sessions
          </p>
        </Animate>
        <CustomCalender />
      </div>
    </Suspense>
  );
}

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
