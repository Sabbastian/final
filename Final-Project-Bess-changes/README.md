## Final Project Description

**4/03/18**
Changed the scope of the project to be an artist profile for an artist I've been producing for. I initially was going to incorporate a database to host the metadata, but quickly realized there wasn't much I really wanted to display and it ended up being easier to just use the iTunes Search API to get the metadata for me. The spectrum analyzers are incorporated through p5.js with an instance for each song. The controls are also displayed through the use of p5.js. Expect an update tomorrow when I implement more user functionality allowing the user to search for more information about the artist, using the iTunes Search API to get the data. I would've already implemented that today, but when trying to set myself up with a local server to host the audio files, everything that could've went wrong did and it led me on what seemed like a never-ending google search to troubleshoot error after error. Figuring out how to set up two separate instances of p5 took a bit more time than I would've liked as well.

**4/09/18**
This took far longer than anticipated, but I think I've finally got a working Final Project idea. No local server is needed to run it as I'm now using data from Patrick's server that he very generously created for me to use for this project. It may be a bit messy for now, but I've designed it to where you pick an artist and track (currently from a limited selection) and the page will display a header for the chosen artist, a p5.js visualizer for the chosen track, and controls to control the track. All the metadata, and audio files, comes from either the iTunes Search API or Patrick's json object that he provided me with for this project. I know it's not perfect as is and there's a slight issue with the audio loading message that I couldn't quite fix, but it does work for the intended purpose.

##### To-Do list
- Add more tracks and artists
- Create a style sheet
- Create a way to display multiple visualizers for different songs at the same time
  with their own header and set of controls
- Alter the p5.js sketches so there's only one that I can attach the correct audio to
  and call whenever I want to display another song on the page
- Figure out a way to load the audio files before the sketch is created so you don't
  have to wait for the audio to load before playing the track
