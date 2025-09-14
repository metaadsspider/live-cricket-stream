import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Team {
  name: string;
  shortName: string;
  flag: string;
  score?: string;
  overs?: string;
}

interface MatchCardProps {
  team1: Team;
  team2: Team;
  matchType: string;
  venue: string;
  date: string;
  time: string;
  isLive?: boolean;
  onPlay: () => void;
  className?: string;
}

export const MatchCard = ({
  team1,
  team2,
  matchType,
  venue,
  date,
  time,
  isLive = false,
  onPlay,
  className
}: MatchCardProps) => {
  return (
    <Card className={cn(
      "p-6 hover-lift smooth-transition bg-gradient-to-br from-card to-card/80 border-border/50",
      className
    )}>
      <div className="space-y-4">
        {/* Match header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{matchType}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {venue}
            </div>
          </div>
          {isLive && (
            <div className="live-indicator">
              <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
              LIVE
            </div>
          )}
        </div>

        {/* Teams */}
        <div className="space-y-3">
          {/* Team 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
                {team1.flag}
              </div>
              <div>
                <h4 className="font-medium">{team1.name}</h4>
                <p className="text-sm text-muted-foreground">{team1.shortName}</p>
              </div>
            </div>
            {team1.score && (
              <div className="text-right">
                <p className="font-semibold text-lg">{team1.score}</p>
                <p className="text-sm text-muted-foreground">{team1.overs}</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold text-muted-foreground">VS</div>
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
                {team2.flag}
              </div>
              <div>
                <h4 className="font-medium">{team2.name}</h4>
                <p className="text-sm text-muted-foreground">{team2.shortName}</p>
              </div>
            </div>
            {team2.score && (
              <div className="text-right">
                <p className="font-semibold text-lg">{team2.score}</p>
                <p className="text-sm text-muted-foreground">{team2.overs}</p>
              </div>
            )}
          </div>
        </div>

        {/* Match details */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {time}
            </div>
          </div>
          
          <Button
            onClick={onPlay}
            className="cricket-gradient hover:shadow-lg hover:scale-105 smooth-transition"
          >
            <Play className="h-4 w-4 mr-2" />
            {isLive ? 'Watch Live' : 'Watch'}
          </Button>
        </div>
      </div>
    </Card>
  );
};