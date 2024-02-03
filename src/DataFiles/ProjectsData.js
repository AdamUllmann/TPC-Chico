import AdamCellular3d from "../Images/AdamCellular3d.png"
import NumanScheduleHelper from "../Images/NumanScheduleHelper.png"
import AdamRaylib from  "../Images/AdamRaylib.png"
import AdamGameofLife from "../Images/AdamGameofLife.png"
import AlexSnailMazeSharp from "../Images/AlexSnailMazeSharp.png"

const projectsData = [
    {
      name: "Adam Ullmann",
      title: "Cellular Automata 3D",
      githubLink: "https://github.com/AdamUllmann/Cellular-Automata-Online",
      description: "A small personal project, simulating the real-time, animated behavior of cellular automata in 3-dimensional space, with user-input rules, camera controls, and speed controls. I also programmed rudimentary ground shadows and shading of the 3D objects, along with antialiasing, frustum culling, and occlusion culling (in progress). The project was heavily inspired by the 2D 'Conway's Game of Life' from 1970, which borrowed from the same mathematical concepts. All of this was done with a low-level C graphics library called Raylib. The simulation can handle up to 125,000 cells (cubes) in each frame, at 60 frames per second on modern machines. I am proud of this performance.",
      image: AdamCellular3d,
    },
    {
        name: "Numan Khan",
        title: "Chico State Schedule Helper",
        githubLink: "https://github.com/numan-7/Chico-State-Schedule-Helper",
        description: "Chrome Extension that shows professor's rating and my professor's score next to their name on the portal with a click of a button and a hover popup, with the ability to save ratings.",
        image: NumanScheduleHelper,
    },
    {
      name: "Adam Ullmann",
      title: "Raylib Digital Synthesizer",
      githubLink: "https://github.com/AdamUllmann/Raylib-Synthesizer",
      description: "A digital synthesizer application for personal use. The program features 6-voice polyphony with 5 different waveform oscillator types: Sine, Saw, Square, Triangle, and Noise. The program also features low-pass and high-pass filters with cutoff and resonance controls. Other additions include tuning functionality, note-to-frequency mapping for keyboard input, and a built-in oscilloscope. All of this was implemented exclusively using the tools of raw Digital Signal Processing and Raylib.",
      image: AdamRaylib,
    },
    {
      name: "Alexander Haga",
      title: "SnailMazeSharp",
      githubLink: "https://github.com/infinimineralex/SnailMazeSharp",
      description: `This is a 3D variant of the old SEGA BIOS game "SnailMaze. This version uses Raylib to create the world and game. While it is a work-in-progress, features that have been added include a minimap, multiple enemies with rudimentary AI, and a horror-inspired redesign. Further iterations will add better pathfinding, a robust level system, and a story.`,
      image: AlexSnailMazeSharp,
    },
    {
      name: "Adam Ullmann",
      title: "Game of Life++",
      githubLink: "https://github.com/AdamUllmann/Game-of-Life-plus-plus",
      description: "Interactive Conway's Game of Life simulation built with raylib. Features dynamic grid, zoom, and speed controls.",
      image: AdamGameofLife,
    },
  ];

export default projectsData;