import React from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery= function() {
    /* lightbox1 */
    const [lighbx, setlighbx] = React.useState(false);
    const handleBtnClick = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    /* lightbox2 */
    const [lighbx1, setlighbx1] = React.useState(false);
    const handleBtnClick1 = (): void => {
      setlighbx1(!lighbx1);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose1 = (): void => {
      setlighbx1(!lighbx1);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    /* lightbox2 */
    const [lighbx2, setlighbx2] = React.useState(false);
    const handleBtnClick2 = (): void => {
      setlighbx2(!lighbx2);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose2 = (): void => {
      setlighbx2(!lighbx2);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };
    return(
            <div className="container">
            <GlobalStyles/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Projects</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                <div className="col-md-8 pb-5 text-center m-auto"
	            	data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
	            	>
	            	<p>Here you will find my most recent and notable projects, showcasing my skills and expertise in various areas such as software engineering, web development, and design. Each project is a reflection of my passion for creative problem solving and my commitment to delivering high quality work that meets the needs of my clients. As a software engineer, I have experience working with a variety of programming languages and frameworks to build scalable and efficient applications that deliver real value to end users.</p>  
	            </div>
                 <Masonry
                    className={"row my-gallery-class"} elementType={"div"}>
                    <div className="col-lg-4 image-element-class de_modal de_modal" onClick={handleBtnClick}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Habitude</h3>
                                <h5 className="d-tag">Personal Development Blog</h5>
                            </div>
                            <img src="./img/gallery/habitude_about.PNG" alt="gallery"/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick1}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Wealth Wizard</h3>
                                <h5 className="d-tag">Expense Tracker</h5>
                            </div>
                            <img src="./img/gallery/wealth_wizard.PNG" alt="gallery"/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick2}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Time Box</h3>
                                <h5 className="d-tag">Task Manager</h5>
                            </div>
                            <img src="./img/gallery/timebox.PNG" alt="gallery"/>
                        </div>
                    </div>
                  </Masonry>

                  {/* lightbox1 */}
                  {lighbx && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <div className="row g-4">
                                    <div className="col-lg-12 pb-3 item">
                                        <img src="./img/gallery/habitude_about.PNG" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-12 pb-3 item">
                                        <img src="./img/gallery/habitude_add.PNG" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-12 item">
                                        <img src="./img/gallery/habitude_contact.PNG" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h1>Habitude</h1>
                                <h3>Personal Development Blog</h3>
                                <p>As a member of a dynamic team of three skilled software engineers, I participated in a week-long sprint to develop a full-stack application using the advanced MERN stack (MongoDB, Express, React.js, Node.js). Our application delivers an exceptional user experience, boasting comprehensive CRUD (create, read, update, and delete) operations.</p>
                               
                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Type: <span>Web Application</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Year: <span>2023</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Live: <span><a href="https://habitude.herokuapp.com/" target="_blank" rel="noreferrer">habitude.herokuapp.com</a></span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>GitHub: <span><a href="https://github.com/rbsavary/habitude-backend" target="_blank" rel="noreferrer">github.com</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  {/* lightbox2 */}
                  {lighbx1 && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose1}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <div className="row g-4">
                                    <div className="col-lg-12 item">
                                        <img src="./img/gallery/wealth_wizard.PNG" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h1>Wealth Wizard</h1>
                                <h3>Expense Tracker</h3>
                                <p>Built using Django, React, and MySQL. It helps users manage their finances effectively by tracking expenses, budgeting, and monitoring their progress towards achieving their financial goals. The app’s intuitive interface provides a user-friendly experience, making it easy to navigate and manage finances effectively.</p>
                               
                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Type: <span>Web Application</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Year: <span>2023</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>GitHub: <span><a href="https://github.com/rbsavary/wealth_wizard" target="_blank" rel="noreferrer">github.com</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                {/* lightbox3 */}
                {lighbx2 && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose2}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <div className="row g-4">
                                    <div className="col-lg-12 item">
                                        <img src="./img/gallery/timebox.PNG" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 de_project-info">
                                <h1>Time Box</h1>
                                <h3>Task Manager</h3>
                                <p>As part of a dynamic team of 3 skilled software engineers, I led the development of the front-end of a cutting-edge application utilizing React, Django, and PostgreSQL technologies. Following best practices for component design and state management, we crafted a user-friendly interface, providing a seamless user experience. I also implemented the back-end using Django, setting up a RESTful API to enable seamless data communication with the front-end and ensure smooth application functionality.</p>
                               
                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Type: <span>Web Application</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Year: <span>2023</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>GitHub: <span><a href="https://github.com/rmzimmerman98/task-manager-backend" target="_blank" rel="noreferrer">github.com</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>Gi
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

      </div>
    );
}

export default Gallery;