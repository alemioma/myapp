import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "sv"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const { Link, useRouter, usePathname } = createNavigation(routing);