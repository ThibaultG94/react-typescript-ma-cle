import React from 'react';
import MediaQuery from 'react-responsive';
import NavigationLarge from './NavigationLarge';
import NavigationMiddle from './NavigationMiddle';

const Header = () => {
	return (
		<div className="container">
			<header className="header">
				<div className="header-top">
					<p>Spécialiste gestion locative de courte durée</p>
				</div>
				<div className="header-nav">
					<div className="header-logo">
						<img src="./img/headerlogo.webp" alt="logo" />
					</div>
					<MediaQuery minWidth={1025}>
						<NavigationLarge />
					</MediaQuery>
					<MediaQuery maxWidth={1024}>
						<NavigationMiddle />
					</MediaQuery>
				</div>
				<div className="btn-container header-btn-container">
					<a href="" className="btn header-btn">
						<span>Confiez-nous votre bien</span>
					</a>
				</div>
			</header>
		</div>
	);
};

export default Header;
