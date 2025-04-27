// src/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = (style: string) => {
    if (username.trim()) {
      navigate(`/${style}?username=${username}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Buscar Perfil do GitHub
        </h1>

        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Digite o nome do usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleSearch('tailwind')}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={!username.trim()}
          >
            Buscar com Tailwind
          </button>

          <button
            onClick={() => handleSearch('styled')}
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={!username.trim()}
          >
            Buscar com Styled-Components
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
