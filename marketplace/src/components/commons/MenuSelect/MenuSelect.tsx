import { MouseEvent, Ref, useImperativeHandle, useRef, useState } from "react";

import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";

interface MenuSelectProps {
  ref?: Ref<any>;
}
const MenuSelect = ({ ref }: MenuSelectProps) => {
  const menuRef = useRef(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLang, setSelectedLang] = useState<string>("");

  const open = Boolean(anchorEl);

  useImperativeHandle(
    ref,
    () => {
      return {};
    },
    []
  );

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    console.log("event", event.target);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="menu-select"
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedLang}
      </Button>
      <Menu
        id="menu-select"
        ref={menuRef}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>EN</MenuItem>
        <MenuItem onClick={handleClose}>VIE</MenuItem>
      </Menu>
    </>
  );
};

export default MenuSelect;
