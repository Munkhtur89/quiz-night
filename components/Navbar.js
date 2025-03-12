import useWindowSize from "@/hooks/useWindowSize;";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowSize();
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const refMenu = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (refMenu.current) {
        if (refMenu.current.contains(e.target)) {
          return;
        }
      }
      closeMenu();
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="py-4 relative">
      <Container className={"flex justify-between items-center"}>
        <Logo />
      </Container>
    </div>
  );
};

const ContentSidebar = ({ toggleMenu }) => {
  return (
    <div className="items-center flex-col sm:flex-row flex">
      <Button variant={"primary"}>Тасалбар</Button>
    </div>
  );
};

export default Navbar;
