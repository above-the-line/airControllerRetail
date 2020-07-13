// Top-index.jsx passes the brand configuration
// property that is set in NavBar.en.md as props (function argument)
// (it's markdown text that is rendered in a fancy way by this component)
// The Font Family is a variable specified by a SCSS mixin in ./src/style/corse.scss
// and then that SCSS variable is actually applied to the React component below via
// className "cursor-pointer" via Navbar.scss
//
//
//
//
//
// https://github.com/lukeed/clsx
//
// The clsx function can take any number of arguments, each of which can be an Object, Array, Boolean, or String.
// Any falsey values are discarded!
// Standalone Boolean values are discarded as well.
//
// clsx(true, false, '', null, undefined, 0, NaN);
// => ''
//
// // Kitchen sink (with nesting)
// clsx('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');
// => 'foo bar hello world cya'

import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Navbar, Container, Nav } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import NavItem from "components/NavItem";

import "./Navbar.scss";

const MyNavbar = ({ anchors, frontmatter, extraItems }) => {
  const { brand, menuText } = frontmatter;

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          {menuText}
          <Icon iconName="BarsIcon" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {anchors.map((anchor) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
          </Nav>
          {extraItems}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.string),
  frontmatter: PropTypes.object,
  extraItems: PropTypes.any,
};

MyNavbar.defaultProps = {
  anchors: [],
  frontmatter: {},
  extraItems: null,
};

export default MyNavbar;
