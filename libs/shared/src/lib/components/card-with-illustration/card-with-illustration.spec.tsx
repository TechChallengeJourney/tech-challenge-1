import { render } from '@testing-library/react';

import { BytebankCardWithIllustration } from './index';

describe('CardWithIllustration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BytebankCardWithIllustration />);
    expect(baseElement).toBeTruthy();
  });
});
