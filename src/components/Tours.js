
import Title from './Title';
import {tours} from '../data';
import TourList from './TourList';

const Tours = () =>{
    return (
    
        <section className="section" id="tours">
            {/* <div className="section-title">
            <h2>featured <span>tours</span></h2>
            </div> */}
            <Title title='featured' subTitle='tours' />
            <TourList />
            <div className="section-center featured-center">
                    {tours.map((tour)=>{
                        return (
                            <TourList key={tour.id} {...tour}/>
                        );
                    })}
            
            </div>
        </section>
        
    );
}

export default Tours;
