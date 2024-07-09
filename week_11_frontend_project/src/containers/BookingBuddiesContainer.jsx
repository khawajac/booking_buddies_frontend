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
                    path: "/update-booking",
                    element: <UpdateBooking allBookings={allBookings} allVenues={allVenues} allUsers={allUsers} allHobbies={allHobbies}/>
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