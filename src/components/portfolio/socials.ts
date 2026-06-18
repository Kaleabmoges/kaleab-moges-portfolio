import { createElement, type ReactElement, type SVGProps } from "react";
import { Coffee, Linkedin, Mail, Send, Youtube, type LucideIcon } from "lucide-react";

export type IconType = LucideIcon | ((props: SVGProps<SVGSVGElement>) => ReactElement);

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

const TikTokIcon = (props: SVGProps<SVGSVGElement>) =>
  createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", width: "1em", height: "1em", ...props },
    createElement("path", {
      d: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.93a2.59 2.59 0 0 1-2.59 2.45 2.59 2.59 0 1 1 .74-5.07v-3.27a5.82 5.82 0 1 0 5.05 5.77V9.01a7.5 7.5 0 0 0 4.36 1.4V7.2a4.28 4.28 0 0 1-3.3-1.38z",
    }),
  );

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) =>
  createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", width: "1em", height: "1em", ...props },
    createElement("path", {
      d: "M.06 24l1.69-6.16a11.87 11.87 0 0 1-1.6-5.96C.15 5.32 5.5 0 12.06 0a11.8 11.8 0 0 1 8.4 3.49 11.76 11.76 0 0 1 3.48 8.4c0 6.55-5.35 11.88-11.92 11.88a11.96 11.96 0 0 1-5.7-1.45L.06 24zM6.6 20.13c1.68.99 3.28 1.59 5.4 1.59 5.45 0 9.9-4.42 9.9-9.85a9.82 9.82 0 0 0-9.84-9.86c-5.45 0-9.9 4.42-9.9 9.86 0 2.22.65 3.89 1.74 5.63l-1 3.65 3.7-.97zm11.39-5.55c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41z",
    }),
  );

export const TIKTOK_URL = "https://www.tiktok.com/@kaleabmoges783";

export const YE_BUNA_URL =
  "https://ye-buna.com/club_about_redirect?club_get=67922aeeda503_yebuna&ref=Kaleab-Moges";

export const SOCIALS: SocialLink[] = [
  { label: "YouTube", href: "https://www.youtube.com/@KaleabMogesOfficial", icon: Youtube },
  { label: "Ye Buna", href: YE_BUNA_URL, icon: Coffee },
  { label: "TikTok", href: TIKTOK_URL, icon: TikTokIcon },
  { label: "Telegram", href: "https://t.me/KaleabMogesOfficial", icon: Send },
  { label: "WhatsApp", href: "https://wa.me/251987076125", icon: WhatsAppIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kaleabmoges", icon: Linkedin },
  { label: "Email", href: "mailto:kaleabmoges.eth@gmail.com", icon: Mail },
];

export const BROKERS = [
  {
    name: "Exness",
    href: "https://one.exnessonelink.com/a/9hpa1kfa6t",
    desc: "Global multi-asset broker — 16+ years of excellence in forex & CFDs.",
  },
  {
    name: "HFM",
    href: "https://www.hfm.com/sv/en/?refid=30523001",
    desc: "Regulated, licensed broker across forex, CFDs and futures markets.",
  },
];
