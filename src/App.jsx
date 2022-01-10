import AOS from "aos";
import "aos/dist/aos.css";
import "lightgallery.js/dist/css/lightgallery.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
// CSS File Here
import "./assets/css/elegantIcons.css";
import "./assets/css/icofont.css";
import "./assets/scss/style.scss";
import NavScrollTop from "./components/nav-scroll-top";
import AboutPage from "./pages/about";
import Contact from "./pages/contact";
import HomePage from "./pages/index";
import Portfolio from "./pages/portfolio";
import PortfolioDetails from "./templates/portfolio-details";

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: "ease",
        });
        AOS.refresh();
    }, []);
    return (
        <Router>
            <NavScrollTop>
                <Switch>
                    <Route
                        path={`${process.env.PUBLIC_URL + "/"}`}
                        exact
                        component={HomePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/about"}`}
                        component={AboutPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/portfolio"}`}
                        component={Portfolio}
                    />
                    <Route
                        path={`${
                            process.env.PUBLIC_URL + "/portfolio-details/:slug"
                        }`}
                        component={PortfolioDetails}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/contact"}`}
                        component={Contact}
                    />
                </Switch>
            </NavScrollTop>
        </Router>
    );
};

export default App;
