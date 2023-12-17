import './testimonialCard.css';
const TestimonialCard = ({ card }) => {
    return (
        <div className='testimonial_card_container'>
            <img className='testimonial_card_image' src={card.image} alt="" />
            <p>{card.title}</p>
            <div className='divider'></div>
            <p>{card.comment}</p>
        </div>
    );
};

export default TestimonialCard;