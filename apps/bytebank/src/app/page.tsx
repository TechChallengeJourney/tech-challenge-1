'use client';
import { Button } from '@bytebank/shared';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   *
   */

  const handleSubmit = () => {
    alert('Clicou no botão');
  };

  return (
    <div>
      <Button
        text="Concluir transação"
        type="GREEN"
        outlined={true}
        sendSubmit={() => handleSubmit()}
      />
    </div>
  );
}
