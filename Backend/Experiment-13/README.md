# 🚀 Experiment 20: Implement CI/CD Pipeline for Application Deployment

## 📌 Objective
To implement a Continuous Integration and Continuous Deployment (CI/CD) pipeline for automated application deployment using Docker and GitHub Actions.

---

## 🧪 Experiment Overview

This experiment extends Testing Experiment-16 by integrating a CI/CD pipeline that:
- Builds a Docker image for the backend application
- Runs the application inside a container
- Automates build and deployment using GitHub Actions

---

## 🛠️ Technologies Used

- Docker – Containerization
- GitHub Actions – CI/CD automation
- Node.js / Backend Framework (from Experiment-16)
- Git – Version control

---

## 🐳 Step 1: Create Docker Image

### Dockerfile

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

---

### 🔨 Build Docker Image

```bash
docker build -t testing-backend .
```

---

### ▶️ Run Docker Container

```bash
docker run -p 5000:5000 testing-backend
```

---

## 🔁 Step 2: CI/CD Pipeline using GitHub Actions

### 📄 Workflow File: `.github/workflows/ci-cd.yml`

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install
        working-directory: ./backend

      - name: Run Tests
        run: npm test
        working-directory: ./backend

      - name: Build Docker Image
        run: docker build -t testing-backend ./backend

      - name: Run Docker Container
        run: docker run -d -p 5000:5000 testing-backend
```

---

## 📸 Screenshots to Attach

<img width="1599" height="499" alt="Screenshot 2026-04-24 141522" src="https://github.com/user-attachments/assets/c2375e69-bdc2-49b9-873a-95d5993f2d59" />

### 1. Docker Image Creation
- Output of:
```
docker build -t testing-backend .
docker images
```

### 2. Running Container
- Output of:
```
docker ps
```

### 3. GitHub Actions Workflow
- Screenshot showing:
  - Workflow execution
  - Successful run (green tick)

---

## ✅ Expected Outcome

- Docker image successfully created  
- Backend runs inside container  
- CI/CD pipeline triggers automatically on push  
- Tests executed and deployment completed  

---

## 📚 Conclusion

This experiment demonstrates how CI/CD pipelines automate software delivery. Docker ensures consistency across environments, and GitHub Actions enables seamless integration and deployment.

