import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className=" top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto ">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* language select */}

          {/* session */}

          {/* dark mode toggle  */}
          <DarkModeToggle />

          {/* user button */}
          <UserButton />
        </div>
      </nav>

      {/* upgrade banner */}
    </div>
  );
}

export default Header;
