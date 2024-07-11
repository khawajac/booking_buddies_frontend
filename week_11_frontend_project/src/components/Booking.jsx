import {Link, useNavigate} from 'react-router-dom'

const Booking = ( {booking, deleteBooking} ) => {
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteBooking(booking.id);
        navigate("/")
    
    }
    
    return (
        <>
        <section className='booking-container'>
            <h2>{booking.hobby.name} at {booking.venue.name}</h2>
            <p>{booking.time}</p>
            <p>{booking.date}</p>
            {/* <p>No of attendees: {users.length}</p> */}
            <div className='booking-buttons'>
            <button className='update-button'><Link to = {`bookings/${booking.id}/update-booking`}>Update Booking</Link></button>
                <button onClick={handleDelete} className='delete-button'>Delete</button>
            </div>
        </section>
        </>
    )
}

export default Booking; 
