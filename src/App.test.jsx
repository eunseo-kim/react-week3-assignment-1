import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('render tasks', () => {
    const { getByText } = render(<App />);

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByText(/잠자기/)).not.toBeNull();
    expect(getByText(/밥먹기/)).not.toBeNull();
  });

  it('add new todo', () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText(/추가/));

    expect(getByText(/새로운 할 일/)).toBeInTheDocument();
  });

  it('delete a todo', () => {
    const { getAllByRole, getAllByText } = render(<App />);
    const buttons = getAllByText('완료');

    fireEvent.click(buttons[0]);

    const todos = getAllByRole('listitem');
    expect(todos).toHaveLength(1);
  });
});
