import {useFetcher, useMatches} from '@remix-run/react';
import {CartAction} from '~/lib/type';

export function AddToCartPB({
  children,
  lines,
  className = '',
  width = 'full',
  disabled,
  analytics,
  buttonClass,
  ...props
}) {
  const [root] = useMatches();
  const selectedLocale = root?.data?.selectedLocale;
  const fetcher = useFetcher();
  const fetcherIsNotIdle = fetcher.state !== 'idle';

  return (
    <fetcher.Form action="/cart" method="post" className={className}>
      <input type="hidden" name="cartAction" value={CartAction.ADD_TO_CART} />
      <input type="hidden" name="countryCode" value={selectedLocale.country} />
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      <input type="hidden" name="analytics" value={JSON.stringify(analytics)} />

      <button
        type="submit"
        width={width}
        className={buttonClass}
        disabled={disabled ?? fetcherIsNotIdle}
        {...props}
      >
        {children}
      </button>
    </fetcher.Form>
  );
}
