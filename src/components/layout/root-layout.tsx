import { Header } from "./header";
import { Footer } from "./footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
