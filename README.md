# PortalFlow 

PortalFlow is a user and document management system designed to provide a seamless interaction between administrators and users.  

## Features  
- Admin panel for managing users, transactions, and projects.  
- User portal for accessing personal documents and reports.  
- RESTful API for smooth data exchange.  
- Multi-purpose design, usable in various domains.  

## Technologies Used  
### Backend  
- fast api: RESTful API for data management.  
### Frontend  
- next.js
### Database  
- PostgreSQL  

## Folder Structure
```
PortalFlow_Frontend/
├── business/      # next.js for user portal
└── admin/     # next.js admin panel
```
## Installation  
### Prerequisites  
- Docker
- Docker Compose 

### Steps  
1. Clone the repository:

git clone https://github.com/your-username/PortalFlow_Frontend.git
cd PortalFlow_Frontend


2. Build and run the project using Docker Compose:

docker-compose up --build


3. Access the application:

Admin Panel: http://localhost:3000/dashboard

User Panel: http://localhost:3000/


---
