
# GitHub Automated Login Test with Cypress and Jenkins

This project automates the login process on GitHub using Cypress, covering successful and unsuccessful login attempts and handling device verification. The project includes integration with Jenkins for CI/CD, ensuring continuous automation and verification.

## Table of Contents
1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Environment Configuration](#environment-configuration)
4. [Implementation Details](#implementation-details)
5. [Running the Tests Locally](#running-the-tests-locally)
6. [Jenkins Setup and CI/CD Integration](#jenkins-setup-and-cicd-integration)

---

### 1. Installation

#### Prerequisites
Ensure the following are installed:
- **Node.js** (version 12 or higher)
- **npm**
- **Jenkins** (installed locally or on a server)

#### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/BinaTet/Volane_Alfred.git
   cd github-login-automation
   ```

2. **Install Project Dependencies**:
   ```bash
   npm install
   ```

3. **Install Cypress dotenv Plugin**:
   ```bash
   npm install cypress-dotenv
   ```

---

### 2. Project Structure

The project is organized with modularity and reusability in mind:

```plaintext
github-login-automation/
├── cypress/
│   ├── pageLocators/
│   │   └── githubLoginPage.js     # Locators and actions for GitHub login page elements
│   └── e2e/
│       └── githubTests.cy.js          # Test specifications for login scenarios
├── .env                           # Stores environment variables (credentials)
├── cypress.config.js              # Cypress configuration file
├── Jenkinsfile                    # Jenkins pipeline configuration
├── package.json                   # Project metadata and dependencies
└── README.md                      # Project documentation
```

- **pageLocators/**: Contains locators and functions for the GitHub login page.
- **e2e/**: Holds the main test file with various login scenarios.
- **.env**: Securely stores credentials.
- **cypress.config.js**: Configures Cypress settings.
- **Jenkinsfile**: Pipeline configuration for Jenkins.
- **README.md**: Project documentation.

---

### 3. Environment Configuration

The `.env` file stores sensitive information : GitHub credentials.

#### Setting Up the .env File
Create a `.env` file in the root directory and add your GitHub email and password:
```plaintext
GITHUB_EMAIL=your-email@example.com
GITHUB_PASSWORD=your-secure-password
```

#### Cypress Configuration
In `cypress.config.js`, environment variables are loaded from `.env` using the `cypress-dotenv` plugin to ensure credentials are not hardcoded.

---

### 4. Implementation Details

The project is designed to handle multiple scenarios in an automated GitHub login test flow:

- **Locators and Actions**: `githubLoginPage.js` includes locators for email, password, and sign-in button, as well as actions for interacting with these elements.
- **Test Scenarios**: `login.spec.js` defines different login scenarios:
  - **Successful Login**: Verifies redirection to the GitHub dashboard.
  - **Unsuccessful Login**: Tests invalid login credentials to ensure error handling is accurate.

Each test scenario can handle expected and unexpected elements using conditional checks for dynamic responses during testing.

---

### 5. Running the Tests Locally

#### Run Cypress Tests via CLI
To run tests from the command line, use:
```bash
npx cypress run
```

#### Open Cypress Test Runner
To open the interactive runner, use:
```bash
npx cypress open
```

---

### 6. Jenkins Setup and CI/CD Integration

Follow the [LambdaTest Jenkins-Cypress tutorial](https://www.lambdatest.com/blog/jenkins-and-cypress-tutorial/) for Jenkins installation and setup.

#### Configuring Jenkins Pipeline

1. **Add Jenkins Plugins**:
   - Go to Jenkins dashboard > Manage Jenkins > Manage Plugins.
   - Install **NodeJS** plugin for Node.js environment setup.
   - Install **Cypress** if not already available.

2. **Create Jenkins Pipeline Job**:
   - Go to the Jenkins dashboard and create a new Pipeline project.
   - Add the GitHub repository URL under the **Source Code Management** section.

3. **Define the Jenkinsfile**:
   The `Jenkinsfile` in the root directory defines the pipeline stages:
   - **Install Dependencies**: Installs project dependencies with `npm install`.
   - **Run Tests**: Executes the Cypress tests.
   - **Post-Execution**: Configures post-build (Archiving and Creating HTML reports)

4. **Run the Pipeline**:
   - Save the configuration and click **Build Now** to run the tests.
   - View test results and console output to verify login flows.

---
