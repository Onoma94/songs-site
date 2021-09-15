import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Chart from "../pages/chart";
import Songs from "../pages/songs";
import Blog from "../pages/blog";
import Contact from "../pages/contact";

const Router = () => {
    return (
      <div className="wrapper">
        <HashRouter>
            <Switch>
                <div>
                <Route path="/chart" component={Chart} />
                <Route path="/songs" component={Songs} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                </div>
            </Switch>
        </HashRouter>
      </div>
    );
  };
  
  export default Router;