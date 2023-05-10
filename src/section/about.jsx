import React from 'react';
import "react-circular-progressbar/dist/styles.css";



import AOS from 'aos';
AOS.init();


const hero = () => {
	return(
		<div className="v-center">
		  <div className="container">
			  <div className="row">
				  <div className="col-md-12 text-center">
	                <h2 data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true">About Me</h2>
	                <div className="space-border"
	                	data-aos="fade-up"
                        data-aos-delay="20"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true"
	                	></div>
	            </div>
	            <div className="col-md-8 pb-5 text-center m-auto"
	            	data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
	            	>
	            	<p>I am student of life and reject the notion of failure; it is either win or learn. As a leader and visionary, my driving force is a desire to make a meaningful impact through my work and push boundaries of what is possible. I believe in leveraging technology to improve our lives and make the world a better place. Whether I am immersed in my work in front of a computer screen or running a challenging race out in the elements, I relentlessly strive to reach new heights and achieve my highest potential. I thrive in dynamic, fast-paced environments that allow me to channel my entrepreneurial spirit and I take pride in my ability to inspire and motivate team members, fostering continuous learning and improvement. Together, we can shape the future of technology and have a positive impact on the world.</p>  
	        </div>
			</div>
			<div className="row">
        <div className="col-md-12 text-center">
	                <h2 data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true">Technologies</h2>
	                <div className="space-border"
	                	data-aos="fade-up"
                        data-aos-delay="20"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true"
	                	>
                  </div>
	            </div>
				<div className="col-lg-3 p-5 text-center"
					data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
					>
          <img src="./img/icons/python-logo-only.png" alt="python logo" className="icons">
          </img>	      
        </div>
        <div className="col-lg-3 p-5 text-center"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          >
          <img src="./img/icons/js.png" alt="javascript logo" className="icons">
          </img>        
        </div>
        <div className="col-lg-3 p-5 text-center"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          >
          <img src="./img/icons/HTML5.png" alt="html logo" className="icons">
          </img>
        </div>
        <div className="col-lg-3 p-5 text-center"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          >
          <img src="./img/icons/css3-logo.jpg" alt="css logo" className="icons">
          </img>      
        </div>
			</div>
			<div className="row">
				<div className="col-lg-3 p-5 text-center"
					data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
					>
          <img src="./img/icons/django.png" alt="django logo" className="icons">
          </img>	      
        </div>
        <div className="col-lg-3 p-5 text-center"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          >
          <img src="./img/icons/Postgres.png" alt="postgres icon" className="icons">
          </img>        
        </div>
        <div className="col-lg-3 p-5 text-center"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          >
          <img src="./img/icons/logo192.png" alt="react logo" className="icons">
          </img>
        </div>
        <div className="col-lg-3 p-5 text-center"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          >
          <img src="./img/icons/bootstrap.png" alt="bootstrap logo" className="icons">
          </img>      
        </div>
			</div>
		</div>
		</div>
	);
}

export default hero;