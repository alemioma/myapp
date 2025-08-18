
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "es", "sv"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const { Link, useRouter, usePathname } = createNavigation(routing);
