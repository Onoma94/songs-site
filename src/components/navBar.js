import React, { useState } from "react";
import "../../style.css";


function Navbar(props) {
    const [currentTab, setCurrentTab] = useState(() => {
      switch (window.location.pathname) {
        case "" || "/":
          return "/";
        case "/beer":
          return "/chart";
        default:
          return window.location.pathname;
      }
    });

    return(
        <nav>
            <ul>
                <li>
                    <a href="/" className="nav-link">
                        Homepage
                    </a>
                </li>
                <li>
                    <a href="/chart" className="nav-link">
                        My Charts
                    </a>
                </li>
                <li>
                    <a href="/songs" className="nav-link">
                        Songs List
                    </a>
                </li>
                <li>
                    <a href="/blog" className="nav-link">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="/contact" className="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;