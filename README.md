# contacts-app

A full-stack web application for managing contacts, built with **React (frontend)** and **Spring Boot (backend)**.

---


**Backend Requirements:**<br>
Java 17+ (OpenJDK): https://www.java.com/en/download/manual.jsp<br>
Maven Installed and in your PATH: https://maven.apache.org/download.cgi<br>


---


**Front End Requirements:**
Node.js (version 16+ reccomended): https://nodejs.org/en/download

---

**How to Install**
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
### Replace Project Files

Once generated, replace the contents of your new project's `src/` folder with the files in this repo:
