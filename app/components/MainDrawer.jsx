import {Fragment, useState} from 'react';
import {motion} from 'framer-motion';
import {Dialog, Transition} from '@headlessui/react';

import {Heading, IconClose, Link, Text} from '~/components';

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
export function MainDrawer({heading, open, onClose, openFrom = 'right', menu}) {
  const [openSub, setOpenSub] = useState({items: []});
  const [selectedId, setSelectedId] = useState(null);

  const closeBoth = () => {
    // setSubItem({items: []});
    setSelectedId(null);
    onClose();
  };

  const offScreen = {
    right: 'translate-x-full',
    left: '-translate-x-full',
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={closeBoth}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`fixed inset-y-0 flex max-w-full ${
                openFrom === 'right' ? 'right-0' : ''
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom={offScreen[openFrom]}
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo={offScreen[openFrom]}
              >
                <Dialog.Panel className="flex overflow-hidden">
                  <div className="w-screen max-w-[400px] text-left align-middle transition-all transform shadow-xl h-screen-dynamic bg-contrast z-40 relative">
                    <header
                      className={`sticky top-0 flex items-center px-6 h-nav sm:px-8 md:px-12 ${
                        heading ? 'justify-between' : 'justify-end'
                      }`}
                    >
                      {heading !== null && (
                        <Dialog.Title>
                          <Heading as="span" size="lead" id="cart-contents">
                            {heading}
                          </Heading>
                        </Dialog.Title>
                      )}
                      <button
                        type="button"
                        className="p-4 -m-4 transition text-primary hover:text-primary/50"
                        onClick={closeBoth}
                        data-test="close-cart"
                      >
                        <IconClose aria-label="Close panel" />
                      </button>
                    </header>
                    <div className="grid">
                      <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
                        {/* Top level menu items */}
                        {(menu?.items || []).map((item) => {
                          return (
                            <span key={item.id} className="block">
                              {item?.items?.length ? (
                                <motion.button
                                  layoutId={item?.id}
                                  className={
                                    item?.id === selectedId
                                      ? 'border-b -mb-px pb-1'
                                      : 'pb-1'
                                  }
                                  onClick={() => {
                                    // setSelectedId(null);
                                    // setTimeout(() => {
                                    setSelectedId(item?.id);
                                    setOpenSub(item);
                                    // }, 50);
                                  }}
                                >
                                  <Text as="span" size="copy">
                                    {item.title}
                                  </Text>
                                </motion.button>
                              ) : (
                                <Link
                                  to={item.to}
                                  target={item.target}
                                  onClick={closeBoth}
                                  className={({isActive}) =>
                                    isActive && !selectedId
                                      ? 'pb-1 border-b -mb-px'
                                      : 'pb-1'
                                  }
                                >
                                  <Text as="span" size="copy">
                                    {item.title}
                                  </Text>
                                </Link>
                              )}
                            </span>
                          );
                        })}
                      </nav>
                    </div>
                  </div>
                  {/* Sub-Menu */}

                  {selectedId && (
                    <motion.div
                      initial={{x: -600}}
                      animate={{x: 0}}
                      transition={{bounce: false}}
                    >
                      <div className="w-screen max-w-[400px] text-left align-middle transition-all transform shadow-xl h-screen-dynamic bg-contrast">
                        <header
                          className={`sticky top-0 flex items-center px-6 h-nav sm:px-8 md:px-12 ${
                            openSub?.title ? 'justify-between' : 'justify-end'
                          }`}
                        >
                          {openSub?.title !== null && (
                            <Dialog.Title>
                              <Heading as="span" size="lead" id="cart-contents">
                                {openSub?.title}
                              </Heading>
                            </Dialog.Title>
                          )}
                        </header>
                        <div className="grid">
                          <div className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
                            {(openSub?.items || []).map((item) => (
                              <motion.span
                                key={item.id}
                                className="block"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.3}}
                              >
                                <Link
                                  to={item.to}
                                  target={item.target}
                                  onClick={closeBoth}
                                  className={({isActive}) =>
                                    isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
                                  }
                                >
                                  <Text as="span" size="copy">
                                    {item.title}
                                  </Text>
                                </Link>
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* {selectedId !== null ? (
                    
                  ) : (
                    <></>
                  )} */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating arialabelledby with the title*/
MainDrawer.Title = Dialog.Title;
