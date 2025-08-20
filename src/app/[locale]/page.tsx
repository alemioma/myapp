import { Hero } from "../../components/hero";
import { FC } from 'react';

// Se tipifican los parámetros como una promesa
interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const LocaleHomePage: FC<HomePageProps> = async ({ params }) => {
  const { locale } = await params;
  
  return (
    <>
      <Hero locale={locale} />
    </>
  );
};

export default LocaleHomePage;