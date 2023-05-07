import React from 'react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "../layout/AnimatedProgressProvider";

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
	            <div className="col-md-8 text-center m-auto"
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
				<div className="col-lg-3 p-5 text-center"
					data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
					>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={96}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={3}
				              text={`${roundedValue}.0%`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#cf1f1f",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Python</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={84}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={3}
				              text={`${roundedValue}.0%`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#cf1f1f",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Javascript</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={79}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={3}
				              text={`${roundedValue}.0%`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#cf1f1f",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">SQL</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={73}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={3}
				              text={`${roundedValue}.0%`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#cf1f1f",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Bootstrap</h4>
                </div>
			</div>
		</div>
		</div>
	);
}

export default hero;