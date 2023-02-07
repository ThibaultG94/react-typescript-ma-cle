import React from 'react';

const NavigationLarge = () => {
	return (
		<ul className="header-navbar">
			<li className="navbar_item">
				<a href="/">Ma Clé</a>
				<ul className="navbar_under-item"></ul>
			</li>
			<li className="navbar_item">
				<a href="/">Conciergerie Locative</a>
				<ul className="navbar_under-item"></ul>
			</li>
			<li className="navbar_item">
				<a href="/">Bail Mobilité</a>
				<ul className="navbar_under-item"></ul>
			</li>
			<li className="navbar_item">
				<a href="/">Nos tarifs</a>
				<ul className="navbar_under-item"></ul>
			</li>
			<li className="navbar_item">
				<a href="/">Proposez votre bien</a>
				<ul className="navbar_under-item"></ul>
			</li>
			<li className="navbar_item">
				<a href="/">Contact</a>
				<ul className="navbar_under-item"></ul>
			</li>
		</ul>
	);
};

export default NavigationLarge;
