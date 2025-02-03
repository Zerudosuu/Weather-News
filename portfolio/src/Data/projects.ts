//CHROMA
import Chroma from "../assets/Chroma/Chroma.png";

//ARANG
import Arang from "../assets/Arang/Arang.png";
import Arang3 from "../assets/Arang/Arang3.png";

//Capstone
import Capstone1 from "../assets/Capstone/Capstone1.png";

//Wanderer
import Wanderer from "../assets/Wanderer/WANDERER.png";
import Wanderer1 from "../assets/Wanderer/Wanderer1.png";
import Wanderer2 from "../assets/Wanderer/Wanderer2.png";

//SpaceShooter
import Spaceshooter from "../assets/SpaceShooter/Spaceshooter.png";
import SpaceShooter1 from "../assets/SpaceShooter/SpaceShooter1.png";
import SpaceShooter2 from "../assets/SpaceShooter/SpaceShooter2.png";

const projects = [
  {
    id: "chroma",
    Title: "Chroma",
    Description:
      "Chroma is a unique platformer game set in the whimsical Candy Kingdom. The player controls a square-shaped character, with each side featuring a different color. To successfully land on a platform, the character must match the color of the platform with the corresponding side. If the colors don’t align, the platform becomes disabled, adding a challenging layer to the gameplay. Players must strategize and time their moves carefully to navigate through the vibrant and ever-changing world of Chroma.",
    Role: "Main Programmer",
    year: "2023",
    image: Chroma,
    GameType: "2D",
    BannerImage:
      "https://res.cloudinary.com/dhruvwke3/image/upload/v1738563844/VideoFolders/Chroma/ChromaBanner_akrvli.jpg",

    SpecifiedDetails: [
      {
        Details: [
          { Title: "Project", Description: "Pixwander" },
          { Title: "Year", Description: "2023" },
          { Title: "Category", Description: "Game Development" },
          { Title: "Role", Description: "Main Programmer" },
          { Title: "Tools", Description: "Unity, C#" },
          { Title: "Platform", Description: "PC" },
        ],

        ListOfDescriptions: [
          {
            Title: "Journey",
            Description:
              "Chroma was my first collaborative Unity project and my final project for the subject. At the start, I felt overwhelmed by Unity, as I was still exploring its vast tools and features. One of the toughest challenges was developing the logic to rotate four sprites into one, as I didn’t know at the time that I could simply use animation instead of scripting everything manually.\n" +
              "\n" +
              "I also struggled with 2D collision detection, trying to figure out how physics interactions, collision types, and tags worked. Despite these challenges, I pushed forward, learning to animate, implement physics-based interactions, and use tilemaps effectively. I also worked on UI accessibility, scene transitions, and game flow mechanics, allowing me to shape the game's user experience.\n" +
              "\n" +
              "This project was a huge learning curve but also a defining moment—it solidified my passion for game development and introduced me to the power of teamwork in bringing a game to life.",
          },
          {
            Title: "Learnings",
            Description:
              "Through Chroma, I gained valuable technical skills that helped shape my understanding of game development. Some of my key takeaways include:",
          },
          {
            Title: "Qoute",
            Description: "",
          },
        ],

        ListOfImages: [
          "https://res.cloudinary.com/dhruvwke3/image/upload/v1738563935/VideoFolders/Chroma/9e6f4a84-6d6a-42ff-b6cc-9a15622c8c51_hvsv2i.jpg",
          "https://res.cloudinary.com/dhruvwke3/image/upload/v1738563925/VideoFolders/Chroma/65acfa74-afe9-4b06-a41e-0cf3a6e773d2_p3yuth.jpg",
          "https://res.cloudinary.com/dhruvwke3/image/upload/v1738563915/VideoFolders/Chroma/6fdc4262-5493-459a-ad2e-1b5f233c61cc_c42egg.jpg",
        ],

        LearningsPoints: [
          {
            header: "Animation & Object Rotation",
            description:
              "Instead of coding everything manually, I learned how animations could simplify object transformations and improve efficiency.",
          },
          {
            header: "Physics & Collisions in 2D",
            description:
              "Understanding rigidbodies, colliders, and different collision detections helped me refine object interactions within the game world.",
          },
          {
            header: "Tilemaps & Environment Design",
            description:
              " I explored how tilemaps streamline level design and make creating game worlds more efficient.",
          },
          {
            header: "UI & Scene Management",
            description:
              "I learned to access and update UI elements, manage game states (Game Over, Restart), and transition smoothly between scenes.\n",
          },
          {
            header: "Problem-Solving & Debugging",
            description:
              "Debugging gameplay mechanics, experimenting with different solutions, and learning from mistakes improved my problem-solving mindset.",
          },
        ],
      },
    ],
  },
  {
    id: "wanderer",
    Title: "Wanderer",
    Description:
      "Wanderer is a 3D adventure game built using Unity, where players control a rolling sphere through diverse terrains and unique challenges. Unlike traditional movement mechanics, the player drags the ball to move, adding a fresh and strategic layer to navigation. The game introduces physics-based interactions, requiring precise control and an understanding of momentum to traverse obstacles.",
    Role: "Main Programmer, Designer, 3D Artist",
    year: "2024",
    image: Wanderer,
    GameType: "3D",
    BannerImage:
      "https://res.cloudinary.com/dhruvwke3/image/upload/v1738573427/Wanderer/1_ojrod6.png",

    SpecifiedDetails: [
      {
        Details: [
          { Title: "Project", Description: "Wanderer" },
          { Title: "Year", Description: "2024" },
          { Title: "Category", Description: "Game Development" },
          {
            Title: "Role",
            Description: "Main Programmer, Designer, 3D Artist",
          },
          { Title: "Tools", Description: "Unity, Blender, C#" },
        ],
        ListOfDescriptions: [
          {
            Title: "Journey",
            Description:
              "Wanderer is my first 3D game project, where we explored rolling mechanics with a unique twist—dragging the ball to move instead of using traditional directional controls. This unconventional mechanic made the development process both exciting and challenging.\n" +
              "\n" +
              "Transitioning from 2D to 3D introduced new complexities, particularly in physics and raycasting. Unlike in 2D, where collision detection and movement are relatively straightforward, working in a 3D space required a deeper understanding of forces, gravity, and object interactions. At first, adapting to these changes was difficult, but over time, I began to grasp the nuances of 3D physics and camera movement. Additionally, working in a 3D environment meant considering optimization techniques for better performance. Modeling assets efficiently, adjusting lighting, and handling collision detection in large open spaces all became essential parts of the development process. As I progressed, I became more comfortable with structuring scripts and refining game logic for a more polished experience.",
          },
          {
            Title: "Learnings",
            Description:
              "Through Wanderer, I gained valuable technical skills that helped shape my understanding of game development. Some of my key takeaways include:",
          },
          {
            Title: "Development",
            Description:
              "Implemented character controls, terrain physics, and challenging obstacles. Optimized gameplay for fluidity and excitement across various game levels.",
          },
        ],
        ListOfImages: [Wanderer, Wanderer1, Wanderer2],

        LearningsPoints: [
          {
            header: "Transitioning from 2D to 3D",
            description:
              "Gained an understanding of how 3D game development differs in terms of physics, object interaction, and player controls.",
          },
          {
            header: "Raycasting & Physics",
            description:
              "Learned how raycasting works in a 3D environment, essential for accurate movement, detection, and interactions.",
          },
          {
            header: "Optimization & Performance:",
            description:
              "Explored the importance of efficient 3D modeling, asset management, and rendering techniques to improve game performance.",
          },
          {
            header: "Scripting Patterns:",
            description:
              "Developed a better understanding of structuring scripts for 3D games and refining movement mechanics.",
          },
          {
            header: "Asset Integration & Collaboration:",
            description:
              "Learned to incorporate assets from different sources and ensure they fit seamlessly into the game, a key skill for working in collaborative environments.",
          },
        ],
      },
    ],
  },
  {
    id: "arang",
    Title: "Arang: The Defender",
    Description:
      '"Arang: The Defender" is a survival and tower defense game where players fend off relentless waves of enemies to protect the Tower. As the lone defender, Arang possesses unique abilities to turn the tide of battle—charging up powerful attacks for devastating bullet shots, deploying barricades to slow enemy advances, and even sacrificing health to repair the Tower. Strategic decision-making and resource management are key to surviving the onslaught and defending the stronghold against overwhelming odds.',
    Role: "Main Programmer, Stage Designer",
    year: "2023",
    image: Arang,
    GameType: "2D",
    BannerImage:
      "https://res.cloudinary.com/dhruvwke3/image/upload/v1738573446/Arang/2_atgatd.png",

    SpecifiedDetails: [
      {
        Details: [
          { Title: "Project", Description: "Arang: The Defender" },
          { Title: "Year", Description: "2023" },
          { Title: "Category", Description: "Game Development" },
          { Title: "Role", Description: "Main Programmer, Stage Designer" },
          { Title: "Tools", Description: "Unity, C#" },
        ],
        ListOfDescriptions: [
          {
            Title: "Journey",
            Description:
              "I solo-developed Arang: The Defender, creating a unique tower defense experience where a lone character must protect the tower from waves of enemies. My first step was solidifying the concept and stage design, applying everything I had learned from previous projects.\n" +
              "\n" +
              "One of the biggest challenges I faced was optimizing performance. Managing bullets and frequent updates initially caused frame rate drops, pushing me to explore object pooling for efficient bullet instantiation and enemy spawns.",
          },
          {
            Title: "Learning",
            Description:
              "Through Arang, I gained valuable technical skills that helped shape my understanding of game development. Some of my key takeaways include:",
          },
          {
            Title: "Development",
            Description:
              "During development, the core mechanics of the game were implemented, including AI behaviors, player to protect the tower, and resource management. The programming team focused on ensuring that enemy behaviors and wave progressions were both challenging and balanced. A robust upgrade system was added to allow players to improve their defenses and adapt to the increasing difficulty of enemy waves. Development also included optimizing transitions between waves, enhancing performance, and integrating visual and sound effects to heighten player immersion. Extensive testing ensured that gameplay mechanics worked seamlessly and provided a smooth experience across various devices.",
          },
        ],
        ListOfImages: [
          "https://res.cloudinary.com/dhruvwke3/image/upload/v1738574210/Arang/a04bf84a-19f8-4655-8746-363c825df5a2.png",
          "https://res.cloudinary.com/dhruvwke3/image/upload/v1738574296/Arang/fc27ef6c-79f8-4649-8170-d30271478f10.png",
          Arang3,
        ],

        LearningsPoints: [
          {
            header: "Performance Optimization",
            description:
              "Learned to use object pooling to manage bullets and enemies efficiently, reducing unnecessary instantiations that could slow down the game.",
          },
          {
            header: "Post-Processing Effects",
            description:
              "Implemented visual enhancements to improve game aesthetics and atmosphere.",
          },
          {
            header: "Scriptable Objects",
            description:
              "  Used them for managing spawn systems dynamically, making enemy waves easier to balance and modify.",
          },
          {
            header: "Game Logic Refinement",
            description:
              "Improved my ability to design and optimize real-time mechanics, ensuring smooth gameplay performance.",
          },
        ],
      },
    ],
  },
  {
    id: "spaceShooter",
    Title: "Space Shooter (Asteroid)",
    Description:
      "A fast-paced arcade-style game inspired by Atari’s classic Asteroids and Space Invaders. Players pilot a spacecraft, dodging and destroying incoming asteroids that break into smaller fragments upon impact. Unlike the original Atari version, this game introduces enemy ships that actively fire back, adding an extra layer of challenge. As the chaos intensifies, players must navigate through an ever-growing field of debris while strategically taking down hostile enemies.",
    Role: "Main Programmer",
    year: "2022",
    image: Spaceshooter,
    GameType: "2D",
    BannerImage:
      "https://res.cloudinary.com/dhruvwke3/image/upload/v1738573697/Asteroid/ASTEROID_q0zwlo.png",

    SpecifiedDetails: [
      {
        Details: [
          { Title: "Project", Description: "Space Shooter" },
          { Title: "Year", Description: "2022" },
          { Title: "Category", Description: "Game Development" },
          { Title: "Role", Description: "Main Programmer" },
          { Title: "Tools", Description: "Unity, C#" },
        ],
        ListOfDescriptions: [
          {
            Title: "Journey",
            Description:
              "This project was assigned to us with the goal of faithfully replicating a classic retro game. At first glance, Asteroids seemed simple to recreate, but as development progressed, I realized there were several key challenges to address.\n" +
              "\n" +
              "One of the first hurdles was handling asteroid movement—ensuring that when an asteroid left one side of the screen, it would seamlessly reappear on the opposite side without disrupting its trajectory. Another challenge was optimizing the numerous objects in the scene, particularly when asteroids broke into smaller fragments upon destruction and when both the player and enemies fired bullets.\n" +
              "\n" +
              "Managing these interactions while keeping performance smooth required careful planning, but through trial and error, I found an efficient approach that kept the gameplay responsive and engaging.",
          },
          {
            Title: "Learnings",
            Description:
              "Developing this game helped me gain a deeper understanding of optimization techniques and core game mechanics",
          },
          {
            Title: "Development",
            Description:
              "Programmed shooting mechanics, player controls, and high-score systems in Unity. Optimized gameplay for smooth performance and quick responsiveness.",
          },
        ],
        ListOfImages: [Spaceshooter, SpaceShooter1, SpaceShooter2],

        LearningsPoints: [
          {
            header: "Object Pooling for Performance Optimization",
            description:
              "Instead of continuously instantiating and destroying bullets, enemy projectiles, and asteroid fragments, I implemented an object pooling system. This significantly reduced performance overhead and prevented unnecessary lag.",
          },
          {
            header: "Screen Wrapping Logic",
            description:
              "I developed a system that detects when an asteroid moves off-screen and teleports it to the opposite side while maintaining its original trajectory. This helped replicate the seamless movement from the original game.",
          },
          {
            header: "Efficient Collision Handling",
            description:
              " Since many objects interact in a fast-paced environment, I learned how to efficiently handle collisions between bullets, asteroids, and enemies without overloading the game’s physics calculations.",
          },
        ],
      },
    ],
  },

  {
    id: "anton",
    Title: "Anton's Laboratory",
    Description:
      "A capstone project designed to demonstrate advanced game development techniques in a scientific setting. Built using Unity, the game serves as both a learning tool and a demonstration of physics-based mechanics, UI/UX design, and dynamic step-by-step instructional guidance. Players engage in hands-on virtual experiments, such as investigating heat transfer and gas laws, reinforcing complex scientific principles through interactive gameplay.",
    Role: "Main Programmer",
    year: "2024",
    image: Capstone1,
    GameType: "2D",
    BannerImage:
      "https://res.cloudinary.com/dhruvwke3/image/upload/v1738562558/VideoFolders/CapstoneImages/Capstonebanner_d25fnf.jpg",

    SpecifiedDetails: [
      {
        Details: [
          { Title: "Project", Description: "Anton's Laboratory (on going)" },
          { Title: "Year", Description: "2024 - Present" },
          { Title: "Category", Description: "Capstone Project" },
          { Title: "Role", Description: "Main Programmer" },
          { Title: "Tools", Description: "Unity, Photoshop, C#" },
          { Title: "Platform", Description: "Mobile" },
        ],
        ListOfDescriptions: [
          {
            Title: "JOURNEY",
            Description:
              "This project started as a simple idea—to create an interactive way for students to engage with scientific experiments. As development progressed, it evolved into a full-fledged educational tool that combines step-by-step guidance, real-time feedback, and immersive visuals. One of the most exciting parts was designing the ‘See What’s Happening’ panel, which dynamically updates to help students understand complex scientific concepts in real time. Each iteration of the game brought new insights, requiring careful balancing between gameplay mechanics and educational value. By refining animations, optimizing interactions, and integrating intuitive UI elements, the game transformed into an engaging and seamless learning experience",
          },
          {
            Title: "LEARNINGS",
            Description:
              "The project significantly strengthened my game development skills—especially in UI/UX design, physics-based interactions, and data management. I gained a deeper understanding of Unity’s event-driven programming, drag-and-drop mechanics, and animation systems to make interactions smooth and meaningful. Beyond the technical aspects, I also learned the importance of player feedback and usability testing. Ensuring that the game was both educational and engaging required multiple iterations, testing sessions, and adjustments based on user experience. Most importantly, I realized how powerful interactive learning can be when designed with creativity and precision.",
          },
          {
            Title: "Qoute",
            Description:
              "Where science meets interactivity—turning lessons into experiences",
          },
        ],
        ListOfImages: [
          "https://res.cloudinary.com/dhruvwke3/image/upload/v1738562572/VideoFolders/CapstoneImages/CapstoneImage1_gf2xuj.jpg",
          "https://res.cloudinary.com/dhruvwke3/image/upload/v1738562572/VideoFolders/CapstoneImages/CapstoneImage2_fucgcb.jpg",
          "https://res.cloudinary.com/dhruvwke3/image/upload/v1738562570/VideoFolders/CapstoneImages/Capstoneimage3_dfcbh4.jpg",
        ],

        LearningsPoints: [
          {
            header: "Animation & Object Rotation",
            description:
              "Instead of coding everything manually, I learned how animations could simplify object transformations and improve efficiency.",
          },
          {
            header: "Physics & Collisions in 2D",
            description:
              "Understanding rigidbodies, colliders, and different collision detections helped me refine object interactions within the game world.",
          },
          {
            header: "Tilemaps & Environment Design",
            description:
              " I explored how tilemaps streamline level design and make creating game worlds more efficient.",
          },
          {
            header: "UI & Scene Management",
            description:
              "I learned to access and update UI elements, manage game states (Game Over, Restart), and transition smoothly between scenes.\n",
          },
          {
            header: "Problem-Solving & Debugging",
            description:
              "Debugging gameplay mechanics, experimenting with different solutions, and learning from mistakes improved my problem-solving mindset.",
          },
        ],
      },
    ],
  },
];

