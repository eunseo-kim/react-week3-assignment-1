import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/잠자기/)).not.toBeNull();
  expect(getByText(/밥먹기/)).not.toBeNull();
});
