import Link from "next/link";
import React from "react";

export const Navbar = () => {
  /**
   * En caso de que quiera que no precargue lso datos puedo ponerlo en false
   */
  return (
    <nav>
      <menu>
        <Link href="/">Home</Link>
        <Link href="/about" prefetch={false}>
          About
        </Link>
      </menu>
    </nav>
  );
};
