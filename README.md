
# Design System Assignment

A comprehensive design system featuring Typography, Data Entry and Feedback Components using React, TypeScript, and Tailwind CSS.

## Project Info

This project implements a modern design system suitable for enterprise applications, with a focus on:
- Responsive design
- Accessibility
- Theming support
- Comprehensive documentation

## Components

### Typography Components
- Headings (H1-H6)
- Paragraphs with different sizes and weights
- Labels, Captions, and Helper Text

### Data Entry Components
- Text Input with various states and icon support
- Select/Dropdown with keyboard navigation

### Feedback Components
- Alert Banners (info, success, warning, error)
- Toast/Snackbar notifications

## Features

- **Theming**: Light and dark mode support
- **Accessibility**: All components follow WAI-ARIA practices
- **Responsive**: Works on all screen sizes
- **Type Safe**: Fully typed with TypeScript
- **Customizable**: Extensive prop support for customization

## How to Run the Project

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <REPO_URL>

# Navigate to the project directory
cd design-system-assignment

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:8080/`.

## Project Structure

```
src/
├── components/
│   ├── design-system/         # Design system components
│   │   ├── alert/             # Alert components
│   │   ├── input/             # Data entry components
│   │   ├── select/            # Dropdown/Select components
│   │   ├── theme/             # Theme provider
│   │   ├── toast/             # Toast notification system
│   │   └── typography/        # Typography components
│   ├── layout/                # Layout components
│   └── ui/                    # Basic UI components (from shadcn)
├── lib/                       # Utility functions
└── pages/                     # Application pages
    ├── Feedback.tsx           # Feedback components showcase
    ├── Index.tsx              # Home page
    ├── Inputs.tsx             # Data entry components showcase
    └── Typography.tsx         # Typography showcase
```

## Design Decisions

### Typography System
- Used a consistent type scale with appropriate line heights for readability
- Implemented semantic heading levels for proper document structure
- Created helper components for common text elements like captions

### Component Architecture
- Used component composition patterns for flexibility
- Implemented prop interfaces for strong typing
- Used React's context API for theme and toast management

### Accessibility Considerations
- Added ARIA attributes for screen readers
- Implemented keyboard navigation for interactive elements
- Used proper focus management for modals and dropdowns
- Ensured adequate color contrast for all text elements

## Future Enhancements
- Add more form components (checkbox, radio, toggle, etc.)
- Implement storybook documentation
- Add animation and transition components
- Create more feedback components (modals, popovers)

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- React Router
- Lucide Icons

## License
MIT
