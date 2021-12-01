### mmarkoc.github.io website

## About

This is my final project for CS510 "Intro to Web Development". Plan is to create simple and responsive personal website using HTML,CSS, Bootstrap with Javascript and Jquery. Website is deployed using github and it is available at [mmarkoc.github.io](mmarkoc.github.io).

## External Resources

- [Google Fonts](https://fonts.googleapis.com/css2?family=M+PLUS+1+Code)
- [Google Icons](https://fonts.googleapis.com/icon?family=Material+Icons)
- [W3 Schooled Modal Box tutorial](https://www.w3schools.com/howto/howto_css_modals.asp)
- [startbootrap.com](https://startbootstrap.com/guides/bootstrap-form-setup-guide)

## Development journal

- Spent time reviewing the project description and writing notes so that I don’t miss out on any requirements of this project. I also reviewed the example websites to get the idea on how others approached this project as well to potentially get some design ideas.
- I created the starter files and then spent some time reviewing the Bootstrap Navbar documentation. I've learned the hard way that the `data` has been changed to `data-bs` in Bootstrap V5. I've created a navbar that I believe will suffice for now. I will look up some tutorials on navbar toggler animation and potentially implement that. Next big thing that I will work on will be general design which includes choosing font and color palette.
- After evaluating a few different layout options for the section area I've decided to go with bootstrap containers. Because of my navbar size, and position being fixed on top, I had to set the start of the main container to maximum padding and margin. That might have caused navbar links not to work correctly all of the time. I will need to look into that.
- I decided to try various different fonts from google fonts and decided to, for now, stick with M1 Plus Code. I also spent some time trying different color palettes. After I've found the combination that I like, I applied it to the website using CSS.
- While going through google fonts I've noticed that they have a wide selection of various icons so I've decided to implement some of those into my navbar. I also finished the about section
- While working on the resume section I've decided to use modal boxes to provide more detail about my work experience. I used [W3 Schooled Modal Box tutorial](https://www.w3schools.com/howto/howto_css_modals.asp) for that.
- My first implementation of modals was incorrect as it was, while looping through an array of class modals, opening all of the modals at once. I noticed that while implementing the close action. My solution was to introduce ids’ to elements and check which button was pressed. There must be a more efficient way to do this and I might come back to this at the end.Next thing I will work on will be adding actual content to modals and modal design.
- I added details for each job to modals and decided to use the same color palette I used on navbar. Decision to use modals in the resume section turned out to be an efficient way to learn more on how to handle events across multiple elements of the same class in javascript.
- I have used some information from the following bootstrap form guide [startbootrap.com](https://startbootstrap.com/guides/bootstrap-form-setup-guide) to create the contact form. I decided to stick with the bootstrap grid to get the desired layout of the form even though I could have probably got the same result with less code.
- I decided to go with a simple design for projects section with using github icons for links to the project repositories. In order to open links in the new tab I have used [freedcodecamp](https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/) tutorial.
- The only alert reported by WAVE was the missing header so I decided to fix that. I adjusted the navbar to have the missing headers. Minor sizing adjustments were required in order for navbar to look the same as before the change.
- Website is deployed using github and I have verified the access from various devices. README.md is updated and it is time to start working on uploading the assignment.

## To Do

- [x] Review the project description
- [x] Create starter files and initial commit
- [x] Deploy site
- [x] Navbar
- [x] About
- [x] Resume
- [x] Projects
- [x] Contact
- [x] Test for various screen sizes
- [x] Accessibility check
- [x] Performance check
