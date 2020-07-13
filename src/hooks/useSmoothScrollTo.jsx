// Precaching the scroll operation
// React view components call this hook (i.e. the Navbar calls it)
// If the argument passed with the call is a number then the react-scroll (NPM package)
// "scroll to" method is called
// If the number is 0, then it is position 0px from Top
// react-scroll has many available animations, below we use:
// easeInQuart
// 	- accelerating from zero velocity.
//
//
//
// https://github.com/fisshy/react-scroll/blob/master/README.md
// Scroll To (position)
//
// var Scroll = require('react-scroll');
// var scroll = Scroll.animateScroll;
//
// scroll.scrollTo(100, options);
//
//
//
// useCallback
// Pass an inline callback and an array of dependencies.
// useCallback will return a memoized version of the callback
// that only changes if one of the dependencies has changed.
//
//
//
//
// memoisation is an optimization technique used
// primarily to speed up computer programs
// by storing the results of expensive function calls and
// returning the cached result when the same inputs occur again

import React from "react";

import { scroller, animateScroll } from "react-scroll";

const DefOptions = {
  smooth: "easeInOutQuart",
};

const useSmoothScrollTo = (anchorOrPosition, options = {}) => {
  const opts = { ...DefOptions, ...options };

  const handleScrollTo = React.useCallback(() => {
    switch (typeof anchorOrPosition) {
      case "number":
      case "bigint":
        animateScroll.scrollTo(anchorOrPosition, opts);
        break;
      case "string":
        scroller.scrollTo(anchorOrPosition, opts);
        break;
      default:
        break;
    }
  }, [anchorOrPosition, opts]);

  return handleScrollTo;
};

export default useSmoothScrollTo;
