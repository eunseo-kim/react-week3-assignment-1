import { render, fireEvent } from '@testing-library/react';

import Page from './Page';

describe('Page', () => {
  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];

  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();
  const handleClickDeleteTask = jest.fn();

  it('renders Page', () => {
    const { getByText } = render((
      <Page
        taskTitle=""
        onChangeTitle={handleChangeTitle}
        onClickAddTask={handleClickAddTask}
        tasks={tasks}
        onClickDeleteTask={handleClickDeleteTask}
      />
    ));

    fireEvent.click(getByText('추가'));

    expect(handleClickAddTask).toBeCalled();

    expect(getByText('Task-1')).not.toBeNull();
    expect(getByText('Task-2')).not.toBeNull();
  });
});
