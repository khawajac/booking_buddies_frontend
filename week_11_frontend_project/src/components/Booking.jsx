import {Link} from 'react-router-dom'

const Booking = ( {booking} ) => {
    // venue.name
    // hobby.name
    // users.length
    // handleDelete

    //Ext - Add popup for delete functionality (e.g.eare you sure popup)
    
    
    return (
        <>
            <p>name of event</p>
            <p>time of booking</p>
            <p>date of booking</p>
            {/* <p>No of attendees: {users.length}</p> */}
            <button>delete</button>
            <li><Link to = {`bookings/${booking.id}/update-booking`}>Update Booking</Link></li>
        </>
    )
}

export default Booking
