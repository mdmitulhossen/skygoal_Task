
import './destination.css';
import card_image from '../../../assets/card-image.png';
import card_image1 from '../../../assets/card-image-1.png';
import card_image2 from '../../../assets/card-image-2.png';
import card_image3 from '../../../assets/card-image-3.png';
import Carosel from '../../carosel/Carosel';

const destinationCard = [
    {
        id: 1,
        title: 'Harvard University',
        address: 'Cambridge, Massachusetts, UK',
        image: card_image
    },
    {
        id: 2,
        title: 'Oxford University',
        address: 'Oxford, England',
        image: card_image1
    }
    ,
    {
        id: 3,
        title: 'Stanford University',
        address: 'Stanford, California',
        image: card_image2
    }
    ,
    {
        id: 4,
        title: 'Nanyang University',
        address: 'Nanyang Ave, Singapura',
        image: card_image3
    }
    ,
    {
        id: 5,
        title: 'Oxford University',
        address: 'Oxford, England',
        image: card_image1
    },
    {
        id: 6,
        title: 'Nanyang University',
        address: 'Nanyang Ave, Singapura',
        image: card_image3
    }
    
]

const Destination = () => {
    return (
        <div className='destination'>
            <p className="destination_title">Our Destinations</p>
            <div>
                {/* <DestinationCard /> */}
                <Carosel cards={destinationCard}/>
            </div>
        </div>
    );
};

export default Destination;