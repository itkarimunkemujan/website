import { Logo, ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  BookMarkedIcon,
  NotepadTextIcon,
  PanelsTopLeftIcon,
  UserRoundSearchIcon,
  UserSearchIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

const CARDS_CONTENT = [
  {
    section: "Open Recruitment",
    items: [
      {
        title: "Guidebook Pendaftaran",
        icon: <BookMarkedIcon className="size-6" />,
        image: "/vercel.svg",
        href: "#",
      },
      {
        title: "Formulir Pendaftaran",
        icon: <NotepadTextIcon className="size-6" />,
        image: "/vercel.svg",
        href: "https://bit.ly/OprecKarimunKemujan2026",
      },
    ],
  },
  {
    section: "Contact Person",
    items: [
      {
        title: "Putri (WhatsApp)",
        icon: <UserSearchIcon className="size-6" />,
        image: "/vercel.svg",
        href: "https://wa.me/6283877375754",
      },
      {
        title: "Dena (WhatsApp)",
        icon: <UserRoundSearchIcon className="size-6" />,
        image: "/vercel.svg",
        href: "https://wa.me/6288226430414",
      },
    ],
  },
  {
    section: "Additional",
    items: [
      {
        title: "Official Website",
        icon: <PanelsTopLeftIcon className="size-6" />,
        image: "/vercel.svg",
        href: "https://karimunkemujan.com",
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <main className="w-full min-h-screen max-w-lg mx-auto pt-[18.75px] px-[18.75px] md:pt-16">
      <header className="flex justify-between items-center">
        <Logo />
        <ModeToggle />
        {/*<ShareToggle />*/}
      </header>
      <section className="flex justify-center items-center flex-col gap-3 my-10">
        <p className="font-semibold">KKN - PPM UGM Periode II 2026</p>
        <h1 className="font-bold text-5xl">Karimun Kemujan</h1>
        <p className="font-semibold">KARIMUNJAWA - JEPARA</p>
      </section>
      <section className="flex flex-col gap-6">
        {CARDS_CONTENT.map((group, groupIdx) => (
          <div key={groupIdx} className="w-full flex flex-col gap-3">
            {/* Separator (judul section) */}
            <h2 className="font-semibold text-lg">{group.section}</h2>

            {/* Items */}
            {group.items.map((item, itemIdx) => (
              <Link
                key={itemIdx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card flex h-20 w-full items-center justify-center rounded-xl border shadow-md p-4 gap-2"
              >
                <div className="border aspect-square h-full flex items-center justify-center rounded-md">
                  {item.icon}
                </div>

                <p className="text-center text-base w-full font-medium line-clamp-2">
                  {item.title}
                </p>

                <ArrowRightIcon className="ml-auto size-6" />
              </Link>
            ))}
          </div>
        ))}
      </section>
      <div className="mt-20 text-center">
        &copy; {new Date().getFullYear()} Tim KKN-PPM UGM Karimun Kemujan.
      </div>
    </main>
  );
}
