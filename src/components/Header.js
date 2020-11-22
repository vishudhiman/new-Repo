import React,{Link} from 'react'
import pic1 from '../images/Picture1.png';
import pic2 from '../images/Picture2.png';
import './Header.css';


function Header() {
    return (
      <div className="container">
		<div className="navbar">
			<img src={pic1} className="logo"/>
      <img src={pic2} className="logo"/>
			<nav>
				<ul>
					<li><a href="">Why Vyorius?</a></li>
					<li><a href="">Solutions</a></li>
					<li><a href="">Product</a></li>
					<li><a href="">Use Cases</a></li>
					<li><a href="">Team</a></li>
          <li><a href="">Partners</a></li>
          <li><a href="">Contact Us</a></li>
				</ul>
			</nav>
			<button className="btn">Launch Vyorius ></button>
		</div>
	</div>

    );
}

export default Header
