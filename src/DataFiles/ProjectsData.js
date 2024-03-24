import AdamCellular3d from "../Images/Projects/AdamCellular3d.png"
import NumanScheduleHelper from "../Images/Projects/NumanScheduleHelper.png"
import AdamRaylib from  "../Images/Projects/AdamRaylib.png"
import AdamGameofLife from "../Images/Projects/AdamGameofLife.png"
import AlexSnailMazeSharp from "../Images/Projects/AlexSnailMazeSharp.png"
import Aidan3D from "../Images/Projects/Aidan3d.png"
import MilesEmulator from "../Images/Projects/MilesEmulator.png"

const projectsData = [
    {
      name: "Adam Ullmann",
      title: "Cellular Automata 3D",
      githubLink: "https://github.com/AdamUllmann/Cellular-Automata-3D",
      description: "Created a personal project using Raylib, simulating real-time 3D cellular automata behavior with user-input rules, camera controls, and speed adjustments. Implemented rudimentary ground shadows, shading, antialiasing, frustum culling, and ongoing work on occlusion culling. Inspired by Conway's Game of Life, the simulation supports up to 125,000 cells per frame, achieving 60 frames per second on modern machines.",
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
    {
      name: "Aidan Raymond",
      title: "3D Model Viewer",
      githubLink: "https://github.com/Tabris05/modelviewer",
      description: "A simple program for viewing 3D renders of .gltf files in real time. Features include a fully dynamic physically based lighting model,  image-based global illumination, support for custom hdr skyboxes, and directional shadow-mapping with percentage-closer filtering.",
      image: Aidan3D,
    },
    {
      name: "Miles Benton",
      title: "RISC-V EMUlator",
      githubLink: "https://github.com/kil0meters/remu",
      description: `REMU is a RISC-V RV64GC/Linux emulator focused on providing advanced performance metrics. It simulates CPU features like a primitive cache system, a fully-bypassed pipeline with potential stalls for certain instructions, and branch prediction. The emulator includes "puck," a command-line front-end with a disassembler and interactive reverse debugger. REMU supports little-endian CPU architectures and offers an example usage on Arch Linux for building with riscv64-linux-gnu-gcc.`,
      image: MilesEmulator,
  },
  ];

export default projectsData;