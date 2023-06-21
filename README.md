
# Project RESTful API Student Information System

This is a RESTful API that can perform CRUD (Create, Read, Update, Delete) operations on a
student database on MongoDB. 

#### Tools Required
Node.js, Express.js, MongoDB, and Mongoose.

### GET ALL Students
```http
GET /student
```
|Parameter| Type |Description|
|:--------|:-----|:----------|
|`id`|`String`|**No required**|

### GET one Student
```http
GET /student/${id}
```
|Parameter| Type |Description|
|:--------|:-----|:----------|
|`id`|`String`|**Required** id of student to fetch|

### POST create a Student
```http
POST /student
```
|Parameter| Type |Description|
|:--------|:-----|:----------|
|`name`|`String`|**Required** name of student to fetch|
|`age`|`Number`|**Required** age of student|
|`major`|`String`|**Required** major of student|

### PUT update Student
```http
PUT /student/${id}
```
|Parameter| Type |Description|
|:--------|:-----|:----------|
|`name`|`String`|**Required** name of student to fetch|
|`age`|`Number`|**Required** age of student|
|`major`|`String`|**Required** major of student|

### DELETE remove Student
```http
DELETE /student/${id}
```
|Parameter| Type |Description|
|:--------|:-----|:----------|
|`id`|`String`|**Required** id of student to remove|


## Installation

Install RESTfulAPI with npm

```bash
  npm install todo
  cd todo
  npm start
```

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Screenshots

![Screenshot CMD](https://github.com/veronicarevilla/RESTfulAPI/blob/main/CMD.png)


![Screenshot Postman](https://github.com/veronicarevilla/RESTfulAPI/blob/main/postman.png)

