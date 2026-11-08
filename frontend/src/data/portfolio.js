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
  "Embedded C / C++",
  "Bare-metal firmware",
  "STM32 & ESP32",
  "PCB design in KiCad",
  "TinyML / Edge AI",
  "I2C · SPI · UART · CAN",
  "Hardware-in-the-Loop",
  "Street photography",
  "Landscape photography",
];

export const telemetryData = {
  mcu: "ESP32-D0WD-V3",
  clock: "240 MHz",
  status: "SYS_READY",
  sramFree: "184.2 KB",
  baud: "460,800 bps",
  voltage: "3.31 V",
  current: "142 mA",
  temperature: "34.8 °C",
  firmwareRev: "v2.6.4-prod",
  activeSubsystems: ["I2C_BUS", "SPI_FLASH", "OV3660_CAM", "TFLM_INT8", "UART_LOG"],
  telemetryScreens: [
    {
      title: "CORE STATUS",
      line1: "CPU: 240MHz Xtensa Dual",
      line2: "SRAM: 184KB / 320KB",
      line3: "PSRAM: 3.8MB Free",
      line4: "PWR: 3.31V @ 142mA",
    },
    {
      title: "BUS & SENSORS",
      line1: "I2C: 400kHz Fast-Mode",
      line2: "UART: 460.8k Baud Framed",
      line3: "CAM: OV3660 240x240 RGB",
      line4: "BME280: 28.4C | 52% RH",
    },
    {
      title: "EDGE AI ENGINE",
      line1: "Model: DeskObjectNet",
      line2: "Quant: INT8 (14.8 KB)",
      line3: "Latency: 141ms / Frame",
      line4: "False Positives: 0.0%",
    },
    {
      title: "DEVELOPER QUOTE",
      line1: "Silicon in the day,",
      line2: "Light after dark.",
      line3: "Bare-metal precision,",
      line4: "Cinematic vision.",
    },
  ],
};

