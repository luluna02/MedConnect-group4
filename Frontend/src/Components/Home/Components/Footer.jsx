import React from "react";
import Wrapper from "../../Wrapper";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <Wrapper>
                <footer>
                    <div >
                        <p className="footer-social">Nous contacter</p>
                        <div className="footer-social">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaYoutube /></a>
                        </div>
                    </div>
                    <div>
                        <p className="footer-contact">Adress of headquarters : 25, Street 8603 - Z.I.La Charguia1 2035 Tunis Carthage, Tunisie
                            <br />Phone. : +216 71 809 321
                            <br />Fax : +216 71 809 320
                            <br />Tel PV : +216 71 804 210
                            <br />E-mail : PV@teriak.com
                            <br />Factory adress : Industrial Zone Cheylus 1111 JEBEL OUEST, Tunisie
                            <br />Phone. : +216 72 640 600
                            <br />Fax : +216 72 640 802
                            <br />E-mail : teriak@teriak.com</p>
                    </div>
                </footer>
            </Wrapper>
        </div>
    )
}

export default Footer;