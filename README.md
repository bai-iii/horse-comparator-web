
# Horse Comparator Web Application

## Overview

Horse Comparator Web is the frontend interface to allow users manage and compare horses. Users can view horse list, details, and add horses.

## Run the App

First, install the dependencies

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Run test

```bash
npm run test
```

## Technologies Used

- **Next.js:** the framework to build React applications.
- **ChakraUI:** provide UI components and build responsive user interfaces.
- **SASS:** CSS preprocessor, for other customize styles.
- **Axios:** Send HTTP requests, process API calls.
- **TanStack Query:** Manage State, simplify the data interaction.
- **Jest and React Testing Library:** Write and run unit tests.
- **TypeScript:** Provides static type check, reducing errors at compile time and improving code quality.
- **ESLint:** Code analysis tool to meet the coding standards.
- **Prettier:** Code formatter for a consistent style.
- **Husky:** Run Git hooks for linting and formatting checks.
- **Lint-staged:** Processed the staged files with linter and formatter.

## Available Features

- **View Horses:** Users can view available bookmarks as a list with pagination.
- **Toggle Horse Details:** Users can click a horse and view the details.
- **Add Horses:** Users can add new horse from a popup modal.

## Code Structure

```
horse-comparator-web/
├── README.md                               # Project introduction
├── __tests__                               # Test files
├── jest.config.ts                          # Jest configration
├── jest.setup.ts                           # Setup test environment
├── package-lock.json
├── package.json
├── public
├── src
│   ├── components
│   │   ├── AddHorse.tsx                    # Add horse form and popup modal
│   │   ├── HorseDetailsCollapse.tsx        # Display and toggle the horse details
│   │   ├── HorseList.tsx                   # Fetch horse data and display them with pagination
│   │   ├── HorseTable.tsx                  # Display horse list in a table view
│   │   └── Pagination.tsx                  # Controll pagination for hores list
│   ├── layout
│   │   ├── Footer.tsx                      # Page footer
│   │   ├── Header.tsx                      # Page header
│   │   └── index.tsx                       # Page Layout
│   ├── pages
│   │   ├── _app.tsx                        # Entry initialization
│   │   ├── _document.tsx                   # Controll HTML structrue
│   │   └── index.tsx                       # Home page
│   ├── services
│   │   ├── api.ts                          # API configuration
│   │   └── request.ts                      # API request
│   ├── styles
│   │   ├── Home.module.scss                # Home page styles
│   │   ├── globals.scss                    # Global styls
│   │   └── theme.ts                        # ChakraUI theme configuration
│   └── types.ts                            # Data type definition
└── tsconfig.json                           # TypeScript configuration
```

## Limitations and Considerations

Due to time constraints, there are some limitations and areas for future improvement.

- **Missing Features:** the Edit Horses and Compare Horses features are missing.
- **Components Optimization:** Some components and logic can be refactored, such as split and extract form logic for both create and edit horses, reduce duplication.
- **Pagination:** could display pages in numbers or input a number, display ellipses and use server-side pagination when data is large.
- **Form:** form validation should be more specific, such as the name should be unique, "e" should be prevented for numbers. Should use other form libraries to manage the status better and easier, provide users with clearer instructions and prompts.
- **Data Loading:** should manage more status when fetching the data, could add skeleton view when loading and display a friendly error message when error occurs.
- **UI Interface:** the UI is simple with a basic responsiveness, could extract more styles into classes for better management.
- **Unit Tests:** unit tests are not fully covered for every component, should add more.
