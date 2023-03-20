import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import './Layout.css'
type LayoutProps = {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <Nav />
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

