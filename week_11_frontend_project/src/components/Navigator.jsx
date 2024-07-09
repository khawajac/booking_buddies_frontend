import {Link, Outlet} from 'react-router-dom'

const Navigator = () => {
    return (
        <>
            <nav>
                <ul>
                    {/* <li><Link to = "/">Events Dashboard</Link></li> */}
                    <li><Link to = "/booking-form">Create Booking</Link></li>
                </ul>
            </nav>
        <Outlet/>
        </>
    )
}

export default Navigator