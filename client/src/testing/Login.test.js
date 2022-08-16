import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '@testing-library/jest-dom';

test('renders react', ()=>{
    render(<LoginForm/>, {wrapper: BrowserRouter});
    const text = screen.getByText(/welcome, admin bcr/i);
    expect(text).toBeInTheDocument();
})

test('should show login form username', () => {
    render(<LoginForm />, {wrapper: BrowserRouter})
    const input = screen.getByRole('username')
    expect(input).toBeInTheDocument();
})

test('should show login form password', () => {
    render(<LoginForm />, {wrapper: BrowserRouter})
    const input = screen.getByRole('password')
    expect(input).toBeInTheDocument();
})

test('should show button login', () => {
    render(<LoginForm />, {wrapper: BrowserRouter})
    const input = screen.getByRole('button')
    expect(input).toBeInTheDocument();
})