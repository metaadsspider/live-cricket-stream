import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Menu, Bell, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import crickLogo from '@/assets/crick-logo.jpg';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={crickLogo} 
              alt="Crick On Time" 
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Crick On Time</h1>
              <Badge variant="secondary" className="text-xs">
                Live Cricket
              </Badge>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search matches, teams..."
                className="pl-10 bg-muted/50 border-border/50 focus:bg-background"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};