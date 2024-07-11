import Booking from "./Booking"

const BookingList = ({allBookings}) => {
    
    const mapBookings = allBookings.map((booking) => {
        return <Booking booking={booking} key={booking.id}/>
    })
    
    
    return (
        <>
        <section id='list-section'>
            <h1>Events Dashboard</h1>
            <h2>Upcoming bookings</h2>
            <div className="container">
                <ul>
                    {mapBookings}
                </ul>
            </div>
            <label htmlFor="search">Search</label>
            <input id = "search" type="text" placeholder="search..."/>
            <input type="submit" />
        </section>
            
        </>
    )
}

export default BookingList