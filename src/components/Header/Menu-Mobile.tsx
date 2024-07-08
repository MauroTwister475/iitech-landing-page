"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADERLINKS } from "@/constants/header-links";
import { NextLink } from "@/components/Link-Item";
import { Logo } from "@/components/Logo";

export function MenuMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="lg:hidden w-max">
        <Menu
          className="text-gray-400 cursor-pointer"
          size={36}
          onClick={() => setOpenMenu(true)}
        />
      </div>
      {openMenu && (
        <div className="lg:hidden w-screen h-screen flex items-center justify-center py-24 absolute top-0 right-0 left-0 bottom-0 bg-slate-900 transition-all">
          <div className="w-full flex justify-between items-center absolute top-4 px-5">
            <Logo className="text-white" size={40} color="white" />
            <X
              size={38}
              className="text-red-500 cursor-pointer "
              onClick={() => setOpenMenu(false)}
            />
          </div>
          <ul className="flex flex-col gap-8 items-center justify-center">
            {HEADERLINKS.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="text-white font-medium text-xl hover:text-blue-600"
                onClick={() => setOpenMenu(false)}
              >
                {link.name}
              </NextLink>
            ))}
          </ul>
          <div className="w-full absolute bottom-4 px-5 text-center py-1">
            <span className="text-slate-300 text-sm">
              IItech &copy;2024 - Todos os direitos reservados.
            </span>
          </div>
        </div>
      )}
    </>
  );
}