import GlobalStyle from "../styles/GlobalStyles";
import {ToastContainer} from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default MyApp;