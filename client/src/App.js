import React, { Component, useState } from "react";
import { ethers } from "ethers";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Web3 from 'web3';
import "./App.css";
import logo from './images/home_logo.png';
import udb from './images/udb.png';
import add_icon from './images/add_icon.PNG';
import MetaMaskLoginButton from 'react-metamask-login-button';
import WalletCard from './WalletCard';

import amateur_bg from './images/amateur_bg.PNG';
import survivor_bg from './images/survivor_bg.png';
import assassin_bg from './images/assassin_bg.png';
import z_killer from './images/z_killer.PNG';

class App extends Component {
  	state = { storageValue: 0, web3: null, accounts: null, contract: null };
	

	  
  

  	render() {
		return (
		<div className="main_page">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container">
						<a className="navbar-brand" href="#">
							<img src={ logo }></img>
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Features</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">My Weapons</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Wagyu Games</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#"></a>
								</li>
							</ul>


							<WalletCard />
							
						</div>

						
						
					</div>
					
					
				</nav>


				<div className="m_content">







				
					<div className="c_slider">
						<div className="slider_d">
							<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
								
								<div className="carousel-inner">              

							


									<div className="carousel-item active">
										<div className="the_images">
											<div className="card">
												<h5 className="card_title">AMATEUR</h5>
												
												<img className="ban_i" src={ amateur_bg } />
												<div className="d_container">
													<h3 className="w_price" id="a_text">
														0.1 ETH
													</h3>
													<p className="w_det">
														<b>Knife + Pistol</b>
														<br />
														<b className="w_det1">Playable in game</b>
													</p>
													<button id="button" className="noselect">Buy Now</button>
													
												</div>
											</div>
										</div>
									</div>

									<div className="carousel-item">
										<div className="the_images">
											<div className="card">
												
												<h5 className="card_title">
													SURVIVOR
												</h5>
												<img className="ban_i" src={ survivor_bg }/>
												<div className="d_container" id='surv_d'>
													<h3 className="w_price" >
														0.3 ETH
													</h3>
													<p className="w_det">
														<b>Knife + MP5 + Pistol</b>
														<br />
														<b className="w_det1">Playable in game</b>
													</p>
													<button id="button" className="noselect">Buy Now</button>
													
												</div>
											</div>
										</div>
									</div>
									
									<div className="carousel-item">
										<div className="the_images">
											<div className="card">
												<h5 className="card_title">ASSASSIN</h5>
												<img className="ban_i" src={ assassin_bg }/>
												<div className="d_container" id="ass_d">
													<h3 className="w_price">
														0.5 ETH
													</h3>
													<p className="w_det">
														<b>Knife + AK47 + Pistol + Shotgun + 1 random perk</b>
														<br />
														<b className="w_det1">Playable in game</b>
													</p>
													<button id="button" className="noselect">
														Buy Now
													</button>
													
												</div>
											</div>
										</div>
									</div>
									
									<div className="carousel-item">
										<div className="the_images">
											<div className="card">
												<h5 className="card_title">ZOMBIE KILLER</h5>
												<img className="ban_i" src={ z_killer } />
												<div className="d_container" id="zombie_d">
													<h3 className="w_price">
														1 ETH
													</h3>
													<p className="w_det">
														<b>Knife + F1 + Pistol + Shotgun + 4 perks + Grenade</b>
														<br />
														<b className="w_det1">Playable in game</b>
													</p>
													<button id="button" className="noselect">Buy Now</button>
													
												</div>
											</div>
										</div>
									</div>





									
								</div>
								<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
									<span className="fa fa-chevron-left fa-lg" aria-hidden="true"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
									<span className="fa fa-chevron-right fa-lg" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
						
					</div>











					<div className="grid-container">
						<div className="item2 udb1">
							<img className="udb" src={ udb }></img>
						</div>
						<div className="item3">
							<h6>INTRODUCING THE WEAPONS MINTING GUIDE</h6>
							<p>
								Read our Medium guide and learn how minting works.
							</p>
						</div>
						<div className="item4">
							<button className="button">
								<span>Read Article </span>
							</button>
						</div>
					</div>

					<div className="me_weapons">
						<div className="header">
							<h1>My Weapons</h1>
							<p>
								Weapon loadouts found in your connected wallet will appear here.
							</p>
						</div>

						

						<div className="main">
							<div className="row">
								<div className="column" onClick={ scrollToTop }>
									<img className="icon_img" src={ add_icon }></img>                                
								</div>
								<div className="column" onClick={ scrollToTop }>
									<img className="icon_img" src={ add_icon }></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
  	}

}



const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};



export default App;
