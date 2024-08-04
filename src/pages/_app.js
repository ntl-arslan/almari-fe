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
  const loginPage = pathname == '/Login';
  const signUpPage = pathname !== '/Signup';
  return (
    <>
    {loginPage &&<HeaderTop/> }
    
    <HeaderMain/>
    {!loginPage || !signUpPage && <Navbar />}
   
      <MobNavbar/>
      <ToastContainer
        
      />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
