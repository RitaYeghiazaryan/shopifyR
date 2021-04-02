//COMPONENTS
import { Redirect, Route, Switch } from "react-router";
import Header from "./loyout/header/Header.loyout"
import HomePage from "src/pages/home/Home.page";
//STYLES
import styles from "./_app.module.scss";
import AuthPage from "./pages/auth/Auth.page";
import Shop from "./pages/Shop/shop.page";
const App = () => {
  return (
   
    <div className={styles.app}>
      <Header />
      <main className={styles.app__main}>
        <Switch>
          <Route path="/home" render={() => <HomePage />} />
          <Route path="/auth" render={() => <AuthPage />} />
          <Route path="/shop" render={() => <Shop />} />
          <Redirect exact from="/"  to="/home"/>
        </Switch>
      </main>
    </div>
  
    
  );
};

export default App;
