# Jigsaw-puzzle-game  
Welcome to the Jigsaw Puzzle Game page! This page is made by an enthusiastic puzzle solver, who wanted to bring this fun game online and share with everyone else!

This website is perfect for young children or adults who enjoy some problem solving games. The different levels of the game easy can be adjust to any age group and skill level. 
        
Playing puzzle games can be great fun, it sharpens your mind, develop memory skills, as well as an ability to plan, test ideas and solve problems. 

Enjoy and you can even share with your friends! 😊

The link to the live game is here: [Jigsaw Puzzle Game](https://aigaa.github.io/Jigsaw-puzzle-game/index.html)  

![alt text](./assets/docs/testing/responsive.PNG "Website layout across multiple devices")  

## Table of Contents
- [About](#about)
    - [Site purpose](#site-purpose)
    - [Target audience](https://github.com/AiGaA/Jigsaw-puzzle-game#target-audience)
    - [Goals](https://github.com/AiGaA/Jigsaw-puzzle-game#goals)
- [Design](https://github.com/AiGaA/Jigsaw-puzzle-game#design)
    - [Wireframes](https://github.com/AiGaA/Jigsaw-puzzle-game#wireframes)
    - [Color Scheme](https://github.com/AiGaA/Jigsaw-puzzle-game#color-scheme)
    - [Typography](https://github.com/AiGaA/Jigsaw-puzzle-game#typography)
    - [Images](https://github.com/AiGaA/Jigsaw-puzzle-game#images)
- [Technologies Used](https://github.com/AiGaA/Jigsaw-puzzle-game#technologies-used)
    - [Frameworks, Libraries & Programs Used](https://github.com/AiGaA/Jigsaw-puzzle-game#frameworks)
- [Testing](https://github.com/AiGaA/Jigsaw-puzzle-game#testing)
    - [Validator Testing](https://github.com/AiGaA/Jigsaw-puzzle-game#validator-testing)
    - [Bugs](https://github.com/AiGaA/Jigsaw-puzzle-game#bugs)
    - [Unfixed Bugs](https://github.com/AiGaA/Jigsaw-puzzle-game#unfixed-bugs)
- [Deployment](https://github.com/AiGaA/Jigsaw-puzzle-game#deployment)
- [Credits](https://github.com/AiGaA/Jigsaw-puzzle-game#credits)


## About <a name="about"></a>
Jigsaw Puzzle Game is fun and interactive site for kids and grownups where you can enjoy solving fun and colourful puzzles. 

This game has 3 levels: Easy, Medium and Hard to choose from. Each puzzle has their own set of squares. 

- Easy Level is 3x3 squares and has simple image of Fox. This shuffles 50 times and is the most easiest puzzle to solve.   
    ![alt text](./assets/docs/features/puzzle-3x3.PNG "Shuffled puzzle - Easy Level")
- Medium Level is 4x4 squares and has little bit more colorful image. This shuffles 100 times and is a little trickier to solve.   
    ![alt text](./assets/docs/features/puzzle-4x4.PNG "Shuffled puzzle - Medium Level")
- Hard Level game is 5x5 squares and is hardest to solve. It has very colourful image, and will take more time and patience to solve this puzzle.   
    ![alt text](./assets/docs/features/puzzle-5x5.PNG "Shuffled puzzle - Hard Level")

Each puzzle has a 'Show Image' button at the bottom that allows to see what image has to look like.   
![alt text](./assets/docs/features/show-img-btn.PNG "Show image button, that displays a full puzzle image")

Each puzzle has a 'Refresh' button, that shuffles the image again.   
![alt text](./assets/docs/features/refresh-btn.PNG "Refresh button that allows to shuffle puzzle")


### Site Purpose <a name="site-purpose"></a>
- Playing puzzles can be very beneficial to kids and as well as adults. 
- Playing puzzle games can be great fun, it sharpens your mind, develop memory skills, as well as an abiliy to plan, test ideas and solve problems.

### Target Audience
- This site is developed for anyone and any age group who enjoys games, puzzles, or just like to have fun.
- This site is developed with thaught that it easy accessable to all users. Compatibility with different device sizes makes this game accessable to play easy on desktop or the mobile device.
- Different levels of the game makes more fun to challenge inner self. 


### Goals
- To bring some positivity and to create fun environtment for its users.
- To offer a user-friendly game that is simple to play and comprehend.
- To produce code that complies with best practices.

## Design
### Wireframes
For this project Balsamiq tool was used to create layout and design for the game.

<details><summary>Screenshots for Web page:</summary> 

![alt text](./assets/docs/wireframes/mainPg.PNG "Main page screenshot for the games website")  
![alt text](./assets/docs/wireframes/easyLvl.PNG "Easy level page screenshot for the games website")  
![alt text](./assets/docs/wireframes/MediumLvl.PNG "Medium level page screenshot for the games website")  
![alt text](./assets/docs/wireframes/HardLvl.PNG "Hard level page screenshot for the games website")  
![alt text](./assets/docs/wireframes/AboutPg.PNG "About page screenshot for the games website")  
![alt text](./assets/docs/wireframes/ContactPg.PNG "Contact Us page screenshot for the games website")  

</details>

### Color Scheme
The color scheme for thsi project was to choose a neutral colors, as the images would be bright and that would be the focus for the website. 
The color palette I chose to use was taken from [coolors.co](https://coolors.co/palette/f4f1de-e07a5f-3d405b-81b29a-f2cc8f) website.  
![alt text](./assets/docs/wireframes/color-scheme.PNG "Color palette that is used for website")

### Typography
For typography I chose to use downloadable [Google Fonts](https://fonts.google.com/specimen/Montserrat?query=Montserrat).
These are three fonts that are used: Montserrat-Bold, Montserrat-Regular and Montserrat-Thin. If the browser does not support these fonts it should fall back to sans-serif.

### Images
All images used in this project were custom made. All puzzle images were created using free design tool [Canva](https://www.canva.com/). This tool is very easy to use, and has good variety of free patterns, backgrounds and graphics.


## Testing

- The website was constantly tested during development using Chrome dev tools.
- All links and buttons were tested. Solved many, many puzzles to test, if all features work as should.
- Website was tested in Chrome, Firefox, Microsoft Edge, and Safari.
- Lighthouse was used to test the website for Performance, Accessibility, Best Practices and SEO for desktop and mobile:
    - Home page:  
    ![alt text](./assets/docs/testing/lighthouse-index.PNG "Lighthouse test for home page")

    - Puzzle page:  
    ![alt text](./assets/docs/testing/lighthouse-puzzle.PNG "Lighthouse test for the game page")

### Validator Testing

- HTML 
    - An error was returned when testing website through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Faigaa.github.io%2FJigsaw-puzzle-game%2F)  
    ![alt text](./assets/docs/testing/btn-errors.PNG "Error coming up when <a> element has wrapped <button> element.") 
    - A warning was displayed for js script type attribute on easy-level.html, medium-level.html and hard-level.html pages  
    ![alt text](./assets/docs/testing/js-script-warn.PNG "Warning shown for type attribute on easy-level.html, medium-level.html and hard-level.html pages.") 
    - These issues were fixed and returned no errors  
    ![alt text](./assets/docs/testing/btn-errors-clr.PNG "No warnings displayed when ran through W3C validator.")   

- CSS  
    - There were no errors found when testing through the official [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Faigaa.github.io%2FJigsaw-puzzle-game%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)  
    ![alt text](./assets/docs/testing/css-clr.PNG "No warnings displayed when ran through W3C CSS validator.")  

- JavaScript  
    - JavaScript tested using [BeautifulTools](https://beautifytools.com/javascript-validator.php)  
    ![alt text](./assets/docs/testing/js-clr.PNG "Arrow function syntax available on ES6. Use 'esversion: 6'.") 

### Bugs

When implemented isSolved() function to the puzzle to show when puzzle has been solved in console.log it was going in infinte loop. 
The function call was misplaced and this was fixed by placing it into draw() function in js file, which have solved the issue. 
![alt text](./assets/docs/testing/Infinite-loop-bug.PNG "Showing infinite loop bug in console log")


When project was deployed bug below was coming up on accessing pages on the website, due to some file path declarations. This issue was resolved by fixing path to files and checked throughout the project making sure this does not happen. This issue was showing only on deployed pages. Made multiple repetative commits due to this issue. 
Clearing cache helped to resolve this.

![alt text](./assets/docs/testing/github-error.PNG "Github 404 page")


## Technologies Used  

### Main Languages Used

- HTML5: Structure and content for the website
- CSS: Style and compatibilaty with different devices
- JavaScript: Functions and logic implementation to features of a website

### Frameworks, Libraries & Programs Used 

- [gitpod](https://www.gitpod.io/): To build the project
- [p5.js](https://p5js.org/): A free and open source library that is accessible to everyone. The library mainly is used for building creative projects and as a developer it is interesting to try out new tools and be creative with the projects. This library worked well for this project. Full p5.j library can be found [here](https://cdn.jsdelivr.net/npm/p5/lib/)
- [github](https://github.com/): To store files and repositories. Also often used to search thread for similar issues to resolve errors in the code
- [GitHub Pages](https://pages.github.com/): To build this website
- [Balsamiq](https://balsamiq.com/): To create wireframes
- [Canva](https://www.canva.com/): Create puzzle images and favicon
- [Google Fonts](https://fonts.google.com/): For the Montserrat Font that was used across the project
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): To postion and create more adaptive content  
- [Am I Responsive](https://ui.dev/amiresponsive): To check, if website looks good across multiple devices
- Google Chrome DevTools: This was used throught the project to debug and see the compatibilaty across multiple device sizes


# Deployment



