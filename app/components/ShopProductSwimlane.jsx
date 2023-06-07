import {ShopProductCard, Section} from '~/components';

const mockProducts = new Array(12).fill('');

export function ShopProductSwimlane({
  title = '',
  products = mockProducts,
  //   count = 12,
  ...props
}) {
  return (
    <Section heading={title} padding="y" {...props}>
      <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
        {products.map((product) => (
          <ShopProductCard
            product={product}
            key={product.id}
            className="snap-start w-80"
          />
        ))}
      </div>
    </Section>
  );
}
