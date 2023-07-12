import { render } from '@testing-library/react';

import Katerina from './katerina';

describe('Katerina', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Katerina />);
    expect(baseElement).toBeTruthy();
  });
});
