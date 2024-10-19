clone the repo
you will be having 2 folders 
1- back 
2- front
open 2 terminals in vs code or any other editor you'r comfortable with


terminal 1 
 cd./back
 npm install express multer uuid body-parser cors path fs
 node index.js
 you will get your backend running 


terminal 2
 cd./front/frontend
 npm i next 
 npm run dev 
 you will get your front end running



go to postman 

1. create a post request - http://localhost:4000/uploads
2. move to body
3. select form-data
4. set data type as file
5. set key as "file"
6. select video file (smaller the file faster will be upload)
7. POST request



----------------------------------in web browser -------------

1. go to localhost:3000
2. scroll down click on card00
3. it will take you to the media player with a default vid url in input box whose corresponding vid will be there in backend server
4. you can use url returned by postman 
