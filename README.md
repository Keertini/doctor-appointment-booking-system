# Doctor Appointment Booking System

The Doctor Appointment Booking System is a comprehensive web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) for efficiently scheduling appointments with healthcare providers. This system offers users a seamless and intuitive platform for booking appointments, managing feedback, and facilitating communication between patients and doctors.

## Features

- **User Authentication:** Secure user authentication system ensures only registered users can access appointment booking functionalities.
- **Appointment Booking:** Users can easily search for available doctors, select appointment slots, and book appointments seamlessly.
- **Feedback Submission:** Users can submit feedback and ratings for healthcare providers, enabling continuous improvement and accountability.
- **Dynamic Search:** Powerful search functionality allows users to filter doctors based on location, specialty, and other criteria.
- **PDF Generation:** Automated PDF generation for booked appointments provides users with a printable record of their appointments.

## Architecture

### Backend

- **Server Setup:** Node.js and Express.js are used to establish the server environment and handle API requests.
- **Database:** MongoDB is employed as the database solution for efficient data storage and retrieval.
- **Authentication:** JWT (JSON Web Tokens) are used for secure user authentication and authorization.
- **Modular Structure:** Controllers, models, routes, and utils folders are organized for clear separation of concerns and maintainability.

### Frontend

- **React Components:** The frontend is built using React.js, with components organized for modularity and reusability.
- **User Interface:** User-friendly interface with intuitive navigation and interactive features for a seamless user experience.
- **Dynamic Data Fetching:** Real-time data fetching ensures users have access to up-to-date information on available doctors and appointments.
- **Responsive Design:** Responsive design ensures optimal viewing experience across a range of devices and screen sizes.

## Installation

To run the Doctor Appointment Booking System locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd doctor-appointment-booking-system`
3. Install dependencies for both backend and frontend:
   - Backend:
     ```bash
     cd backend && npm install && npm install bcryptjs cookie-parser cors dotenv express jsonwebtoken mongodb mongoose nodemon
     ```
   - Frontend:
     ```bash
     cd frontend && npm install && npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event bootstrap jspdf react react-dom react-responsive-masonry react-router-dom react-scripts react-signature-canvas react-slick reactstrap remixicon slick-carousel web-vitals
     ```
4. Create a `.env` file in the backend directory and add the following variables:
   MONGODB_URL=YOUR_MONGODB_URL
   JWT_SECRET=YOUR_JWT_SECRET
   PORT=5000
5. Start the backend server: `nodemon index.js` in the backend directory
6. Start the frontend development server: `npm start` in the frontend directory
7. Access the application at `http://localhost:3000` in your web browser.

## Contributing

Contributions to the Doctor Appointment Booking System are welcome! To contribute, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch from the main branch for your changes.
3. Make your desired changes and commit them with descriptive commit messages.
4. Push your changes to your fork and submit a pull request to the main branch of the main repository.

## License

This project is licensed under the MIT License.
