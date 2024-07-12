import {Link, Outlet} from 'react-router-dom'

const Navigator = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/create-booking">Create Booking</Link></li>
                    <li><Link to = "/">Create Hobby</Link></li>
                    <li><Link to = "/create-venue">Create Venue</Link></li>
                    <li><Link to = "/">Create User</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigator