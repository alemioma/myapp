import { Hero } from "@/components/hero";
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
    </>
  );
};

export default HomePage;