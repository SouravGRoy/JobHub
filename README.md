# Candidate Application Platform -JOB HUB

## Overview

This project is a Candidate Application Platform designed to allow users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience. The platform provides a user-friendly interface for viewing and applying to jobs.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Job Cards:** Display job listings as cards containing job title, company name, location, job description, experience required, and an apply button/link.
- **Filters:** Refine job listings based on minimum experience, company name, location, remote/on-site, tech stack, role, and minimum base pay.
- **Infinite Scroll:** Automatically load more job listings as the user scrolls down the page.
- **Responsive Design:** Works well on different screen sizes, including mobile devices.

## Technology Stack

- **Frontend:** React.js (with TypeScript)
- **State Management:** Redux
- **Styling:** Shadcn UI, Tailwind CSS
- **Package Manager:** Bun
- **Build Tool:** Vite

## Installation

### Prerequisites

- [Bun](https://bun.sh/) (for package management)
- [Node.js](https://nodejs.org/) (ensure compatibility with Bun)

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/candidate-application-platform.git
    ```
2. Navigate to the project directory:
    ```sh
    cd candidate-application-platform
    ```
3. Install dependencies:
    ```sh
    bun install
    ```

## Usage

### Running the Application Locally

1. Start the development server:
    ```sh
    bun run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

1. Build the application:
    ```sh
    bun run build
    ```
2. Serve the built application from the `dist` directory.

## Project Structure

```
candidate-application-platform/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── bun.lockb
├── package.json
├── README.md
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding guidelines and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact:

- **Name:** [Sourav]
- **Email:** [souravroy94375@gmail.com]
- **LinkedIn:** [https://www.linkedin.com/in/sourob-guha-roy-0a2ba621a/]

---

Replace placeholders such as `https://github.com/yourusername/candidate-application-platform.git` with your actual GitHub repository link and your personal information. Ensure all instructions are accurate and the project structure matches your setup.
