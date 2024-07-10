import {Link} from 'react-router-dom'

const Booking = ( {booking} ) => {
    // venue.name
    // hobby.name
    // users.length
    // handleDelete

    //Ext - Add popup for delete functionality (e.g.eare you sure popup)
    
    
    return (
        <>
            <h2>{booking.hobby.name} at {booking.venue.name}</h2>
            <p>{booking.time}</p>
            <p>{booking.date}</p>
            {/* <p>No of attendees: {users.length}</p> */}
            <button>delete</button>
            <li><Link to = {`bookings/${booking.id}/update-booking`}>Update Booking</Link></li>
        </>
    )
}

export default Booking
