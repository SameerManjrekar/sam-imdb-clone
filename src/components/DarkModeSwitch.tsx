"use client";
import React, { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

type Props = {};

const DarkModeSwitch = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted && (currentTheme === "dark" ? (
        <MdLightMode
          className="cursor-pointer hover:text-amber-500"
          size={25}
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="cursor-pointer hover:text-amber-500"
          size={25}
          onClick={() => setTheme("dark")}
        />
      ))}
    </>
  );
};

export default DarkModeSwitch;
