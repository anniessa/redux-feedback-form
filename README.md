# Redux Feedback Loop

## Description

_Duration: 1 weekend_

This app is a tool to collect feedback from students about how they are feeling, how well they understand the content, how much they feel supported and any additional comments. There is an administrative page that is connected to a database, which displays all of the feedback submitted.

## Screen Shot

<img width="1055" alt="Screenshot 2023-02-26 at 5 03 20 PM" src="https://user-images.githubusercontent.com/111613142/221446041-1a268735-9bd0-4407-a5b0-3f5a6837e2bb.png">

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Material UI](https://mui.com/)

## Installation

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## Usage

1. On page load, you can begin entering your Feelings rating. Make sure to select a rating before clicking 'Next'.
2. Continue entering ratings for Understanding, Support and Comments. 
3. Once you get to the Review page, you can check to make sure your answers are correct. If you want to update them, you can go back, but you will have to re-enter ratings.
4. Upon submission, you will get a confirmation that your feedback has been submitted.
5. To access the admin page, visit /admin. Here you will see all feedback previously submitted. 


## Built With

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Material UI](https://mui.com/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality!

## Support
If you have suggestions or issues, please email me at [anniessa.antar@gmail.com].