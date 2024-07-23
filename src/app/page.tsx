import Header from '@/components/Header';
import About from '@/components/About';
import Services from '@/components/services';
import NewsLetterForm from '@/components/NewsLetterForm';
import ClientSection from '@/components/ClientSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-10"></div>
      <About />
      <div className="mt-10"></div>
      <Services />
      <div className="mt-10"></div>
      <NewsLetterForm />
      <div className="mt-10"></div>
      <ClientSection />
      <div className="mt-10"></div>
    </div>
  );
}
