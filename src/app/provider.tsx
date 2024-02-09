/** @format */
"use client";
import React from "react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";

import { ThemeProvider } from "next-themes";
const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
