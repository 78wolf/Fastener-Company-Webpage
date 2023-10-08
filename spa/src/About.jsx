import "./About.css"
import screwman from "./screwman.jpg"
import customizedcrew from "./customizedscrew.jpg"

function About(){
  return(
    <div className="panels">
      <div className="panel">
        <h2 className="panel__title">"The Early Years"</h2>
        <img className="panel__img" src={screwman} alt="Old man with tools"/>
        <p className="panel__text">"Our founder, worked in the fastener industry for over 15 years before starting his own company. He gained valuable experience as a salesperson in multiple fastener trading companies. With his expertise, he founded a business that specializes in producing customized fasteners for customers worldwide."</p>
      </div>
      <div className="panel">
        <h2 className="panel__title">"Focus on Quality and Innovation in Customization"</h2>
        <img className="panel__img" src={customizedcrew} alt="Customized screws" />
        <p className="panel__text">"our mission is to provide our customers with the best possible custom fasteners, designed and manufactured to the highest quality standards. We are committed to continuous innovation and improvement, leveraging the latest technologies and techniques to create fasteners that are stronger, more durable, and more efficient. Our goal is to help our customers achieve their objectives by providing them with reliable and effective fasteners that meet their exact specifications."  </p>
      </div>
    </div>
  );
}

export default About;