export const projects = [
  {
    id: "tinycv-esp32-cam",
    title: "TinyCV-ESP32-CAM",
    tagline: "Ultra-lean real-time edge AI on microcontrollers",
    description:
      "On-device edge computer vision running a custom 14.8 KB INT8 quantized neural core (DeskObjectNet) in 141ms on a 240MHz Xtensa LX6. Features binary framed JPEG streaming, predictive color-spatial tracking, zero memory leaks, and absolute zero background false positives.",
    stack: ["C++", "TensorFlow Lite Micro", "ESP32", "OV3660", "Edge AI", "Python"],
    image: "/projects/tinycv-esp32-cam.svg",
    demoGif: "https://raw.githubusercontent.com/Buddhadeb-ss/TinyCV-ESP32-CAM/main/screenshots/live_dashboard_demo.gif",
    demoVideo: "https://raw.githubusercontent.com/Buddhadeb-ss/TinyCV-ESP32-CAM/main/Video_recording/test.mp4",
    url: "https://github.com/Buddhadeb-ss/TinyCV-ESP32-CAM",
    featured: true,
    metrics: [
      { label: "Inference Latency", value: "141 ms (7.1 FPS)" },
      { label: "Model Size", value: "14.8 KB INT8" },
      { label: "Sensor Resolution", value: "240×240 RGB565" },
      { label: "Memory Leak", value: "0 Bytes Verified" },
      { label: "Sensor Accuracy", value: "94.4%" },
      { label: "Background False Positives", value: "0.0%" },
    ],
    overview:
      "TinyCV-ESP32-CAM breaks the conventional dogma that real-time computer vision is impossible on $5 microcontrollers. By co-designing a custom 14.8 KB INT8 neural core with a bimodal sensor pipeline, physical OV3660 color priors, and a 460,800-baud binary streaming protocol, it achieves sustained real-time object classification and bounding-box tracking on an AI-Thinker ESP32-CAM without external cloud compute.",
    features: [
      "100% on-device inference using optimized TensorFlow Lite Micro kernels",
      "Custom 14.8 KB INT8 neural network ('DeskObjectNet') trained on physical OV3660 sensor crops",
      "Full 240x240 RGB565 sensor resolution (6.25x sharper than legacy 96x96 TinyML models)",
      "High-speed binary framed serial streaming at 460,800 baud",
      "Bimodal hybrid fast-path: sub-1ms motion filter triggers 140ms deep semantic evaluation",
      "Predictive color-spatial tracker with exponential velocity momentum",
      "Web-based responsive diagnostic dashboard with live telemetry (Flask + MJPEG)",
      "Bit-for-bit 4MB factory firmware backup included in repository",
    ],
    hardware: [
      "Espressif ESP32-D0WD-V3 (240 MHz dual-core, 320 KB SRAM, 4 MB PSRAM)",
      "OmniVision OV3660 3MP camera sensor",
      "WCH CH340 USB-to-UART bridge on COM8",
      "High-intensity onboard white illumination LED (GPIO 4)",
      "Onboard red status LED (GPIO 33)",
    ],
    wiring: "Camera D0-D7 mapped to GPIO 5, 18, 19, 21, 36, 39, 34, 35; PCLK on GPIO 22, XCLK on GPIO 0; SCCB I2C on GPIO 26/27.",
    buildSteps: [
      "Clone repository and setup Python telemetry environment (OpenCV, Flask, PySerial)",
      "Compile firmware via PlatformIO linked against optimized ESP-NN acceleration kernels",
      "Flash firmware over USB to ESP32-CAM at 460,800 baud",
      "Launch live web diagnostic dashboard at http://127.0.0.1:5000",
      "Verify zero-leak continuous multi-hour runtime and real-time bounding box locks",
    ],
    buildImages: [
      {
        label: "Real-time mouse tracking (97% confidence)",
        url: "https://raw.githubusercontent.com/Buddhadeb-ss/TinyCV-ESP32-CAM/main/screenshots/demo_mouse_tracking.png",
      },
      {
        label: "Earbuds case tracking (98% confidence)",
        url: "https://raw.githubusercontent.com/Buddhadeb-ss/TinyCV-ESP32-CAM/main/screenshots/demo_earbuds_tracking.png",
      },
      {
        label: "Glue stick dual-band chromatic lock (98% confidence)",
        url: "https://raw.githubusercontent.com/Buddhadeb-ss/TinyCV-ESP32-CAM/main/screenshots/demo_gluestick_tracking.png",
      },
      {
        label: "Live hardware web dashboard view",
        url: "https://raw.githubusercontent.com/Buddhadeb-ss/TinyCV-ESP32-CAM/main/screenshots/live_hardware_dashboard_final.png",
      },
    ],
  },
  {
    id: "anti-drone",
    title: "Anti-Drone Defense System",
    tagline: "Counter-UAS defense architecture with closed-loop gimbal pointing",
    description:
      "Integrated counter-UAS defense architecture featuring low-latency radar target tracking, a 100 Hz closed-loop PID dual-axis motorized gimbal, bare-metal STM32 microcontroller firmware, and a real-time tactical 3D command dashboard.",
    stack: ["Embedded C", "STM32", "PID Control", "Python", "Radar / CV", "HIL Simulation"],
    image: "/projects/anti-drone.svg",
    url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System",
    featured: true,
    metrics: [
      { label: "PID Loop Rate", value: "100 Hz Real-Time" },
      { label: "Tracking Latency", value: "< 25 ms" },
      { label: "Gimbal Actuation", value: "2-Axis PAN / TILT" },
      { label: "Firmware Core", value: "STM32 Bare-Metal C" },
      { label: "Testing Rig", value: "Hardware-in-the-Loop" },
    ],
    overview:
      "Built for Smart India Hackathon 2026, this modular anti-drone system bridges multi-sensor radar detection, camera-based optical tracking, and precision electromechanical pointing. Radar feeds spatial vectors to computer vision; a tracking layer drives STM32 firmware executing a 100 Hz PID closed-loop routine to point a 2-axis PAN/TILT gimbal with sub-degree accuracy.",
    features: [
      "Multi-sensor sensor fusion combining radar distance awareness with camera vision",
      "Computer vision pipeline for automatic target identification and lock",
      "STM32 embedded control firmware written in pure register-efficient C",
      "Precision 2-axis motorized PAN/TILT gimbal with closed-loop servo feedback",
      "Real-time 3D simulation environment for live trajectory visualization",
      "Tuned PID control loop ensuring jitter-free tracking under dynamic target maneuvers",
      "Hardware-in-the-Loop (HIL) validation connecting physical microcontrollers with virtual flight simulations",
      "Modular repository structure for clean separation of radar, vision, and actuator subsystems",
    ],
    hardware: [
      "STM32F4 / Cortex-M4 Microcontroller Board",
      "High-Torque Dual-Axis Servo Motors with Metal Gearing",
      "Custom Power Distribution and Logic Shifting PCB",
      "Optical Zoom Camera Module",
      "Simulation Interface Harness (UART/CAN)",
    ],
    wiring: "Motor drivers connected via high-speed PWM channels on TIM2/TIM3; radar/vision commands received over DMA-buffered UART at 115,200 baud.",
    buildSteps: [
      "Stand up the simulation and tactical dashboard in Python with real-time Pygame/OpenGL telemetry",
      "Flash STM32 with register-level PWM driver and closed-loop PID control firmware",
      "Calibrate gimbal step resolution and tune PID coefficients against synthetic flight tracks",
      "Execute Hardware-in-the-Loop (HIL) tests validating sub-25ms response time from detection to pointing",
    ],
    buildImages: [
      {
        label: "PCB & STM32 Controller Setup",
        url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System/raw/main/docs/images/PCB%20%26%20STM32.png",
      },
      {
        label: "Simulation Tracking Telemetry",
        url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System/raw/main/docs/images/simulation-tracking.png",
      },
      {
        label: "Computer Vision Hardware Tracking",
        url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System/raw/main/docs/images/CV-Hardware-tracking.png",
      },
      {
        label: "Interceptor Guidance Simulation",
        url: "https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System/raw/main/docs/images/Interceptor-missle-simulation.png",
      },
    ],
  },
  {
    id: "game-dev-board",
    title: "Handheld Game Console PCB",
    tagline: "Custom open-hardware gaming & embedded dev console",
    description:
      "A complete custom PCB designed in KiCad for an open-hardware handheld gaming and development console. Features an Arduino Nano ESP32, high-contrast 0.96\" I2C OLED display, and a 5-button tactile GPIO matrix with optimized ground planes and noise decoupling.",
    stack: ["KiCad EDA", "PCB Layout", "Nano ESP32", "Gerber CAM", "Hardware Design"],
    image: "/projects/game-dev-board.svg",
    url: "https://github.com/Buddhadeb-ss/Game-Development-board",
    featured: true,
    metrics: [
      { label: "PCB Layers", value: "2-Layer Optimized" },
      { label: "I2C Bus Speed", value: "400 kHz Fast-Mode" },
      { label: "Input Matrix", value: "5 Tactile Push-Buttons" },
      { label: "Trace Clearance", value: "0.254 mm (10 mil)" },
      { label: "Power Rail", value: "Regulated 3.3V / 5V USB" },
    ],
    overview:
      "Game Dev Board v1.0 is a custom-engineered open-hardware platform created to teach low-level game loops and microcontroller peripherals. Built around the Arduino Nano ESP32, the layout places ergonomic 5-button inputs directly adjacent to a high-contrast I2C display, backed by clean signal traces, decoupling capacitor arrays, and low-impedance ground planes.",
    features: [
      "Custom double-sided PCB layout engineered in KiCad with continuous ground pour",
      "Socketed Arduino Nano ESP32 architecture for modular controller swapping",
      "High-contrast 0.96-inch SSD1306 monochrome OLED display communicating over I2C",
      "5-button tactile matrix with hardware switch debouncing and internal pull-ups",
      "Direct USB-C power rail with ESD filtering and transient protection capacitors",
      "Production-ready Gerber CAM packages verified against fab DRC rules",
      "Compatible with direct register-level Arduino and ESP-IDF graphics libraries",
    ],
    hardware: [
      "Arduino Nano ESP32 (ESP32-S3 SoC, 240 MHz)",
      "0.96\" SSD1306 128x64 OLED Display Module",
      "5x Omron-style tactile microswitches",
      "Custom 1.6mm FR-4 PCB with HASL lead-free finish",
      "Decoupling ceramic capacitors (100nF, 10uF)",
    ],
    wiring: "Directional buttons wire directly to GPIO pins with internal weak pull-ups; OLED display utilizes dedicated I2C pins (SDA: A4, SCL: A5).",
    buildSteps: [
      "Design schematic symbols, power distribution networks, and pinouts in KiCad Schematic Editor",
      "Route traces on a 2-layer FR-4 board keeping signal paths short and isolated from power loops",
      "Generate and verify industrial RS-274X Gerber and Excellon drill files",
      "Assemble and solder surface-mount / through-hole components onto prototype boards",
      "Deploy custom frame-buffered retro game firmware and benchmark frame rates at 60 FPS",
    ],
    buildImages: [
      {
        label: "Front 3D CAD Board Render",
        url: "https://github.com/Buddhadeb-ss/Game-Development-board/raw/main/exports/Game_esp32_front.png",
      },
      {
        label: "Back 3D CAD Routing & Ground Plane Render",
        url: "https://github.com/Buddhadeb-ss/Game-Development-board/raw/main/exports/Game_esp32_back.png",
      },
    ],
  },
  {
    id: "dc-voltage-meter",
    title: "DC Voltage & Power Instrumentation",
    tagline: "IoT precision power monitor for renewable ecosystems",
    description:
      "IoT-enabled precision DC power instrumentation device architected for solar panels, lithium battery cells, and workstation loads. Measures voltage, current, instantaneous wattage, and accumulated watt-hours in real time with high-side I2C shunt sampling and Wi-Fi telemetry.",
    stack: ["C++", "ESP32", "INA219 (I2C)", "SSD1306 OLED", "KiCad", "IoT Telemetry"],
    image: "/projects/dc-voltage-meter.svg",
    url: "https://github.com/Buddhadeb-ss/DC-voltage-meter",
    metrics: [
      { label: "Voltage Range", value: "0 to 26 V DC" },
      { label: "Current Range", value: "±3.2 A High-Side" },
      { label: "Measurement Resolution", value: "0.8 mA / 4 mV" },
      { label: "Sample Frequency", value: "10 Hz Continuous" },
      { label: "Telemetry Interface", value: "Wi-Fi Cloud Stream" },
    ],
    overview:
      "An embedded instrumentation device designed for high-precision DC power characterization. Unlike consumer multimeters that lack real-time logging, this device combines a Texas Instruments INA219 current/power monitor with an ESP32 to compute instantaneous power (P=VI) and integrate energy accumulation (Joules/Wh) continuously, updating a local OLED display and pushing metrics over Wi-Fi.",
    features: [
      "Real-time dual-rail DC voltage, current, power, and energy calculation",
      "High-side shunt sensing via INA219 with zero ground-loop disturbance",
      "Instantaneous local readout on an SSD1306 0.96-inch OLED screen",
      "Wireless telemetry pushing live sensor graphs to the Blynk IoT cloud over Wi-Fi",
      "Configurable current calibration scaling from low-power milliamps to high-load amps",
      "Compact hardware prototype enclosure suitable for field battery monitoring",
    ],
    hardware: [
      "ESP32-WROOM-32 DevKit V1",
      "INA219 Zero-Drift Bidirectional Current/Power Monitor",
      "0.96-inch 128x64 OLED Display",
      "9V DC Battery / Power Supply input",
      "DC Test Load (Motor & Resistor bank)",
    ],
    wiring: "The 0.1 ohm shunt resistor sits high-side on the positive rail between power source and load; INA219 communicates with ESP32 via I2C (GPIO 21 SDA, GPIO 22 SCL).",
    buildSteps: [
      "Assemble schematic interconnecting INA219, OLED display, and ESP32 power pins",
      "Implement I2C register calibration routines in C++ to achieve 0.8mA resolution",
      "Configure asynchronous Wi-Fi client and connect telemetry channels to Blynk cloud",
      "Benchmark readings against a calibrated bench multimeter across 5V, 9V, and 12V test loads",
    ],
    buildImages: [
      {
        label: "Hardware Circuit Schematic",
        url: "https://private-user-images.githubusercontent.com/203169181/529800880-2c73c0e5-b6f9-45d0-b441-1654bb756c7c.png",
      },
      {
        label: "System Architecture Block Diagram",
        url: "https://private-user-images.githubusercontent.com/203169181/529800995-1357fdde-7ee7-4d09-b1fb-3827f9c1ac58.png",
      },
      {
        label: "Live Test Results & Sensor Logs",
        url: "https://private-user-images.githubusercontent.com/203169181/529801044-a166d46a-19ea-44b7-aff2-dacc97c86c30.png",
      },
      {
        label: "Physical Breadboard Prototype",
        url: "https://private-user-images.githubusercontent.com/203169181/529801541-16df1f6b-3db1-4929-9471-b5f7511f9030.png",
      },
    ],
  },
  {
    id: "fifa-scoreboard",
    title: "ESP32 Live Scoreboard & Telemetry",
    tagline: "Real-time match data & environmental workstation monitor",
    description:
      "A standalone real-time football scoreboard and environmental monitor. Polls live sports fixtures from REST APIs, parses payloads with zero-copy JSON parsing, fires live event alerts, and samples a Bosch BME280 for temperature, humidity, and atmospheric pressure.",
    stack: ["C++", "ESP32", "REST API", "BME280 (I2C)", "SSD1306 OLED", "JSON"],
    image: "/projects/fifa-scoreboard.svg",
    url: "https://github.com/Buddhadeb-ss/ESP32-FIFA-Live-Scoreboard",
    metrics: [
      { label: "Polling Interval", value: "15s Dynamic Refresh" },
      { label: "BME280 Precision", value: "±0.5°C / ±3% RH / ±1 hPa" },
      { label: "Memory Footprint", value: "<1KB Display Buffer" },
      { label: "API Parser", value: "Zero-Copy ArduinoJson" },
    ],
    overview:
      "A dedicated workstation desk appliance that keeps match scorelines and environmental vitals at a glance. An ESP32 connects to Wi-Fi to fetch live fixtures from football-data.org, extracting team abbreviations, scores, and match minutes, while an onboard BME280 sensor continuously monitors ambient workstation temperature, humidity, and barometric pressure.",
    features: [
      "Dynamic REST API polling with rate-limit backoff logic",
      "Memory-efficient JSON deserialization designed for limited SRAM",
      "Environmental monitoring reading temperature, relative humidity, and pressure",
      "Dual-buffer OLED page rotation cycling between active games and environmental metrics",
      "Clean broadcast-inspired visual layout with goal animation indicators",
    ],
    hardware: [
      "ESP32 Wi-Fi / Bluetooth Microcontroller",
      "Bosch Sensortec BME280 Temperature, Humidity & Pressure Sensor",
      "0.96\" 128x64 SSD1306 I2C OLED Display",
    ],
    wiring: "Both OLED and BME280 share the primary I2C bus: SDA connected to GPIO 23, SCL connected to GPIO 22; pull-up resistors ensure bus stability.",
    buildSteps: [
      "Wire SSD1306 display and BME280 sensor to the ESP32 hardware I2C bus",
      "Write asynchronous HTTPS client to fetch JSON fixture streams from football-data.org",
      "Design custom pixel fonts and scoreboard layout buffers in C++",
      "Implement timer-driven display cycling between live sports and environmental telemetry",
    ],
    buildImages: [
      {
        label: "Live Scoreboard & Weather OLED Interface",
        url: "https://github.com/Buddhadeb-ss/ESP32-FIFA-Live-Scoreboard/raw/main/images/Screenshot%202026-07-30%20165938.png",
      },
    ],
  },
  {
    id: "fruit-fly-learning",
    title: "Fruit Fly Connectome Neural Model",
    tagline: "Biological synaptic neural model learning in artificial simulation",
    description:
      "A biological connectome-based Drosophila melanogaster brain learning model mapped into a simulated game environment. Explores whether biological synaptic connectivity networks (216 neurons, 14,037 directed synapses) can learn adaptive control behaviors via A2C reinforcement learning.",
    stack: ["Python", "PyTorch", "Connectome Data", "Reinforcement Learning (A2C)", "Neuroscience"],
    image: "/projects/fruit-fly-learning.svg",
    url: "https://github.com/Buddhadeb-ss/fruit-fly-learning",
    metrics: [
      { label: "Biological Neurons", value: "216 Modeled Units" },
      { label: "Directed Synapses", value: "14,037 Biological Synapses" },
      { label: "RL Framework", value: "Advantage Actor-Critic (A2C)" },
      { label: "Inference Latency", value: "< 5 ms per step" },
      { label: "Test Coverage", value: "100% PyTest Suite" },
    ],
    overview:
      "Can a biological insect brain learn to play video games? This project maps the real biological connectome of Drosophila melanogaster — 216 neurons wired by 14,037 electron-microscopy confirmed synapses — into a recurrent neural model, then places the agent inside an endless-runner game to explore biological neuroplasticity under A2C reinforcement learning.",
    features: [
      "Exact anatomical connectome graph: 48 sensory, 144 intrinsic, and 24 motor efferent neurons",
      "Simulated continuous obstacle-avoidance and food foraging game environment",
      "Advantage Actor-Critic (A2C) learning algorithm optimizing synaptic transmission weights",
      "Sensory transduction layer mapping game visuals into biological olfactory/visual neurons",
      "Health, energy, and nociceptive pain punishment system",
      "Automated regression test suite validating model stability and training convergence",
    ],
    buildSteps: [
      "Extract and parse Drosophila FAFB electron microscopy synaptic connectome tables",
      "Construct sparse recurrent PyTorch tensor graphs preserving biological synaptic weights",
      "Implement the endless-runner gym environment with sensory and motor interfaces",
      "Train with A2C and compare learned survival strategies against baseline synthetic MLP agents",
    ],
    buildImages: [
      {
        label: "A2C Reinforcement Learning Training Curves",
        url: "https://github.com/Buddhadeb-ss/fruit-fly-learning/raw/main/training_curves.png",
      },
    ],
  },
  {
    id: "shell-c",
    title: "POSIX Shell in Pure C",
    tagline: "A standards-compliant command line interpreter built from scratch",
    description:
      "A POSIX-compliant command line interpreter built ground-up in standard C99 without third-party frameworks. Implements an interactive REPL, command tokenization, PATH executable lookup, builtins (cd, pwd, echo, type, exit), and Unix file descriptor redirection.",
    stack: ["C (C99)", "POSIX System Calls", "fork / exec", "File Descriptors", "Systems Programming"],
    image: "/projects/shell-c.svg",
    url: "https://github.com/Buddhadeb-ss/codecrafters-shell-c",
    featured: false,
    metrics: [
      { label: "Language Standard", value: "Strict C99" },
      { label: "External Dependencies", value: "0 Libraries (Pure libc)" },
      { label: "Memory Verification", value: "Zero Leaks (Valgrind Clean)" },
      { label: "Process Isolation", value: "fork() / execvp() POSIX" },
      { label: "I/O Redirection", value: "dup2() File Descriptors" },
    ],
    overview:
      "Written against CodeCrafters' systems engineering specifications, this project builds a POSIX command-line shell directly using low-level Unix system calls. Eliminating high-level abstractions, it manages memory allocation, command lexing, directory state, process spawning, and Unix file descriptor redirection directly in standard C.",
    features: [
      "Interactive command loop (REPL) processing standard terminal input streams",
      "Custom string tokenizer handling whitespace, quotes, and escape characters",
      "PATH resolution scanning system binary directories for executable targets",
      "Builtin command dispatcher: cd, pwd, echo, type, and exit",
      "Unix process lifecycle management using fork(), execvp(), and waitpid()",
      "Standard output and error redirection via open() and dup2()",
      "Strict memory cleanup ensuring leak-free performance under Valgrind",
    ],
    buildSteps: [
      "Initialize standard C project structure with Makefile and POSIX compiler flags",
      "Build command line tokenizer and parse line buffers into argument vector lists (argv)",
      "Implement builtin command handlers and PATH binary scanning algorithm",
      "Implement child process fork/exec isolation and wire dup2 file descriptor redirection",
      "Pass all CodeCrafters verification stages under automated test harnesses",
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
    "Embedded C / C++ (C99, C++17)",
    "Bare-metal firmware & FreeRTOS",
    "STM32 (Cortex-M4) & ESP32 / ESP32-S3",
    "PCB schematic design & layout in KiCad",
    "TinyML & INT8 quantization (TensorFlow Lite Micro)",
    "I2C · SPI · UART · CAN · PWM bus protocols",
    "Hardware-in-the-Loop (HIL) testing",
    "POSIX low-level systems programming in C",
  ],
  tools: [
    "KiCad EDA (Schematic & PCB layout)",
    "STM32CubeIDE / Keil / PlatformIO",
    "Saleae Logic Analyzer & Digital Oscilloscope",
    "Multimeter & Bench Power Supplies",
    "ESP-IDF / ESP-NN / TFLM",
    "Git & GitHub Actions CI",
    "Valgrind & GDB debugger",
    "INA219 · BME280 · SSD1306 · OV3660",
  ],
};

export const splitPanels = [
  {
    to: "/work",
    overline: "01 — The work",
    title: "Engineering",
    line: "Circuits, firmware, and software at the silicon level.",
    image: "/projects/tinycv-esp32-cam.svg",
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
