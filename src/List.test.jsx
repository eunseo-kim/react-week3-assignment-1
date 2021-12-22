import { render, fireEvent } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render((
      <List
        tasks={tasks}
        onClickDelete={handleClickDelete}
      />
    ));
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders task', () => {
      const { getAllByText } = renderList(tasks);
      expect(getAllByText(/Task-1/)).not.toBeNull();
      expect(getAllByText(/Task-2/)).not.toBeNull();
    });

    it('renders "완료" button to delete task', () => {
      const { getAllByText } = renderList(tasks);
      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];
      const { getByText } = renderList(tasks);

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });
});
