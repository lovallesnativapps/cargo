import React from 'react';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = {
  TextField:{
		display:'inline'
	},

};

const PostShipment = () =>{
  return (
		<div>
			<h3>Publicar Carga</h3>
			<form noValidate autoComplete="off" className="Form-post-shipment">
				<TextField id="publication_type" label="publication_type"></TextField>
				<TextField id="codigo" label="codigo"></TextField>
				<TextField id="description" label="description"></TextField>
				<TextField id="client_name" label="client_name"></TextField>
				<TextField id="shipment_type" label="shipment_type"></TextField>
				<TextField id="city_name" label="city_name"></TextField>
				<TextField id="shipment_rate" label="shipment_rate"></TextField>
				<TextField id="modality_rate" label="modality_rate"></TextField>
				<TextField id="origin" label="origin"></TextField>
				<TextField id="destiny" label="destiny"></TextField>
				<TextField id="loading_location" label="loading_location"></TextField>
				<TextField id="unloading_location" label="unloading_location"></TextField>
				<TextField id="loading_date" label="loading_date"></TextField>
				<TextField id="loading_time" label="loading_time"></TextField>
				<TextField id="length" label="length"></TextField>
				<TextField id="width" label="width"></TextField>
				<TextField id="weight" label="weight"></TextField>
				<TextField id="volume" label="volume"></TextField>
				<TextField id="publication_spread" label="publication_spread">Publicar a todas las empresas Fidelizadas</TextField>
				<TextField id="observation" label="observation"></TextField>
			</form>
			<div>
				<button onClick={() => Cancel()}>Cancelar</button>
				<button onClick={() => Post()}>Publicar</button>
			</div>
		</div>     
	)
}

var Post = () => {
	console.log("hi");
}

var Cancel = () => {
	console.log("hi");
}
    
export default withStyles(styles)(Post_Shipment);