import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p-12 lg:px-16 py-12 md:px-8 sm:px-6 xs:px-6 bg-black">
        <div>
          <a href="/">
            <img src="/logo.svg" className="h-10" alt="Logo" />
          </a>
          <p className="text-xs pt-4">In Bitcoin We Trust.</p>
        </div>

        <div className="grid justify-center sm:grid-cols-12 gap-8 py-8 md:py-8 text-white">
          {/* 1st block */}
          <div className="justify-start xs:col-span-12 sm:col-span-12 lg:col-span-4">
            <p className="text-xl font-bold">Subscribe to our</p>
            <p className="text-xl font-bold">Newsletter</p>
            <form action="#">
              <label className="block">
                <input
                  type="email"
                  name="email"
                  className="xl:w-6/12 lg:w-full md:w-6/12 sm:w-6/12 xs:w-6/12 peer ... text-lg p-4 mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="mail@bisonlabs.com"
                />
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
                <button className="bg-white hover:bg-amber-500 text-black text-sm font-bold p-3 rounded-md ...">
                  Subscribe
                </button>
              </label>
            </form>
          </div>

          {/* 2nd block */}
          <div className="xs:col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 text-white">
            <ul className="text-sm">
              <p className="text-lg font-bold mb-6">Developers</p>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Developer portal
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Docs
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Github
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="xs:col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <ul className="text-sm">
              <p className="text-lg font-bold mb-6">Resources</p>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Technology
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Glossary
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="xs:col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <ul className="text-sm">
              <p className="text-lg font-bold mb-6">Misc</p>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Brand
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Press
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="hover:text-amber-500">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="flex xs:col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 justify-center sm:justify-start md:justify-end">
            <div>
              <p className="text-2xl font-sans font-bold pb-6">Follow us</p>
              <a href="https://dmaster-1.gitbook.io/bisonlabs/">
                <button className="bg-white hover:bg-amber-500 text-black text-md font-bold px-7 py-4 rounded-md ...">
                  Community
                </button>
              </a>
              <div className="flex pt-6">
                <a href="https://discord.com/Wr26ZV2fak">
                  <img
                    src="/svg/discord_icon.svg"
                    alt="discord"
                    className="pr-4"
                  />
                </a>
                <a href="https://linktr.ee/bisonlabs">
                  <img
                    src="/svg/linket_icon.svg"
                    alt="linket"
                    className="pr-4"
                  />
                </a>
                <a href="https://twitter.com/bison_labs">
                  <img src="/svg/twitter_icon.svg" alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-white py-4 md:py-0 text-center xs:text-center sm:text-center md:text-right">
          <p>© 2023 Bison Labs</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
