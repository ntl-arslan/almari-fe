import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../page-components/Navbar"; 
import "../styles/globals.css"; 
import HeaderTop from "../../page-components/HeaderTop";
import HeaderMain from "../../page-components/HeaderMain";
import MobNavbar from "../../page-components/MobNavBar";
import Footer from "../../page-components/Footer";
import { useRouter } from 'next/router';
import "../styles/toast.css"; 

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  
  const loginPage = pathname === '/Login';
  const signUpPage = pathname === '/Signup';
  const homePage = pathname === '/Home';
  const lawnPage = pathname === '/Lawns';
  const suitsPage = pathname === '/Suits';
  const cartItemsPage = pathname === '/CartItems';
  const shoesPage = pathname === '/Shoes';
  const trousersPage = pathname === '/Trousers';
  

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Show HeaderTop and Navbar only on the home page */}
      {(homePage || lawnPage || trousersPage || suitsPage  || cartItemsPage || shoesPage) && <HeaderTop />}
      {(homePage || lawnPage || trousersPage || suitsPage || shoesPage ) && <Navbar />}

      {/* Show HeaderMain on all pages except login and signup */}
      {!loginPage && !signUpPage && <HeaderMain />}

      <MobNavbar />
      <ToastContainer />

      {/* The main content should take up available space */}
      <div className="flex-grow-1">
        <Component {...pageProps} />
      </div>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}

export default MyApp;
