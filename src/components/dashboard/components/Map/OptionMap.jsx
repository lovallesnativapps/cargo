import React from 'react';
import {withStyles} from 'material-ui/styles';
import '../DashboardContent/dashboard.css';
import icon_search from '../../../../design/icons/icono-ui-search.png';

const styles = {
  p:{
		color:'red'
	},

};

const OptionMap = () =>{
	return( 
		<div className="option_map">
			<button className="option_maps"><img src={icon_search} alt=""/></button>
			<button className="option_maps"><img className="icon_window" src={icon_search} alt=""/></button>
			<button className="option_maps"><img src={icon_search} alt=""/></button>
		</div>	
  )
}
export default withStyles(styles)(OptionMap);