import { useState } from 'react';
import { Header } from '@/components/Header';
import { VideoPlayer } from '@/components/VideoPlayer';
import { MatchCard } from '@/components/MatchCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, Clock, Trophy, Star } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [isWatching, setIsWatching] = useState(false);
  
  const featuredMatch = {
    team1: {
      name: "England",
      shortName: "ENG", 
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      score: "180/5",
      overs: "(18.3 ov)"
    },
    team2: {
      name: "South Africa", 
      shortName: "SA",
      flag: "🇿🇦",
      score: "165/8",
      overs: "(20.0 ov)"
    },
    matchType: "3rd T20 International",
    venue: "The Oval, London",
    date: "Today",
    time: "Live Now",
    isLive: true
  };

  const handleWatchLive = () => {
    setIsWatching(true);
    toast.success("Starting live stream...", {
      description: "Connecting to ultra-low latency stream"
    });
    // Auto-scroll to video player after a brief moment
    setTimeout(() => {
      const videoElement = document.querySelector('.video-container');
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const streamUrl = "https://lb3.strmd.top/secure/kupVaYWkLqDmAipVUvFPPOOBOZkYPSiS/echo/stream/england-vs-south-africa-third-t20-cricket-1/1/playlist.m3u8";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="destructive" className="live-indicator">
              <div className="w-2 h-2 bg-current rounded-full animate-pulse mr-1" />
              LIVE NOW
            </Badge>
            <Badge variant="outline">Zero Delay Stream</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Live Cricket Streaming
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch England vs South Africa live with ultra-low latency streaming technology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2 space-y-6">
            {isWatching ? (
              <div className="space-y-4">
                <VideoPlayer
                  src={streamUrl}
                  className="aspect-video rounded-xl overflow-hidden"
                />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold">England vs South Africa</h2>
                    <p className="text-muted-foreground">3rd T20 International • The Oval, London</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="live-indicator">
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse mr-1" />
                      LIVE
                    </Badge>
                    <Badge variant="outline">HD</Badge>
                  </div>
                </div>
              </div>
            ) : (
              <MatchCard
                {...featuredMatch}
                onPlay={handleWatchLive}
                className="lg:col-span-1"
              />
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Featured Match
              </h3>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">England</span>
                    <span className="text-sm font-bold">180/5</span>
                  </div>
                  <div className="text-xs text-muted-foreground">18.3 overs</div>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">South Africa</span>
                    <span className="text-sm font-bold">165/8</span>
                  </div>
                  <div className="text-xs text-muted-foreground">20.0 overs • Target: 181</div>
                </div>
                <div className="text-center">
                  <Badge className="live-indicator">England wins by 15 runs</Badge>
                </div>
              </div>
            </Card>

            {/* Stream Quality */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Stream Quality</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Resolution</span>
                  <Badge variant="outline">1080p HD</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Latency</span>
                  <Badge variant="outline">≤2s</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Buffer Health</span>
                  <Badge className="cricket-gradient">Excellent</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
