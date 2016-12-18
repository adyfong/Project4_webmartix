Project Title

WEBMATRIX

Auther

Adeline

Concept
What do you think of this website?
Using some simple matrix or Q&A to evaluate a website or a image. This data will then be transfer to easily readable data.

Technology
Node.js
ReACT.js
ReACT Route
ReACT D3
might add socket.io later

User Story
When developing a website, opinions and feedback from peers or team mate are essential to building a better product.
After logging in, user will have a web link to grade/evaluate a website. The result will be save and deliver to the developer or the project team lead.

Wireframes
https://wireframe.cc/uM26jd

Timeline
By Thursday: Get ERD & Design sketched out and install all required application
By Friday: Start coding to add one questions to database. Seed results to test charts.
By Saturday: Continue with CRUD and may be plan for user auth
By Sunday: Make sure everything is working.
By Monday: Add A serach field
By Tuesday and Wednesday: Work on css 


Approached:
First Creat the database and then create the MVC
      GET questions from database.
      PUT Ratings into the database. Since radio button is only one, I had to figure a way to make it an array format.
      Worked on Graph to display results
      Add search in for weblinks.

Installation dependencies
 
    "react-d3-components": "^0.6.5",
    "d3": "^3.5.17",
    "react-dom": "^15.3.2",
    "react-router": "^3.0.0",

Future
Plan to finish User Auth, draw other graphs, forwarding, edit text & socket.io

