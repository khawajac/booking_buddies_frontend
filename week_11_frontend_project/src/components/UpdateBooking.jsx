import {useLoaderData} from 'react-router-dom'
import {useState} from 'react'

const UpdateBooking = ({allBookings, allVenues,allUsers, allHobbies, setAllBookings}) => {
//    pass in setAllBookings

    const booking = useLoaderData()

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [venue, setVenue] = useState(0);
    const [hobby, setHobby] = useState(0);
   
    return (
        booking ? 

        <>
            <article>
                <p>{booking.time}</p>
                <p>{booking.date}</p>
                <p>{booking.venue.name}</p>
                <p>{booking.hobby.name}</p>
            </article>

            <article>
                <form>
                    <label htmlFor="time">Time</label>
                    <input 
                        onChange={(e) => setTime(e.target.value)}
                        type="text" 
                        placeholder="Input time e.g. 18:00..."/>
                    <label htmlFor="date">Date</label>
                    <input 
                        onChange={(e) => setDate(e.target.value)}
                        type="text" 
                        placeholder="Input date YYYY/MM/DD..."/>
                    <label htmlFor="venue">Venue</label>
                    <input 
                        onChange={(e) => setVenue(e.target.value)}
                        type="text" 
                        placeholder="Pick venue..."/>
                    <label htmlFor="hobby">Hobby</label>
                    <input 
                        onChange={(e) => setHobby(e.target.value)}
                        type="text" 
                        placeholder="Pick hobby..."/>
                </form>
            </article>
        </>
        :
        <p>Loading...</p>
    )
}


export default UpdateBooking