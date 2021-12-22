import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const handleClick = jest.fn();

  function renderItem(task) {
    return render((
      <Item
        task={task}
        onClickDelete={handleClick}
      />
    ));
  }

  it('renders todo title', () => {
    const { container } = renderItem({
      id: 1,
      title: '뭐라도 하기',
    });

    expect(container).toHaveTextContent('뭐라도 하기');
  });

  it('renders "완료" button', () => {
    const { container } = renderItem({
      id: 1,
      title: '뭐라도 하기',
    });

    expect(container).toHaveTextContent('완료');
    expect(handleClick).not.toBeCalled();
  });

  it('renders "완료" button to delete todo', () => {
    const { getByText } = renderItem({
      id: 100,
      title: 'new Todo',
    });

    fireEvent.click(getByText('완료'));

    expect(handleClick).toBeCalledWith(100);
  });
});
