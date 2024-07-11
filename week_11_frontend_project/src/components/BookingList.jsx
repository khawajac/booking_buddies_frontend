import Booking from "./Booking"

const BookingList = ({allBookings, deleteBooking}) => {
    
    const mapBookings = () => {
        if(allBookings.length < 1) {
            return <p>Loading bookings</p>
        }
        return allBookings.map((booking) => {
            if (booking) {
                return <Booking booking={booking} key={booking.id} deleteBooking={deleteBooking}/>
            } else {
                return <p>Loading data...</p>
            }
            
        })
    } 
    
    return (
        <>
        <section id='list-section'>
            <h1>Events Dashboard</h1>
                <label htmlFor="search">Search</label>
                <input id = "search" type="text" placeholder="search..."/>
                <input className="search-button" type="submit" />
            <h2>Upcoming bookings</h2>
            <div className="container">
                <ul>
                    {mapBookings()}
                </ul>
            </div>
        </section>
            
        </>
    )
}

export default BookingList