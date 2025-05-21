import { useUser } from '@bytebank/shared';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BytebankLoadingContent from '../loading-content';

export default function BytebankAuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useUser();
  const router = useRouter();
  const [checking, setChecking] = useState(false);
  const [loadingDelayPassed, setloadingDelayPassed] = useState(false);

  const isAuthenticating = loading || user === undefined;

  // Timeout para garantir pelo menos 500ms de loading para evitar a home não logada piscando
  useEffect(() => {
    const timer = setTimeout(() => setloadingDelayPassed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAuthenticating) {
      if (user) {
        router.replace('/home');
      } else {
        // Usuário não logado: libera renderização da home não logada
        setChecking(true);
      }
    }
  }, [user, loading, router, isAuthenticating]);

  if (!checking || isAuthenticating || !loadingDelayPassed) {
    return <BytebankLoadingContent />;
  }

  return <>{children}</>;
}
