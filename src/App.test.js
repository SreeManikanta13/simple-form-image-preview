import { render } from '@testing-library/react';
import App from './App';
import ImageUpload from './ImageUpload';

test('renders Form Page', () => {
  render(<App />);
});

test('render user Image Upload Component', () => {
  render(<ImageUpload />);
});