const TechStack = [
  {
    Title: "Unity",
    Description:
      "Creating 2D and 3D games with Unity, focusing on gameplay mechanics, optimization, and immersive experiences.",
    imageLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
  },
  {
    Title: "Blender",
    Description:
      "Designing 3D models, animations, and environments for use in games and interactive applications.",
    imageLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
  },
  {
    Title: "Figma",
    Description:
      "Prototyping and designing intuitive UI/UX layouts for web and game interfaces.",
    imageLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    Title: "React",
    Description:
      "Building interactive and responsive web applications with React and its ecosystem.",
    imageLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },

  {
    Title: "Firebase",
    Description:
      "Managing data for web applications with a NoSQL database system.",
    imageLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    Title: "Git & GitHub",
    Description:
      "Version control and collaborative development using Git and GitHub.",
    imageLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

const Experience = [
  {
    Company: "Pixwander",
    Role: "Game Developer",
    Year: "2023",
    Description:
      "Served as the main programmer for Chroma, a distinctive platformer game. Played a key role in designing and implementing core gameplay mechanics, ensuring smooth functionality and a compelling player experience.",
  },
  {
    Company: "Sigma",
    Role: "Game Developer, Lead Artist",
    Year: "2024",
    Description:
      "Contributed as both a programmer and lead artist for TechQuest 360, an educational game designed to teach kids about technology. Played a central role in developing engaging visuals and implementing gameplay features.",
  },
  {
    Company: "FordyTech",
    Role: "Intern Software Engineer",
    Year: "September 2024 - January 2025",
    Description:
      "I worked as an intern software engineer for FordyTech. I was responsible for developing a web-based applications for the team.",
  },
];

export { projects, TechStack, Experience };
