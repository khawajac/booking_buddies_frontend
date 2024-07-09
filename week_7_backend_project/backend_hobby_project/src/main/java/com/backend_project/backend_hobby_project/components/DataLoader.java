package com.backend_project.backend_hobby_project.components;

import com.backend_project.backend_hobby_project.enums.DaysOfTheWeek;
import com.backend_project.backend_hobby_project.models.*;
import com.backend_project.backend_hobby_project.repositories.BookingRepository;
import com.backend_project.backend_hobby_project.repositories.HobbyRepository;
import com.backend_project.backend_hobby_project.services.BookingService;
import com.backend_project.backend_hobby_project.services.HobbyService;
import com.backend_project.backend_hobby_project.services.UserService;
import com.backend_project.backend_hobby_project.services.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserService userService;

    @Autowired
    VenueService venueService;

    @Autowired
    BookingService bookingService;

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    HobbyRepository hobbyRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Hobby fiveAside = new Hobby("Five a Side");
        hobbyRepository.save(fiveAside);

//        NEW HOBBIES
        Hobby paintBalling = new Hobby("Paintballing");
        hobbyRepository.save(paintBalling);
        Hobby pottery = new Hobby("Pottery");
        hobbyRepository.save(pottery);

//        NEW VENUES
        Venue wembly = new Venue("Wembly", "London", 90000);
        venueService.addVenue(wembly);
        Venue digbeth = new Venue("Digbeth", "Birmingham", 20);
        venueService.addVenue(digbeth);
        Venue balham = new Venue("Balham", "London", 20);
        venueService.addVenue(balham);

        List<DaysOfTheWeek> sunnyAvailability = new ArrayList<>();
        sunnyAvailability.add(DaysOfTheWeek.FRIDAYMORNING);
        sunnyAvailability.add(DaysOfTheWeek.TUESDAYEVENING);

        List<DaysOfTheWeek> danAvailability = new ArrayList<>();
        danAvailability.add(DaysOfTheWeek.MONDAYMORNING);
        danAvailability.add(DaysOfTheWeek.TUESDAYEVENING);

        List<DaysOfTheWeek> mariaAvailability = new ArrayList<>();
        mariaAvailability.add(DaysOfTheWeek.WEDNESDAYAFTERNOON);
        mariaAvailability.add(DaysOfTheWeek.TUESDAYEVENING);

        List<DaysOfTheWeek> adilAvailability = new ArrayList<>();
        adilAvailability.add(DaysOfTheWeek.TUESDAYEVENING);
        adilAvailability.add(DaysOfTheWeek.SATURDAYAFTERNOON);

        List<DaysOfTheWeek> denaAvailability = new ArrayList<>();
        denaAvailability.add(DaysOfTheWeek.WEDNESDAYMORNING);
        denaAvailability.add(DaysOfTheWeek.FRIDAYEVENING);

//        NEW USERS
        User adil = new User("Adil", 29, "London", "Lorem Ipsum", false, adilAvailability);
        userService.addUser(adil);
        User dena = new User("Dena", 23, "London", "Lorem Ipsum", false, denaAvailability);
        userService.addUser(dena);

        User sunny = new User("Sunny", 26, "Birmingham", "Lorem Ipsum", false, sunnyAvailability);
        userService.addUser(sunny);
        User dan = new User("Dan", 22, "Coventry", "Lorem Ipsum", false, danAvailability);
        userService.addUser(dan);
        User maria = new User("Maria", 25, "London", "Lorem Ipsum", true, mariaAvailability);
        userService.addUser(maria);

        userService.addHobbyToUser(fiveAside.getId(), sunny.getId());
        userService.addHobbyToUser(fiveAside.getId(), dan.getId());
        userService.addHobbyToUser(fiveAside.getId(), maria.getId());

//        ASSIGN NEW HOBBIES TO NEW USERS
        userService.addHobbyToUser(paintBalling.getId(), adil.getId());
        userService.addHobbyToUser(pottery.getId(), adil.getId());
        userService.addHobbyToUser(paintBalling.getId(), dena.getId());
        userService.addHobbyToUser(fiveAside.getId(), dena.getId());
        userService.addHobbyToUser(pottery.getId(), dena.getId());



        Booking booking1 = new Booking("18:00", "11/06/2024", wembly, fiveAside);
        bookingRepository.save(booking1);
        bookingService.addUserToBooking(sunny.getId(), booking1.getId());
        bookingService.addUserToBooking(dan.getId(), booking1.getId());
        bookingService.addUserToBooking(maria.getId(), booking1.getId());
        bookingRepository.save(booking1);

//        NEW BOOKINGS
        Booking booking2 = new Booking("14:00", "13/06/2024", balham , paintBalling);
        Booking booking3 = new Booking("10:00", "10/06/2024", digbeth, pottery);
        bookingRepository.save(booking2);
        bookingRepository.save(booking3);
        bookingService.addUserToBooking(adil.getId(), booking2.getId());
        bookingService.addUserToBooking(dena.getId(), booking3.getId());
        bookingService.addUserToBooking(dena.getId(), booking2.getId());
        bookingRepository.save(booking2);
        bookingRepository.save(booking3);
       }
}
