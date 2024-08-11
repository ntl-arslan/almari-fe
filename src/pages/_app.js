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
  
  // Check if the current page is the login, signup, or home page
  const loginPage = pathname === '/Login';
  const signUpPage = pathname === '/Signup';
  const homePage = pathname === '/Home';
  const lawnPage = pathname === '/Lawns';

  return (
    <>
      {/* Show HeaderTop and Navbar only on the home page */}
      {homePage || lawnPage && <HeaderTop />}
      {homePage || lawnPage && <Navbar />}

      {/* Show HeaderMain on all pages except login and signup */}
      {!loginPage && !signUpPage && <HeaderMain />}

      <MobNavbar />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
