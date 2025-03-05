const About = () => {
    return (
      <div className="p-6 text-white bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-red-500">About ShinobiTV</h1>
        <p className="mt-4 text-lg text-gray-300">
          Welcome to <strong>ShinobiTV</strong>! We are an anime streaming platform built for anime lovers, 
          offering a sleek and modern user experience. Our goal is to provide high-quality streaming with a 
          user-friendly interface.
        </p>
        <h2 className="text-2xl mt-6 text-red-400">Features:</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-300">
          <li>High-quality anime streaming</li>
          <li>Dark-themed, responsive UI</li>
          <li>Intelligent search & filtering</li>
          <li>Watch history tracking (coming soon!)</li>
        </ul>
        <h2 className="text-2xl mt-6 text-red-400">Disclaimer:</h2>
        <p className="mt-2 text-gray-300">
          ShinobiTV is an educational project and does not host or distribute any copyrighted content. 
          All content is sourced from publicly available data.
        </p>
      </div>
    );
  };
  
  export default About;
  