import styled from 'styled-components';

// Button Component
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Movie Card Component
export const MovieCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  max-width: 200px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieCardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const MovieCardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

// Loading and Error Messages
export const Message = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 1.2rem;
`;