import BookingList from "../components/BookingList"
import Navigator from '../components/Navigator'
import CreateBooking from '../components/CreateBooking'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import UpdateBooking from "../components/UpdateBooking"
import { useState } from "react"

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
                    element: <BookingList />,
                  },
                  {
                    path: "/create-booking",
                    element: <CreateBooking />
                  },
                  {
                    path: "/update-booking",
                    element: <UpdateBooking />
                  }
                ]
              }
        ]
    )

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
export default BookingBuddiesContainer