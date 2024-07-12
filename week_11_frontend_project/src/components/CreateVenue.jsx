import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
 
const CreateVenue = ({allVenues}) => {

    // const venue = useLoaderData();

    // const [newVenueDTO, setNewVenueDTO] = useState(
    //     {
    //         name: venue.name,
    //         location: venue.location
    //     }
    // )

    const mapVenues = allVenues.map((venue) => {
        if (allVenues.length < 1) {
            return <p>Loading venues</p>
        }
        return <li className="update-article" key={venue.id}>{venue.name}, {venue.location}</li>
    })

    return (
        <>
            <p>Create Venue</p>
            <ul>
                {mapVenues}
            </ul>
        </>
    )
}

export default CreateVenue