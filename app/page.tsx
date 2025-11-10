'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { AppShell } from './components/AppShell';
import { BugList } from './components/BugList';
import { ConnectSection } from './components/ConnectSection';
import { Header } from './components/Header';
import { LoadingScreen } from './components/LoadingScreen';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <AppShell>
      <Header />
      <main className="flex-1 overflow-y-auto">
        {!isConnected ? (
          <ConnectSection onConnect={() => setIsConnected(true)} />
        ) : (
          <BugList />
        )}
      </main>
    </AppShell>
  );
}
