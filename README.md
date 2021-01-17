# e-recruitment web service
### hiring app for enginer

## Table of Contents
- [Introduction](#introduction)
- [Tools](#Tools)
- [Installation](#Installation)
- [Dependencies](#Dependencies)
- [Route](#Route)
---

## Introduction
erecruitment-app-api an app for connecting between company and engineer on hiring transactions. the main features are:
- CRUD Company
- CRUD Engineer
- CRUD User
- Search engineer by name, skill
- Sort engineer
- Pagination
- Login and Register With JWT
---

## Tools
- XAMPP
- Visual Studio Code
- Node.js
- Terminal
- Postman
---

## Installation

### Clone
```bash
$ git clone
$ cd erecruitment
$ npm install
```
---

### Create Environment Variable
```bash
$ cp .env.example .env
$ nano .env
```
---
### Start Development Server
```bash
$ npm start
```
---

## Dependencies

| Plugin |
| ------ |
| express |
| mysql |
| bcryptjs |
| body-parser |
| dotenv |
| jsonwebtoken |
| morgan |
| Helmet |
| Multer |

## API Route URL

- Users
  - (POST)    http://localhost:3000/user/register Register users
  - (POST)    http://localhost:3000/user/login Login users
  - (GET)     http://localhost:3000/user Get data users
  - (PUT)     http://localhost:3000/user/:id_user Update data user
  - (DELETE)  http://localhost:3000/user/:id_user Delete data user

- Company
  - (POST)    http://localhost:3000/company/ Create data companies
  - (GET)     http://localhost:3000/company/ Get data companies
  - (GET)     http://localhost:3000/company/profile Get profile company
  - (PUT)     http://localhost:3000/company/:id_company Update data company
  - (DELETE)  http://localhost:3000/company/:id_company Delete data company

- Engineer
  - (POST)    http://localhost:3000/engineer/ Create data engineers
  - (GET)     http://localhost:3000/engineer/ Get data engineers
  - (GET)     http://localhost:3000/engineer/profile Get profile engineer
  - (PUT)     http://localhost:3000/engineer/:id_engineer Update data engineer
  - (DELETE)  http://localhost:3000/engineer/:id_engineer Delete data engineer

- etc.
