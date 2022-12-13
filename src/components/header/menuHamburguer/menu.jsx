import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./menu.css";

export default function MenuHamburguer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="dropdownMenu">
          <MenuItem onClick={handleClose}>
            <a href="http://localhost:3000/crud"> Administrar</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="http://localhost:3000/"> Inicio</a>
          </MenuItem>

          <MenuItem onClick={handleClose}>Empresa</MenuItem>
          <MenuItem onClick={handleClose}>Servicios</MenuItem>
          <MenuItem onClick={handleClose}>Estudio</MenuItem>
          <MenuItem onClick={handleClose}>Contacto</MenuItem>
        </div>
      </Menu>
    </div>
  );
}
