import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div data-theme="andtheme">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
