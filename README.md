# Program Project Kickoff

## Team Composition

- Recommended to have **minimum 3 to 5 members per group** depending on the project size to distribute workload effectively.
- Discuss and assign roles and responsibilities within the team.

## Decide on the project

- Define the **project's objectives**.
- Identify the **problem statement** the project aims to address.
- Determine the **target users or audience** for the project.
- Explore existing projects for reference and inspiration.

### Project Ideas

> For those who choose the ideas presented below, we will provide the Figma designs and prototypes for the projects. The designers responsible for creating the designs and prototypes are students from the UI/UX program and will be available to assist you with the design if needed. Additionally, we will provide support and explain the projects in detail.

- **Up Immigrations - Dashboard and Website** (Real Client):

  - One group as the winner receives the `Certificate of Excellence` from the `Head of Tech Programs`.
  - The client will use the application.
  - Victor, our Program Manager of UI/UX, will represent the client.

- - **Loot Game**:

  - One group as the winner receives the `Certificate of Excellence` from the `Head of Tech Programs`.
  - Arthur, our Head Tech, will represent the role of client.

- Others
  - E-commerce with payment gateway integration (e.g. Stripe)
  - Social Media with message and notification system (e.g. WhatsApp)
  - Fitness App with calorie counter (e.g. MyFitnessPal)
  - Stock Market App with real-time data (e.g. Yahoo Finance)
  - Expense Tracker with budgeting (e.g. Mint)
  - Blogging Platform with comments and likes (e.g. Medium)
  - Any other idea that you can think of

## Requirements

- Full-stack application with user authentication.
- Frontend (client) and backend (server).
- Database for data storage and retrieval.
- Project Documentation

### User stories

- General explanation of software features from the perspective of a user
- focuses on delivering value to the user

### MVP (Minimum Viable Product)

- Product with just enough features to satisfy early customers
- Decide which features will be part of the MVP.
- Keep as simple as possible
- Get feedback and continue development

### Wireframes

- Low-fidelity,
- Simple sketches of the user interface without graphics or colours.
- Plan the layout and prioritize content and functionalities.

### Mock Design

> You came to this program to learn how to be a developer, not a designer. However, it is important to have a good design. You can use a tool like Figma to create your design.

- Hi-fidelity
- Websites for inspiration:
  - [Dribbble](https://dribbble.com/)
  - [Behance](https://www.behance.net/)
  - [Pinterest](https://www.pinterest.ca/)
  - [Awwwards](https://www.awwwards.com/)
  - [CSS Design Awards](https://www.cssdesignawards.com/)

**Cool idea:** Try to talk to UI/UX students and ask them to help you with the design.

> Important: For students who choose ‘Up Immigrations’ or ‘The Loot Game’, presenting wireframes and mock designs is not necessary, as we will provide the Figma designs and prototypes for these projects.

### Special Requirements

The following requirements are only applicable to the projects ‘Up Immigrations’ and ‘The Loot Game’:

#### Up Immigrations

- **Website**: The website is required, and it should be responsive. Please, follow the design provided.
- **Dashboard**: The dashboard is divide in two views: clients and admin. The main features of the dashboard are:
  - **Dashboard**:
  - **Authentication**: Only registered users can access the dashboard.
  - **Applications**: The admin user can see all the applications and filter them by status. The user that has applied can see only their application. Remember that the user can have more than one application. E.g.: Tourism Visa, Study Permit, Work Permit, LMIA, PR, etc. Therefore, each of the next sections should be linked with their respective application.
  - **Payment**: The user can see what was paid, what is pending, and what is due. For MVP purposes, the payment will be manual, no needed integration with a payment gateway. The admin user can see if the payment was made or not.
  - **My Documents**: The user can see all the documents that were uploaded and upload new ones. The admin user can see all the documents uploaded by the user and also check if the document is valid or not.
  - **Appointment**: The user can see the appointment date and time. The admin user can see all the appointments and change the date and time if needed, adding the availability of appointments.
  - **Inbox**: The user can see all the messages sent by the admin user. The admin user can send messages to the user.
  - **Profile**: The user can update their profile.

### Tech choices

- What technologies will you use?

> **Examples**

- Frontend
  - React
  - Next
- Backend
  - Express
- Database
  - PostgreSQL
  - MongoDB

> You may use other technologies, but you may get less support depending on the instructor's expertise in certain tooling.

### ERD

- Identify the entities and relationships:
  - One to one
  - One to many
  - Many to many (create a join table)
- Draw the ERD

## Workflows

### Git

- Never code on the main branch
- Never force push the main branch
- Merge conflicts happen. There are ways of minimizing them but you can never get rid of them completely.
- Use branches and pull requests

1. Create a new branch ->
2. Work on the branch ->
3. Make a commit ->
4. Push to remote branch ->
5. Make a pull request ->
6. **CONFLICTS**
7. Checkout to main/develop ->
8. Pull ->
9. Checkout to the branch ->
10. Merge main/develop ->
11. Fix conflicts ->
12. Commit ->
13. Push ->
14. Merge pull request

## Project management

- Use a project management tool like GitHub Projects.
- Create a board for your project
- Add tasks/issues based on your user stories
- Allocate tasks to team members
- Estimate tasks and set due dates (it is ok to change them later)

## Communication

- Use a communication tool like Slack.
- Create a chatroom for your project
- Add team members
- Invite your instructor to the chatroom
- Use the channel to communicate
- Daily standup
  - What did you do yesterday?
  - What are you going to do today?
  - Do you have any blockers?
- Weekly report with Instructor (Decide Day and Time - first come, first serve)
  - Update on the project
  - What did you learn this week?
  - What are your blockers?
  - What are your goals for the next week?
  - Update on the deadlines

## Calendar

- **Week 1**: Project Kickoff (Tuesday) and Project Planning (Wednesday - Friday)
- **Week 2**: Planning Report (Monday) and Project Development (Tuesday - Friday)
- **Week 3**: Project Development (Monday - Friday)
- **Week 4**: Project Development (Monday - Friday)
- **Week 5**: Project Development (Monday - Friday)
- **Week 6**: Project Development (Monday - Friday)
- **Week 7**: Project Development (Monday - Friday)
- **Week 8**: Project Development (Monday - Friday)
- **Week 9**: Project Testing (all scenarios) and Deployment (Monday - Friday)
- **Week 10**: Preparing Presentation (Monday - Thursday) and Demo Day (Dec 20th) (Friday)

## Demo Day

### **SAVE THE DATE**

> It is mandatory to attend in person. Except for students not living in Vancouver.

- Potential audiences: Friends, Family, Instructors, Students, Potential employers

> Many audiences may not understand your code, so demo your project accordingly

- Presentation:
  - What is the project about?
    - What is the problem?
    - What is the solution?
    - For whom is it?
  - What are the features?
  - What are the technologies?
  - Demonstration
  - What was the biggest challenge you faced?
  - What are the learnings?
  - What are the next steps?

## Please keep in mind!!

- if something fails in your team, it is not one of your team members' failures but a WHOLE TEAM.
- if you do not want to lead, follow the lead
- Decide as a team
- Be responsive - no longer than half a day
- Please flag if you think you are behind
- If you are stuck on a problem for more than 1 hour, It is time to ask for help
- Take action instead of thinking too long
