import { Drawer, Divider, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ScannerIcon from "@material-ui/icons/Scanner";
import HelpIcon from "@material-ui/icons/Help";
import NoteIcon from "@material-ui/icons/Note";
import "./styles.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: any;
}

const Sidebar = (props: SidebarProps) => {
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
          <ListItem button key={"Inicio"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
          <ListItem button key={"Tarjeta Liverpool"}>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary={"Tarjeta Liverpool"} />
          </ListItem>
          <ListItem button key={"Escanea"}>
            <ListItemIcon>
              <ScannerIcon />
            </ListItemIcon>
            <ListItemText primary={"Escanea"} />
          </ListItem>
          <ListItem button key={"Departamentos"}>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Departamentos"} />
          </ListItem>
          <ListItem button key={"Ayuda"}>
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
