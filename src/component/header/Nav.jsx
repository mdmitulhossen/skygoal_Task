import { useState } from "react";

const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Schedules', link: '/schedules' },
    { name: 'Membership', link: '/membership' },
    { name: 'Pricing', link: '/pricing' },
]
const Nav = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <div 
            className={`navbar ${mobileMenu?'mobileOpen':'mobileClose'}`}>
                <div className="logo">

                </div>
                <ul className="menuItem">
                    {
                        menuItems.map((item, index) => {
                            return <li key={index}><a href="#">{item.name}</a></li>
                        })
                    }
                </ul>
                <div className="navbtn">
                    <p>Price</p>
                    <button className="btn">Course</button>
                </div>
            </div>
            <div className="mobileMenu">
                <button onClick={()=>setMobileMenu(!mobileMenu)}><i className='bx bx-menu'></i></button>
            </div>
            </>
    );
};

export default Nav;