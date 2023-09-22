import {useIsHomePath} from '~/lib/utils';
import {
  Drawer,
  useDrawer,
  IconMenu,
  Cart,
  CartLoading,
  Link,
  MainDrawer,
  CustomDrawer,
  useCustomDrawer,
} from '~/components';
import {Await, useMatches} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Suspense, useEffect, useMemo, useRef, useState} from 'react';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {Zoom} from './Animate';
import {AiFillCaretRight} from 'react-icons/ai';
import {Fragment} from 'react';
import {useOutsideClick} from '~/hooks/useOutsideClick';

// import {newsLetterSignup} from '~/lib/ghl';1

export function Layout({children, layout}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {/* <Header
          title={layout?.shop.name ?? 'iPyraminds'}
          menu={layout?.headerMenu}
        /> */}
        <main
          role="main"
          id="mainContent"
          className="flex-grow overflow-hidden"
        >
          {children}
        </main>
      </div>
      {/* <Footerr /> */}
    </>
  );
}

function Header({title, menu}) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useCustomDrawer();

  const {
    isOpen: isDMOpen,
    openDrawer: openDM,
    closeDrawer: closeDM,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />

      <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />

      {menu && <DMDrawer isOpen={isDMOpen} onClose={closeDM} menu={menu} />}
      <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openMenu={openDM}
        openCart={openCart}
      />
      <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      />
    </>
  );
}

function CartDrawer({isOpen, onClose}) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({isOpen, onClose, menu}) {
  return (
    <CustomDrawer
      open={isOpen}
      onClose={onClose}
      openFrom="left"
      heading="Menu"
    >
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </CustomDrawer>
  );
}

// Desktop Multi-Level Drawer
export function DMDrawer({isOpen, onClose, menu}) {
  return (
    <>
      <MainDrawer
        open={isOpen}
        onClose={onClose}
        openFrom="left"
        heading="Menu"
        menu={menu}
      />
    </>
  );
}

function MenuMobileNav({menu, onClose}) {
  const [selectedId, setSelectedId] = useState(null);

  // const [ref, inView] = useInVie();

  const [root] = useMatches();
  const isLoggedIn = root.data?.isLoggedIn;
  // const params = useParams();
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => {
        return (
          <span key={item.id} className="hidden">
            {item?.items?.length ? (
              <>
                <button
                  className={`flex items-center`}
                  // Change Show Key On Click
                  onClick={() => {
                    if (selectedId === item?.id) {
                      return setSelectedId(null);
                    } else {
                      return setSelectedId(item?.id);
                    }
                  }}
                >
                  {/* Change Icon When not Showing or Showing */}
                  {item?.title} &nbsp;{' '}
                  <div>
                    <AiFillCaretRight />
                  </div>
                </button>
                {selectedId === item?.id ? (
                  <></>
                ) : (
                  // <div className="flex flex-col pl-[15px] mt-[10px] gap-[8px]">
                  //   {item?.items?.map((subItem) => {
                  //     return (
                  //       <div className={`w-full`} key={subItem?.to}>
                  //         <Link
                  //           to={subItem.to}
                  //           target={subItem.target}
                  //           onClick={onClose}
                  //           className={({isActive}) =>
                  //             isActive && !selectedId
                  //               ? 'pb-1 border-b -mb-px'
                  //               : 'pb-1'
                  //           }
                  //         >
                  //           <p>{subItem.title}</p>
                  //         </Link>
                  //       </div>
                  //     );
                  //   })}
                  // </div>
                  <></>
                )}
              </>
            ) : (
              <></>
              // <Link
              //   to={item.to}
              //   target={item.target}
              //   onClick={onClose}
              //   className={({isActive}) =>
              //     isActive && !selectedId ? 'pb-1 border-b -mb-px' : 'pb-1'
              //   }
              // >
              //   <p>{item.title}</p>
              // </Link>
            )}
          </span>
        );
      })}
      <Link to="/location" onClick={onClose}>
        <span className="text-[16px] text-center font-[400]">Our Location</span>
      </Link>
      <Link to="/information" onClick={onClose}>
        <span className="text-[16px] font-[400]">Information</span>
      </Link>
      <Link to="/collections/earth-tuned" onClick={onClose}>
        <span className="text-[16px] font-[400]">Earth Tuned</span>
      </Link>
      <Link to="/collections/crystal-current" onClick={onClose}>
        <span className="text-[16px] font-[400]">Crystal Current</span>
      </Link>
      <Link to="/collections/darlan-loureiro" onClick={onClose}>
        <span className="text-[16px] font-[400]">Darlan Loureiro</span>
      </Link>
      <Link to="/collections/itorus" onClick={onClose}>
        <span className="text-[16px] font-[400]">iTorus</span>
      </Link>
      <Link to="/collections/ipyramids" onClick={onClose}>
        <span className="text-[16px] font-[400]">iPyramids</span>
      </Link>
      <Link to="/collections/arc" onClick={onClose}>
        <span className="text-[16px] font-[400]">ARC</span>
      </Link>
      <Link to="/collections/wearables" onClick={onClose}>
        <span className="text-[16px] font-[400]">Wearables</span>
      </Link>
      <Link to="/collections/all-products" onClick={onClose}>
        <span className="text-[16px] font-[400]">Store</span>
      </Link>
      <Link to="/journal" onClick={onClose}>
        <span className="text-[16px] font-[400]">Blog</span>
      </Link>
      {/* <Link to="/collections/galactic" onClick={onClose}>
        <span className="text-[16px] font-[400]">Galactic Alliances</span>
      </Link> */}
      <Link to="/calendar" onClick={onClose}>
        <div className="">
          {/* <img src="/svg/calender.svg" alt="Calender" /> */}
          <span className="text-[16px] font-[400] text-black">Calendar</span>
        </div>
      </Link>
      {isLoggedIn ? (
        <Link to="/account" onClick={onClose}>
          <div className="">
            {/* <IconAccount className="w-[25px] h-[25px]" /> */}
            <div className="text-[16px]">My Profile</div>
          </div>
        </Link>
      ) : (
        <Link to="/account/login" onClick={onClose}>
          <div className="">
            {/* <IconLogin className="w-[25px] h-[25px]" /> */}
            <div className="text-[16px]">Account</div>
          </div>
        </Link>
      )}

      {/* <Link to="/contact" onClick={onClose} prefetch="intent">
        Contact Us
      </Link> */}
    </nav>
  );
}

