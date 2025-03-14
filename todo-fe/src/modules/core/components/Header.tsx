import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { useAuth } from "../../auth/hooks/useAuth";

export const Header: React.FC = () => {
  const { profile, handleLogout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={Logo}
          alt="Logo"
          className="h-8 w-auto mr-4 cursor-pointer"
        />
      </div>

      <Menu>
        <MenuButton className="">
          {/* <UserCircleIcon className="h-8 w-8 text-gray-300 mr-4" /> */}
          <img
            src={Logo}
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button
              onClick={() => {
                navigate("/profile");
              }}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              {/* <UserCircleIcon className="h-8 w-8 text-gray-300" /> */}
              <img
                src={Logo}
                alt="Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>
                {profile?.first_name} {profile?.last_name}
              </span>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />

          <MenuItem>
            <button
              onClick={handleLogout}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              <LogOutIcon className="size-4 fill-white/30" />
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </header>
  );
};
