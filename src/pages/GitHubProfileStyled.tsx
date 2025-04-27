import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../components/BackButton';

interface UserProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
}

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const Card = styled.div`
  max-width: 20rem;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #4CAF50;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardButton = styled.a`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 24px;
  text-decoration: none;
  border-radius: 25px;
  margin-top: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Message = styled.p<{ color?: string }>`
  color: ${({ color }) => color || '#333'};
  font-size: 1.2rem;
  font-weight: 500;
`;

// Componente Principal
const GitHubProfileStyled: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  useEffect(() => {
    const fetchProfile = async () => {
      if (!username) {
        setError('Nenhum nome de usuário fornecido.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
          throw new Error('Usuário não encontrado.');
        }

        const data: UserProfile = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar o perfil.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return (
      <Container>
        <Message>Carregando perfil...</Message>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Message color="red">{error}</Message>
      </Container>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <Container>
      <Card>
        <CardImageContainer>
          <CardImage src={profile.avatar_url} alt={`Avatar de ${profile.name}`} />
        </CardImageContainer>
        <CardContent>
          <h2>{profile.name}</h2>
          <p>{profile.bio || 'Nenhuma biografia disponível.'}</p>
          <p><strong>Repositórios Públicos:</strong> {profile.public_repos}</p>
          <CardButton href={profile.html_url} target="_blank" rel="noopener noreferrer">
            Ver Perfil no GitHub
          </CardButton>
        </CardContent>
        <BackButton />
      </Card>
    </Container>
  );
};

export default GitHubProfileStyled;
