'use client';
import { BytebankExtract, BytebankTransaction } from '@bytebank/shared';

export default function Investimentos() {
  return (
    <>
      <BytebankTransaction />
      <BytebankExtract />
    </>
  );
}
