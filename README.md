# Module-4-Backend-Development-Capstone-Project

#### Project based on Boiler-Plate for Get YouTube Subscribers
## Submission Instructions

#### 1. Google Doc File Link
#### 2. GitHub Repository Link (Inside Google Doc File)
#### 3. Working Web/Live Link (Inside Google Doc File)
#### 4. Video Explanation (Youtube/Loom Link)
## Features

- Get Subscribers Channel Names
- Get Subscribers Names
- Get Subscriber with Specific ID


## Requirements with Link

#### 1) Download the MongoDB Community Server 7.0.12

https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.12-signed.msi

#### 2) Download the Node.js v20.17.0

https://nodejs.org/dist/v20.17.0/node-v20.17.0-x64.msi

#### 3) Download the Visual Studio Code

https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user
## Deployment Methods

#### 1) Run Local Server
#### 2) Run Live Server


### Method 1 : Run Local Server

Clone the Project

```bash
  git clone https://github.com/rutwik2172000/Module-4-Backend-Development-Capstone-Project.git
```

Go to the Project Directory

```bash
  cd Module-4-Backend-Development-Capstone-Project-main
```

Install dependencies 
#### (Optional If packages is not install in your system)

```bash
  npm install
```

Create the Mongdb Database

```bash
  node createDatabase.js
```

Run the Project

```bash
  node index.js
```


### Method 2 : Run Live Server

#### Direct Link Click

https://module-4-backend-development-capstone.onrender.com/
## API Reference

#### Get Subscribers

```http
  GET /subscribers
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | id |
| `name` | `string` | Youtuber Name |
| `subscribedChannel` | `string` | Youtube Channel Name|
| `subscribedDate` | `string` | Subscription Date |

#### Get Subscribers Names

```http
  GET /subscribers/names
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Youtuber Name |
| `subscribedChannel` | `string` | Youtube Channel Name|

#### Get Subscribers

```http
  GET /subscribers/:id
```

#### Example: GET /subscribers/66cabc52e11ab0a749e42a09
#

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | id |
| `name` | `string` | Youtuber Name |
| `subscribedChannel` | `string` | Youtube Channel Name|
| `subscribedDate` | `string` | Subscription Date |

## Author

- [@rutwik2172000](https://github.com/rutwik2172000)

