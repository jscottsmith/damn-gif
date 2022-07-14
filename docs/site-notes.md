# Notes about this application

## Goals:

1. Endless Gallery - When you reach the end you start back at the beginning.
2. Networking - Data for the gallery should come from an API.
3. Persistence - Data is stored in React context and provided to components.
4. Creativity - Make something fun and engaging.

## Design Process

Beginning with the brief to make an endless gallery while doing something creative I've set out to make a swipe right/left gallery that determines whether you like or dislike each image. After a decision is made on an image, the next will load and if you've reached the end you will start back at the first.

Starting in Figma first, I roughed in the UI that would be displayed to the user beginning with mobile.

https://www.figma.com/file/0bOG2TLOj0lCXXBzCbBAmR/damn-gif

### User Interface Goals:

- Indicate the potential decisions to the user during the drag action
- Indicate the actual decision after user input
- Indicate the current image
- Indicate the total images
- Provide a way to exit the gallery
- Provide an external link to the image

With these goals in mind I leveraged Tailwind for my color scheme, and Heroicons for my icon system and designed an interface that is minimal but clear.

## Development Process

First the application was bootstrapped by the following

- Bootstrapped the environment with NextJS and Typescript.
- Setup Tailwind for NextJS
- Added a test environment for Jest with React Testing Library
- Added a Github workflow to run the tests

Following the above I began to work on getting data for the application.

- Created a developer application to get an API key
- Created helper function to make calling the API simple and some constants for the necessary API routes
- Setup a fetch call to the API on the server using `getServerSideProps`
- Created a context to store my data and a provider component to wrap the page and provide the fetched data

Once data was flowing into the page as expected I began building the main gallery view

- With the main goal of creating a looping gallery I created a custom hook that controls the index of an array and provides an interface to call for the next or previous index while always cycling.
- Added some tests for this hook written in a BDD style: Given, When, Then.
- Using this hook basic gallery component that displayed the current image with some button to call for the next/previous.

Once that was in place I focused on creating the drag interactions

- Decided to use Framer Motion after experimenting with their documented examples
- Created a component to wrap each slide that allowed dragging based on the experiments
- Captured the velocity and determined the direction a user is dragging
- When a drag met a minimum threshold and velocity a throw animation was triggered and drag constraint removed
- Then added callbacks props to be called when a throw animation completes
- These callbacks were then used to cycle throw the images

This got me to a point where I had a solid working prototype of the interactions. Next I began to optimize the display of images and the interaction.

- Created an Image component that first displays a lo-res blurred still image while the larger GIF loads. Once it has the lo-res is animated out.
- Added a stage where I could animate image enter and exiting via Framer Motion's animation presence component

Then I began to build the UI based on my designs

- Added a footer that displayed the like/dislike actions
- Added a header that displayed the current image, a back button, and an external link to the image
- Setup styles that worked mobile first but adapted to a simple desktop design

Then came lots more finesse and delightful details that hopefully make the experience feel fun and responsive.

## What's next?

If I continued to work on this application I'd consider the following:

- Increase test coverage. Many components were left untested so I could quickly get to a point where I had something nice to share.
- Revisit and cleanup some of the code structure and components.
- Continue to test and finesse the drag/flick interactions. This stuff can be a little tricky to get right across touch and desktop displays. I think the current interaction is good but not perfect.
- Like/dislike actions aren't stored - would be nice to actually capture this somewhere either in the API or just locally to store a record of the users decisions.
