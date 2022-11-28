import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Softacks" description="Get your project done fast for the best price" />
      <Header />
      <main>
        <ListSection />
        <FeatureSection />
        <Contact />
      </main>
      <Footer />
    </Page>
  );
}
