import { useTranslations } from 'next-intl';
import { Container } from './container';
import { PlayIcon } from '@heroicons/react/24/solid';
import { Link } from "@/i18n/navigation";

interface ResourceItem {
  title: string;
  description: string;
  video: string;
}

interface ResourcesProps {
  planKey: string;
}

export function Resources({ planKey }: ResourcesProps) {
  const t = useTranslations(`plans`);
  const resources = t.raw(`${planKey}.resources`) as ResourceItem[];

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-10 py-16 sm:scroll-mt-20 sm:py-2 lg:py-2"
    >
      <Container>
        <p className="font-display text-2xl font-semibold text-[var(--foreground)]">
          {t(`${planKey}.heading`)}
        </p>
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-[var(--muted)]/20 mt-16"
        >
          {resources.map((resource, index) => (
            <li
              key={index}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-[var(--radius-md)] shadow-lg sm:h-60 lg:h-40 bg-[var(--muted)]">
                <iframe
                  src={resource.video}
                  title={resource.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-[var(--radius-md)] border-none"
                />
              </div>
              <div>
                <Link
                  href="#"
                  className="mb-3 inline-flex items-center gap-1 rounded-[var(--radius-sm)] bg-[var(--primary)] px-4 py-1 text-xs font-semibold text-[var(--primary-foreground)] shadow-md hover:bg-[var(--primary)]/90 transition-colors"
                >
                  <PlayIcon className="w-4 h-4" /> {t(`${planKey}.playButton`)}
                </Link>
                <h3 className="mt-3 text-base font-medium tracking-tight text-[var(--foreground)]">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
