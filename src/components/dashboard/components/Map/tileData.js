
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DashboardIcon from 'material-ui-icons/Dashboard';
import AccountIcon from 'material-ui-icons/AccountBox';
import ShippingIcon from 'material-ui-icons/LocalShipping';
import OrdersIcon from 'material-ui-icons/LibraryBooks';
import LocationCityIcon from 'material-ui-icons/LocationCity';
import CargaIcon from 'material-ui-icons/RvHookup';
import HistorialIcon from 'material-ui-icons/Restore';
import EstadisticIcon from 'material-ui-icons/Equalizer';

var Go_to_Home = () => {
  console.log('hi');
}

export const FolderListItems = (
  <div>
    <ListItem button onClick={() => Go_to_Home()}>
      <ListItemIcon>
        <DashboardIcon color="contrast"/>
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button onClick={() => Go_to_Home()}>
      <ListItemIcon>
        <AccountIcon color="contrast"/>
      </ListItemIcon>
      <ListItemText primary="Conductores" />
    </ListItem>
    <ListItem button onClick={() => Go_to_Home()}>
      <ListItemIcon>
        <ShippingIcon color="contrast"/>
      </ListItemIcon>
      <ListItemText primary="Vehiculos" />
    </ListItem>
    <ListItem button onClick={() => Go_to_Home()}>
      <ListItemIcon>
        <LocationCityIcon color="contrast"/>
      </ListItemIcon>
      <ListItemText primary="Generadoras" />
    </ListItem>
    <ListItem button onClick={() => Go_to_Home()}>
      <ListItemIcon>
        <CargaIcon color="contrast"/>
      </ListItemIcon>
      <ListItemText primary="Cargas" />
    </ListItem>
    <ListItem button onClick={() => Go_to_Home()}>
      <ListItemIcon>
        <OrdersIcon color="contrast"/>
      </ListItemIcon>
      <ListItemText primary="Ordenes" />
    </ListItem>
    <ListItem button onClick={() => Go_to_Home()}>
      <ListItemIcon>
        <HistorialIcon color="contrast"/>
      </ListItemIcon>
      <ListItemText primary="Historial" />
    </ListItem>
    <ListItem button onClick={() => Go_to_Home()}>
      <ListItemIcon>
        <EstadisticIcon color="contrast"/>
      </ListItemIcon>
      <ListItemText primary="Estadisticas" />
    </ListItem>
  </div>
);
