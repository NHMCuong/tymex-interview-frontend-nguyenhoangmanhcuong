import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles["main-page-container"]}>
      <Header />

      <Product />
      <div className={styles["banner-footer"]}></div>

      <Footer />
    </div>
  );
};

export default App;
