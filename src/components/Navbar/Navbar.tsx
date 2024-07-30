"use client";
import Link from "next/link";
import React, { useState } from "react";
import ToggleMode from "../Theme/ToggleMode";
import { usePathname } from "next/navigation";
import { routes } from "@/data/globalData";
import {
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HireMeModal } from "./HireMe";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        background: "#1B1B1B",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {routes.map((route, index) => (
          <Link
            key={route.path}
            href={route.path}
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <ListItem key={route?.title} disablePadding>
              <ListItemButton>
                <ListItemText primary={route?.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="flex flex-col items-center py-7 px-8 sm:px-4 md:px-0">
      <div className="flex justify-between max-w-6xl w-full">
        <Link href={"/"}>
          <div className="flex gap-[1px]">
            {"Yash Raj".split("").map((letter, index) => {
              return (
                <span key={index} className="logo-letter">
                  {letter}
                </span>
              );
            })}
          </div>
        </Link>
        <ul className="hidden sm:flex items-center space-x-10">
          {routes.map((item, index) => {
            return (
              <li
                key={index}
                className={`list-none text-lg  ${
                  pathname === item.path
                    ? "opacity-100"
                    : "opacity-55 hover:opacity-100 transition-opacity"
                }`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-5">
          <HireMeModal />
          <ToggleMode />
          <IconButton
            onClick={toggleDrawer(true)}
            className="sm:hidden text-primary"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
