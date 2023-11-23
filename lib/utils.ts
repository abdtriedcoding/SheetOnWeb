import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "SheetOnWeb - Your Simple Solution for Dynamic Data Display from Google Sheets.",
  description = "Effortlessly showcase real-time daynamic data from Google Sheets on our website. Anyone can update the sheet, and our platform dynamically fetches and presents the information in a sortable table with full pagination. Explore insights through an interactive bar chart for a user-friendly data experience.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Sidddabdullah",
    },
    icons,
    metadataBase: new URL("https://sheet-on-web.vercel.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
