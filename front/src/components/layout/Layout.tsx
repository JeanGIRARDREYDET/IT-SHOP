import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
}

const handleSearch = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  console.error(target.value)
  
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <Nav onSearch={handleSearch} />
      </header>
      <main>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  )
}
export default Layout;

