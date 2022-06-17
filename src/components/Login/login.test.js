import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Teste o componente de Login', () => {
  it('Teste se o texto login esta na tela', () => {
    render(<App />);
    const textLogin = screen.getByRole('heading', { name: /login/i, level: 1 });
    expect(textLogin).toBeInTheDocument();
  });

  it('Teste se e possivel digitar um email no input', () => {
    render(<App />);
    const emailType = 'higor@gmail.com';
    const inputEmail = screen.getByRole('textbox', { name: /email/i });
    userEvent.type(inputEmail, emailType);
    expect(inputEmail.value).toBe(emailType);
  });
});
