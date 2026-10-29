import sys, os
from pathlib import Path
from fpdf import FPDF

NAME = "Buddhadeb Banik"
HEADLINE = "Aspiring Embedded Systems Engineer"
LOCATION = "Bengaluru, India"
LINKS = [
    ("GitHub", "github.com/Buddhadeb-ss"),
    ("LinkedIn", "linkedin.com/in/buddhadeb-banik"),
    ("YouTube", "youtube.com/@BBbuilds-ECE"),
    ("Instagram", "@arc.buddha"),
]
PROFILE = (
    "I work at the intersection of silicon and software — designing physical circuits and PCBs, "
    "bringing up bare-metal microcontroller firmware, and building low-level systems software in pure C."
)
ENGINEERING = [
    "Embedded C / C++",
    "Bare-metal firmware",
    "PCB design in KiCad",
    "ESP32 & Arduino platforms",
    "I2C sensor integration",
    "POSIX systems programming in C",
    "Python & neural simulation",
]
TOOLS = [
    "KiCad EDA",
    "ESP32 / Arduino Nano",
    "INA219 · BME280 · SSD1306",
    "Git & GitHub",
    "CP-Sync automation",
    "Gerber CAM / PCB layout",
]
PROJECTS = [
    ("Anti-Drone System — SIH-26", "Counter-UAS defense architecture: radar tracking, computer vision, STM32 gimbal control, real-time tactical dashboard with hardware-in-the-loop testing."),
    ("Shell in C", "POSIX-compliant command line interpreter in pure C: REPL, tokenization, PATH search, builtins, file descriptor redirection."),
    ("Game Development Board", "Custom KiCad PCB for a handheld console: Arduino Nano ESP32, 0.96\" OLED, 5-button GPIO matrix, Gerber exports."),
    ("DC Voltage Meter", "IoT DC power instrumentation with ESP32 + INA219: real-time voltage, current, power and energy, streamed to the cloud over Wi-Fi."),
    ("ESP32 FIFA Live Scoreboard", "Real-time football scores from football-data.org rendered on an SSD1306 OLED, with BME280 environmental monitoring."),
    ("Fruit Fly Learning", "Drosophila connectome (216 neurons, 14,037 synapses) mapped into a simulated game, trained with A2C reinforcement learning."),
    ("Competitive Programming", "Verified algorithm solutions in C, auto-synchronized from LeetCode, CodeChef and Virtual Judge via CP-Sync webhooks."),
]

INK = (17, 17, 17)

def _s(x):
    return x.replace("\u2014", "-").replace("\u00b7", "-")

GRAY = (115, 115, 115)
LINE = (229, 229, 229)

PROFILE = _s(PROFILE)
ENGINEERING = [_s(x) for x in ENGINEERING]
TOOLS = [_s(x) for x in TOOLS]
PROJECTS = [(_s(t), _s(d)) for t, d in PROJECTS]

pdf = FPDF(format="A4")
pdf.set_auto_page_break(True, margin=16)
pdf.set_margins(18, 18, 18)
pdf.add_page()

def heading(text, y_pad=6):
    pdf.set_y(pdf.get_y() + y_pad)
    pdf.set_font("helvetica", "B", 9)
    pdf.set_text_color(*INK)
    pdf.set_draw_color(*LINE)
    y = pdf.get_y()
    pdf.cell(0, 6, txt=_s(text).upper(), new_x="LMARGIN", new_y="NEXT")
    pdf.line(18, pdf.get_y(), 192, pdf.get_y())
    pdf.set_y(pdf.get_y() + 3)

pdf.set_font("helvetica", "", 30)
pdf.set_text_color(*INK)
pdf.cell(0, 12, NAME, new_x="LMARGIN", new_y="NEXT")
pdf.set_font("helvetica", "", 12)
pdf.set_text_color(*GRAY)
pdf.cell(0, 7, f"{HEADLINE}   ·   {LOCATION}", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("helvetica", "", 10)
pdf.cell(0, 6, "   ·   ".join(l for _, l in LINKS), new_x="LMARGIN", new_y="NEXT")

heading("Profile")
pdf.set_font("helvetica", "", 10.5)
pdf.multi_cell(0, 5.5, PROFILE)
pdf.set_y(pdf.get_y() + 2)

heading("Capabilities — Engineering")
pdf.set_font("helvetica", "", 10.5)
for item in ENGINEERING:
    pdf.set_x(18); pdf.set_text_color(*GRAY); pdf.cell(4, 5.5, "-")
    pdf.set_text_color(*INK); pdf.cell(0, 5.5, item, new_x="LMARGIN", new_y="NEXT")

pdf.set_y(pdf.get_y() + 1)
heading("Capabilities — Tools")
for item in TOOLS:
    pdf.set_x(18); pdf.set_text_color(*GRAY); pdf.cell(4, 5.5, "-")
    pdf.set_text_color(*INK); pdf.cell(0, 5.5, item, new_x="LMARGIN", new_y="NEXT")

pdf.set_y(pdf.get_y() + 1)
heading("Projects")
for title, desc in PROJECTS:
    pdf.set_font("helvetica", "B", 10.5)
    pdf.set_text_color(*INK)
    pdf.cell(0, 6, title, new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("helvetica", "", 10)
    pdf.set_text_color(*GRAY)
    pdf.multi_cell(0, 5, desc)
    pdf.set_y(pdf.get_y() + 2.5)

heading("Photography")
pdf.set_font("helvetica", "", 10.5)
pdf.multi_cell(0, 5.5, "Street and landscape photography - portfolio at the photography page, daily frames on Instagram (@arc.buddha).")

output_path = Path(__file__).parent.parent / "frontend" / "public" / "resume_generated.pdf"
pdf.output(str(output_path))
print("written", os.path.getsize(str(output_path)), "bytes")

