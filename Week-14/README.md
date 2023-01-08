
# Wealth API



## Project Source Code link

## 1. Github 

https://github.com/Chandramohan97/createLoginAPI



## Run on Local Computer
 
Follow the steps to setup the project in local machine.

1. Clone the repository
2. Open terminal in the project folder.
3. Run npm install
4. Run npm start.
## Features

## Create User API 

http://localhost:8080/signup

Response : 

{
"emailId": "pesto@pestotest.com",
"password": "1eef45d915319db562699773d5c6813b",
"name": "pesto",
"mobno": "2412412414",
"_id": "63ba6d36d1777c1410d48aef"
}


## Login User API 

http://localhost:8080/login

Response : 

{
"_id": "63b886bb3347ceed1ca45257",
"emailId": "chandra@test.com",
"password": "1599eeb0c982fc5651353a15a8d08819",
"name": "Chandra Srivastava",
"mobno": "9833973705"
}

## Fetch assets of the user 

## API 

 http://localhost:8080/assets

 Response : 

 {
"Name": "Chandra Srivastava",
"Assets:": [
"1000 sq feet land",
"House",
"24 carat gold"
],
"Equity": 10000,
"Fixed Income": 240000
}

