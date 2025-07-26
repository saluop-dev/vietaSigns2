import { Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="border-b bg-background">
      {/* Top bar */}
      <div className="bg-muted/50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center gap-4 text-sm text-muted-foreground">
            <span>Free shipping on orders over $99</span>
            <span>|</span>
            <span>1-800-SIGNS-1</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">VIETAD</h1>
              <p className="text-xs text-muted-foreground">SIGNS</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search for products or templates" 
                className="pl-10 pr-4 h-12 border-2 focus:border-primary"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Button variant="red" size="sm" className="rounded-full">
              Design Tool
            </Button>
            
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <span className="text-sm">Wishlist</span>
            </div>

            <div className="flex items-center gap-2 relative">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Badge className="absolute -top-2 -right-2 bg-accent-red text-white text-xs min-w-5 h-5">
                  0
                </Badge>
              </div>
              <span className="text-sm">Cart</span>
            </div>

            <div className="flex items-center gap-1">
              <User className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">Raza</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            <span className="text-sm font-medium hover:text-primary cursor-pointer">All Products</span>
            <span className="text-sm hover:text-primary cursor-pointer">Rigid Signs</span>
            <span className="text-sm hover:text-primary cursor-pointer">Banners & Displays</span>
            <span className="text-sm hover:text-primary cursor-pointer">Decals & Magnets</span>
            <span className="text-sm hover:text-primary cursor-pointer">Trade Shows & Events</span>
            <span className="text-sm hover:text-primary cursor-pointer">Office Signs</span>
            <span className="text-sm hover:text-primary cursor-pointer">Outdoor Signs</span>
            <span className="text-sm hover:text-primary cursor-pointer">Photo & Decor</span>
            <span className="text-sm hover:text-primary cursor-pointer">Wedding & Parties</span>
          </div>
        </div>
      </nav>
    </header>
  );
};