# Deployment Notes

Web Server
- run web apps
- appect req from clietns and send back responses to them
- are software on someone else's machine
- ex: localhost:3000


[client] === [web server (multiple web applications/apis)]

Dev Process
- write code
- commit and push
- profit(it's deployed automatically to heroku)

In a react app
- you can do `yarn build` and it generates a build folder and the `index.html` has a link to js, css files 


Steps to prepare our API for deployment to Heroku
- Dynamic port (b/c if all of use the same port it's going to conflict)
- Set up "start" script that uses `node` not nodemon to run server
- Install env


The environment is the platform where the application is runnung
- By platform, means operating system