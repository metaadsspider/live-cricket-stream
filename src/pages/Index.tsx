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

  const streamUrl = "https://dai.google.com/linear/hls/event/eerPuh7PQM-0T7qEJ9TwHQ/master.m3u8";

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
        <div className="max-w-4xl mx-auto">
          {/* Video Player Section */}
          <div className="space-y-6">
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
              />
            )}
          </div>

          {/* Telegram Join Section */}
          <div className="mt-8 text-center">
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Join Our Cricket Community</h3>
                <p className="text-muted-foreground">Get live updates, highlights, and exclusive content</p>
                <Button 
                  className="bg-[#0088cc] hover:bg-[#0077bb] text-white px-8 py-3"
                  onClick={() => window.open('https://t.me/+JtamklRCRxAxMTg1', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.548c-.12.529-.437.661-.886.41l-2.453-1.81-1.184 1.14c-.131.131-.241.241-.494.241l.176-2.497 4.552-4.115c.197-.176-.043-.275-.306-.099L9.28 13.308 6.87 12.48c-.529-.165-.539-.529.11-.781l10.426-4.02c.44-.165.826.099.684.781-.002 0-.002 0-.002 0z"/>
                  </svg>
                  Join Telegram Channel
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
