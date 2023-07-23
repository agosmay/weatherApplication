import React from 'react';
import { HashRouter , Routes , Route } from 'react-router-dom';
import Home from '../components/Home';
import Card from '../components/Card';

const AppRoutes = () => {
	
	return (
		<HashRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route 
					path="/city"
					element={<Card />}
				/>
				
			</Routes>
		</HashRouter>
	);
}

export default AppRoutes;