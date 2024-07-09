import BookingList from "../components/BookingList"
import Navigator from '../components/Navigator'
import BookingForm from '../components/BookingForm'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const BookingBuddiesContainer = () => {

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
                    path: "/booking-form",
                    element: <BookingForm />
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