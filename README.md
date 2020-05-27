Available Script

.env setting

# port number

PORT=4500

# MongoDB URI

MONGO_URI=mongodb://localhost/test

In the project directory, you can run:

npm install

npm start

you can test the apis with postman.

- signup api:
  POST
  http://localhost:4500/signup

form-data fields
key: full_length value: file,
key: full_length_profile value: file,
key: portrait_length value: file,
key: close_up value: file,
key: close_up_profile value: file,
key: personality_pic value: file,
key: firstname value: Text,
key: lastname value: Text,
key: instagram_url value: Text,
key: email value: Text,
key: password value: Text,
key: phone_number value: Text,
key: address value: Text,
key: city value: Text,
key: country value: Text,
key: postal_code value: Text,
key: state value: Text,
key: birthday value: Text,
key: story1 value: Text,
key: story2 value: Text,
key: story3 value: Text,
key: representation value: Text,
key: metric value: Text,
key: bust value: Text,
key: height value: Text,
key: eye value: Text,
key: waist value: Text,
key: shoe value: Text,
key: cup value: Text,
key: hip value: Text

- login api:
  POST
  http://localhost:4500/signup

  params
  email, password

- get all models data api:
  GET
  http://localhost:4500/models
