import Booking from "./Booking"

const BookingList = ({allBookings}) => {
    
    const mapBookings = allBookings.map((booking) => {
        return <Booking booking={booking} key={booking.id}/>
    })
    
    
    return (
        <>
            <h1>Events Dashboard</h1>
            <h2>Upcoming bookings</h2>
            <ul>
                {mapBookings}
            </ul>
            <label htmlFor="">Search</label>
            <input type="text" placeholder="search..."/>
            <input type="submit" />
        </>
    )
}

export default BookingList