## Project Documentation

### Overview
This project is a product finder application designed to facilitate the search and filtering of investment products. It allows users to browse and filter through a list of investment funds based on various criteria such as strategy, asset class, region, and style.

### Project Structure
- **Components**: This directory contains reusable React components used throughout the application, such as `DataTable`, `Dropdown`, `Filters`, `PageHeader`, and `PageFooter`.
- **Data**: The `productDataTypes.ts` file defines TypeScript interfaces and types used to structure and manage data related to investment products. The `productData.ts` file contains sample data for the investment funds.
- **Pages**: This directory holds the main pages of the application. The `DataTableContainer.tsx` file is the main component for displaying and filtering investment fund data. The `App.tsx` file serves as the entry point for the application.
- **Assets**: Contains images and icons used in the application.
- **CSS Files**: Contains stylesheets for styling components.

### Components
- **DataTable**: Renders a table displaying investment fund data.
- **Dropdown**: A dropdown component used for displaying filter options.
- **Filters**: Renders filter options based on the provided data.
- **PageHeader**: Displays the header section of the application, including the logo and user information.
- **PageFooter**: Displays the footer section of the application, including legal information and links.

### Functionality
- **Search**: Users can search for investment funds by entering a fund name in the search bar.
- **Filters**: Users can filter investment funds based on strategy, asset class, region, and style using dropdown filter options.
- **Data Display**: The filtered investment funds are displayed in a table format, showing fund details such as name, ticker, income treatment, currency, ISIN, strategy, asset class, region, and style.

### Dependencies
- **React**: The JavaScript library for building user interfaces.
- **Lodash**: A utility library providing functions for manipulating arrays, objects, and strings efficiently.

### Usage
To run the application locally:
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.
4. Access the application in your web browser at `http://localhost:3000`.

### Additional Notes
- The project includes TypeScript for type-checking and improved code robustness.
