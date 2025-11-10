'use client';

import { Wallet, Github, Shield } from 'lucide-react';

interface ConnectSectionProps {
  onConnect: () => void;
}

export function ConnectSection({ onConnect }: ConnectSectionProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Welcome to Bug Bounty Hub</h2>
        <p className="text-lg text-muted max-w-md mx-auto">
          Discover and prioritize critical bugs from your GitHub repositories, delivered directly to your Farcaster feed.
        </p>
      </div>

      <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <button
          onClick={onConnect}
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-card"
        >
          <Wallet className="w-5 h-5" />
          Connect Wallet & Farcaster
        </button>

        <button
          className="w-full bg-surface hover:bg-surface/80 text-fg font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 border border-border"
        >
          <Github className="w-5 h-5" />
          Connect GitHub Account
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <FeatureCard
          icon={<Shield className="w-6 h-6" />}
          title="AI Prioritization"
          description="Automatically identify the top 3 most critical bugs"
        />
        <FeatureCard
          icon={<Wallet className="w-6 h-6" />}
          title="Social Native"
          description="Share and discuss bugs directly in Farcaster"
        />
        <FeatureCard
          icon={<Github className="w-6 h-6" />}
          title="GitHub Integration"
          description="Seamless connection to your repositories"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-surface p-6 rounded-lg border border-border">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}
