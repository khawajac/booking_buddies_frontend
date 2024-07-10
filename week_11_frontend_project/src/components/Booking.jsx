import {Link} from 'react-router-dom'

const Booking = ( {booking} ) => {
    // venue.name
    // hobby.name
    // users.length
    // handleDelete

    //Ext - Add popup for delete functionality (e.g.eare you sure popup)
    
    
    return (
        <>
            <h2>name of event</h2>
            <p>time of booking</p>
            <p>date of booking</p>
            {/* <p>No of attendees: {users.length}</p> */}
            <button>delete</button>
            <p><Link to = {`bookings/${booking.id}/update-booking`}>Update Booking</Link></p>
        </>
    )
}

export default Booking