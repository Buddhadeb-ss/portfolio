export const drive = (id, w = 1200) => `https://lh3.googleusercontent.com/d/${id}=w${w}`;

export const profile = {
  name: "Buddhadeb Banik",
  first: "Buddhadeb",
  headline: ["Aspiring", "embedded systems", "engineer."],
  tagline: "Building hardware at the edge. Capturing the world in between.",
  location: "Bengaluru, India",
  avatar: "/portrait.webp",
  bio: [
    "I work at the intersection of silicon and software — designing physical circuits and PCBs, bringing up bare-metal microcontroller firmware, and building low-level systems software in pure C.",
    "When the boards are powered down, I'm behind the viewfinder. Street, landscape, and the light in between — two disciplines, one pair of eyes.",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Buddhadeb-ss", handle: "@Buddhadeb-ss" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/buddhadeb-banik/", handle: "buddhadeb-banik" },
    { label: "YouTube", url: "https://www.youtube.com/@BBbuilds-ECE", handle: "@BBbuilds-ECE" },
    { label: "Instagram", url: "https://www.instagram.com/arc.buddha/", handle: "@arc.buddha" },
  ],
};

export const marqueeItems = [
  "Embedded C",
  "Bare-metal firmware",
  "PCB design",
  "Systems programming",
  "KiCad",
  "ESP32",
  "Street photography",
  "Landscape photography",
];

