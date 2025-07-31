# 🌦️ Weather App

A modern, responsive weather forecast web application built using **React.js** and the **OpenWeatherMap API**. Enter any city name to get real-time weather updates, including temperature, humidity, wind speed, and condition icons.

## 📸 Preview

![Weather App Screenshot](./assets/screenshot.png) <!-- Optional: Replace with actual path or delete -->

---

## 🚀 Features

- 🔍 City-based weather search
- 🌡️ Real-time temperature in Celsius
- 🌬️ Wind speed, humidity, and weather description (Rain, Thunderstorm, Clouds, etc.)
- 🎨 Modern gradient UI design
- ☀️ Weather condition icons
- 🔁 Responsive layout for mobile and desktop
- ❌ "City Not Found" error message
- 🔍 Press `Enter` or click the search icon to search

---

## 🛠️ Built With

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/)
- HTML5, CSS3, JavaScript (ES6+)

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add API Key
Create a .env file in the root and add your OpenWeatherMap API key:

ini
Copy
Edit
VITE_APP_API_KEY=your_api_key_here
4. Start the App
bash
Copy
Edit
npm run dev
Visit http://localhost:5173 in your browser.

📁 Folder Structure
css
Copy
Edit
weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Weather.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── Weather.css
├── .env
├── package.json
└── README.md
🧠 Learnings
Handling API requests in React using fetch

Managing environment variables in Vite

Creating responsive UI layouts

Error handling for API calls

🙌 Acknowledgments
OpenWeatherMap API

React Icons

Gradient inspiration: https://cssgradient.io

📜 License
This project is open-source and available under the MIT License.

👤 Author
Nethaji K
