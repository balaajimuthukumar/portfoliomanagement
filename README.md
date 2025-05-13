💼 #Portfolio Management System
A web-based application developed using Angular for managing financial portfolios. It enables users to track investments, analyze performance metrics, and make informed decisions.

📁 #Project Structure
The project follows a modular structure to promote scalability and maintainability:

portfoliomanagement/
├── .vscode/                 # Visual Studio Code configurations
├── src/                     # Source files
│   ├── app/                 # Main application module
│   │   ├── components/      # Reusable UI components
│   │   ├── directives/      # Custom directives
│   │   ├── models/          # TypeScript interfaces and models
│   │   ├── services/        # Services for data fetching and business logic
│   │   ├── interceptors/    # HTTP interceptors for global request handling
│   │   ├── pages/           # Feature modules and pages
│   │   └── app.module.ts    # Root module
│   ├── assets/              # Static assets (images, styles, etc.)
│   └── environments/        # Environment-specific configurations
├── angular.json             # Angular CLI configuration
├── package.json             # NPM dependencies and scripts
├── tsconfig.json            # TypeScript compiler configuration
└── README.md                # Project documentation

🚀 #Getting Started
##Prerequisites
Node.js (v18 or higher)

Angular CLI (v16 or higher)

Installation
Clone the repository:

git clone https://github.com/balaajimuthukumar/portfoliomanagement.git
cd portfoliomanagement
Install dependencies:

npm install
Run the development server:

ng serve
Access the application:
Open your browser and navigate to:


http://localhost:4200/

✨ #Features
Dashboard with Interactive Charts:
Asset Allocation (Pie Chart)

Market Trends (Line Chart)

Performance Metrics (Bar Chart)

Investment Forms:
Input asset type, quantity, purchase price, and date.

Review data before submission.

Form validation using Angular Reactive Forms.

Data Management:
Services for fetching and managing data.

State management using RxJS Observables.

Mock APIs for data retrieval.

Responsive Design:
Grid layout adaptable to various screen sizes.
