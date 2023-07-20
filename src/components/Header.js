import React, { useEffect, useState } from "react";
import logoMesto from "../images/logo-image.svg";
import { useLocation, Link, useNavigate } from "react-router-dom";

function Header({ email, signOut }) {
  const location = useLocation();
  const [headerLink, setHeaderLink] = useState({
    linkName: "Выход",
    pathLink: "/signin",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (location) {
      if (location.pathname === "/signin") {
        setHeaderLink({ linkName: "Регистрация", pathLink: "/signup" });
      }
      if (location.pathname === "/signup") {
        setHeaderLink({ linkName: "Войти", pathLink: "/signin" });
      }
      if (location.pathname === "/") {
        setHeaderLink({ linkName: "Выход", pathLink: "/signin" });
      }
    }
  }, [location]);

  return (
    <header className="header">
      <img src={logoMesto} alt="логотип" className="header__logo" />
      <div className="header__overlay">
        <p className="header__email">{email}</p>
        <Link
          onClick={signOut}
          className="header__link"
          to={headerLink.pathLink}
        >
          {headerLink.linkName}
        </Link>
      </div>
    </header>
  );
}

export default Header;
