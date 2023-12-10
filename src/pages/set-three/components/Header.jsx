import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSettingsSubmenu, setShowSettingsSubmenu] = useState(false);
  const [showCustomisations, setShowCustomisations] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menuContainerRef = useRef(null);

  useEffect(() => {
    if (showMenu) {
      function handleClickOutside(event) {
        if (menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
          setShowMenu(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [menuContainerRef, showMenu]);

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center ">
        <Link className="mr-16 flex gap-4">
          <Icon icon="logos:microsoft-icon" width="32" height="32" />
          <span className="text-2xl font-extrabold text-white">Microsoft Bing</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link className="text-white">Images</Link>
          </li>
          <li>
            <Link className="text-white">Videos</Link>
          </li>
          <li>
            <Link className="text-white">Maps</Link>
          </li>
          <li>
            <Link className="text-white">News</Link>
          </li>
          <li>
            <Link className="text-white">
              <Icon icon="tabler:dots" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 md:flex">
          <Link className="text-white">Sign in</Link>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
            <Icon
              icon="material-symbols-light:person-outline"
              width="24"
              height="24"
              color="white"
            />
          </div>
        </div>
        <div className="md:relative">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <Icon
              className="cursor-pointer"
              icon="ci:hamburger-md"
              color="white"
              width="28"
              height="28"
            />
          </button>
          <div
            ref={menuContainerRef}
            className={`absolute ${
              showMenu ? "" : "hidden"
            } right-0 top-0 h-full w-72 overflow-scroll bg-white py-2 shadow-lg md:top-10 md:h-auto md:overflow-auto md:rounded-lg`}
          >
            <div className=" my-4 flex w-full md:hidden">
              <Icon
                onClick={() => setShowMenu(!showMenu)}
                className="ml-4 cursor-pointer"
                icon="ic:round-close"
                color="gray"
                width="28"
                height="28"
              />
            </div>

            <div className="mb-4 flex flex-col items-center md:hidden">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-400">
                <Icon
                  icon="material-symbols-light:person-outline"
                  width="48"
                  height="48"
                  color="white"
                />
              </div>
              <Link className="text-gray-500">Sign in</Link>
            </div>

            <Link className="text-md flex w-full gap-2 px-4 py-2 text-gray-500 hover:bg-gray-200">
              <Icon icon="fluent:collections-20-regular" color="gray" width="24" height="24" />
              <span>Collections</span>
            </Link>

            <Link
              onClick={() => setShowSettingsSubmenu(!showSettingsSubmenu)}
              className="text-md flex w-full items-center justify-between px-4 py-2 text-gray-500 hover:bg-gray-200"
            >
              <div className="flex gap-2">
                <Icon icon="solar:settings-bold" color="gray" width="24" height="24" />
                <span>Settings</span>
              </div>
              {showSettingsSubmenu ? (
                <Icon icon="ep:arrow-up" color="gray" width="20" height="20" />
              ) : (
                <Icon icon="ep:arrow-down" color="gray" width="20" height="20" />
              )}
            </Link>

            {showSettingsSubmenu && (
              <div>
                <Link className="flex w-full gap-2 py-2 pl-12 pr-4 text-sm text-gray-500 hover:bg-gray-200">
                  <div>
                    <div>Language</div>
                    <div className="text-sm text-gray-400">English</div>
                  </div>
                </Link>
                <Link className="flex w-full gap-2 py-2 pl-12 pr-4 text-sm text-gray-500 hover:bg-gray-200">
                  <div>
                    <div>Country/Region</div>
                    <div className="text-sm text-gray-400">India</div>
                  </div>
                </Link>
                <Link className="flex w-full gap-2 py-2 pl-12 pr-4 text-sm text-gray-500 hover:bg-gray-200">
                  <div>Location</div>
                </Link>
                <Link className="flex w-full gap-2 py-2 pl-12 pr-4 text-sm text-gray-500 hover:bg-gray-200">
                  <div>Voice Search</div>
                </Link>
              </div>
            )}

            <Link className="text-md flex w-full items-center justify-between px-4 py-2 text-gray-500 hover:bg-gray-200">
              <div className="flex gap-2">
                <Icon icon="material-symbols:lock" color="gray" width="24" height="24" />
                <span>SafeSearch</span>
              </div>
              <div className="text-sm text-gray-400">Moderate</div>
            </Link>

            <Link className="text-md flex w-full gap-2 px-4 py-2 text-gray-500 hover:bg-gray-200">
              <Icon icon="mdi:clock" color="gray" width="24" height="24" />
              <span>Search History</span>
            </Link>
            <Link className="text-md flex w-full gap-2 px-4 py-2 text-gray-500 hover:bg-gray-200">
              <Icon icon="fluent:person-star-20-filled" color="gray" width="24" height="24" />
              <span>My Bing</span>
            </Link>
            <Link className="text-md flex w-full gap-2 px-4 py-2 text-gray-500 hover:bg-gray-200">
              <Icon icon="ic:baseline-privacy-tip" color="gray" width="24" height="24" />
              <span>Privacy</span>
            </Link>
            <Link className="text-md flex w-full gap-2 px-4 py-2 text-gray-500 hover:bg-gray-200">
              <Icon icon="bxs:message" color="gray" width="24" height="24" />
              <span>Feedback</span>
            </Link>

            <Link
              onClick={() => setShowCustomisations(!showCustomisations)}
              className="text-md flex w-full items-center justify-between px-4 py-2 text-gray-500 hover:bg-gray-200"
            >
              <div className="flex gap-2">
                <Icon icon="material-symbols:home" color="gray" width="24" height="24" />
                <span>Customise your homepage</span>
              </div>
              {showCustomisations ? (
                <Icon icon="ep:arrow-up" color="gray" width="20" height="20" />
              ) : (
                <Icon icon="ep:arrow-down" color="gray" width="20" height="20" />
              )}
            </Link>

            {showCustomisations && (
              <div>
                <Link className="flex w-full justify-between gap-2 py-2 pl-12 pr-4 text-sm text-gray-500 hover:bg-gray-200">
                  <div>Show menu bar</div>
                  <Icon icon="ion:switch" color="#00809D" width="24" height="24" />
                </Link>
                <Link className="flex w-full justify-between gap-2 py-2 pl-12 pr-4 text-sm text-gray-500 hover:bg-gray-200">
                  <div>Show news and interest</div>
                  <Icon icon="ion:switch" color="#00809D" width="24" height="24" />
                </Link>
                <Link className="flex w-full justify-between gap-2 py-2 pl-12 pr-4 text-sm text-gray-500 hover:bg-gray-200">
                  <div>Show homepage image</div>
                  <Icon icon="ion:switch" color="#00809D" width="24" height="24" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
