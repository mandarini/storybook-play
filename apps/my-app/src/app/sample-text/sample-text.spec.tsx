import { render } from '@testing-library/react';

import SampleText from './sample-text';

describe('SampleText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleText />);
    expect(baseElement).toBeTruthy();
  });
});
