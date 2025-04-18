# HotelMania Web Application

# Client:
Welcome to the **HotelMania** web application! This is a Next.js project designed to provide a seamless hotel booking experience for travelers. The application features a responsive design optimized for both desktop and mobile devices.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices using media queries.
- **Navigation**: Custom Navbar and Footer components with interactive links.
- **Pages**: Multiple pages including Home, About, Contact, Explore, and Hotels.
- **Company Information**: Alert dialogs for Privacy Policy, Refund Policy, FAQ, and About sections.
- **Newsletter Subscription**: Users can subscribe to a newsletter with toast notifications for feedback.
- **Social Media Integration**: Links to various social media platforms.
- **Custom UI Components**: Built with Tailwind CSS and Radix UI components.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/)
  - [Lucide Icons](https://lucide.dev/)
- **State Management**: React Hooks
- **Utilities**: [Class Variance Authority (CVA)](https://cva.style/)
- **Notifications**: [Sonner](https://github.com/emilkowalski/sonner)

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/hotelmania.git


2. Navigate to the project directory:

cd hotelmania

3. Install dependencies:
```
npm install
# or
yarn install
```

### Running the Application
### Development Mode:

```
npm run dev
# or
yarn dev
```


Open http://localhost:3000 in your browser to see the application.

Production Mode:

To build the application for production:
```
npm run build
# or
yarn build
```

To start the production server:
```
npm start
# or
yarn start
```
### Project Structure
```
├── app
│   ├── Home.tsx
│   ├── about
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── explore
│   │   └── page.tsx
│   ├── globals.css
│   ├── home
│   │   └── page.tsx
│   ├── hotels
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── footer
│   │   ├── company
│   │   │   ├── About.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── privacyPolicy.tsx
│   │   │   └── refundPolicy.tsx
│   │   ├── company.tsx
│   │   ├── footer.tsx
│   │   ├── hotelManiaInfo.tsx
│   │   ├── newsletter.tsx
│   │   ├── quickLinks.tsx
│   │   └── socialMedia.tsx
│   ├── navbar
│   │   ├── navbar-button.tsx
│   │   ├── navbar.tsx
│   │   ├── navbarDes.tsx
│   │   └── navbarMob.tsx
│   └── ui
│       ├── alert-dialog.tsx
│       ├── avatar.tsx
│       ├── avatarImage.tsx
│       ├── button.tsx
│       ├── popover.tsx
│       ├── scroll-area.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── sonner.tsx
├── lib
│   └── utils.ts
├── types
│   └── index.ts
├── public
│   └── assets (fonts, images, etc.)
├── package.json
├── tsconfig.json
└── README.md
```
## Notable Files and Directories

- app/: Contains the Next.js pages and global styles.
  - layout.tsx: The root layout component.
  - page.tsx: The main entry point of the application.
  - globals.css: Global CSS styles including Tailwind directives.
- components/: Contains reusable React components.
  - navbar/: Components related to the navigation bar.
  - footer/: Components for the footer section, including company info, newsletter, and social media links.
  - ui/: Custom UI components built with Radix UI and Tailwind CSS.
- lib/utils.ts: Utility functions used across the application.
- types/: TypeScript types and interfaces.

# Server

## Overview
HotelMania is a hotel management system designed to simplify finding and booking vacant rooms in nearby hotels. Users can search for available rooms in hotels closest to their location within their city and filter results by date and price to suit their preferences.

## Features
- **Search Nearby Hotels:**
  Users can discover hotels closest to their current location or a specified city.

- **Room Availability:**
  Search for rooms based on their availability for specific dates.

- **Filtering Options:**
  - Filter by price to find rooms within a budget.
  - Choose dates to see only the rooms available during a specific time.

- **Responsive Design:**
  The system is optimized for desktop and mobile devices, ensuring a seamless user experience.

## Technologies Used
- **Back-End:**
  - Node.js and Express.js for server-side logic.

- **Database:**
  - MySQL for efficient storage and retrieval of hotel and room data.

## Roadmap
- Add user authentication and profiles.
- Implement a booking system with payment gateway integration.
- Include advanced filters (e.g., star ratings, amenities).
- Create a robust data access layer which handles all the api calls for the front end
- Develop an admin dashboard for hotel managers (yet to be done).

## License
This project is licensed under the [MIT License](LICENSE).
