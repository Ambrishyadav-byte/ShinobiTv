const About = () => {
  return (
    <div className="p-6 text-white bg-[#181A1B] min-h-screen">
      <h1 className="text-4xl font-bold text-center text-red-500">About ShinobiTV</h1>
      
      <p className="mt-4 text-lg text-gray-300">
        Welcome to <strong>ShinobiTV</strong>! We are an anime streaming platform built for anime lovers,
        offering a sleek and modern user experience. Our goal is to provide high-quality streaming with a
        user-friendly interface.
      </p>
      
      <h2 className="text-2xl mt-6 text-red-400">🚀 Features:</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-300">
        <li>✅ High-Quality Streaming</li>
        <li>✅ Smooth and Responsive Experience</li>
        <li>✅ Subtitles Support (Only subtitles because dubs are... well, you know 😆)</li>
        <li>✅ Search Functionality</li>
      </ul>
      
      <h2 className="text-2xl mt-6 text-red-400">🏗️ To-Add & Journey:</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-300">
        <li>✅ Advanced Filtering (Coming soon!)</li>
        <li>✅ Login System (Coming soon!)</li>
        <li>✅ Watch History Tracking (Coming soon!)</li>
        <li>✅ User Watchlist (Coming soon!)</li>
        <li>✅ Episode Auto-Play (Coming soon!)</li>
      </ul>
      
      <h2 className="text-2xl mt-6 text-red-400">📌 Tech Stack:</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-300">
        <li>React.js</li>
        <li>Tailwind CSS</li>
        <li>Vercel / Netlify (Deployment)</li>
        <li>Fully Client-Side Application</li>
      </ul>
      
      <h2 className="text-2xl mt-6 text-red-400">📜 Disclaimer:</h2>
      <p className="mt-2 text-gray-300">
        ShinobiTV is created for educational purposes only. The platform does not host or distribute any
        copyrighted content. All anime available for streaming is sourced from publicly available data online.
      </p>
    </div>
  );
};

export default About;