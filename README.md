# contacts-app
A full-stack web application for managing contacts, built with **React (frontend)** and **Spring Boot (backend)**.

---


### Backend Requirements:
Java 17+ (OpenJDK): https://www.java.com/en/download/manual.jsp<br>
Maven Installed and in your PATH: https://maven.apache.org/download.cgi<br>


---


### Front End Requirements:
Node.js (version 16+ reccomended): https://nodejs.org/en/download

---

### How to Install
1. Go to [Spring Initializr](https://start.spring.io/)
2. Use the following settings:
   - **Project**: Maven
   - **Language**: Java
   - **Spring Boot**: (match your version — e.g., 3.2.4)
   - **Group**: `com.example`
   - **Artifact**: `contacts-backend`
   - **Packaging**: Jar
   - **Java**: 17 or later
3. Add these dependencies:
   - Spring Web
   - Spring Data JPA
   - H2 Database (or whichever you used)
4. Click **Generate**, then unzip the project


---
### Step 1: Create a main Folder
   - Create a folder named `contacts-app`
   - Place this folder wherever you like just somewhere you are easily able to access again
   - Extract the contacts-backend into this folder

---
### Step 2: Create Front End
   - Create another folder named `contacts-frontend` inside of the main folder and open the directory
   - Run the command `npm install` and wait for your folder to finish downloading

---

### Step 3: Replace Project Files
   - Once downloaded, replace the contents from the repository into there respective places in your `contacts-app` folder

---

### Step 4: Run Maven and Node Package Manager in the terminal
Open two terminals
   1. The first being in your contacts-backend folder and run the command `./mvn spring-boot:start C:/Path/to/Your/contacts-app/contacts-backend/` (or your systems preffered way of launching maven)
   2. The second being in your contacts-front end folder and run the command `npm start` and wait for your localhost to boot up

---

### Step 5: Open the website
   - Now go to the link `http://localhost:3000` and the website should appear, if not try a different browser

