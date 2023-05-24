import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import {socialLinks} from '../data';
const Navbar = () =>{
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
                </div>

                <PageLinks parentclass='nav-links' childclass='nav-link' idclass='nav-links'/>
                {/* <ul className="nav-links" id="nav-links">
                    {pageLinks.map(({id, href, text})=>{
                        
                        return (
                            <li key={id}>
                                <a href={href} className="nav-link">{text}</a>
                            </li>
                        );
                    })}
                </ul> */}

                

                <ul className="nav-icons">

                    {socialLinks.map((social) => {
                        return (
                            <SocialLinks key={social.id} {...social} itemClass='nav-icon'/>
                            // <li key={id}>
                            //     <a href={href} target="_blank" rel="noreferrer" itemClass="nav-icon"
                            //     ><i className={icon}></i></a>
                            // </li>
                        );
                    })}
            
                </ul>
            </div>
        </nav>                                                                    
        
    );
}

export default Navbar;