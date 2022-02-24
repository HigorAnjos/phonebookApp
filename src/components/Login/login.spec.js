import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('Verificar se "Login" esta na tela', () => {
  render(<App />);
  const textAgenda = screen.getByRole('heading', { name: /login/i, level: 1 });
  expect(textAgenda).toBeInTheDocument();
})
