"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return <Button color="secondary" size="small" disabled={true}></Button>;
  }

  const dark = theme === "dark";

  return (
    <IconButton
      size="small"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
      className="cursor-pointer"
    >
      {dark ? (
        <Sun className="hover:text-primary text-primary" />
      ) : (
        <Moon className="hover:text-primary text-primary" />
      )}
    </IconButton>
  );
};

export default ToggleMode;
