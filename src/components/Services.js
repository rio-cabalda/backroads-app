import Title from './Title';
import {services} from '../data';
import ServiceList from './ServiceList';

const Services = () =>{
    return (
       
        <section className="section services" id="services">
            {/* <div className="section-title">
            <h2>our <span>services</span></h2>
            </div> */}
            <Title title='our' subTitle='services' />
            
            <div className="section-center services-center">
            
                {services.map((service) => {
                    return (
                        <ServiceList key={service.id} {...service}/>     
                            );
                })}
            </div>
        </section>
       
    );
}

export default Services;
