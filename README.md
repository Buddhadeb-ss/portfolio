# Buddhadeb Banik — Embedded Systems & Photography Portfolio

> **"Silicon in the day, light after dark."**  
> Personal portfolio for Buddhadeb Banik — Embedded Systems Engineer & Photographer based in Bengaluru, India.

[![Platform](https://img.shields.io/badge/Stack-React%2019%20%7C%20Tailwind%20%7C%20Vite-blue.svg)]()
[![Hardware-Theme](https://img.shields.io/badge/Theme-Silicon%2C%20Solder%20%26%20Glass-orange.svg)]()
[![LLM-Optimized](https://img.shields.io/badge/AI%20%26%20ATS-LLM%20Optimized%20(%2Fllms.txt)-brightgreen.svg)]()
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)]()

---

## 🔬 Design Philosophy: "Silicon, Solder & Glass"

Inspired by Yash Suthar's craft-driven developer portfolio ([chartara.vercel.app](https://chartara.vercel.app)), this site is engineered from the ground up to reflect the physical hardware developer experience:
- **Interactive SSD1306 0.96" OLED Widget**: A live monochrome telemetry screen with mode cycling, buffer inverting, and uptime tracking.
- **Circuit Traces & Silkscreen Badges**: SVG copper buses, test points (`[TP1: STM32]`, `[TP2: ESP32]`), and SMD status LEDs (PWR, TX, RX).
- **Hardware in Action**: High-fidelity video recordings and live telemetry HUD overlays for embedded projects.
- **ATS & AI-Parser Friendly**: 100% crawlable semantic HTML with Schema.org JSON-LD structured data and a native `/llms.txt` endpoint for LLMs (ChatGPT, Perplexity, Claude).

---

## ⚡ Featured Projects

| Project | Silicon / Stack | Key Metrics |
|---|---|---|
| [**TinyCV-ESP32-CAM**](https://github.com/Buddhadeb-ss/TinyCV-ESP32-CAM) | C++, TFLM, ESP32, OV3660 | **141 ms** inference, **14.8 KB** INT8 model, **240×240** sensor clarity, **0 bytes** memory leak |
| [**Anti-Drone System**](https://github.com/Buddhadeb-ss/SIH-26-Anti-Drone-System) | STM32, Embedded C, Radar/CV | **100 Hz** PID loop, **<25 ms** reaction latency, 2-axis motorized PAN/TILT gimbal |
| [**Game Console PCB**](https://github.com/Buddhadeb-ss/Game-Development-board) | KiCad EDA, Arduino Nano ESP32 | **2-layer** custom PCB, **400 kHz** I2C OLED, 5-button tactile GPIO matrix |
| [**DC Voltage & Power Meter**](https://github.com/Buddhadeb-ss/DC-voltage-meter) | ESP32, INA219, I2C, Wi-Fi | **0.8 mA / 4 mV** resolution, **0–26V / 3.2A** range, **10 Hz** continuous cloud telemetry |
| [**ESP32 FIFA Scoreboard**](https://github.com/Buddhadeb-ss/ESP32-FIFA-Live-Scoreboard) | ESP32, BME280, REST API | **±0.5°C / ±3% RH** accuracy, **15s** dynamic refresh, zero-copy JSON parsing |
| [**Fruit Fly Connectome**](https://github.com/Buddhadeb-ss/fruit-fly-learning) | Python, PyTorch, Connectome | **216** biological neurons, **14,037** directed synapses, A2C reinforcement learning |
| [**POSIX Shell in Pure C**](https://github.com/Buddhadeb-ss/codecrafters-shell-c) | Strict C99, POSIX Syscalls | **0** third-party libraries, `fork`/`execvp` isolation, `dup2` redirection, Valgrind clean |

---

## 🚀 Quick Start (Frontend)

```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
cd frontend
npm run build:vite
# Distribution bundle outputs to `frontend/dist/`
```

Or using Create React App / Craco:
```bash
npm run build
# Distribution bundle outputs to `frontend/build/`
```

---

## 🤖 AI & Crawler Documentation
- **`/llms.txt`**: Complete candidate technical dossier formatted in clean Markdown for LLMs and AI recruiter bots.
- **`/robots.txt`**: Standard robot crawler permissions for GPTBot, ClaudeBot, and PerplexityBot.
- **Schema.org Graph**: Inlined JSON-LD linking Person, SoftwareSourceCode, and verified social profiles.
