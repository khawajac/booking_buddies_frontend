import {useLoaderData, useNavigate} from 'react-router-dom'
import {useState} from 'react'

const CreateBooking = ({allVenues, allUsers, allHobbies, postBooking}) => {
    const navigate = useNavigate();

    const [newBookingDTO, setNewBookingDTO] = useState(
        {
            time: "",
            date: "",
            userIds: [],
            venueId: null,
            hobbyId: null,
        }
    )

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
        const copiedBooking = { ...newBookingDTO };
        copiedBooking[propertyName] = e.target.value;
        setNewBookingDTO(copiedBooking);
    }

    const handleAddingUserId = (e) => {
        const propertyName = e.target.name;
        const copiedBooking = { ...newBookingDTO };
        const newUser = allUsers.find((user) => {
            return user.id == e.target.value
        })
        console.log(newUser);
        copiedBooking[propertyName] = [newUser.id];
        setNewBookingDTO(copiedBooking);
    }


    const handleNumValueChange = (e) => {
        const propertyName = e.target.id;
        const copiedBooking = { ...newBookingDTO };
        copiedBooking[propertyName] = e.target.value;
        setNewBookingDTO(copiedBooking);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        postBooking(newBookingDTO);
        setNewBookingDTO({
            time: "",
            date: "",
            userIds: [],
            venueId: null,
            hobbyId: null,
        }); 
        navigate('/'); 
    }



    return (
        <>
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

                    <label htmlFor="userIds">Users</label>
                    <select 
                        name="userIds" 
                        id="userIds"
                        onChange={handleAddingUserId}
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
    )
}

export default CreateBooking