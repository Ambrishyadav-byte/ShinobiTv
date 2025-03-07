# ShinobiTV - The Ultimate Anime Streaming Experience (v1)

<img src="/src/assets/logo2.png" alt="ShinobiTV Logo" width="150" height="150">

ShinobiTV is a modern and sleek anime streaming platform designed for anime lovers. With a dark-themed, responsive UI, it delivers a smooth and immersive viewing experience across PC, mobile, and tablet devices.

I developed this project out of fun, and this is my first project in React! 🎉

## 🚀 Features
- **High-Quality Streaming** ✅
- **Smooth and Responsive Experience** ✅
- **Subtitles Support** ✅ (Only subtitles because dubs are... well, you know 😆)
- **Search Functionality** ✅

## 📌 Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Deployment**: Vercel / Netlify
- **Architecture**: Fully Client-Side Application

## 🏗️ To-Add & Journey
- [ ] **Advanced Filtering** (Filter anime based on genre, rating, and release year) ✅ *(Coming soon!)*
- [ ] **Login System** (User authentication & profile management) ✅ *(Coming soon!)*
- [ ] **Watch History Tracking** (Track watched anime & progress) ✅ *(Coming soon!)*
- [ ] **User Watchlist** (Save favorite anime for later viewing) ✅ *(Coming soon!)*
- [ ] **Episode Auto-Play** (Seamless transition to the next episode) ✅ *(Coming soon!)*

## 🔧 CORS Bypass Notice
To avoid CORS errors when fetching video streams, you must update the CORS bypass URL. Follow these steps:
1. Clone and host [m3u8_proxy-cors](https://github.com/shashstormer/m3u8_proxy-cors) on Vercel.
2. Replace the CORS URL in the project with your hosted URL.
3. Example: 
   ```javascript
   setSrc("https://your-hosted-cors-url.vercel.app/cors?url=" + videoUrl);
   ```

## 📜 Disclaimer
**ShinobiTV is created for educational purposes only.** The platform does not host or distribute any copyrighted content. All anime available for streaming is sourced from publicly available data online. This project is intended to explore web development, UI design, and optimization techniques while showcasing anime streaming as a concept.

## 🛠 Setup & Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/Ambrishyadav-byte/ShinobiTv
   cd ShinobiTV
   ```

2. **Host the API**
   - Clone and host [aniwatch-api](https://github.com/Rajesh4434/aniwatch-api) locally or on Vercel.
   - Replace the API URL in the project with `API_URL`.

3. **Install Dependencies**
   ```sh
   npm install
   ```

4. **Start the Development Server**
   ```sh
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## 🔗 Contribution
We welcome contributions! If you'd like to improve ShinobiTV, follow these steps:
1. **Fork** the repository
2. **Create a new branch** (`feature/new-feature`)
3. **Commit** your changes
4. **Push** to your branch
5. Open a **Pull Request**

## 📧 Contact & Support
For any questions or issues, feel free to open an issue or contact us at **myself@ambrishbytes.tech**.

---
**Enjoy your favorite anime responsibly! 🍥🔥**
