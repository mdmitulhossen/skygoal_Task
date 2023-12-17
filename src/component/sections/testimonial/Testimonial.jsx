import TestimonialCard from '../../card/TestimonialCard';
import './testimonial.css'
import testimonial1 from '../../../assets/testimonial1.png'
import testimonial2 from '../../../assets/testimonial2.png'
import testimonial3 from '../../../assets/testimonial3.png'

const testimonialCards =[
    {
        title: 'Corey Korsgaard',
        image: testimonial3,
        comment:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        title: 'Jakob Aminoff',
        image: testimonial2,
        comment:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        title: 'Carla Press',
        image: testimonial1,
        comment:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
]

const Testimonial = () => {
    return (
        <div className='testimonial_container'>
            <p className='testimonial_title'>Testimonials</p>
            <div className='testimonial_cards'>
                {
                    testimonialCards.map((card, index) => <TestimonialCard key={index} card={card} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;