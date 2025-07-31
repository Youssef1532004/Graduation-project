# My Store🛍️

## Overview

**My Store** is a simple and responsive e-commerce web application for showcasing and selling clothing and accessories. It is built with **React**, styled using **Bootstrap 5**, and bundled using **Vite** for fast performance and modern development.


## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Product Catalog**: Browse through a collection of products with image previews
- **Product Details**: View detailed information about each product
- **Modern UI**: Clean and intuitive user interface built with Bootstrap
- **Fast Loading**: Optimized performance with Vite build tool

## Screenshots
[home](./Screenshots/Screenshot%20(72).png)
[product](./Screenshots/Screenshot%20(71).png)
[Proudct Detalis](./Screenshots/Screenshot%20(80).png)
[product in mobail](./Screenshots/Screenshot%20(74).png)
[Home in tablet](./Screenshots/Screenshot%20(75).png)
[home in laptop](./Screenshots/Screenshot%20(80).png)
[Prudct Detalis in laptop](./Screenshots/Screenshot%20(81).png)

## Technologies Used

### Frontend
- **React 19**: Latest version of the popular JavaScript library for building user interfaces
- **React Router 7**: For handling navigation and routing within the application
- **Bootstrap 5**: For responsive design and pre-styled components
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices 
- **React Router 7**: For handling routing between pages (Home, Products, Product Details, Not Found)  
- **Axios**: For making HTTP requests to the API


## Development Tools
- **Vite**: Next generation frontend tooling for faster development and optimized builds
- **npm**: Package manager for JavaScript

## API
- **Fake Store API**: RESTful API that provides product data for e-commerce websites

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)


### Installation

1. Clone the repository
```bash
git colone https://github.com/Youssef1532004/Graduation-project.git
cd Mystore
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174/`

### Building for Production
```bash
npm run build
```

## Project Structure
├── public/                       # Public assets
├── Screenshots/                  # UI Screenshots
├── src/                          # Source files
│   ├── assets/                   # Static assets
│   ├── Components/               # Reusable 
│   │   ├── Home/                 # Home page
│   │   ├── Layout/               # App layout
│   │   ├── Loader/               # Loading spinner
│   │   ├── Navbar/               # Navigation bar
│   │   ├── NotFound/             # 404 page
│   │   ├── Product/              # Product listings
│   │   └── ProductDetails/       # Single product view
│   ├── App.css                   # Application styles
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── .gitignore                    # Git ignore file
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML template
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
└── vite.config.js                # Vite configuration



## Acknowledgements
- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [React](https://reactjs.org/) for the amazing library
- [Vite]
(https://vitejs.dev/)  for the blazing fast build tool
- [Bootstrap]
(https://getbootstrap.com/) for the responsive design framework