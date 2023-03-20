import React from "react";
import './possibility.css';
import possibilityImage from '../../assets/Feature Image.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
     <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt='possibility' />
     </div>
     <div className="gpt3__possibility-content">
       <h4>Request Early Access To Get Started</h4>
       <h1 className="gradient__text">The Possibilities Are Beyond Your Imagination</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</p>
       <h4>Request For Early Access</h4>
     </div>
    </div>
  );
}

export default Possibility 