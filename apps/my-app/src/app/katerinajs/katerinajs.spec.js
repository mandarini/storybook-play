import { render } from '@testing-library/react';
import Katerinajs from './katerinajs';
describe('Katerinajs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Katerinajs />);
    expect(baseElement).toBeTruthy();
  });
});
