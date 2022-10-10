import classNames from "classnames";
import { useEffect, useState } from "react";
import { Branding } from "./Branding/Branding";
import "./Header.scss";
import Menu from "./Menu/Menu";
import VerticalMenu from "./Menu/VerticalMenu/VerticalMenu";

export function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = document.getElementById("body").scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    document
      .getElementById("body")
      .addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document
        .getElementById("body")
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = classNames("header", { elevated: scrollPosition > 20 });

  const getActive = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      return (
        scrollPosition > element.offsetTop - 162 &&
        scrollPosition < element.offsetTop + element.clientHeight - 162
      );
    } else {
      return false;
    }
  };

  const menuItems = [
    { anchor: "skills", name: "Compétences", active: getActive("skills") },
    {
      anchor: "experience",
      name: "Expérience",
      active: getActive("experience"),
    },
    { anchor: "perso", name: "Projets perso", active: getActive("perso") },
    { anchor: "diplomas", name: "Diplômes", active: getActive("diplomas") },
    { anchor: "contact", name: "Contact", active: getActive("contact") },
  ];

  return (
    <div className={classes}>
      <VerticalMenu items={menuItems} />
      <Branding></Branding>
      <Menu items={menuItems}></Menu>
    </div>
  );
}
