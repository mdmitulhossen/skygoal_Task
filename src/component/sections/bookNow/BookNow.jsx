import BookNowCard from '../../card/BookNowCard';
import './bookNow.css';
import bookNowImage from '../../../assets/bookNow.png';

const BookNow = () => {
    return (
        <div className='bookNow_container'>
            {/* Ellipse */}
            <div className='ellipse ellipse_bookNow_circle_yellow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M56.5 113C87.7041 113 113 87.7041 113 56.5C113 25.2959 87.7041 0 56.5 0C25.2959 0 0 25.2959 0 56.5C0 87.7041 25.2959 113 56.5 113ZM56.5 87.4405C73.588 87.4405 87.4405 73.588 87.4405 56.5C87.4405 39.412 73.588 25.5595 56.5 25.5595C39.412 25.5595 25.5595 39.412 25.5595 56.5C25.5595 73.588 39.412 87.4405 56.5 87.4405Z" fill="#F8E27E" fillOpacity="0.2" />
                </svg>
            </div>
            {/* left */}
            <div className='bookNow_image_container'>
                <img src={bookNowImage} alt="" />
            </div>

            {/* right */}
            <div className='bookNow_form_container'>
                <BookNowCard />
            </div>
        </div>
    );
};

export default BookNow;