function MobileHeader({isHome, openCart, openMenu}) {
  return (
    <header
      role="banner"
      className={`  bg-[#242424] text-primary flex xl:hidden items-center h-[80px] backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8 py-8 xl:py-0`}
    >
      <div className="flex items-center justify-start xl:w-full gap-4">
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center w-[25px] h-[25px]"
        >
          <IconMenu
            className="w-[25px] h-[25px]"
            fill="#ffffff"
            stroke="#ffffff"
          />
        </button>
      </div>

      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <img
          src="/logo.png"
          alt="logo"
          className="max-w-[200px] h-[50px] rounded-[8px]"
        />
      </Link>

      <div className="flex items-center justify-end xl:w-full gap-4">
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function DesktopHeader({isHome, openCart}) {
  const [open, setOpen] = useState('');

  const handleToggle = (key) => {
    setOpen(key);
  };
  const {y} = useWindowScroll();

  const ref = useRef();
  useOutsideClick(ref, () => {
    setOpen(false);
  });

  return (
    <>
      <header
        role="banner"
        className={`hidden h-[80px] xl:grid grid-cols-3 items-center transition duration-300 justify-center bg-[#242424] text-white px-[100px] z-40 top-0 w-full ${
          y > 50 && 'shadow-lightHeader'
        }`}
      >
        <Zoom>
          <Link
            className="font-style font-[500] text-[60px] text-[#DB1A24]"
            to="/"
            prefetch="intent"
          >
            <img src="/logo.png" alt="logo" className="h-[60px] w-[60px]" />
          </Link>
        </Zoom>
        {/* Search Link */}
        <div className="flex text-[12px] font-[500] text-white items-center justify-center gap-[20px]">
          <Zoom>
            <Link to="/location">
              <span className="text-[12px]">Our Location</span>
            </Link>
          </Zoom>
          <Zoom>
            {/* setCheck(prevCheck => !prevCheck); */}
            <button onClick={() => handleToggle('Store')}>
              <span className="text-[12px]">Store</span>
            </button>
          </Zoom>
          <Zoom>
            <Link to="/information">
              <span className="text-[12px]">Information</span>
            </Link>
          </Zoom>
          <Zoom>
            {/* <Link to="/collections/galactic">
              <span className="text-[12px]">Galactic Alliances</span>
            </Link> */}
            <button onClick={() => handleToggle('Galactic Alliances')}>
              <span className="text-[12px]">Galactic Alliances</span>
            </button>
          </Zoom>
          <Zoom>
            <Link to="/journal">
              <span className="text-[12px]">Blog</span>
            </Link>
          </Zoom>
        </div>

        <div className="flex items-center justify-end gap-[20px]">
          <Zoom>
            <Link to="/search" prefetch="intent" className="">
              <div className="flex items-center gap-[4px] justify-center">
                <img src="/svg/search.svg" alt="search" />
              </div>
            </Link>
          </Zoom>
          <div className="flex items-center gap-8">
            {/* <AccountLink className="relative flex items-center justify-center focus:ring-primary/5" /> */}
            <Zoom>
              <CartCount isHome={isHome} openCart={openCart} />
            </Zoom>
          </div>
          <div>
            <Link to="/calendar">
              <div className="bg-white px-[16px] py-[4px] rounded-[32px] flex items-center justify-center gap-[8px]">
                <img src="/svg/calender.svg" alt="Calender" />
                <span className="text-[12px] font-[500px] text-black">
                  Calendar
                </span>
              </div>
            </Link>
          </div>
          <Zoom>
            <Link to="/account/login" prefetch="intent" className="">
              <div className="flex items-center gap-[4px] justify-center">
                <img src="/svg/account.svg" alt="account" />
              </div>
            </Link>
          </Zoom>
        </div>
        {/* </Zoom> */}
      </header>
      {open === 'Store' ? (
        <div
          ref={ref}
          className="shadow-lg z-[999] bg-white py-[10px] w-[100%] px-[200px] flex justify-center items-center m-auto gap-[50px] absolute top-[80px] transition-all"
        >
          <Link to="/collections/itorus" onClick={handleToggle}>
            <div className="flex gap-[8px] items-center hover:bg-[#EDB311] rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/itoris.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">iTorus</h1>
            </div>
          </Link>
          <Link to="/collections/ipyramids" onClick={handleToggle}>
            <div className="flex gap-[8px] items-center hover:bg-[#EDB311] rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/ipyramid.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">iPyramids</h1>
            </div>
          </Link>
          <Link to="/collections/arc" onClick={handleToggle}>
            <div className="flex gap-[8px] hover:bg-[#EDB311] items-center rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/arc.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">ARC</h1>
            </div>
          </Link>
          <Link to="/collections/wearables" onClick={handleToggle}>
            <div className="flex gap-[8px] hover:bg-[#EDB311] items-center rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/werable.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">Wearbles</h1>
            </div>
          </Link>
          <Link to="/collections/orgonite" onClick={handleToggle}>
            <div className="flex gap-[8px] hover:bg-[#EDB311] items-center rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/orgonite.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">Orgonite</h1>
            </div>
          </Link>
          <Link to="/collections/accessories" onClick={handleToggle}>
            <div className="flex gap-[8px] hover:bg-[#EDB311] items-center rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/access.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">Accessories</h1>
            </div>
          </Link>
        </div>
      ) : null}
      {open === 'Galactic Alliances' ? (
        <div
          ref={ref}
          className="shadow-lg z-[999] bg-white py-[10px] w-[100%] px-[200px] flex justify-center items-center m-auto gap-[50px] absolute top-[80px] transition-all"
        >
          <Link to="/collections/earth-tuned" onClick={handleToggle}>
            <div className="flex gap-[8px] items-center hover:bg-[#EDB311] rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/earth.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">Earth Tuned</h1>
            </div>
          </Link>
          <Link to="/collections/crystal-current" onClick={handleToggle}>
            <div className="flex gap-[8px] items-center hover:bg-[#EDB311] rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/crystal.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">
                Crystal Current
              </h1>
            </div>
          </Link>
          <Link to="/collections/darlan-loureiro" onClick={handleToggle}>
            <div className="flex gap-[8px] hover:bg-[#EDB311] items-center rounded-[30px] justify-center px-[24px] py-[12px] transition-all hover:transition-all">
              <img
                src="/svg/darlan.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <h1 className="text-[12px] font-[500] text-black">
                Darlan Loureiro
              </h1>
            </div>
          </Link>
        </div>
      ) : null}
    </>
  );
}

function CartCount({isHome, openCart}) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({openCart, dark, count}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <div className="flex items-center gap-[4px]">
        <div className="relative">
          <img src="/svg/cart.svg" alt="cart" />
          {/* <div
            className={`${
              dark
                ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
                : 'text-contrast bg-primary'
            } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
          >
            <span>{count || 0}</span>
          </div> */}
        </div>
      </div>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex items-center justify-center focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex items-center justify-center focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

const quickLinks = {
  links: [
    {title: 'Home', url: '/'},
    {title: 'Our Location', url: '/location'},
    {title: 'Store', url: '/collections/all-products'},
    {title: 'Calender', url: '/calendar'},
  ],
};

const connectLinks = {
  links: [
    {
      title: 'Privacy Policy',
      url: '/pages/privacy-policy',
    },
    {
      title: 'Purchase Agreement',
      url: '/pages/purchase-agreement',
    },
    {
      title: 'Shipping and Return Policy',
      url: '/pages/shipping-and-return-policy',
    },
    {title: 'Terms of Services', url: '/pages/terms-of-services'},
    {title: 'Medical Disclaimer', url: '/pages/medical-disclaimer'},
    {
      title: 'California Consumer Privacy Act',
      url: '/pages/ccpa-opt-out',
    },
  ],
};

const Links = ({links}) => {
  return (
    <div className="">
      <h5 className="font-[600] text-[12px] md:font-[500] md:text-[24px] text-center md:text-left">
        {links.title}
      </h5>
      <div className="flex flex-col gap-[12px]">
        {links.links.map((link) => {
          return (
            <Fragment key={link.url}>
              {link?.isOutside ? (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  className="text-[12px] font-[400] text-white text-center md:text-left"
                >
                  {link.title}
                </Link>
              ) : (
                <Link
                  key={link.title}
                  to={link.url}
                  className="text-[12px] font-[400] text-white capitalize text-center md:text-left"
                >
                  {link.title}
                </Link>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export const Footerr = () => {
  return (
    <div className="bg-[#242424] m-auto">
      <div className="pt-[20px] lg:pt-[70px] m-auto pb-[20px] grid grid-cols-1 md:grid-cols-3 gap-[20px] max-w-[700px]">
        <div className="flex justify-center md:hidden">
          <Zoom>
            <Links links={quickLinks} />
          </Zoom>
        </div>
        <div className="flex justify-center md:hidden">
          <Zoom>
            <Links links={connectLinks} />
          </Zoom>
        </div>
        <div className="hidden md:block">
          <Zoom>
            <Links links={quickLinks} />
          </Zoom>
        </div>
        <div className="hidden md:block">
          <Zoom>
            <Links links={connectLinks} />
          </Zoom>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center md:items-start md:justify-start gap-[12px] text-white">
          <Zoom>
            <p className="text-[12px] font-[400] text-white">
              2035 Contractors Rd. #7Sedona, Arizona 86336
            </p>
          </Zoom>
          <Zoom>
            <p className="text-[12px] font-[400] text-white">
              support@iPyramids.net
            </p>
          </Zoom>
          <Zoom>
            <div className="flex gap-[10px] items-center">
              <a href="https://instagram.com/ipyramids?igshid=MzRlODBiNWFlZA==">
                <img src="/svg/insta-mobile.svg" alt="icon" />
              </a>
              <a href="https://www.facebook.com/iPyramids?mibextid=ZbWKwL">
                <img src="/svg/fb-mobile.svg" alt="icon" />
              </a>
              <a href="https://youtube.com/@iPyramids">
                <img src="/svg/youtube.svg" alt="icon" />
              </a>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="md:hidden mb-[20px] flex flex-col justify-center items-center gap-[12px] text-white">
        <Zoom>
          <p className="text-[12px] font-[400] text-white">
            2035 Contractors Rd. #7Sedona, Arizona 86336
          </p>
        </Zoom>
        <Zoom>
          <p className="text-[12px] font-[400] text-white">
            support@iPyramids.net
          </p>
        </Zoom>
        <Zoom>
          <div className="flex gap-[10px] items-center">
            <a href="https://instagram.com/ipyramids?igshid=MzRlODBiNWFlZA==">
              <img src="/svg/insta-mobile.svg" alt="icon" />
            </a>
            <a href="https://www.facebook.com/iPyramids?mibextid=ZbWKwL">
              <img src="/svg/fb-mobile.svg" alt="icon" />
            </a>
            <a href="https://youtube.com/@iPyramids">
              <img src="/svg/youtube.svg" alt="icon" />
            </a>
          </div>
        </Zoom>
      </div>
      <div className="m-auto max-w-[700px]">
        <hr className="" />
        <div className="flex flex-col gap-[20px] md:flex-row md:justify-between mt-[35px] bg-[#242424] pb-[20px]">
          <div className=" md:hidden  flex flex-col gap-[12px] items-center justify-center">
            <Zoom>
              <img
                className=" block px-[20px]"
                src="/mobile-payment.png"
                alt="payments"
              />
            </Zoom>
            <p className="text-[12px] font-[700] text-white ">
              © 2023, Powerd By iPyramids
            </p>
          </div>
          <div className="hidden md:flex flex-col gap-[12px] ">
            <Zoom>
              <img
                src="/payment.png"
                alt="payments"
                className="w-[300px] object-contain"
              />
            </Zoom>
            <p className="text-[12px] font-[700] text-white ">
              © 2023, Powerd By iPyramids
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
