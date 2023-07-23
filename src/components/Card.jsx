import React , { useState } from 'react';
import { ENV } from '../environment/environment';
import { Link } from 'react-router-dom';
import './stylesheets/Card.css';
import { BsFillCloudyFill } from 'react-icons/bs';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsCloudDrizzle } from 'react-icons/bs';
import { BsCloudRain } from 'react-icons/bs';
import { BsCloudFog } from 'react-icons/bs';
import { BsCloudSnow } from 'react-icons/bs';
import { GiSnowman } from 'react-icons/gi';
import { BsCloudHaze1 } from 'react-icons/bs';
import { ImWarning } from 'react-icons/im';

const Card  = () => {


	const [weatherData, setWeatherData] = useState([])
	const [city, setCity] = useState('')

	
	const getWeather = (event) => {
			event.preventDefault();
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ENV.API_KEY}`)
			.then(res=> res.json())
			.then(data=> {
				setWeatherData(data)
				setCity('')
			})
		
	}
	
	return(
		<>
			<div className="container">
				<div className="input-container">
					<input  placeholder="Enter City..." onChange={e=>setCity(e.target.value)} className="input" value={city}/>
					<button type="button" className="btn" onClick={getWeather}>Check weather</button>
				</div>
					{typeof weatherData.main === 'undefined' ? (
						<div>
							<p className="sentence">Please enter in a city to get the weather of </p>
						</div>
					
					) : (
						<div className="climate-container">
							<p className="weather-data">{weatherData.name}</p>
							<p className="weather-data">{Math.round(weatherData.main.temp)}°C</p>
							<p className="weather-data">{weatherData.weather[0].main}</p>
							<div>
									{weatherData.weather[0].main==="Clouds" ? (
											<h3 className="icon"><BsFillCloudyFill /></h3>
										) : (
											<>
											</>
										)
									}
									{weatherData.weather[0].main==="Clear" ? (
											<h3 className="icon"><MdOutlineWbSunny /></h3>
										) : (
											<>
											</>
										)
									}
									{weatherData.weather[0].main==="Drizzle" ? (
											<h3 className="icon"><BsCloudDrizzle /></h3>
										) : (
											<>
											</>
										)
									}
									{weatherData.weather[0].main==="Rain" ? (
											<h3 className="icon"><BsCloudRain /></h3>
										) : (
											<>
											</>
										)
									}
									{weatherData.weather[0].main==="Mist" || weatherData.weather[0].main==="Fog" ? (
											<h3 className="icon"><BsCloudFog /></h3>
										) : (
											<>
											</>
										)
									}
									{weatherData.weather[0].main==="Snow" ? (
											<h3 className="icon"><BsCloudSnow /><GiSnowman /></h3>
											
										) : (
											<>
											</>
										)
									}
									{weatherData.weather[0].main==="Haze" ? (
											<h3 className="icon"><BsCloudHaze1 /></h3>
											
										) : (
											<>
											</>
										)
									}

								</div>
						</div>
					
					)}
					
					{weatherData.cod==="404" ? (
						<p className="sentence">City not found !<h3><ImWarning /></h3></p>
					
					) : (
						<>
							
						</>
					)}
					<button className="btn" onClick={()=> setWeatherData("")}>Ask a new city</button>
					<button className="btn"><Link to="/" className="btn">Back to Home</Link></button>
			</div>	
			
		</>
	);
	
}

export default Card;