"use client";
import { Avatar, Dropdown } from "keep-react";
import { CaretRight, SignOut, SquaresFour, UserGear } from "phosphor-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import useAuth from "../../hooks/useAuth";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Membership", to: "/membership" },
];

const Header = () => {
  const { logOut, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between max-w-screen-xl mx-auto py-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link className="-m-1.5 p-1.5">
              <span className="">OpineSphere</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-6">
            <div>
              <i className="fa-regular fa-bell"></i>
            </div>
            {user ? (
              <>
                <Avatar
                  shape="circle"
                  size="md"
                  status="online"
                  statusPosition="bottom-left"
                  img={user?.photoURL}
                />
                <Dropdown
                  label={user?.displayName}
                  size="sm"
                  dismissOnClick={true}
                >
                  <Dropdown.Item icon={<UserGear size={20} color="#5E718D" />}>
                    {user?.displayName}
                  </Dropdown.Item>
                  <Link to="/dashboard">
                    <Dropdown.Item
                      icon={<SquaresFour size={20} color="#5E718D" />}
                    >
                      Dashboard
                      <span className="ml-auto">
                        <CaretRight size={20} color="#5E718D" />
                      </span>
                    </Dropdown.Item>
                  </Link>

                  <Dropdown.Item
                    onClick={handleLogout}
                    icon={<SignOut size={20} color="#5E718D" />}
                  >
                    Sign out
                    <span className="ml-auto">
                      <CaretRight size={20} color="#5E718D" />
                    </span>
                  </Dropdown.Item>
                </Dropdown>
              </>
            ) : (
              <>
                <Link
                  to="/joinUs"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Join Us <span aria-hidden="true">&rarr;</span>
                </Link>{" "}
              </>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link className="-m-1.5 p-1.5">
                <span className="sr-only">OpineSphere</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Banner></Banner>
    </div>
  );
};
export default Header;
