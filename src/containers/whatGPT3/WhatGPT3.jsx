import React from "react";
import { Feature } from "../../components";
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
     <div className="gpt3__whatgpt3-feature">
     <Feature  title="What Is GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
     </div>
      <div className="gpt3__whatgpt3-heading">
       <h1 className="gradient__text">The Possibilities Are Beyond Your Imagination.</h1>
       <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Lorem ipsum dolor sit amet, consectetur incididunt ut labore  dolore magna aliqua."/>
      <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipiscing eit, sed eiusmod  " />
      <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqu." />
      </div>
    </div>
  )
}

export default WhatGPT3 