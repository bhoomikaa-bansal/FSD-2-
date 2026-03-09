# FSD-2: Experiment 6 - Advanced Form Handling with MUI Components

This project demonstrates advanced form handling and validation using **Material-UI (MUI)** components in a React + Vite application with routing capabilities.

## Project Overview

This is a modern React application built with **Vite** that showcases:
- Advanced form handling with multiple input types
- Comprehensive form validation
- Material-UI (MUI) component library integration
- React Router for multi-page navigation
- Code splitting with lazy loading
- ESLint configuration for code quality

## Features

### 1. **Form Components (MUI)**
The application includes a sophisticated user registration form (`MUIForm.jsx`) that demonstrates various MUI components:

#### **Text Fields**
- **First Name**: Text input with min-length validation
- **Last Name**: Text input with min-length validation
- **Email**: Email input with regex-based email validation
- **Phone Number**: Numeric input with 10-digit validation
- All text fields include real-time error display with helper text

#### **Selection Components**
- **Country Dropdown (Select)**: Select from predefined countries with validation
- **Gender Radio Buttons**: Choose between Male, Female, or Other options
- Organized radio group layout with proper spacing

#### **Checkbox Components**
- **Terms and Conditions**: Required checkbox with custom validation error message
- **Newsletter Subscription**: Optional checkbox for marketing preferences
- Visual grouping within a bordered section

#### **Buttons**
- **Submit Button**: Validates form and displays success message
- **Reset Button**: Clears all form fields and errors

### 2. **Form Validation System**

The form implements **comprehensive client-side validation** with the following rules:

#### **Validation Rules**
```
✓ First Name
  - Required field
  - Minimum 2 characters

✓ Last Name
  - Required field
  - Minimum 2 characters

✓ Email
  - Required field
  - Valid email format (regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/)

✓ Phone Number
  - Required field
  - Exactly 10 digits
  - Numeric only

✓ Country
  - Required selection from dropdown

✓ Gender
  - Default value: Male
  - Can be changed to Female or Other

✓ Terms and Conditions
  - Must be checked (required)
  - Shows error if unchecked on submission

✓ Newsletter
  - Optional subscription preference
```

### 3. **Validation Features**

- **Real-time Error Clearing**: Errors are cleared as users start typing
- **Error Display**: Error messages appear below each field with red text
- **Form State Management**: Uses React hooks (`useState`) for form data and validation
- **Build Validation**: Form validates on submission before processing
- **User Feedback**: Success alert displays after successful submission
- **Auto-reset**: Form automatically resets after 3 seconds on successful submission

### 4. **Form States**

The form manages multiple states:
- **Form Data**: Stores all user inputs
- **Errors**: Tracks validation errors for each field
- **Submitted**: Boolean flag for submission status
- **Success Message**: Displays after successful validation and submission

## Project Structure

```
FSD-2/
├── src/
│   ├── components/
│   │   ├── MUIForm.jsx          # Main MUI form component with validation
│   │   ├── Form.jsx              # Basic form component
│   │   ├── Home.jsx              # Home page
│   │   ├── About.jsx             # About page
│   │   └── Contact.jsx           # Contact page
│   ├── App.jsx                  # Main app with routing
│   ├── App.css                  # App styles
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Global styles
│   └── assets/                  # Static assets
├── public/                      # Public assets
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                    # This file
```

## Dependencies

### Core Dependencies
- **React** 19.2.0 - UI library
- **React-DOM** 19.2.0 - React rendering
- **React Router DOM** 7.13.0 - Client-side routing
- **MUI Material** 7.3.7 - Material Design components
- **@emotion/react** 11.14.0 - CSS-in-JS library (required by MUI)
- **@emotion/styled** 11.14.1 - Styled components (required by MUI)

### Development Dependencies
- **Vite** 7.2.4 - Build tool and dev server
- **ESLint** 9.39.1 - Code quality and linting
- **TypeScript** - Type checking support

## Form Validation Example

```javascript
// Validation occurs on form submission
const validateForm = () => {
  const newErrors = {};
  
  // First Name validation
  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name is required";
  } else if (formData.firstName.trim().length < 2) {
    newErrors.firstName = "First name must be at least 2 characters";
  }
  
  // Email validation with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    newErrors.email = "Please enter a valid email address";
  }
  
  // Phone validation - 10 digits only
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
    newErrors.phone = "Phone number must be 10 digits";
  }
  
  return newErrors;
};
```

## How to Use the Form

1. **Access the Form**: Navigate to the "MUI Form" link in the navigation menu
2. **Fill in the Fields**: Complete all required fields (marked with *)
3. **Select Options**: Choose gender and country from dropdowns
4. **Accept Terms**: Check the "Terms and Conditions" checkbox
5. **Optional**: Subscribe to newsletter if desired
6. **Submit**: Click the Submit button to validate and submit
7. **View Results**: Success message displays if all validations pass
8. **Reset**: Click Reset to clear the form at any time

## Validation Feedback

- **Success**: Green alert shows on successful submission
- **Errors**: Red error text appears below each invalid field
- **Real-time**: Errors clear as user corrects the fields
- **Required Fields**: All required fields are marked with an asterisk (*)

## Running the Project

### Development Server
```bash
npm run dev
```
Starts the Vite development server with HMR (Hot Module Replacement)

### Production Build
```bash
npm run build
```
Creates an optimized build for production in the `dist/` folder

### Lint Code
```bash
npm lint
```
Runs ESLint to check code quality and style

### Preview Build
```bash
npm run preview
```
Preview the production build locally

## Build and Validation Flow

1. **Input Validation**: Client-side validation occurs on form submission
2. **Error Handling**: Form displays specific error messages for each field
3. **User Feedback**: Success message appears on successful validation
4. **Data Processing**: Form data is logged to console when validation passes
5. **State Reset**: Form automatically clears after successful submission

## Styling

The form uses:
- **MUI Components**: Pre-built styled components with Material Design
- **Emotion CSS**: CSS-in-JS styling library integrated with MUI
- **Responsive Design**: Form adapts to different screen sizes
- **Professional Layout**: Clean, organized form layout with proper spacing

## Browser Compatibility

- Modern browsers supporting ES6+
- Chrome, Firefox, Safari, Edge

## Student Information
- **UID**: 23BDA70048

## Technology Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **UI Library**: Material-UI 7.3.7
- **Styling**: Emotion (CSS-in-JS)
- **Routing**: React Router 7.13.0
- **Code Quality**: ESLint 9.39.1

## Additional Experiments

This workspace also contains other experiments:
- **exp6/**: Advanced form handling with MUI
- **Experiment-0 through Experiment-5**: Various React patterns and state management
- **lab-mst-react/**: React component experimentation

## Notes

- Form validation is entirely client-side for demonstration purposes
- All validations follow best practices for user experience
- The form demonstrates proper error handling and user feedback
- Checkbox and radio button states are properly managed
- Success message auto-dismisses after 3 seconds

---

**Created as part of Full Stack Development (FSD) coursework**
