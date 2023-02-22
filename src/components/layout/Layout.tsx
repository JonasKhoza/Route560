import React, { useState } from "react";
import Navigation from "./Navigation";
import SideDrawer from "./SideDrawer";
import Footer from "./Footer";
interface FC {
  children: React.ReactNode;
}
const Layout: React.FC<FC> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  function toggleMenuBar() {
    setMenuIsOpen((prevV) => !prevV);
  }
  return (
    <div>
      <Navigation menuIsOpen={menuIsOpen} toggleMenuBar={toggleMenuBar} />
      <SideDrawer toggleMenuBar={toggleMenuBar} menuIsOpen={menuIsOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
