import { useEffect, useState } from 'react';
import './carosel.css';
import DestinationCard from '../card/DestinationCard';

function getWindowDimensions() {
    const { innerWidth: width} = window;
    return {
        width
    };
}

// windowDimensions.width
 function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

const Carosel = ({ cards }) => {
    const {width} = useWindowDimensions()
    // const [width, setWidth] = useState(window.innerWidth);
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = width > 1024 ? 4 : width > 768 ? 3 : width > 600 ? 2 : 1;
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    // const startIndex = currentPage * cardsPerPage;
    const startIndex = currentPage;
    const endIndex = startIndex + cardsPerPage;
    console.log(startIndex, endIndex, currentPage)
    const visibleCards = cards.slice(startIndex, endIndex);
    return (
        <div className="carousel-container">

            <div
                className="card-container"
            >
                {visibleCards.map((card, index) => (
                    <DestinationCard key={startIndex + index} card={card} />
                ))}
            </div>
            <div
                className="pagination"
            >
                <button className='prev' onClick={handlePrev} disabled={currentPage === 0}>
                    <i className='bx bx-left-arrow-alt' ></i>
                </button>
                <p>
                    <span
                        className="page_no"
                    >{currentPage + 1}</span><span
                        className="page_count"
                    >/ {totalPages}</span>
                </p>
                <button className='next' onClick={handleNext} disabled={currentPage === totalPages - 1}>
                    <i className='bx bx-right-arrow-alt' ></i>
                </button>
            </div>
        </div>
    );
};

export default Carosel;