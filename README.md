
# Promising Jobs

Promising Jobs is an open-source React website that provides the UI and functionalities of platforms linking freelancers and clients.

## Features

- **Home Page**: A welcoming landing page with an eye-catching image.
- **Jobs Page**: Browse through available job listings.
- **Contact Us**: A page for website visitors to get in touch.
- **Add Job Page**: Allows users to post new job listings.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/promising-jobs.git
   cd promising-jobs
2.Install the dependencies:
```bash
npm install

3.Set up and run the JSON server on a different port:
Create a jobs.json file in the project root directory with your initial data, for example:
   ```bash

{
  "jobs": [
    {
      "id": "1",
      "title": "Senior React Developer",
      "type": "Full-Time",
      "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
      "location": "Boston, MA",
      "salary": "70K - 80K",
      "company": {
        "name": "NewTek Solutions",
        "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
        "contactEmail": "contact@newteksolutions.com",
        "contactPhone": "555-555-5555"
      }
    }
  ]
}
```bash

Install json-server globally if you haven't already:
```bash
npm install -g json-server
```bash


Run the JSON server:
```bash
json-server --watch jobs.json --port 5000
```bash

4.Start the React application:
```bash
npm start
```bash

5.Open your browser and navigate to http://localhost:3000 to view the application.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
