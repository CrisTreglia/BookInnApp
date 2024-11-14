# BookInn App

The **BookInn App** is a hotel booking platform created to simplify the process of finding and reserving accommodations. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this project aims to provide a seamless booking experience while utilizing modern web technologies and third-party integrations for efficient payment and image management.

## About the Project
The **BookInn App** was developed as a final project for our group at the Software Development Diploma at **Red Deer Polytechnic**. This project was collaboratively built by **Cristofer Treglia**, **Carson Pho**, **Douglas Spicer**, and **Pablo Madera**. The aim was to create a functional, full-stack application that mimics the capabilities of popular hotel booking platforms like Booking.com. Users are able to browse hotel listings, register or log in, make secure bookings, and manage their reservations, all within an intuitive and responsive user interface.

The main objectives behind the development of BookInn are:
- To create a user-friendly hotel booking experience from start to finish.
- To ensure secure data management through authentication and encrypted payments.
- To provide a structured learning opportunity in using the MERN stack.
- To facilitate effective hotel listing management by owners, including adding, editing, and deleting listings.

## Features Overview
The **BookInn App** includes the following key features:

- **User Authentication**: Provides a secure login and registration mechanism using JWT (JSON Web Tokens).
- **Hotel Management**: Allows owners to manage their listings—adding, editing, deleting, and viewing hotels, with image management integrated via **Cloudinary**.
- **Search & Filter Functionality**: Users can search for hotels and apply filters to find options matching their preferences.
- **Booking and Reservations**: Users can make bookings, view booking histories, and manage reservations directly in the app.
- **Payment Processing**: Integrates **Stripe** to handle secure payments during the booking process.
- **Responsive Design**: Designed to provide a smooth experience on both desktop and mobile devices.

## Technologies and Tools Used
This project combines several technologies to deliver a full-stack solution:

- **Frontend**: Built using **React** for a dynamic and responsive user interface, styled with **Tailwind CSS**.
- **Backend**: Powered by **Node.js** and **Express.js** to provide a RESTful API for the frontend.
- **Database**: **MongoDB** serves as the database, providing scalable data storage for user accounts, hotel listings, and bookings.
- **Payment Integration**: Utilizes **Stripe** for secure and easy payment processing.
- **Image Management**: **Cloudinary** is used for efficient storage and retrieval of hotel images.
- **Testing**: Implemented using **Jest** to ensure functionality through unit and integration tests.
- **Deployment**: Hosted on **AWS** and **Heroku** for scalability and accessibility.

## Development Goals

The development of BookInn App was driven by several goals:

1. **Educational Purpose**: The project was built as a capstone exercise to enhance skills in full-stack web development, including both client-side and server-side programming.
2. **Practical Application**: BookInn aims to create a practical, real-world solution that encompasses major aspects of web application development—such as CRUD operations, secure user authentication, integration with external services (payments and image storage), and responsiveness.
3. **Collaborative Development**: This project was designed to be collaborative, with each developer taking ownership of different parts of the system. Working in a SCRUM environment, it focuses on emulating real-world agile practices to build an end-to-end solution.

## Key Learnings and Challenges

- **Integrating Stripe for Payments**: Payment integration presented challenges with handling test transactions and managing Stripe’s API, which required careful attention to secure key management and ensuring a seamless user experience.
- **Agile Workflow**: The team used SCRUM methodology, conducting daily stand-ups and weekly sprints. This process allowed the team to identify blockers early, adapt to changes, and ensure timely delivery of features.
- **Scalable Design**: Designing the database and overall architecture to support a growing number of users and hotels required careful consideration, particularly in handling concurrent bookings and image management.

## Future Improvements

The **BookInn App** is functional, but there are areas where improvements could be made:
- **Enhanced User Roles**: Currently, users can book hotels, but adding a distinct role for hotel owners with enhanced management capabilities could provide additional functionality.
- **Review System**: Adding a user review and rating system for hotels would enhance the user experience and make the platform more interactive.
- **Improved Search Algorithm**: Implementing advanced search algorithms, potentially with machine learning, could improve the accuracy and relevance of hotel recommendations.

## Acknowledgements
- **MongoDB Atlas** for providing easy-to-use database hosting.
- **Cloudinary** for image management and integration support.
- **Stripe** for making payment integration straightforward and secure.
- **Tailwind CSS** for providing a powerful utility-first CSS framework that enabled rapid UI design.
- **Figma** for prototyping and designing the initial wireframes for the project.
