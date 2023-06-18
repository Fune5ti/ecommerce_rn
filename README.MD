# React Native Shopping App

This is a React Native application designed to showcase a shopping experience with features such as a cart, product details page, and home page with adjustable filters. The application utilizes several technologies and libraries for enhanced functionality and user interface.

## Technologies Used

- **React Native**: The application is built using the React Native framework, which allows for cross-platform mobile app development using JavaScript and React.
- **Redux**: Redux is employed for state management, providing a centralized store for managing the application's data.
- **Redux Persist**: Redux Persist is utilized in combination with Async Storage to persist the cart state across app sessions. This ensures that the cart's contents are preserved even if the user closes or refreshes the app.
- **Async Storage**: Async Storage is a simple, asynchronous, key-value storage system provided by React Native. It is used to persist the cart state locally on the device.
- **React Native Paper**: React Native Paper serves as the visual UI library for the application. It provides a set of pre-designed and customizable components for creating an aesthetically pleasing user interface.
- **Navigation**: React Navigation is employed for handling navigation within the app. It enables seamless navigation between different screens and components.
- **Redux Toolkit**: Redux Toolkit is utilized to simplify the process of working with Redux, providing a set of tools and utilities that streamline development and improve code organization.

## Features

1. **Cart**: The application includes a cart feature that allows users to add products to their cart. The cart state is persisted using Redux Persist and Async Storage to ensure that the cart contents are maintained between app sessions.

2. **Product Details Page**: Users can view detailed information about a specific product on the product details page. This page displays information such as the product name, description, price, and other relevant details.

3. **Home Page with Filters**: The home page features adjustable filters that allow users to refine the products displayed. By clicking the button on the left of the home text, users can access a screen where they can adjust the filters according to their preferences.

## Getting Started

1. Ensure that you have Node.js and npm (Node Package Manager) installed on your machine.

2. Clone the repository and navigate to the project's root directory.

3. Run `yarn` to install the project dependencies.

4. Start the application by running `npx react-native start`.

5. Follow the instructions provided in the console to launch the app on an emulator or a physical device.

## Conclusion

The React Native Shopping App demonstrates the use of various technologies and libraries to create a  functional shopping experience. The combination of Redux Persist and Async Storage ensures that the cart state is persisted across sessions, allowing users to add products to their cart and resume their shopping experience seamlessly. The app's user interface is enhanced by React Native Paper, providing visually appealing components, while Redux and Redux Toolkit enable efficient state management. With adjustable filters and a detailed product page, the app provides a user-friendly and engaging shopping experience.

Feel free to explore and expand upon this React Native Shopping App to suit your specific requirements and build upon the provided functionality.
