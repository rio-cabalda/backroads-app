
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import {socialLinks} from '../data';
const Footer = () => {
    return (
      
        <footer className="section footer">
            <PageLinks parentclass='footer-links' childclass='footer-link' idclass =''/>
            {/* <ul className="footer-links">
                    {pageLinks.map(({id, href, text})=>{
                        
                        return (
                            <li key={id}>
                                <a href={href} className="footer-link">{text}</a>
                            </li>
                        );
                    })}
            </ul> */}


            <SocialLinks parentClass='footer-icons' />
            <ul className="footer-icons">
                
                    {socialLinks.map((social) => {
                        return (
                            <SocialLinks key={social.id} {...social} itemClass='nav-icon'/>
                            // <li key={id}>
                            //     <a href={href} target="_blank" rel="noreferrer" itemClass='nav-icon'"
                            //     ><i className={icon}></i></a>
                            // </li>
                        );
                    })}                  
            </ul>
            
            <p className="copyright">
                    copyright &copy; Backroads travel tours company <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
       
    );
}

export default Footer;