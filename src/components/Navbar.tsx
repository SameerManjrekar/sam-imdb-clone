import React from "react";

import NavbarItem from "./NavbarItem";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-center gap-5 dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
