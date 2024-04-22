//@ts-ignore
//@ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  content: string | React.JSX.Element | React.JSX.Element[];
};

export default function Navigation({ content }: Props) {
  const containerRef = useRef(null);
  const [activeEl, setActiveEl] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  useEffect(
    function () {
      /** @type {HTMLElement} */
      const current = containerRef.current;
      const actEl = current.querySelector(".js-nav-el.active");
      const actLink = current.querySelector(".js-nav a.active");
      if (!current) return;
      let a = current.querySelectorAll(".js-nav a");
      a.forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          let href = el.getAttribute("href");
          let target = document.querySelector(href);
          activeEl.classList.remove("active");
          activeLink.classList.remove("active");
          target.classList.add("active");
          el.classList.add("active");
        });
      });
    },
    [activeEl, activeLink],
  );
  return <div ref={containerRef}>{content}</div>;
}
