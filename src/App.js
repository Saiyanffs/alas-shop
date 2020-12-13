import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
// import Admin from "./pages/Admin";
import "./App.scss";
import UserContextProvider from "./contexts/UserContext";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
<<<<<<< HEAD
        <PublicRoute exact path="/">
          <Header />
          <Landing />
          <Footer />
        </PublicRoute>

        <PublicRoute path="/signup">
          <Signup />
        </PublicRoute>

        <PublicRoute path="/signin">
          <Signin />
        </PublicRoute>

        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>

        <PrivateRoute path="/history">
          {/* <History /> */}
        </PrivateRoute>

        {/* <AdminRoute path="/admin">
          <Admin />
        </AdminRoute> */}

        <Route path='*'>
          <PageNotFound />
        </Route>
=======
        <Switch>
          <PublicRoute exact path="/">
            <Header />
            <Landing />
            <Footer />
          </PublicRoute>

          <PublicRoute path="/signup">
            <Signup />
          </PublicRoute>

          <PublicRoute path="/signin">
            <Signin />
          </PublicRoute>

          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>

          <PrivateRoute path="/history">
            {/* <History /> */}
          </PrivateRoute>

          <AdminRoute path="/admin">
            <Admin />
          </AdminRoute>

          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
>>>>>>> 8bb2681fce0fd22e404357bd5595c8ab9fd8e3c0
      </Router>
    </UserContextProvider>
  );
};

export default App;
