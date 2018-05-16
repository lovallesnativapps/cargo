import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import MyMapComponent from '../TabComponent/TabComponent';
import OptionMap from '../Map/OptionMap';
import '../DashboardContent/dashboard.css';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: 'theme.palette.background.paper',
	},
  Tabs:{ 
    indicatorColor:'PRIMARY'
  }
});

class TabsComponent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="wrap_map">
        <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:'#95989A',borderRadius:'9px'}}>
          <Tabs
            value={value} 
            onChange={this.handleChange}
            indicatorColor="#FFFFFF"
            textColor="#FFFFFF"
            fullWidth>
            <Tab label="Propias"/>
            <Tab label="Fidelizadas"/>
						<Tab label="No Fidelizadas"/>
            <Tab label="Todas" />
          </Tabs>
        </AppBar>
        <OptionMap></OptionMap>
        {value === 0 && <TabContainer><div>No Vehiculos</div><MyMapComponent></MyMapComponent>
          </TabContainer>}
        {value === 1 && <TabContainer><div>No Vehiculos</div><MyMapComponent></MyMapComponent></TabContainer>}
        {value === 2 && <TabContainer><div>No Vehiculos</div><MyMapComponent></MyMapComponent></TabContainer>}
				{value === 3 && <TabContainer><div>No Vehiculos</div><MyMapComponent></MyMapComponent></TabContainer>}
      </div>
      </div> 
    );
  }
}

TabsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsComponent);