import React from 'react';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import '../DashboardContent/dashboard.css';

class Sidebar extends React.Component{
	
	state	= {
		left:false
	};
	toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
	};
	
	render(){
	
		const sideList =(
			<div>
				<List>Inicio</List>
        <List>Conductor</List>
        <List>Vehiculo</List>
        <List>Generadoras</List>
        <List>Cargas</List>
        <List>Ordenes</List>
        <List>Historial</List>
			</div>
		);
		return (
			<div>
				<IconButton onClick={this.toggleDrawer('left', true)} color="contrast" aria-label="Menu">
          <MenuIcon />
				</IconButton>
				<Drawer 
					open={this.state.left} 
					onClose={this.toggleDrawer('left', false)}>
          <div
						className="App-sideList"
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
          {sideList}
          </div>
        </Drawer>
			</div>
		);
	}
}
export default Sidebar;