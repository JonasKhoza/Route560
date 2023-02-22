import React from "react";

export interface SideDrawerInterface {
  children: React.ReactNode;
  toggleMenuBar: () => void;
  menuIsOpen: boolean;
}
