# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Omar Mneimneh**

Time spent: **8** hours spent in total

Link to project: (https://glitch.com/edit/#!/strong-sugary-goldfish)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://recordit.co/DHauw9iHGH)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I used stack overflow because I got stuck with making the buttons light up while the hints were playing.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[A huge challenge that I encountered while working on thsi submission was making the buttons behave as expected while the hints were playing. For some reason, once I got into checking the user's guesses, the sounds just stopped playing. Another issue I encountered was when the hints were playing, the buttons refused to light up. I got around the sound issue by revisiting the older javascript code and seeing that I had mispelled something. On the other hands, for the lights, it turned out that when I wrote up the CSS, for some odd reason I mispelled each instance of the word "button" wrong when it came to styling the classed buttons. Another challenge was getting the guesses to be interpreted correctly. When I started this project, I quickly skimmed through the walkthrough to get a general idea of what was asked and began to work on it myself only checking back to make sure my logic was correct and to match names in case that was necessary. However, when I got to checking the guesses, I could not figure out how to make sure the computer was checking the correct index of the patterns array at the instance the guess was inserted (e.g if it was the second guess, check the second pattern.) It wasn't until I checked the template that it made sense to me that using a for loop isn't correct because I was waiting on user input rather than computer input.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[In a real world setting, would it be one person that is in charge of writing the html and css to style the application and also the javascript to handle the logic behind it? I know there are people that specialize in full stack development, but on a project of a much bigger scale than something like this, would the responsibility fall on one person? If not, how would the work be split up?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[Two things I would like to improve on the project is adding some sort of multiplayer functionality with a leaderboards that can be either made to include global high scores, or filtered to show the highest scores amongst friends. To implement that, I would also go back and refractor the game to make sure it runs indefinitely until the user loses all their lives whether it be due to running out of time multiple times, making the wrong guesses, or a combination of both.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/Ix-wRrqyMWU) I wasn't able to obtain a link from zoom. I hope this will suffice.


## License

    Copyright [Omar Mneimneh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
