import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderInput(value) {
    return render((
      <Input
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('renders input with value', () => {
    const value = 'new todo';

    const { getByDisplayValue } = renderInput(value);

    expect(getByDisplayValue(value)).not.toBeNull();
  });

  it('renders input to handle onChange 1 time', () => {
    const { getByLabelText } = renderInput('new todo');

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(handleChange).toBeCalledTimes(1);
  });

  it('renders "추가" button to handle onClick 1 time', () => {
    const { getByText } = renderInput('new todo');

    fireEvent.click(getByText('추가'));

    expect(handleClick).toBeCalledTimes(1);
  });
});
