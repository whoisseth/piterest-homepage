/** @format */

import Image from "next/image";
import React from "react";
import logo from "@/assets/pinterest_PNG45.png";

type Props = {};

export default function Logo({}: Props) {
  const imgSrc =
    "https://th.bing.com/th/id/R.0dea4ad3030467e2f65cde00935ba62b?rik=5H3iHU%2bDuMG8Tw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fpinterest%2fpinterest_PNG45.png&ehk=2PCNO5m5fgzmgPIIwDUJ8K%2bZmapApLojXwLeHId8n80%3d&risl=&pid=ImgRaw&r=0";
  // const imgSrc = logo;

  return (
    <img height={400} width={400} src={imgSrc} className="h-6 w-6" alt="logo" />
  );
}
