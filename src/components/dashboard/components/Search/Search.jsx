import React from 'react';
import '../DashboardContent/dashboard.css';
import Button from 'material-ui/Button';
import icon_search from '../../../../design/icons/icono-ui-search.png';
import icon_location from '../../../../design/icons/icono-ui-location.png'

const Search = () =>{
	return ( 			
		<div className="search_cars">
			<p className="title_dashboard">Visualización vehicular</p>
			<div  className="group_search">
				<img src={icon_location} className="icon_location" alt="" />
				<div className="search_box">
					<input type="text"/>
				</div>

				<img src={icon_location} className="icon_location" alt=""/>
				<div className="search_box">
					<input type="text"/>
				</div>

				<img src={icon_location} className="icon_location" alt=""/>
				<div className="search_box">
					<input type="text"/>
				</div>

				<img src={icon_location} className="icon_location" alt=""/>
				<div className="search_box">
					<input type="text"/>
				</div>

				<div className="search_box" id="search_box_button">
					<Button>
						<p>Buscar </p>
						<img src={icon_search} alt=""/>
					</Button>
				</div>
			</div>	
		</div>
	);
}
export default Search;