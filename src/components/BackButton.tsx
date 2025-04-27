import { useNavigate } from 'react-router-dom';
import React from 'react';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
    >
      Voltar
    </button>
  );
};

export default BackButton;
