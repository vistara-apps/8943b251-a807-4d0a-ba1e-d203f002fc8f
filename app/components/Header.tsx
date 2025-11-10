'use client';

import { Bug, Settings2 } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Bug className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Bug Bounty Hub</h1>
              <p className="text-xs text-muted">Critical Bug Tracker</p>
            </div>
          </div>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-lg hover:bg-bg transition-colors duration-200"
            aria-label="Settings"
          >
            <Settings2 className="w-5 h-5 text-muted" />
          </button>
        </div>
      </div>
    </header>
  );
}
