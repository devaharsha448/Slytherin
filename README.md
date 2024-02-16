# Slytherin
# Task Management System

This project is a comprehensive task management system designed to streamline task allocation, leave management, escalation mechanisms, user interfaces tailored for different roles, and security features to ensure data integrity and confidentiality.

## Features

1. **Task Allocation Algorithm:**
   - Implements a round-robin task assignment algorithm ensuring equal distribution of tasks among team members daily.

2. **Leave Management:**
   - Handles both planned and unplanned leaves of team members.
   - Redistributes tasks among remaining team members during planned leaves.
   - Assigns tasks to all team members during unplanned leaves.

3. **Escalation Mechanism:**
   - Triggers automated emails and calls to the responsible team member if a task remains incomplete for two consecutive days.
   - Alerts all team members for resolution if the issue persists.

4. **User Interface:**
   - **Super-Admin:**
     - Capable of adding, modifying, and deleting tasks.
     - Assigns tasks to team members.
   - **Team Lead:**
     - Rearranges tasks among team members.
     - Accesses task statuses and team member assignments.
   - **Member:**
     - Views assigned tasks.
     - Marks tasks as completed.

5. **Security:**
   - Implements a secure user-based login system.
   - Authorizes users based on their roles.
   - Ensures only authorized users can access and perform actions within the system.

## Technologies Used

- HTML5, CSS3, JavaScript for frontend development.
- Node.js, Express.js for backend development.
- MongoDB for database management.
- Authentication libraries like Passport.js for secure user authentication.

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up the database configuration.
5. Start the server using `npm start`.
6. Open the application in your web browser.

## Usage

- Log in with your credentials based on your role (Super-Admin, Team Lead, or Member).
- Perform actions based on your assigned role, such as managing tasks, handling leaves, and monitoring task statuses.
- Ensure to follow the escalation mechanism in case of overdue tasks.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the steps mentioned in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to the development team for their hard work and dedication.
- Inspired by the need for efficient task management in modern workplaces.
