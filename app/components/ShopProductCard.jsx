import clsx from 'clsx';
import {
  flattenConnection,
  // Image,
  Money,
  useMoney,
} from '@shopify/hydrogen';
import {Text, Link, AddToCartButton} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';
import {Zoom} from './Animate';
import {AddToCartPB} from './AddToCartPB';

export function ShopProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
}) {
  let cardLabel;

  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  if (!firstVariant) return null;
  const {image, price, compareAtPrice} = firstVariant;

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };

  return (
    <div className=" relative flex flex-col gap-[0px] md:rounded-[30px] rounded-[10px] bg-[rgba(244,244,244,0.75)]   text-black  max-h-[320px] md:min-h-[unset] md:max-h-[500px] shadow-[10px_10px_90px_rgba(0,_0,_0,_0.2)] md:shadow-[10px_10px_30px_rgba(0,_0,_0,_0.2)]">
      <Zoom className="rounded-[10px] md:rounded-[30px]">
        <Link
          onClick={onClick}
          to={`/products/${product.handle}`}
          prefetch="intent"
        >
          <div
            className={clsx(
              'flex flex-col gap-[0px] rounded-[10px] md:rounded-[30px] ',
              className,
            )}
          >
            <div className="relative md:rounded-t-[30px] rounded-t-[10px] w-full h-[200px] md:h-[350px] bg-[#fff)] ">
              <img
                src={image?.url}
                alt={image.altText || `Picture of ${product.title}`}
                className="w-full h-full md:rounded-t-[30px] rounded-t-[10px] object-contain bg-[#fff] "
                loading={loading}
              />
              <Text
                as="label"
                size="fine"
                className="absolute top-0 right-0 m-4 text-right "
              >
                {cardLabel}
              </Text>
            </div>
            <div className="mt-[5px] min-h-[64px] md:mt-0 relative flex text-left items-center justify-between gap-1 px-[14px] py-[10px] pt-[0px] md:pt-[20px] md:py-[20px]">
              <div className="flex flex-col gap-[12px]">
                <h3 className="md:text-[14px] text-[12px] max-w-[193px] text-left w-full overflow-hidden mt-0 pt-0 md:pt-[unset]">
                  {product.title}
                </h3>
                <div className="flex gap-4">
                  <Text className="flex gap-4 ">
                    <Money withoutTrailingZeros data={price} />
                    {isDiscounted(price, compareAtPrice) && (
                      <CompareAtPrice
                        className={'opacity-50'}
                        data={compareAtPrice}
                      />
                    )}
                  </Text>
                </div>
              </div>
              <AddToCartPB
                className="hidden md:block w-[50px]"
                lines={[
                  {
                    quantity: 1,
                    merchandiseId: firstVariant.id,
                  },
                ]}
                analytics={{
                  products: [productAnalytics],
                  totalValue: parseFloat(productAnalytics.price),
                }}
              >
                <img src="/cart.png" alt="add to cart" className="w-[50px]" />
              </AddToCartPB>
            </div>
          </div>
        </Link>
      </Zoom>
      {/* Add to Cart Button */}

      {quickAdd && (
        <AddToCartButton
          lines={[
            {
              quantity: 1,
              merchandiseId: firstVariant.id,
            },
          ]}
          variant="secondary"
          className="mt-2"
          analytics={{
            products: [productAnalytics],
            totalValue: parseFloat(productAnalytics.price),
          }}
        >
          <Text as="span" className="flex items-center justify-center gap-2">
            Add to Bag
          </Text>
        </AddToCartButton>
      )}
    </div>
  );
}

function CompareAtPrice({data, className}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}
