import {useLoaderData, useNavigate} from 'react-router-dom'
import {useState} from 'react'

const UpdateBooking = ({allBookings, allVenues, allUsers, allHobbies, setAllBookings, updateBooking}) => {
//    pass in setAllBookings

    const navigate = useNavigate();

    const booking = useLoaderData()

    // const [time, setTime] = useState("");
    // const [date, setDate] = useState("");
    // const [venue, setVenue] = useState(0);
    // const [hobby, setHobby] = useState(0);
    const [stateBooking, setstateBooking] = useState(
        {
            time: booking.time,
            date: booking.date,
            userIds: booking.userIds,
            venueId: booking.venue.id,
            hobbyId: booking.hobby.id,
        }
    )
   
    const usersNames = booking.users.map((user) => {
        return <p key={user.id}> {user.name}</p>
    })

    const venueOptions = allVenues.map((venue) => {
        return <option key={venue.id}>{venue.name}</option>
    })

    const hobbyOptions = allHobbies.map((hobby) => {
        return <option key={hobby.id}>{hobby.name}</option>
    })

    const userOptions = allUsers.map((user) => {
        return <option key={user.id}>{user.name}</option>
    })


    const handleTextValueChange = (e) => {
        const propertyName = e.target.name;
        const copiedBooking = { ...stateBooking };
        copiedBooking[propertyName] = e.target.value;
        setstateBooking(copiedBooking);
    }

    const handleNumValueChange = (e) => {
        const propertyName = e.target.name;
        const copiedBooking = { ...stateBooking };
        copiedBooking[propertyName] = parseInt(e.target.value);
        setstateBooking(copiedBooking);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTime(booking, stateBooking.time);
        updateDate(booking, stateBooking.date);
        updateVenue(booking, stateBooking.venueId);
        updateHobby(booking, stateBooking.hobbyId);
        
        navigate("/");
    }



    return (
        booking ? 

        <>
            <article>
                <p>{booking.time}</p>
                <p>{booking.date}</p>
                {usersNames}
                <p>{booking.venue.name}</p>
                <p>{booking.hobby.name}</p>
            </article>

            <article>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="time">Time</label>
                    <input 
                        name="time"
                        id='time'
                        onChange={handleTextValueChange}
                        type="text" 
                        placeholder="Input time e.g. 18:00..."/>
                    <label htmlFor="date">Date</label>
                    <input 
                        name="date"
                        id='date'
                        onChange={handleTextValueChange}
                        type="text" 
                        placeholder="Input date DD/MM/YYYY..."/>

                    <label htmlFor="usersIds">Users</label>
                    <select 
                        name="usersIds" 
                        id="usersIds"
                        type="number"
                        >
                    <option value="select-users">Select users</option>
                        {userOptions}
                    </select>

                    <label htmlFor="venueId">Venue</label>
                    <select
                            name="venueId"
                            id='venueId'
                            onChange={handleNumValueChange}
                            type="number" 
                            >
                        <option value="select-venue">Choose a venue</option>
                        {venueOptions}
                    </select>

                    <label htmlFor="hobbyId">Hobby</label>
                    <select 
                            name="hobbyId"
                            id='hobbyId'
                            onChange={handleNumValueChange}
                            type="number" 
                            >
                        <option value="select-hobby">Choose a hobby</option>
                        {hobbyOptions}
                    </select>
                    <input type="submit" />

                </form>

            </article>
        </>
        :
        <p>Loading...</p>
    )
}


export default UpdateBooking