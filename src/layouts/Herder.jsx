import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Ecosystem", href: "https://dmaster-1.gitbook.io/bisonlabs/" },
  { name: "Bridge", href: "/bridge" },
  { name: "Developers", href: "https://dmaster-1.gitbook.io/bisonlabs/" },
  { name: "About", href: "https://linktr.ee/bisonlabs" },
  // { name: "LABB Token Claim(COMING SOON)", href: "/claim" },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAccept = () => {
    // Add logic for when the user accepts
    setModalOpen(false); // Close the modal
  };

  const handleDecline = () => {
    // Add logic for when the user declines
    setModalOpen(false); // Close the modal
  };

  const handleClose = () => {
    setModalOpen(false); // Close the modal
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set useNavigate for the Header Items

  const navigate = useNavigate();
  const handleClickBridge = () => {
    navigate("/bridge");
  }
  const handleClickClaim = () => {
    navigate("/claim");
  }

  return (
    <div className="bg-white">
      <div className="py-2 mx-auto bg-amber-500  w-full h-auto ">
        <span className="max-w-screen-md flex flex-wrap grid gap-3 lg:grid-cols-3 sm:grid-cols-1 items-center justify-around text-center mx-auto">
          <span className="text-xl font-bold">ANNOUNCEMENT</span>
          <span>LABB Claim COMING SOON!</span>
          <span>
            <button className="bg-black font-sans text-amber-500 rounded-full py-2 w-48">
              COMING SOON
            </button>
          </span>
        </span>
      </div>

      <header className="px-4 lg:px-12 py-4 bg-black w-full dark:border-amber-500">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/logo.svg" className="h-10" alt="Logo" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-amber-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-sans leading-6 text-white hover:text-amber-500"
                target={(item.name !== "Bridge" && item.name !=="LABB Token Claim(COMING SOON)") ? "_blank" : "_self"}
              >
                <div className="font-medium">{item.name}</div>
              </a>
            ))}
          </div>

          {/* <div className="hidden lg:flex lg:justify-end ml-10">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-amber-500 font-sans text-black rounded-full py-1 w-28 font-bold"
              type="button"
            >
              Connect
            </button>
          </div> */}
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-amber-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src="/logo.svg" className="h-10" alt="Logo" />
              </a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-amber-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="bg-amber-500 font-sans text-black rounded-md py-4 w-48 text-lg font-bold"
                    type="button"
                  >
                    Connect
                  </button>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {modalOpen && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white "
        >
          <div className="relative p-4 w-full max-w-2xl border border-white rounded-3xl bg-black">
            <div className="flex items-center justify-between p-4 md:p-5">
              <button
                type="button"
                className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-12 h-8 ms-auto inline-flex justify-center items-center  "
                onClick={handleClose}
              >
                Close
              </button>
            </div>

            <div className="text-white font-sans text-center">
              <p className="text-3xl pb-16">Connect your Xverse Wallet</p>
              <div className="flex justify-center">
                <a href="/">
                  <img
                    src="/svg/connection-icon.svg"
                    alt="Connect-Logo"
                    className="h-24 border border-white px-4 py-8 rounded-3xl"
                  />
                </a>
              </div>
              <p className="text-sm py-10">
                Click to connect of create Xverse wallet
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
