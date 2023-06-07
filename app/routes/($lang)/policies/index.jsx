import {json} from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import {Section} from '~/components';
import {routeHeaders, CACHE_LONG} from '~/data/cache';
import {seoPayload} from '~/lib/seo.server';
import {Exchange, PolicyHeader, Process, Update} from '../../../containers';

export const headers = routeHeaders;

export async function loader({request, context: {storefront}}) {
  const data = await storefront.query(POLICIES_QUERY);

  invariant(data, 'No data returned from Shopify API');
  const policies = Object.values(data.shop || {});

  if (policies.length === 0) {
    throw new Response('Not found', {status: 404});
  }

  const seo = seoPayload.policies({policies, url: request.url});

  return json(
    {
      policies,
      seo,
    },
    {
      headers: {
        'Cache-Control': CACHE_LONG,
      },
    },
  );
}

export default function Policies() {
  return (
    <>
      <Section padding="" className="">
        <PolicyHeader />
        <Update />
        <Exchange />
        <Process />
      </Section>
    </>
  );
}

const POLICIES_QUERY = `#graphql
  fragment Policy on ShopPolicy {
    id
    title
    handle
  }

  query PoliciesQuery {
    shop {
      privacyPolicy {
        ...Policy
      }
      shippingPolicy {
        ...Policy
      }
      termsOfService {
        ...Policy
      }
      refundPolicy {
        ...Policy
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`;
