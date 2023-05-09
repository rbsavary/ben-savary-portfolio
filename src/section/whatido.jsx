import React from 'react';
import AOS from 'aos';
AOS.init();

const whatido = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <div className="text">
                                <h3>Develop</h3>
                                <p>Create efficient and scalable software customized to meet user needs utilizing programming skills and knowledge of software development tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" 
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <div className="text">
                                <h3>Innovate</h3>
                                <p>Leverage latest technologies and industry trends to develop innovative software solutions to solve complex problems and set new standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <div className="text">
                                <h3>Optimize</h3>
                                <p>Optimize software performance and usability through analytical problem-solving and software architecture expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-5">
                <p>Download my resume here</p>
                <a href="ben-savary-software-engineer.docx" download id="resume"><button className="btn-main">Download</button></a>   
                </div>
            </div>
        </div>
    );
}

export default whatido;