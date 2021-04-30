import { Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, Collapse } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ScannerIcon from "@material-ui/icons/Scanner";
import HelpIcon from "@material-ui/icons/Help";
import NoteIcon from "@material-ui/icons/Note";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useHistory, useLocation } from "react-router-dom";
import "./styles.scss";
import React, { useCallback, useEffect, useState } from "react";
import apiClient from "@services/apiClient";
import { AreaPromotionContent } from "@models/areapromotion.model";

interface SidebarProps {
  isOpen: boolean;
  onClose: any;
}

const Sidebar = (props: SidebarProps) => {
  const history = useHistory();
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(false);

  const [areasResponse, setAreasResponse] = useState<AreaPromotionContent[]>([]);

  const callArea = useCallback(async () => {
    apiClient
      .get("/api/area")
      .then((response) => {
        setAreasResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    callArea();
  }, [callArea]);

  const handleExpandMenu = () => {
    setExpanded(!expanded);
  };

  function redirect(href: string) {
    if (href === location.pathname) {
      props.onClose();
    } else {
      history.push(href);
    }
  }

  function redirectToAyuda() {
    window.location.href = "https://assetspwa.liverpool.com.mx/ayuda/m/index.html";
  }

  return (
    <div>
      <Drawer variant="temporary" anchor="left" open={props.isOpen} ModalProps={{ onBackdropClick: props.onClose }}>
        <div className="header">
          <h6 onClick={() => redirect("/")}>
            <b>Todo el mundo en un QR</b>
          </h6>
        </div>
        <Divider />
        <List data-tut="fourth__step">
          <ListItem button key={"Inicio"} onClick={() => redirect("/home")}>
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
          <ListItem button key={"Registro"} onClick={() => redirect("/")}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary={"Registro"} />
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
          {areasResponse ? (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              {areasResponse.map((item, index) => (
                <ListItem button key={index} onClick={() => redirect(`/${item.route}`)}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={item.department} />
                </ListItem>
              ))}
            </Collapse>
          ) : (
            ""
          )}

          <ListItem button key={"Ayuda"} onClick={redirectToAyuda}>
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
