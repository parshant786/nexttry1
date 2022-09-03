import { Header } from "../components/Header";
import "../styles/globals.css";
import { useState } from "react";
import { store } from "../store";

import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }) {
  const [cartArr, setcartArr] = useState([]);
  let view;
  if (Component.getLayout) {
    view=  Component.getLayout(<Component {...pageProps} cartArr={cartArr} setcartArr={setcartArr} />, { ...pageProps, cartArr, setcartArr });
  }else{
view = <>
      <Header />
      <Component {...pageProps} cartArr={cartArr} setcartArr={setcartArr} />
      </>
  }

  return (
    <>
    <Provider  store={store}>
      {view}
      </Provider>
    </>
  );
}

export default MyApp;
