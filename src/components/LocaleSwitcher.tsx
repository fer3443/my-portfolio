"use client";

import React from "react";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { IoEarthSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";

export const LocaleSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.slice(3)}`;
    router.push(newPath);
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        className={clsx(`p-2 h-8 border shadow-none font-medium`,{
          "w-[80px]":mobile,
          "w-full": !mobile
        })}
      >
        <SelectValue className="p-1" />
      </SelectTrigger>
      <SelectContent className="flex flex-row gap-1 border shadow-none !m-0 !p-0">
        <SelectItem
          value="es"
          className="flex border-none flex-nowrap gap-1 hover:text-accent"
        >
          <span className="flex flex-nowrap gap-1 items-center justify-center">
            <IoEarthSharp className="h-4 w-4 text-muted-foreground" />
            es
          </span>
        </SelectItem>
        <SelectItem
          value="en"
          className="flex border-none flex-nowrap gap-1 hover:text-accent"
        >
          <span className="flex flex-nowrap gap-1 items-center justify-center">
            <IoEarthSharp className="h-4 w-4 text-muted-foreground" />
            en
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
