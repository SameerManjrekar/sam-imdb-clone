"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  title: string;
  param: string;
};

const NavbarItem = (props: Props) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const { title, param } = props;
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
