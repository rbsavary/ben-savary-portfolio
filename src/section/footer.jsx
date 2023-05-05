import React from 'react';

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"> 
                        <p className="copy">&copy; Copyright 2023 - Ben Savary</p>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/bensavary/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a href="https://github.com/rbsavary" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;