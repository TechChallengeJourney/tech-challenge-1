import { render } from '@testing-library/react';

import BytebankIllustration from './index';

describe('BytebankIllustration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BytebankIllustration />);
    expect(baseElement).toBeTruthy();
  });
});
