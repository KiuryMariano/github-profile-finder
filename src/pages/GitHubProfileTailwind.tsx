import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";

interface UserProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
}

const GitHubProfileTailwind: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!username) {
        setError("Nenhum usuário fornecido.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error("Usuário não encontrado.");
        }

        const data: UserProfile = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message || "Erro ao carregar perfil.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg animate-pulse">
          Carregando perfil...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden mx-auto mt-10 p-6">
      <img
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
        src={profile.avatar_url}
        alt={`${profile.name} profile`}
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
        <p className="text-gray-600 mb-3">
          {profile.bio || "Sem biografia disponível."}
        </p>
        <p className="text-gray-500">
          <strong>Repositórios Públicos:</strong> {profile.public_repos}
        </p>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full mt-5 transition duration-300"
        >
          Ver Perfil no GitHub
        </a>
      </div>
      <BackButton />
    </div>
  );
};

export default GitHubProfileTailwind;
