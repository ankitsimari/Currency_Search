# Currency Search Web App

A simple web application built with React that allows users to search for countries based on their currency code. The application features a search box with Debouncing functionality, country cards, and pagination for easy navigation.

 [Deploy Link / Live Link](https://currency-search.vercel.app/). 
 [Presentation Link](https://drive.google.com/file/d/16iuDhwo0UQ8T2u8Y-1HUzJ02y80eeJa5/view?usp=sharing). 

## Features

### 1. Search Box

- Input field for users to enter a currency code.
- Debouncing functionality to enhance user experience and reduce API requests.
 ![Search Box](https://i.ibb.co/PxXQHdT/Screenshot-2024-01-31-111353.png)


### 2. Country Cards

- Displays information about countries using the entered currency code.
- Each card includes the country name, capital, continent, and a flag image.
 ![Country Cards](https://i.ibb.co/YDmCjV2/Screenshot-2024-01-31-111618.png)


### 3. Pagination

- Paginates the list of countries to show a limited number per page (4 countries per page).
- Allows users to navigate through pages.
 ![Pagination](https://i.ibb.co/c2mPYHq/Screenshot-2024-01-31-111644.png)


## Code Structure

The application is structured with three main components:

### 1. Main Component

Main component responsible for managing the state, handling API requests, and rendering other components.

### 2. Card Component

Card component responsible for displaying information about countries.

### 3. Heading Component

Heading component to display during the mount phase or when there is no data.

## Usage

1. Clone the repository to your local machine.
2. Install dependencies with npm install.
3. Run the application with npm start.
