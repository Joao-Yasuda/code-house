# **Code-House**  

## **Table of Contents**  
1. [About the Project](#about-the-project)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Getting Started](#getting-started)  
    - [Prerequisites](#prerequisites)  
    - [Installation](#installation)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  


## **About the Project**  
Code House is a comprehensive multi-tenant SaaS platform designed to streamline collaboration, role management, and code deployment for developers and teams. Built with Next.js, it offers a robust foundation for managing organizations, roles, permissions, and collaborative coding environments with seamless GitHub integration.

- User authentication
- RBAC Roles and permissions
- Organizations and members setup
- Multitenant Application



## **Features**  
- User authentication  
- Dark mode toggle  
- RBAC organization
- Create Organization and projects
- Invite, change roles and delete Members

## **Technologies Used**  
- **Frontend:** Next.js, Shadcnui 
- **Backend:** Node.js, Fastify
- **Database:** MongoDB  
- **Other Tools:** Docker


## **Getting Started**  

### **Prerequisites**  
- Node.js (v14 or higher)  
- pnpm
- MongoDB installed locally or accessible remotely  

### **Installation**  
1. **Clone the repository:**  
   ```bash  
   git clone https://github.com/username/project-name.git 
   ```
2. **Create a .env file:**    
   ```
   DATABASE_URL=
   JWT_SECRET=
   GITHUB_OAUTH_CLIENT_ID=
   GITHUB_OAUTH_CLIENT_SECRET=
   GITHUB_OAUTH_CLIENT_REDIRECT_URI=
   API_URL=
   ```
2. **Navigate to the project directory:**
   ```bash
   cd apps/api
   ```

3. **Install the required dependencies:**
   ```
   pnpm install
   ```

4. **Navigate to the project directory:**
   ```
   cd ../web
   ```

5. **Install the required dependencies:**
   ```bash
   pnpm install
   ```

6. **Start the application**
   ```bash
   pnpm run dev
   ```

7. **Create a new terminal**
   ```bash
   cd apps/api
   ```

8. **Start the Backend**
   ```bash
   pnpm run dev
   ```

9. **Open your browser and go to http://localhost:3000**

### Roles

- Owner (count as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous
