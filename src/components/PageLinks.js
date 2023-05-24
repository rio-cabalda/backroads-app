import {pageLinks} from '../data';

const PageLinks = ({parentclass,childclass, idclass}) =>{
    return (
       
        <ul className={parentclass} id={idclass}>
            {pageLinks.map(({id, href, text})=>{
                
                return (
                    <li key={id}>
                        <a href={href} className={childclass}>{text}</a>
                    </li>
                );
            })}
        </ul>
    );
}

export default PageLinks;