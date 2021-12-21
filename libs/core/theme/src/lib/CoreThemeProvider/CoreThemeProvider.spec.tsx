import { render } from '@testing-library/react';

import CoreThemeProvider from './CoreThemeProvider';

describe('CoreThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreThemeProvider />);
    expect(baseElement).toBeTruthy();
  });
});
