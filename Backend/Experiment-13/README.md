# 📚 Experiment 13: Backend with Database (CRUD + Validation)

## 📝 Title
**Connect backend with database and perform CRUD operations along with Validations**

---

## 📅 Last Submission Date
**08 April 2026**

---

## 🎯 Aim
To develop a backend server using Flask, connect it with a MySQL database, and implement CRUD operations (Create, Read, Update, Delete) along with input validations.

---

## 🧠 Objective
1. Build RESTful APIs using Flask  
2. Connect Flask with MySQL database  
3. Perform CRUD operations on student data  
4. Validate incoming data using Marshmallow  
5. Test APIs using Postman  

---

## 🛠️ Technologies Used
- Python  
- Flask  
- Flask-SQLAlchemy  
- PyMySQL  
- Marshmallow  
- MySQL (Aiven Cloud Database)  
- Postman  

---
```
##📂 Project Folder Structure
FSD-II/
│
├── backend/
│   ├── Experiment-13/
│   │   ├── app.py
│   │   ├── requirements.txt
│   │   └── README.md
│
└── .gitignore

```

---

## 🗄️ Database Details

- **Database Name:** chandigarh_university_db
- **Table Name:** students  

### 📊 Table Schema

| Column | Type | Description |
|--------|------|------------|
| id | Integer | Primary Key |
| uid | String | Unique Student ID |
| name | String | Student Name |
| age | Integer | Student Age |

---

## ⚙️ Backend Implementation

### 🔹 Flask Configuration

```python
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL", "sqlite:///fallback.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
```
🌐 Deployment Details
Backend Deployment: Render
Database Hosting: Aiven MySQL
Connection Method: Environment Variable (DATABASE_URL)

##  Deployment Details

- **Repository Name:** FSD-II  
- **GitHub Username:** Bedant186  

- **GitHub Repository:**  
  https://github.com/Bedant186/FSD-II/tree/main/backend/Experiment-13

- **Live Deployment (Render):**  

  - Customer Service:  
    https://two3bda70122-expepriment-13.onrender.com/  

 
---


##  Learning Outcomes

Understood how to build RESTful APIs using Flask.
Learned to connect a backend application with a MySQL database using SQLAlchemy ORM.
Gained hands-on experience in implementing CRUD operations (Create, Read, Update, Delete).
Learned how to validate user input using Marshmallow schema validation.
Understood the concept of environment variables for secure database configuration.

---

##  Conclusion

Understood how to build RESTful APIs using Flask.
Learned to connect a backend application with a MySQL database using SQLAlchemy ORM.
Gained hands-on experience in implementing CRUD operations (Create, Read, Update, Delete).
Learned how to validate user input using Marshmallow schema validation.
Understood the concept of environment variables for secure database configuration.
---

## 👨‍💻 Author

**Bedant Singhania**  
23BDA70122
BE CSE (Big Data Analytics)  
Chandigarh University  

🔗 GitHub: https://github.com/Bedant186

🔹 Local Server Output
Server Running

GET Request
![GET Local](Screenshots/Local%20Server/GET.png)
PUT Request
![PUT Local](Screenshots/Local%20Server/PUT.png)
DELETE Request
![DELETE Local](Screenshots/Local%20Server/DEL.png)
![Server Local](Screenshots/Local%20Server/ServerRunning.png)

##Render Deployment Output
#Server Running
![Server Render](Screenshots/OnRender/ServerRunning.png)
GET Request
![GET Render](Screenshots/OnRender/GET.png)
POST Request
![POST Render](Screenshots/OnRender/POST.png)
PUT Request
![PUT Render](Screenshots/OnRender/PUT.png)
DELETE Request
![DELETE Render](Screenshots/OnRender/DEL.png)


After POST
![After POST](Screenshots/OnRender/AfterPost.png)
After PUT
![After PUT](Screenshots/OnRender/AfterPut.png)
After DELETE
![After DELETE](Screenshots/OnRender/AfterDel.png)