export const projects = [
  {
    id: "anti-drone",
    title: "Anti-Drone System",
    tagline: "Counter-UAS defense architecture",
    description:
      "Integrated counter-UAS defense architecture with low-latency radar target tracking, dual-axis motorized gimbal actuation, embedded microcontroller firmware, and a real-time tactical command dashboard.",
    stack: ["Embedded C", "Python", "Assembly", "Radar", "Gimbal control"],
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=srgb&fm=jpg&q=85",
    url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System",
    featured: true,
    overview:
      "Built for Smart India Hackathon 2026, this is a modular anti-drone system spanning detection, tracking, and precision pointing. Radar awareness feeds camera-based computer vision; a tracking layer drives STM32 firmware that aims a 2-axis PAN/TILT gimbal — with a real-time 3D simulation environment tying the whole loop together.",
    features: [
      "Multi-sensor architecture combining radar and camera perception",
      "Computer vision for target detection and tracking",
      "STM32 embedded control for hardware integration",
      "2-axis PAN/TILT gimbal for precision pointing",
      "Real-time 3D simulation for system-level visualization",
      "PID closed-loop control for gimbal response",
      "Hardware-in-the-Loop testing connecting simulation and hardware",
      "Modular repository structure for independent subsystems",
    ],
    buildSteps: [
      "Stand up the simulation dashboard (Python, pip requirements) and run it on mock data or live interfaces",
      "Flash the STM32 with gimbal control firmware",
      "Tune the PID loop against simulated tracks",
      "Validate end-to-end with hardware-in-the-loop tests",
    ],
    buildImages: [
      {
        label: "PCB & STM32",
        url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System/raw/main/docs/images/PCB%20%26%20STM32.png",
      },
      {
        label: "Simulation tracking view",
        url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System/raw/main/docs/images/simulation-tracking.png",
      },
      {
        label: "CV hardware tracking",
        url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System/raw/main/docs/images/CV-Hardware-tracking.png",
      },
      {
        label: "Interceptor missile simulation",
        url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System/raw/main/docs/images/Interceptor-missle-simulation.png",
      },
    ],
  },
  {
    id: "shell-c",
    title: "Shell in C",
    tagline: "A POSIX-compliant shell from scratch",
    description:
      "A POSIX-compliant command line interpreter built ground-up in standard C — interactive REPL, command tokenization, PATH executable search, builtins (cd, pwd, echo, type, exit), and file descriptor redirection.",
    stack: ["C (C99)", "POSIX APIs", "fork / exec", "Systems programming"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&q=85",
    url: "https://github.com/Buddhadeb-ss/codecrafters-shell-c",
    featured: true,
    overview:
      "A POSIX-compliant command line interpreter built ground-up in standard C, written against the CodeCrafters 'Build Your Own Shell' challenge. No frameworks, no libraries doing the work — just the POSIX API, fork/exec, and file descriptors.",
    features: [
      "Interactive REPL for interpreting shell commands",
      "Running external programs",
      "Command tokenization",
      "Executable path search via PATH",
      "Builtins: cd, pwd, echo, type, exit",
      "File descriptor redirection",
    ],
    buildSteps: [
      "Scaffold the C solution against CodeCrafters stages",
      "Implement the read-eval-print loop in src/main.c",
      "Add tokenization and PATH executable search",
      "Wire up builtins and fd redirection, passing every stage via ./your_program.sh",
    ],
    buildImages: [],
  },
  {
    id: "game-dev-board",
    title: "Game Development Board",
    tagline: "Custom handheld console PCB",
    description:
      "A complete custom PCB designed in KiCad for a handheld gaming and embedded development console — Arduino Nano ESP32, a 0.96\" I2C OLED, and a 5-button tactile GPIO matrix with optimized trace routing and noise decoupling.",
    stack: ["KiCad EDA", "PCB layout", "Nano ESP32", "Gerber CAM"],
    image: "https://images.unsplash.com/photo-1555589228-135c25ae8cf5?crop=entropy&cs=srgb&fm=jpg&q=85",
    url: "https://github.com/Buddhadeb-ss/Game-Development-board",
    featured: true,
    overview:
      "Game Dev Board v1.0 is a compact handheld game development platform built around the Arduino Nano ESP32 — a custom open-hardware PCB, a 0.96-inch OLED, and a five-button interface for retro-style games and embedded learning.",
    features: [
      "Arduino Nano ESP32 based architecture",
      "Compact custom PCB design",
      "0.96-inch OLED display over I2C",
      "Five-button gaming interface on GPIO",
      "USB-powered operation",
      "Open-source hardware design",
      "Programmable through the Arduino IDE",
      "Expandable architecture for future upgrades",
    ],
    buildSteps: [
      "Design the schematic and board layout in KiCad",
      "Route traces with noise decoupling and export Gerbers",
      "Flash game logic from the Arduino IDE",
      "Power over USB and iterate on the layout",
    ],
    wiring: "Each button connects to a dedicated GPIO pin using internal pull-up resistors; the OLED runs on the I2C bus.",
    buildImages: [
      {
        label: "Front render",
        url: "https://github.com/Buddhadeb-ss/Game-Development-board/raw/main/exports/Game_esp32_front.png",
      },
      {
        label: "Back render",
        url: "https://github.com/Buddhadeb-ss/Game-Development-board/raw/main/exports/Game_esp32_back.png",
      },
    ],
  },
  {
    id: "dc-voltage-meter",
    title: "DC Voltage Meter",
    tagline: "IoT precision power instrumentation",
    description:
      "IoT-enabled precision DC power instrumentation monitor, architected for renewable ecosystems, solar arrays, and battery cells. Measures voltage, current, instantaneous power, and accumulated energy in real time with I2C sensor reading and an OLED readout.",
    stack: ["C++", "ESP32", "INA219 (I2C)", "SSD1306 OLED", "KiCad"],
    image: "https://images.unsplash.com/photo-1651340550839-3b295d930048?crop=entropy&cs=srgb&fm=jpg&q=85",
    url: "https://github.com/Buddhadeb-ss/DC-voltage-meter",
    overview:
      "An IoT-enabled instrumentation device that measures DC voltage, current, power, and energy in real time — architected for batteries, solar modules, and embedded electronics, with live readings pushed to the Blynk app over Wi-Fi.",
    features: [
      "Measures voltage, current, power, and energy in real time",
      "Sends data to a website over Wi-Fi",
      "Access from the Blynk application",
      "Live OLED readout on the device",
    ],
    hardware: ["ESP32", "INA219 sensor", "0.96-inch OLED", "9V battery", "DC motor as load"],
    wiring: "The INA219 sits between the battery and the motor; the ESP32 reads it over I2C, drives the OLED, and uploads readings to the cloud.",
    buildSteps: [
      "Assemble the hardware per the schematic",
      "Upload the firmware to the ESP32",
      "Connect to Wi-Fi and configure the Blynk application",
      "Verify readings against known loads",
    ],
    buildImages: [
      {
        label: "Schematic",
        url: "https://private-user-images.githubusercontent.com/203169181/529800880-2c73c0e5-b6f9-45d0-b441-1654bb756c7c.png",
      },
      {
        label: "Block diagram",
        url: "https://private-user-images.githubusercontent.com/203169181/529800995-1357fdde-7ee7-4d09-b1fb-3827f9c1ac58.png",
      },
      {
        label: "Results",
        url: "https://private-user-images.githubusercontent.com/203169181/529801044-a166d46a-19ea-44b7-aff2-dacc97c86c30.png",
      },
      {
        label: "Prototype",
        url: "https://private-user-images.githubusercontent.com/203169181/529801541-16df1f6b-3db1-4929-9471-b5f7511f9030.png",
      },
    ],
  },
  {
    id: "fifa-scoreboard",
    title: "ESP32 FIFA Live Scoreboard",
    tagline: "Real-time match data on a desk device",
    description:
      "A standalone real-time football scoreboard and workstation environmental monitor. Pulls live fixtures from the football-data.org REST API, parses JSON on the fly, fires goal notifications, and polls a BME280 for temperature, humidity, and pressure.",
    stack: ["C++", "ESP32", "BME280 (I2C)", "REST API", "SSD1306 OLED"],
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?crop=entropy&cs=srgb&fm=jpg&q=85",
    url: "https://github.com/Buddhadeb-ss/ESP32-FIFA-Live-Scoreboard",
    overview:
      "A standalone real-time football scoreboard: an ESP32 pulls live scores from the football-data.org REST API over Wi-Fi and renders them on a 0.96-inch SSD1306 OLED in a broadcast-inspired layout — while a BME280 reports workstation temperature, humidity, and pressure.",
    features: [
      "Live football scores",
      "Automatic score updates",
      "BME280 temperature, humidity, and pressure",
      "OLED page rotation",
      "Modular C++ code",
    ],
    wiring: "Both the OLED and the BME280 share the I2C bus — data on GPIO23, clock on GPIO22.",
    buildSteps: [
      "Wire the SSD1306 OLED and BME280 to the ESP32's I2C bus",
      "Fetch and parse football-data.org JSON payloads",
      "Render a broadcast-style scoreboard layout",
      "Rotate display pages between match data and environment readings",
    ],
    buildImages: [
      {
        label: "Display interface",
        url: "https://github.com/Buddhadeb-ss/ESP32-FIFA-Live-Scoreboard/raw/main/images/Screenshot%202026-07-30%20165938.png",
      },
    ],
  },
  {
    id: "fruit-fly-learning",
    title: "Fruit Fly Learning",
    tagline: "A connectome, learning to play",
    description:
      "A connectome-based Drosophila melanogaster brain learning model mapped into a simulated game environment — exploring whether biological synaptic connectivity networks can learn adaptive control behaviors in artificial simulation.",
    stack: ["Python", "Connectome data", "Neural simulation"],
    image: "https://images.unsplash.com/photo-1557701197-2f99da0922dd?crop=entropy&cs=srgb&fm=jpg&q=85",
    url: "https://github.com/Buddhadeb-ss/fruit-fly-learning",
    overview:
      "Can a fruit fly's brain learn to play? This project maps the Drosophila melanogaster connectome — 216 neurons wired by 14,037 directed synapses — into a simulated endless-runner game, then trains the fixed topology with A2C reinforcement learning to see whether biological wiring can learn adaptive control.",
    features: [
      "216-neuron connectome-based recurrent model — 48 sensory, 144 intrinsic, 24 efferent",
      "Endless-runner game environment",
      "Sensory input and motor output interfaces",
      "A2C reinforcement learning",
      "Health and pain system",
      "Food and obstacle interactions",
      "Evaluation and baseline agents",
      "Automated test suite",
    ],
    buildSteps: [
      "Install dependencies and run the experiment",
      "Train with A2C against baseline agents",
      "Evaluate survival and resource collection",
      "Run the pytest suite for regression checks",
    ],
    buildImages: [
      {
        label: "Training curves",
        url: "https://github.com/Buddhadeb-ss/fruit-fly-learning/raw/main/training_curves.png",
      },
    ],
  },
  {
    id: "coding-practice",
    title: "Competitive Programming",
    tagline: "Verified algorithm solutions in C",
    description:
      "A centralized competitive programming repository with verified solutions written predominantly in C, auto-synchronized across LeetCode, CodeChef, and Virtual Judge via CP-Sync webhooks with standardized metadata and test verification.",
    stack: ["C (C99 / C11)", "Algorithms", "CP-Sync", "GitHub API"],
    image: "https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=srgb&fm=jpg&q=85",
    url: "https://github.com/Buddhadeb-ss/coding-practice",
    overview:
      "A centralized, always-in-sync archive of competitive programming and DSA solutions — every Accepted verdict on LeetCode, CodeChef, or Virtual Judge is automatically committed here, predominantly in C, by the CP-Sync extension.",
    features: [
      "Organized by platform and language",
      "Automated submission synchronization on Accepted verdicts",
      "Metadata enrichment for every submission",
      "Language-aware commenting",
      "Smart deduplication of submissions",
    ],
    buildSteps: [
      "Set up the CP Sync extension",
      "Configure the online judge accounts",
      "Solve — accepted solutions commit themselves with standardized metadata headers",
    ],
    buildImages: [],
  },
];

const photoData = [
  ["1_leqtNszOlkzjlsQoljssE6eU5nXotbg", "Verdant Dusk", "A serrated leaf backlit by a hazy sunset, the city dissolving into bokeh behind."],
  ["1rHhoTWUjLsNN5LmrfEb_yahB3n6ygdBk", "Sunlit Wires", "Golden hour over a street of buildings and tangled overhead wires."],
  ["1TeNDltNtMPt-Nee6jgMcMTm1Z-tei8rU", "Dusk Gate Glow", "Warm light spills from an open gate under a violet twilight sky."],
  ["1HfUJn7intarafQDsr4-X4a5xcknih_Fa", "Winged Serenity", "A white bird glides over rippling water, blurred softly into motion."],
  ["1mZicgLB8xi46zNV_wXv822TIABkTLLpM", "Journey Shared", "Friends with helmets and backpacks walk a tree-lined path, headed somewhere together."],
  ["1yh7pFWgKI4N8d5QLXRLptEcrPUv6ps3L", "Muted Reflections", "Wading birds stand at a littered bank — nature persisting in what we discard."],
  ["1gKtUfm8EpkXY7xraknuItMR_WxbFoV0r", "White Wings, Dark Water", "Two ibis wade through murky water, white plumage against the grey."],
  ["1whpExpZZzgMswIU1ZhrJ1hanCL9MAkwP", "Feathered Flight", "One ibis lifts off while another keeps watch from the tree."],
  ["1YFVY0BZ3SJ7ZmKyKuaVTbHK4lHkpItWQ", "Crescent's Gleam", "A thin crescent moon glows against a muted dusk sky."],
  ["1pcAgEX8V0DB8uydLqJ_mPvXlW7RVCOG7", "Crescent Glow", "The moon burns warm orange as the last light leaves the sky."],
  ["1LpSQi7mDJyy2I8GT6wJw8m6uM2UBBwom", "Winged Jewel", "A crested myna perches among green leaves in soft, natural light."],
  ["1oLf1YgoYuIjxo7ty2HKC9iz9s61AUPmS", "Towering Light", "A bird rests at the very top of a floodlight mast, a beacon above it."],
  ["1VWd3XhGh1_WdKIxg_2dEhki9iF0d7caq", "Graceful Flight", "A pigeon glides between pillars and red architecture in dramatic light."],
  ["1o7whzyp7cgNTVsIDlmqEQjbt8WB4V6sb", "Skyward Flight", "A raptor soars alone against a pale, open sky."],
  ["1Fjt4IbQ2hwL7HRP3v21TC785CNakbHPT", "Verdant Towers", "A tiered white building emerges from dense greenery under an overcast sky."],
  ["1rB7Su6krUbyYKnnTo_Y5QpQesJyKE81h", "A Dog Rests", "A lone stray lies by the curb on a dull, overcast afternoon."],
  ["17q8dhEb2cZoTqSUIJCJDVJjglRChNRAW", "Cityscape Dusk", "A city unfolds at dusk, veiled by soft-focus grasses."],
  ["1DC-LuoMsuERrV38FOG7PD6k0-0ZaLKxN", "Whispering Grass", "Two figures walk through tall feathery grass under a heavy sky."],
  ["1DBZqDBBC52Rxhw__mN5Mzo4eaP5TBxjW", "Silent Tower", "A great cross stands silhouetted against storm clouds, birds wheeling past."],
  ["1VZ1sI4JXJUcPnUUfoRUNyff_3SOHtp95", "Twilight View", "City lights begin to twinkle beyond a rusted post and barbed wire."],
  ["18nsAnW9yDrXlCPP8Nd20W1aLCLAu8o_z", "Joyful Innocence", "Three girls flash peace signs over a city of bokeh lights at dusk."],
  ["1T1qEUKjSQZhFdCMwOB-5Wb_BKT4kFsXf", "Crimson Sun Haze", "A hazy red sun burns through the branches of a silhouetted tree."],
  ["1z3yVIEP14VsPJNUywRqLrHd1WFMjFKkD", "Fading Sun", "A muted sunrise glows through branches over misty ground."],
  ["1gux_tHx36ngPZPSCHZumATWD12PBdoSG", "Silhouetted Duo", "Two birds hold still on a bare branch against an overcast sky."],
  ["1N9F7hJ1W-buT7e0X2fNbgoahEm6hzjQC", "Golden Bloom", "A single yellow flower glows in soft, diffused light."],
  ["1kZplnKO5cK2AyM2W4_Gd_z78Iwrtpdi5", "Nature's Nest", "A bird tends a nest woven from twigs — and plastic we left behind."],
  ["12ULNyLyp0lZQXy1NSv_e-Rxae13jMpH6", "Cityscape Reflections", "A window layers the city, a pylon, and a flowering tree into one frame."],
];

export const photos = photoData.map(([id, title, caption], i) => ({
  id,
  index: i + 1,
  title,
  caption,
  src: drive(id, 1200),
  full: drive(id, 2000),
  thumb: drive(id, 800),
}));

export const capabilities = {
  engineering: [
    "Embedded C / C++",
    "Bare-metal firmware",
    "PCB design in KiCad",
    "ESP32 & Arduino platforms",
    "I2C sensor integration",
    "POSIX systems programming in C",
    "Python & neural simulation",
  ],
  tools: ["KiCad EDA", "ESP32 / Arduino Nano", "INA219 · BME280 · SSD1306", "Git & GitHub", "CP-Sync automation", "Gerber CAM / PCB layout"],
};

export const splitPanels = [
  {
    to: "/work",
    overline: "01 — The work",
    title: "Engineering",
    line: "Circuits, firmware, and software at the silicon level.",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=srgb&fm=jpg&q=85",
    testid: "home-engineering-panel",
  },
  {
    to: "/photography",
    overline: "02 — The eye",
    title: "Photography",
    line: "Street, landscape, and the light in between.",
    image: drive("1TeNDltNtMPt-Nee6jgMcMTm1Z-tei8rU", 1200),
    testid: "home-photography-panel",
  },
];
