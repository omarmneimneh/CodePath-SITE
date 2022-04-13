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

- [X] Added difficulty settings that control how many squares are shown (4 for easy, 6 for hard).
- [x] Gifs for video walk through are working just fine on github but not on glitch. Was told to leave a comment in here.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Base Application:](http://g.recordit.co/T8ySQL5Wxh.gif) 
![Difficulty Feature:](http://g.recordit.co/sUpU4P9xlB.gif)
![Life System:](http://g.recordit.co/vaDEd849S3.gif)
![Timer functionality:](http://g.recordit.co/8JnkC3AA3F.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I used stack overflow because I got stuck with making the buttons light up while the hints were playing.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[While working on this submission there were two major problems that I faced both realting to making the buttons behave as expected while the hints were playing. First, the buttons failed to light up while the hints were playing. Second, when checking the user's guessses, the sounds stopped playing. After a comparison with an older version of the code I had written by identifying a spelling order in my code. A third challengeI faced was getting the guesses to be interpreted correctly. I wanted to challenge myself with this assignment so most of my problem-solving was through trial and error. For this specific problem, however, I found it much more helpful to refer back to the template provided and realized that I was checking each of the user's inputs against the first hint of the pattern. I wasn't aware of using a for loop in order to completely check each hint's guess. Last but not least, I wanted to add something outside of the parameters given or suggested in the prework and decided to go with a difficulty system. It took a few hours of trial and error to overcome a bug in where the number of hints were doubled each time the start button was clicked which lead to the game being unplayable as the hints would be way too fast to see. I overcame this issue by moving some event handlers outside of the function that handles starting the game and everything from there was a cake walk.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[In a real world setting, would it be one person that is in charge of writing the html and css to style the application and also the javascript to handle the logic behind it? I am aware that there are people that specialize in full stack development, but in the case of a project on a much bigger scale than something like this pre work, would the responsibility fall on one person? If not, how are the teams split up and how do they collaborate? After the project, is the team split up or do you continue working with the same team on a different project excluding people leaving whether it be through promotion or leaving the company?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[Two things I would like to improve on the project is adding some sort of multiplayer functionality with a leaderboards that can be either made to include global high scores, or filtered to show the highest scores amongst friends. To implement that, I would also go back and refractor the game to make sure it runs indefinitely until the user loses all their lives whether it be due to running out of time multiple times, making the wrong guesses, or a combination of both.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/b2a64e046b2b466fbf33b299417d00f4) 


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
