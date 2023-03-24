import React from "react";
import { Feature } from '../../components';
import './features.css';

const featuresData = [
   {
    title: 'Improving end distrusts Instantly',
    text: 'From they fine John he gives instances to tons of people, which helps to Improve and end distrusts Instantly'
   },
   {
    title: 'Become the tended active',
    text: 'From they fine John he gives instances to tons of people, which helps to Improve and end distrusts Instantly'
   },
   {
    title: 'Message or i am nothing',
    text: 'From they fine John he gives instances to tons of people, which helps to Improve and end distrusts Instantly'
   },
   {
    title: 'Really boy law county',
    text: 'From they fine John he gives instances to tons of people, which helps to Improve and end distrusts Instantly'
   }
]
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future Is Now And You Just Need To Realize It. Step Into Future Today & Make It Happen.</h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt3__features-container">
         {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
         ))}
      </div>
    </div>
  )
}
 
export default Features 