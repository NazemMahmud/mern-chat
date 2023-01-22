## About
This is a simple chat (for now it is only 1-to-1 chat) based on MERN stack, with s simple JWT token based authentication system.

For design, I try to copy the UI of whatsapp web version. It is not fully responsive. I only build it for the web version. \
And, as the main focus of this project was building a one-to-one chat, some other things are ignored for now.

## Pre-requirements
- node version 16.14.*
- react version ^18.1.0
- Install nodemon package globally if you want to use that

# Installation
- install npm packages
- copy and replace `env.example` as `.env`, and change value accordingly in both client and server
- To run backend:
  - if nodemon is used: `npm run dev`
  - else: `npm run start`
- To run front-end: `npm run start`


## Current Features:
- **Authentication:** login, registration & logout is done
- **Profile:** there is a profile section where user can see about his profile (image not included)
- **Friends list:** Left sidebar has all the users list in the system including
  - the last chat message text with the user (if any) along with the message sending time
- **Chat**: one to one chat with any user
- **Online**: User can see whether the other user is online/offline in the chat header (right component), after selecting a user by clicking from the left sidebar.
- **Typing notification:** user can see if other user is typing to send a message to him in 2 sections:
  - In the left sidebar, in users list beside the specific username who is currently typing a message
  - In the message box, above the chat input section


## TODO (a reminder what can be done from here for next steps):
The main purpose of the system is to implement socket for chat. Because of this, some common things are ignored for now, such as
- refresh token, when the access token is expired, front does not call any API for refresh token. I will implement it later

The other tasks will be implemented later:
- group chat
- image upload
- profile update (including image)
- audio/video call
- add emoji in chat
- Add friend and show them in the left sidebar instead of all the user
- scroll view of the chat
