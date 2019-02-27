App name: "Diaria".

This is a repository for the final project of Backend Web 1.2 for Make School, San Francisco.

For my "custom api," I'm going to allow users to create accounts and log their food and bowel movements in a journal.

Users have days and days have both "in's" and "out's" (like posts to comments in the reddit tutorial).

Days are meant to keep track of events and stressors throughout the day, while "in's" keep track of what the user had to eat and "out's"
are the descriptions of the user's bowel movements.

Days are displayed three at a time. The user selects the day they would like to view and the day before and the day after that chosen day are displayed on the user's home screen / navigator.

The overall day-events are displayed in a paragraph at the top as long as the date as a title.

"In's" and "out's" are displayed below, in's on the left out's on the right.
Preferably the entries are timestamped, but at the least in's and out's are displayed in chronological order on their respective side of the screen.

The point of the journal is to create a log of events/food/BMs in order to draw conclusions about that person's digestive track and the optimal conditions under which his or her bowels operate.

A full description of the assignment has been copy-pasted below from https://github.com/Make-School-Courses/BEW-1.2-Authentication-and-Associations/blob/master/Projects/02-Custom-API-Project.md

"""
Custom Authenticated API Project

It's time to get creative and write the authenticated API of your dreams!

Objectives

Practice the SDLC by completing a project from proposal to deployment with a focus on Test Driven Development practices.
Utilize all the techniques learned in class in a single cohesive project.
Produce a portfolio-worthy authenticated API to show off to the world!
Requirements

Functional Requirements

At least one nested route or resource as covered on Day 3 of class.
The ability to CREATE, READ, UPDATE, and DELETE the object(s) in your API.
At least one of each endpoint: GET, POST, PUT, and DELETE.
A database persistence layer (e.g. MongoDB)
The ability to securely provision an API user using the authorization and authentication techniques learned in class. Unauthenticated users should not be able to use the API!
Project contains documentation explaining how to use your API.
Project contains a simple, static single page brochure site that explains what the API does and a link to the API's documentation.
Non-Functional Requirements

The API must be written using the appropriate application of RESTful techniques.
The API implementation must follow the MVC pattern.
The API must be hosted in a public GitHub repository.
The project repository should not expose any secrets!
The API must have a discernible theme or serve a distinct purpose. See the Examples for well-themed and purposed APIs.
The final project must be deployed and fully accessible via the internet and callable via any consumer.
The final project must be fully documented.
Must develop the API using a TDD approach as discussed in class on Day 9.
The syntax in the final project deliverable will adhere to Airbnb JavaScript Style Guide.
Level Up - API + Skills (Optional)

NOTE: ++ indicates the ability to level up the preceding skill through the following stretch challenges:

Code++: Love integrations? Find a clever way to utilize a third-party API within your API!
DevOps++: Deploy API and brochure site over HTTPS.
Networking++: Write and post a short blog on Medium, Hacker News, or dev.to debuting and promoting your life-changing new API! Sign up now!
Example APIs

List of Public APIs - Giant list of public APIs to inspire you!
The Rick and Morty API - Excellent single page brochure site with easy to find About and Documentation links. Very clear documentation.
Adorable Avatars - Beautiful brochure site, easy to use and direct API. Great docs and FAQ!
JSONPlaceholder - Clean and minimalist one page site and documentation for a very simple API. Love the 'Try It!' buttons!
Implementation Notes

dotenv - Keeping Secrets Safe

Look into the dotenv package on NPM. This package will allow you to store secrets in a .env file that you deliberately add to the project's .gitignore file. Be sure to read the documentation fully!
Heroku Deployment

Make sure the Access-Control-Allow-Origin header is set to * so that requests to your API can be made from any domain!
Schedule

A sample daily outline is provided to assist you in planning your sprint:

Day 07: Brainstorm ideas for your API.
Day 08: Write API proposal.
Day 09: Write API tests.
Day 10: Continue writing API tests.
Day 11: Write Authentication and Authorization tests.
Day 12: Implement API.
Day 13: Implement API.
Day 14: Documentation and deployment.
Phases and Deadlines

Phase 1: Proposal - Due Day 8 @ 11:59pm.
Deliverables:
Public GitHub Repository Link
README.md in the repo with proposal.
Approval: Instructor will approve projects by start of class on Day 9.
Phase 2: Test First Approach - Due Day 11 @ 11:59pm.
Deliverables:
/tests/ folder in repo containing TDD code and strategy.
Code Review 1: Instructor will review TDD strategy and make notes in each student repo. This will be complete by the start of class on Day 12.
Phase 3: Final Deliverable - Due Day 14 @ 11:59pm.
Deliverables:
Link to deployed API brochure site.
Code Review 2: Students receive after class.
Getting Started

Fork the provided auth-api-starterpack repository and examine the contents to reveal the next steps!

Additional Resources

Custom API Project - Scoring Rubric

Must receive higher than 70% to pass the project.

Functional Requirements (50%)

Criteria	Points	Score
>1 nested route	10
CREATE, READ, UPDATE, and DELETE objects	20
Uses a DB	10
Can provision users	20
Brochure site	10
Has documentation	10
Non-Functional Requirements (50%)

Criteria	Points	Score
RESTful architecture	10
MVC	10
Public GitHub repo	5
No exposed secrets	5
Has purpose / fulfills proposal	15
Deployed and usable	15
TDD approach	15
Adhere to AirBnB style guide	5
Final Score

Section	Possible	Earned	Final (%)
Functional Requirements	80		
Non-Functional Requirements	80		
TOTAL	160

""""
