import BookingList from "../components/BookingList"
import Navigator from '../components/Navigator'
import CreateBooking from '../components/CreateBooking'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import UpdateBooking from "../components/UpdateBooking"
import { useState, useEffect } from "react"

const BookingBuddiesContainer = () => {

  const [allBookings, setAllBookings] = useState([]);
  const [allVenues, setAllVenues] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allHobbies, setAllHobbies] = useState([]);

    const fetchAllBookings = async () => {
      const response = await fetch("http://localhost:8080/bookings");
      const data = await response.json();
      setAllBookings(data);
    }   

    const fetchAllVenues = async () => {
      const response = await fetch("http://localhost:8080/venues");
      const data = await response.json();
      setAllVenues(data);
    }   

    const fetchAllUsers = async () => {
      const response = await fetch("http://localhost:8080/users");
      const data = await response.json();
      setAllUsers(data);
    }   
    const fetchAllHobbies = async () => {
      const response = await fetch("http://localhost:8080/hobbies");
      const data = await response.json();
      setAllHobbies(data);
    }   

    const bookingLoader = ({params}) => {
      const booking = allBookings.find(booking => {
      
        return booking.id === parseInt(params.id)
        
    })
    return booking;
    }

    const updateBooking = async (booking, bookingDTO) => {
      console.log(booking);
      console.log(bookingDTO); 
      await fetch(`http://localhost:8080/bookings/${booking.id}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bookingDTO)
      });
    }

    

    useEffect(() => {
      fetchAllBookings(),
      fetchAllVenues(),
      fetchAllUsers(),
      fetchAllHobbies()
    },[])

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Navigator />,
                children : [
                  {
                    path: "/",           
                    element: <BookingList allBookings={allBookings}/>,
                  },
                  {
                    path: "/create-booking",
                    element: <CreateBooking allBookings={allBookings} allVenues={allVenues} allUsers={allUsers} allHobbies={allHobbies}/>
                  },
                  {
                    path: "bookings/:id/update-booking",
                    loader: bookingLoader,
                    element: <UpdateBooking allBookings={allBookings} allVenues={allVenues} allUsers={allUsers} allHobbies={allHobbies} setAllBookings={setAllBookings} updateBooking={updateBooking} />
                  }
                ]
              }
        ]
    )

    return (
        <>
            <header>Placeholder header</header>
            <main>
              <RouterProvider router={router}/>
            </main>
            <footer>Placeheader footer</footer>
        </>
    )
}
export default BookingBuddiesContainer