import './footer.css'

const Footer = () => {
    return (
        <div className='footer_container'>
            <p className='footer_title'>
                Student Special: Discounted rates <br />
                on tropical getaways!
            </p>
            <p>Let’s embody your beautiful ideas together, simplify the
                <br /> way you visualize your next big things.
            </p>

            <div className='footer_menu'>
                <div>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Sales and Refunds</li>
                        <li>Legal</li>
                    </ul>
                </div>
                <div>
                    <ul className='footer_menu_items'>
                        <li>About</li>
                        <li>Schedules</li>
                        <li>Pricing</li>
                        <li>Membership</li>
                        <li>Joins</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;