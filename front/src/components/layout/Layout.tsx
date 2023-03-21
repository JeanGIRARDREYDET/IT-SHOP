import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
}

const handleSearch = (inputSearch: string) => {
  // const target = event.target as HTMLButtonElement;
  console.error(inputSearch)
  
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

