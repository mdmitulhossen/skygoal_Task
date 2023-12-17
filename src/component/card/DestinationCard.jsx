import './destinationCard.css'
import card_image from '../../assets/card-image.png'
const DestinationCard = ({card}) => {
    return (
        <div className='card'>
            <img src={card.image} alt="" />
            <div className='card_content'>
                <p className='card_title'>{card.title}</p>
                <div className='card_footer'>
                    <p className='card_address'>{card.address}</p>
                    <p className='card_action'><i className='bx bx-dots-horizontal-rounded'></i></p>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;