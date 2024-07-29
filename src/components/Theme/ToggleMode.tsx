"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button disabled></Button>;
  }

  const dark = theme === "dark";

  return (
    <IconButton
      size="small"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
      className="text-primary"
    >
      {dark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
};

export default ToggleMode;
