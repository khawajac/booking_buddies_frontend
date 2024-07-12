import {useLoaderData, useNavigate} from 'react-router-dom'
import {useState} from 'react'

const UpdateBooking = ({allBookings, allVenues, allUsers, allHobbies, setAllBookings, updateBooking}) => {
//    pass in setAllBookings

    const navigate = useNavigate();

    const booking = useLoaderData();

    const userIds = booking.users.map((user) => {
        return user.id;
    })

    const [bookingDTO, setbookingDTO] = useState(
        {
            time: booking.time.substring(0,5),
            date: booking.date,
            userIds: userIds,
            venueId: booking.venue.id,
            hobbyId: booking.hobby.id,
        }
    )

    const usersNames = booking.users.map((user) => {
        return <p className="user-names" key={user.id}> {user.name}</p>
    })

    const venueOptions = allVenues.map((venue) => {
        return <option key={venue.id} value={venue.id}>{venue.name}</option>
    })

    const hobbyOptions = allHobbies.map((hobby) => {
        return <option key={hobby.id} value={hobby.id}>{hobby.name}</option>
    })

    const userOptions = allUsers.map((user) => {
        return <option key={user.id} value={user.id}>{user.name}</option>
    })


    const handleTextValueChange = (e) => {
        const propertyName = e.target.name;
        const copiedBooking = { ...bookingDTO };
        copiedBooking[propertyName] = e.target.value;
        setbookingDTO(copiedBooking);
    }

    const handleDateChange = (e) => {
        const propertyName =  e.target.name;
        const copiedBooking = { ...bookingDTO };
        copiedBooking[propertyName] = e.target.value;
        setbookingDTO(copiedBooking);
    }

    const handleAddingUserId = (e) => {
        const propertyName = e.target.name;
        const copiedBooking = { ...bookingDTO };
        const newUser = allUsers.find((user) => {
            return user.id == e.target.value
        })
        copiedBooking[propertyName] =  [newUser.id,...userIds];
        setbookingDTO(copiedBooking);
    }


    const handleNumValueChange = (e) => {
        const propertyName = e.target.id;
        const copiedBooking = { ...bookingDTO };
        copiedBooking[propertyName] = e.target.value;
        setbookingDTO(copiedBooking);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedBooking = {...bookingDTO}
        updatedBooking.date = new Date(bookingDTO.date).toLocaleDateString()
        updateBooking(booking,updatedBooking)
        navigate("/");
    }


    return (
        booking ? 

        <>
            <div>
                <article className='update-article'>
                    {usersNames}
                </article>
            </div>

            <article>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="time">Time</label>
                    <input 
                        name="time"
                        id='time'
                        onChange={handleTextValueChange}
                        type="time"
                        value={bookingDTO.time} 
                        placeholder="Input time e.g. 18:00..."/>
                    <label htmlFor="date">Date</label>
                    <input 
                        name="date"
                        id='date'
                        onChange={handleDateChange}
                        type="date"
                        value={bookingDTO.date} 
                        placeholder="Input date DD/MM/YYYY..."/>

                    <label htmlFor="userIds">Users</label>
                    <select 
                        name="userIds" 
                        id="userIds"
                        onChange={handleAddingUserId}
                        type="number"
                        value={bookingDTO.userIds[0]}
                        >
                    <option value="select-users" >Select users</option>
                        {userOptions}
                    </select>

                    <label htmlFor="venueId">Venue</label>
                    <select
                            name="venueId"
                            id='venueId'
                            onChange={handleNumValueChange}
                            type="number"
                            value={bookingDTO.venueId} 
                            >
                        <option value="select-venue" >Choose a venue</option>
                        {venueOptions}
                    </select>

                    <label htmlFor="hobbyId">Hobby</label>
                    <select 
                            name="hobbyId"
                            id='hobbyId'
                            onChange={handleNumValueChange}
                            type="number"
                            value={bookingDTO.hobbyId} 
                            >
                        <option value="select-hobby" >Choose a hobby</option>
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