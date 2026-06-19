import Header from './components/Header';
import Footer from './components/Footer';

export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-8 sm:px-6">
        <Header basePath="/legacy" />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
