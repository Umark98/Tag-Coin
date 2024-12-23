import React from "react";

const Industry = () => {
  return (
    <div className="container mx-auto p-6 bg-white">
      <div className="flex space-x-6">
        {/* Big div on the left */}
        <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg">
        <img
              src="industry.svg"
              alt="Logo 1"
              className=""
            />

        </div>

      {/* Small divs on the right */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
  {/* Small div 1: React logo */}
  <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 mb-4">
      <path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
      <path d="M16.5 7.6c-.16-1.72-.89-3.25-2.1-4.43-1.46-1.42-3.43-2.21-5.4-2.23-1.51 0-2.94.56-4.02 1.57C4.74 2.79 4.29 3.5 4.15 4.27"/>
      <path d="M3.99 15.41C4.15 14.64 4.74 13.93 5.48 13.48c1.08-.78 2.51-1.3 4.02-1.57 1.98-.02 3.94.81 5.4 2.23 1.21 1.18 1.94 2.71 2.1 4.43"/>
      <path d="M16.5 16.4c-.16-1.72-.89-3.25-2.1-4.43-1.46-1.42-3.43-2.21-5.4-2.23-1.51 0-2.94.56-4.02 1.57-1.13.91-1.57 2.35-1.42 3.62"/>
    </svg>
    <p className="text-center text-sm text-gray-600">React</p>
  </div>

  {/* Small div 2: Node.js logo */}
  <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 mb-4">
      <path d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
      <path d="M19 12h-1c0-4.97-4.03-9-9-9s-9 4.03-9 9h-1c0-5.52 4.48-10 10-10s10 4.48 10 10z"/>
    </svg>
    <p className="text-center text-sm text-gray-600">Node.js</p>
  </div>

  {/* Small div 3: MongoDB logo */}
  <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/MongoDB_Logo.svg" alt="MongoDB Logo" className="w-20 h-20 object-cover mb-4" />
    <p className="text-center text-sm text-gray-600">MongoDB</p>
  </div>

  {/* Small div 4: Docker logo */}
  <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Docker_logo.png" alt="Docker Logo" className="w-20 h-20 object-cover mb-4" />
    <p className="text-center text-sm text-gray-600">Docker</p>
  </div>

  {/* Small div 5: GitHub logo */}
  <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" className="w-20 h-20 object-cover mb-4" />
    <p className="text-center text-sm text-gray-600">GitHub</p>
  </div>

  {/* Small div 6: AWS logo */}
  <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Amazon_Web_Services_Logo.svg" alt="AWS Logo" className="w-20 h-20 object-cover mb-4" />
    <p className="text-center text-sm text-gray-600">AWS</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default Industry;
