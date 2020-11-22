import React from 'react'
import Header from './Header'
import img from '../images/img.png';
import './Home.css';


function Home() {
    return (
        <div class="container1">
            <Header/>
	    <div class="content">
		<h1>CONECTING THE DISCONNECTED</h1>
		<h2><b>Vyorius</b> brings unmanned <br/> robots <b>together</b> , <br/> wherever they are</h2>
		<p>With all of the operations, commanding and maintenance <br/> tools in one place, unmanned
         vehicles will stay connected <br/>and productive no matter where you’re Delivering.</p>
		 <button className="button">Try Vyorius</button>
		 <button className="button1">Learn More</button>
		 <div className="out">
		 <span>Need to order a delivery?  </span>
		<a href="#" className="link">Get Started</a>
		 </div>
	</div>
	<img src={img} className="featured"/>
</div>
    );
}
export default Home
