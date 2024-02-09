/** @format */

"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

import { useQuery } from "@tanstack/react-query";
import { Photo } from "./type";
import { useState, useEffect } from "react";
import { TbCloudDownload } from "react-icons/tb";
import { saveAs } from "file-saver";
import DarkMode from "@/components/DarkMode";

interface PhotoType {
  total: number;
  total_pages: number;
  results: Photo[];
}

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_IMAGE_API;

  const [search, setSearch] = useState("");

  const api = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${
    search || "marvels"
  }&client_id=${apiKey}`;

  const { isLoading, error, data, refetch } = useQuery<PhotoType>({
    queryKey: ["repoData"],
    queryFn: () => fetch(api).then((res) => res.json())
  });

  useEffect(() => {
    refetch();
  }, [search, refetch]);

  console.log("data-", data);

  // if (isLoading) return "Loading...";

  function downloadImage(imgeUrl: string, imageName: string) {
    saveAs(imgeUrl, `${imageName}.png`);
  }

  return (
    <div className="">
      {/* navbar */}
      <nav className="px-5 py-4 flex   items-center">
        <Link
          href={"/"}
          className="min-h-12 min-w-12   flex items-center  justify-center  hover:bg-gray-200 transition-all  rounded-full"
        >
          <Logo />
        </Link>

        <section className=" items-center hidden md:flex ">
          <Button isActive>Home</Button>
          <Button>Explore</Button>
          <Button>Create</Button>
        </section>
        <section className="flex items-center gap-4 w-full">
          {/* seach bar */}
          <div className="w-full relative flex items-center">
            <FaSearch className="absolute left-5 text-gray-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-full h-12 rounded-full pl-12 bg-gray-200 outline-blue-300  "
            />
          </div>

          {/* other sction */}
          <div className="flex items-center gap-2">
            <DarkMode />
            <button className="min-h-12 min-w-12  transition-all hover:bg-gray-200 flex items-center justify-center rounded-full">
              <IoNotifications className="text-gray-600 text-2xl" />
            </button>
            <button className="min-h-12 min-w-12 transition-all hover:bg-gray-200 flex items-center justify-center rounded-full">
              <AiFillMessage className="text-gray-600 text-2xl" />
            </button>
            <button className="min-h-12 min-w-12 transition-all hover:bg-gray-200 flex items-center justify-center rounded-full">
              <div className="bg-green-700 flex items-center justify-center h-6 w-6 px-3 rounded-full text-white">
                u
              </div>
            </button>

            <button className="min-h-6 min-w-6   transition-all hover:bg-gray-200 flex items-center justify-center rounded-full">
              <FaChevronDown className="text-gray-600" />
            </button>
          </div>
        </section>
      </nav>

      <main className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 px-3 md:8">
        {divideData(data?.results ?? []).map((d, i) => (
          <div key={i} className="grid gap-4">
            {d.map((innerData, innerIndex) => (
              <div key={innerIndex} className="relative">
                <button
                  onClick={() =>
                    downloadImage(innerData.urls.full, innerData.slug)
                  }
                  className="bg-white/80 top-5 rounded-full hover:bg-white/50 right-5 absolute p-4 "
                >
                  <TbCloudDownload className="text-xl text-gray-600 " />
                </button>

                <img
                  className="h-full max-w-full rounded-lg"
                  // height={400}
                  // width={400}
                  src={innerData.urls.regular}
                  alt="img"
                />
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}

// [1, 2, 3, 4, 5, 6]
// [[1, 2, 3], [4, 5, 6]]

function divideData(array: Photo[]) {
  const size = 3;
  const newArray = [];

  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
