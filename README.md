# Expense Tracker API

I created this API to simulate an expense tracker.

## Description

This API allows you to create a user, add and delete transactions, update user info, and delete a user.

## Technologies Used

* Express.js
* MongoDB
* Mongoose

## Installation

* Download the file from this repository
* Navigate to the file via your CLI

### Executing program

* Run the following code in your CLI while in the project directory
```
npm install
```
or 
```
yarn install
```

* once it is finished installing the dependencies run the follow command
```
npm run devStart
```

## Routes
#### if :id is in the URL is it referring to the user._id

### Register a user
`POST /user`
* Body
`username, password`
* Example
```
await axios({
      method: "post",
      url: "https://expensetrackerbytim.herokuapp.com/expensetracker/user",
      header: { "Content-Type": "application/json" },
      data: {
        username,
        password
      },
    })
```

### Update User
`POST /:id`  

* Body
`username, password`
* Example
```
await axios({
      method: "post",
      url: `https://expensetrackerbytim.herokuapp.com/expensetracker/:id`,
      header: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        password
      },
    })
```

### Delete User
`DELETE /:id`
* Example
```
await axios({
      method: "delete",
      url: `https://expensetrackerbytim.herokuapp.com/expensetracker/:id`,
      header: {
        "Content-Type": "application/json",
      },
    })
```

### Add Transaction
`POST /addtransaction/:id`

* Body
`transaction {
  id,
  transactionAmount,
  transactionType,
  date,
  source
}`
* Example
```
await axios({
      method: "post",
      url: `https://expensetrackerbytim.herokuapp.com/expensetracker/addtransaction/:id`,
      header: { "Content-Type": "application/json" },
      data: {
        tansaction: {
          id,
          transactionAmount,
          transactionType,
          date,
          source
        }
      },
    })
```

### Deleting Transaction
`DELETE /deletetransaction/:id`

* Body
`transaction {
  id,
  transactionAmount,
  transactionType,
  date,
  source
}`

* Example
```
await axios({
      method: "delete",
      url: `https://expensetrackerbytim.herokuapp.com/expensetracker/addtransaction/:id`,
      header: { "Content-Type": "application/json" },
      data: {
        tansaction: {
          id,
          transactionAmount,
          transactionType,
          date,
          source
        }
      },
    })
```

### Get all users transactions
`GET /:id`

* Example
```
await axios({
      method: "get",
      url: `https://expensetrackerbytim.herokuapp.com/expensetracker/:id`,
    })
```
