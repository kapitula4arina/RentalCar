# RentalCar

A frontend web application for the **RentalCar** company, specializing in car
rentals. The project allows users to browse available cars, filter listings,
view detailed information, and submit a booking request.

## Demo

🔗 Live deployed version:
[https://rental-car-smoky.vercel.app/](https://rental-car-smoky.vercel.app/)

## Project Overview

This project was developed using React, Redux Toolkit, and React Router. Axios
is used to handle API requests. The application fetches data from a public car
rental API and fully implements client-side functionality for browsing,
filtering, favoriting, and booking cars.

## Features

- Homepage with banner and navigation
- Full car catalog with:
  - Brand filter
  - Price filter
  - Mileage filter
  - Server-side filtering (API level)
  - Server-side pagination (Load More button)
- Favorites list stored in `localStorage` (persists after reload)
- Car details page with:
  - Full car information
  - Rental conditions
  - Booking form with validation
- Notifications on successful bookings (`react-toastify`)
- Fully responsive error handling & loaders during API requests
- Modern, clean design based on provided UI specs

## Technologies Used

- React `^19.1.0`
- Redux Toolkit `^2.8.2`
- React Router DOM `^7.6.2`
- Axios `^1.9.0`
- Formik & Yup for form handling and validation
- Redux Persist for state persistence (favorites)
- React Select
- React Datepicker
- React Toastify
- ESLint & Prettier for code style
- Vite for project bundling & build

## Backend API

The application interacts with a public API to fetch car data and perform
filtering and pagination.

🔗 API Documentation:
[https://car-rental-api.goit.global/api-docs/](https://car-rental-api.goit.global/api-docs/)

## Installation & Setup

To run the project locally:

```bash
# Clone repository
git clone https://github.com/kapitula4arina/RentalCar.git

# Navigate into project folder
cd RentalCar

# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Author

Created by **Arina Kapitula** GitHub:
[https://github.com/kapitula4arina](https://github.com/kapitula4arina)
