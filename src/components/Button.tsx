/** @format */

import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  isActive?: boolean;
};

export default function Button(
  props: React.HtmlHTMLAttributes<HTMLButtonElement> & Props
) {
  return (
    <button
      {...props}
      className={twMerge(
        clsx(
          "font-semibold capitalize  py-4 px-5 rounded-full  text-black dark:text-white  ",
          props.className,
          {
            "bg-black text-white dark:bg-white dark:text-black": props.isActive
          }
        )
      )}
    />
  );
}
