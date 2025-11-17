# smart-parking-iot-system
# Smart Parking Slot Monitoring System

A full IoT solution for monitoring parking spot occupancy using ESP32, ultrasonic sensors, LEDs for visual indication, and a backend service for data collection and visualization.

This project is designed for educational and practical use, providing a complete system architecture from embedded firmware to backend API and database integration.

---

## 🚗 Overview

Each parking spot contains:

* **ESP32 microcontroller**
* **HC-SR04 ultrasonic sensor** for distance measurement
* **Red and green LEDs** to indicate availability
* (Optional) **Indoor positioning fallback** using sector and gateway mapping

The ESP32 detects whether a spot is *occupied* or *free* based on distance thresholds, updates the LED color accordingly, and sends the data to the backend.

The backend stores and exposes this data through REST APIs and can be consumed by dashboards or apps.

---

## 🔧 Features

* Real‑time parking spot monitoring
* Configurable distance thresholds
* Visual LED indicators (Green = Free, Red = Occupied)
* Indoor sector‑based positioning (no GPS required)
* REST API for storing and retrieving spot status
* MySQL or PostgreSQL database integration
* Optional containerization with Docker

---

## 📡 Hardware Requirements

* ESP32 Devkit
* HC-SR04 Ultrasonic Sensor
* 1× Red LED
* 1× Green LED
* 2× Resistors (220Ω recommended)
* Jumper wires
* Power source

---

## 🧠 Software Requirements

* ESP-IDF or Arduino IDE
* Python 3.10+ (if using backend in Python)
* Node.js 18+ (optional backend option)
* Docker & Docker Compose (optional)
* MySQL or PostgreSQL

---

## 🏗️ System Architecture

```
[Sensors + LEDs]
      ↓
   ESP32 (per slot)
      ↓  Wi‑Fi
[REST API Backend]
      ↓
[Database] ←→ [Dashboard / Mobile App]
```

---

## ⚙️ ESP32 Behavior

1. Read distance from HC-SR04
2. Compare with threshold (e.g., < 20 cm → occupied)
3. Update LED color accordingly
4. Send JSON payload to backend:

```
{
  "slot_id": "A12",
  "sector": "L1-South",
  "status": "occupied",
  "distance_cm": 14,
  "timestamp": "2025-01-15T18:22:05Z"
}
```

---

## 🌐 Backend Structure (Example in Python FastAPI)

* `/api/slots/update` → POST endpoint for ESP32 updates
* `/api/slots` → GET all slot statuses
* `/api/slots/{slot_id}` → GET specific slot

---

## 🗄️ Database Schema (Simplified)

```
parking_slots
├── id (PK)
├── slot_id (string)
├── sector (string)
├── status (free/occupied)
├── distance_cm (float)
├── last_update (timestamp)
```

---

## 🚧 Roadmap

* [ ] Add MQTT support
* [ ] Add indoor gateway triangulation
* [ ] Create web dashboard frontend
* [ ] Deploy backend with Docker Compose
* [ ] Mobile app for supervisors

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues, forks, and pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Lucas Arneiro – Data Engineer & IoT Developer

---
