# Currency Search Web App

A simple web application built with React that allows users to search for countries based on their currency code. The application features a search box with Debouncing functionality, country cards, and pagination for easy navigation.

## Features

### 1. Search Box

- Input field for users to enter a currency code.
- Debouncing functionality to enhance user experience and reduce API requests.
- ![Search Box](<img width="943" alt="Screenshot 2024-01-31 111353" src="https://github.com/ankitsimari/Currency_Search/assets/130365748/9db7baa6-610d-4ecb-9280-a43d89253bba">)


### 2. Country Cards

- Displays information about countries using the entered currency code.
- Each card includes the country name, capital, continent, and a flag image.
- ![Country Cards](<img width="950" alt="Screenshot 2024-01-31 111618" src="https://github.com/ankitsimari/Currency_Search/assets/130365748/b7383a75-bf09-49d2-ab47-481f247804f7">)


### 3. Pagination

- Paginates the list of countries to show a limited number per page (4 countries per page).
- Allows users to navigate through pages.
- ![Pagination](<img width="950" alt="Screenshot 2024-01-31 111644" src="https://github.com/ankitsimari/Currency_Search/assets/130365748/c76b198a-85b0-4237-a05e-a4a01218192d">)


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
