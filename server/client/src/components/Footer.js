import React from 'react'

const Footer = () => {
    return (
        <div>
            
<div className="footer-dark">
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                
                <div className="col item social">
                    <h3>Thunderbeast Gaming</h3>
                    <a href="#">
                    <i className="icon ion-social-facebook"></i></a>
                    <a href="#"><i className="icon ion-social-twitter"></i>
                    </a><a href="#"><i className="icon ion-social-snapchat"></i>
                    </a><a href="https://www.instagram.com/sameer_._hussain_._/"><i className="icon ion-social-instagram"></i>
                    </a></div>

            </div>
            {/* <p className="copyright">Thunderbeast Gaming © 2021
                Copyright &copy; 2021 All rights reserved > </a>
            </p> */}
        </div>
    </footer>
    </div>
        </div>
    )
}

export default Footer

