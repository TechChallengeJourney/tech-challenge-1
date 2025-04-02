import { render } from '@testing-library/react';

import { Button } from './index';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button text="Concluir transação" type="GREEN" outlined={true} />
    );
    expect(baseElement).toBeTruthy();
  });
});
