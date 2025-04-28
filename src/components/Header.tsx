import { useState, useEffect } from 'react';
import { Bell, ChevronLeft, Grid2x2, Languages, MoreVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  pageTitle: string;
  notificationCount?: number;
  userName?: string;
  userId?: string;
  avatarUrl?: string;
  filters?: { id: string; label: string; }[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

const Header = ({
  pageTitle,
  notificationCount = 0,
  userName = "Rajat Mishra",
  userId = "123456789",
  avatarUrl,
  filters = [
    { id: 'all', label: 'All' },
    { id: 'open', label: 'Open' },
    { id: 'untouched', label: 'Untouched' },
    { id: 'failed', label: 'Failed' },
    { id: 'wip', label: 'WIP' },
    { id: 'pending', label: 'Pending for Processing' },
    { id: 'rts', label: 'RTS' },
    { id: 'issued', label: 'Issued' },
  ],
  activeFilter,
  onFilterChange,
}: HeaderProps) => {
  const isMobile = useIsMobile();
  const [isCardView, setIsCardView] = useState(true);
  
  const [showScrollIndicators, setShowScrollIndicators] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  
  useEffect(() => {
    const checkScroll = () => {
      const filterContainer = document.getElementById('filter-container');
      if (filterContainer) {
        setCanScrollLeft(filterContainer.scrollLeft > 0);
        setCanScrollRight(
          filterContainer.scrollLeft < 
          filterContainer.scrollWidth - filterContainer.clientWidth
        );
        setShowScrollIndicators(
          filterContainer.scrollWidth > filterContainer.clientWidth
        );
      }
    };
    
    checkScroll();
    
    const filterContainer = document.getElementById('filter-container');
    if (filterContainer) {
      filterContainer.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    
    return () => {
      if (filterContainer) {
        filterContainer.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, [filters]);
  
  const handleScroll = (direction: 'left' | 'right') => {
    const filterContainer = document.getElementById('filter-container');
    if (filterContainer) {
      const scrollAmount = 200;
      const currentScroll = filterContainer.scrollLeft;
      filterContainer.scrollTo({
        left: direction === 'left' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <div className="bg-[#033089]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                className="text-white hover:text-white/90 hover:bg-[#002670] p-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-white text-base font-bold hidden md:block">{pageTitle}</h1>
            </div>

            <div className={`${isMobile ? 'block md:hidden' : 'hidden md:block'}`}>
              {isMobile ? (
                <h1 className="text-base font-bold text-white">{pageTitle}</h1>
              ) : (
                <img 
                  src="/lovable-uploads/4b33a032-13c3-4d11-9778-ccbeaa9dd8a9.png"
                  alt="SalesDrive Logo" 
                  className="h-6"
                />
              )}
            </div>

            {isMobile ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-[#00264f]">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-[#003366] text-white border-[#004080]">
                  <DropdownMenuItem className="hover:bg-[#00264f]">
                    <Grid2x2 className="h-4 w-4 mr-2" />
                    <span>Toggle View</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#00264f]">
                    <Languages className="h-4 w-4 mr-2" />
                    <span>EN</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#00264f]">
                    <Bell className="h-4 w-4 mr-2" />
                    <span>Notifications</span>
                    {notificationCount > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
                        {notificationCount}
                      </span>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#00264f]">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 border border-white/20">
                        <AvatarImage src={avatarUrl} />
                        <AvatarFallback className="bg-[#00264f] text-white text-xs">
                          {userName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <div>{userName}</div>
                        <div className="text-xs text-gray-300">USERID: {userId}</div>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="text-white hover:bg-[#00264f]">
                  <Grid2x2 className="h-5 w-5" />
                </Button>
                
                <Button variant="ghost" className="text-white hover:bg-[#00264f]">
                  <span className="mr-1">EN</span>
                  <Languages className="h-4 w-4" />
                </Button>
                
                <Button variant="ghost" className="text-white hover:bg-[#00264f] relative">
                  <Bell className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
                      {notificationCount}
                    </span>
                  )}
                </Button>
                
                <div className="h-8 w-px bg-white/20" />
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 border-2 border-white/20">
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback className="bg-[#00264f] text-white">
                      {userName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <div className="font-medium">{userName}</div>
                    <div className="text-xs text-gray-300">USERID: {userId}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-[#1246AD] border-t border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="hidden md:block mb-3">
            <h2 className="text-2xl font-normal text-white">{pageTitle}</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
            <div className="relative w-full md:w-auto">
              <div 
                className="flex overflow-x-auto hide-scrollbar relative py-1"
                id="filter-container"
              >
                <div className="flex space-x-2">
                  {filters.map((filter) => (
                    <Button
                      key={filter.id}
                      onClick={() => onFilterChange(filter.id)}
                      className={`rounded-full px-4 py-1 transition-all whitespace-nowrap ${
                        activeFilter === filter.id 
                          ? 'bg-[#00AEEF] hover:bg-[#0096ce]' 
                          : 'bg-transparent border border-[#00AEEF]/70 hover:bg-[#00AEEF]/20'
                      }`}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              {showScrollIndicators && (
                <>
                  {canScrollLeft && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#003366]/70"
                      onClick={() => handleScroll('left')}
                    >
                      &lt;
                    </Button>
                  )}
                  {canScrollRight && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#003366]/70"
                      onClick={() => handleScroll('right')}
                    >
                      &gt;
                    </Button>
                  )}
                </>
              )}
            </div>
            
            <div className="hidden md:block">
              <Button
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10 bg-transparent"
                onClick={() => setIsCardView(!isCardView)}
              >
                <Grid2x2 className="h-4 w-4 mr-2" />
                Switch to {isCardView ? 'List' : 'Card'} View
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
    </header>
  );
};

export default Header;
