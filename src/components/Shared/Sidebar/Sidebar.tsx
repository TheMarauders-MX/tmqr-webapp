import { Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, Collapse } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ScannerIcon from "@material-ui/icons/Scanner";
import HelpIcon from "@material-ui/icons/Help";
import NoteIcon from "@material-ui/icons/Note";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: any;
}

const Sidebar = (props: SidebarProps) => {
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandMenu = () => {
    setExpanded(!expanded);
  };

  function redirect(href: string) {
    history.push(href);
  }

  return (
    <div>
      <Drawer variant="temporary" anchor="left" open={props.isOpen} ModalProps={{ onBackdropClick: props.onClose }}>
        <div className="header">
          <h6>
            <b>Todo el mundo en un QR</b>
          </h6>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Inicio"} onClick={() => redirect("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
          <ListItem button key={"Tarjeta Liverpool"} onClick={() => redirect("/beneficios")}>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary={"Tarjeta Liverpool"} />
          </ListItem>
          <ListItem button key={"Escanea"} onClick={() => redirect("/scan")}>
            <ListItemIcon>
              <ScannerIcon />
            </ListItemIcon>
            <ListItemText primary={"Escanea"} />
          </ListItem>
          <Divider />

          <ListItem button key={"Departamentos"} onClick={handleExpandMenu}>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Departamentos"} />
          </ListItem>
          <Divider />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {["Zapatería", "Videojuegos", "Computación"].map((text, index) => (
              <ListItem button key={index} onClick={() => redirect(`/${text}`)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </Collapse>
          <ListItem button key={"Ayuda"} onClick={() => redirect("/ayuda")}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary={"Ayuda"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Sidebar;
