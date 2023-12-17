import { useState } from 'react';
import './bookNowCard.css';

const BookNowCard = () => {
    const [inputValue, setInputValue] = useState('');
    const [star, setStar] = useState(0);
    const [room, setRoom] = useState(0);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className='bookNow_card'>
            <p className='form_title'>Book Now</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className='bookForm'>
                <div className='city'>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter city"
                    />
                </div>
                <div>
                    <label htmlFor="arrival">Arrival</label>
                    <input
                        type="text"
                        id="arrival"
                        placeholder="e.g.,10 October"
                    />
                </div>
                <div>
                    <label htmlFor="departure">Departure</label>
                    <input
                        type="text"
                        id="departure"
                        placeholder="e.g.,11 October"
                    />
                </div>
                <div>
                    <label htmlFor="star">Star</label>
                    <div id='star' className='increment_decrement'>
                        <p onClick={()=>setStar(star - 1)} className='minus'><i className='bx bx-minus' ></i></p>
                        <p className='increment_decrement_value'>{star}</p>
                        <p onClick={()=>setStar(star + 1)}  className='plus'><i className='bx bx-plus' ></i></p>
                    </div>
                </div>
                <div>
                    <label htmlFor="room">Room</label>
                    <div id='room' className='increment_decrement'>
                        <p onClick={()=>setRoom(star - 1)} className='minus'><i className='bx bx-minus' ></i></p>
                        <p className='increment_decrement_value'>{room}</p>
                        <p onClick={()=>setRoom(star + 1)}  className='plus'><i className='bx bx-plus' ></i></p>
                    </div>
                </div>
              <div>
                <button className='bookNowBtn'>BOOK NOW</button>
              </div>
            </div>
        </div>
    );
};

export default BookNowCard;