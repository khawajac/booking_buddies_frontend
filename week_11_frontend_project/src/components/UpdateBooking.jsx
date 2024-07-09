import {useLoaderData} from 'react-router-dom'


const UpdateBooking = ({allBookings, allVenues,allUsers, allHobbies}) => {
   
   const booking = useLoaderData()
   
    return (
        booking ? 

        <>
            <p>Update booking</p>
        </>
        :
        <p>Loading...</p>
    )
}


export default UpdateBooking