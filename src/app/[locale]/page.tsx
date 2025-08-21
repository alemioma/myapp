import { Hero } from "@/components/hero";
import { VideoCards } from "@/components/VideoCards";
import { FC } from 'react';

// Se tipifican los parámetros como una promesa
interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

// El componente debe ser 'async' para usar 'await'
const HomePage: FC<HomePageProps> = async ({ params }) => {
  const { locale } = await params;
  
  return (
    <>
      <Hero locale={locale} />
      <div className="mt-2">
        <VideoCards />
      </div>
      <div className="w-full max-w-4xl mx-auto px-4">
        <hr className="my-8 border-gray-400 dark:border-gray-600" />
      </div>
    </>
  );
};

export default HomePage;