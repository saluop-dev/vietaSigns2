import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import aluminumSign from "@/assets/aluminum-warning-sign.jpg";
import acrylicSign from "@/assets/acrylic-sign.jpg";
import retractableBanner from "@/assets/retractable-banner.jpg";
import yardSign from "@/assets/yard-sign.jpg";

const products = [
  {
    id: 1,
    title: "Aluminum Signs",
    description: "Durable outdoor signage perfect for businesses",
    price: "$249",
    originalPrice: "$279.95",
    image: aluminumSign,
    badge: "Best Seller",
    badgeColor: "bg-accent-red"
  },
  {
    id: 2,
    title: "Acrylic Signs", 
    description: "Professional indoor displays with premium finish",
    price: "$159",
    originalPrice: "$189.95",
    image: acrylicSign,
    badge: "Popular",
    badgeColor: "bg-primary"
  },
  {
    id: 3,
    title: "Retractable Banners",
    description: "Portable displays for trade shows and events",
    price: "$179", 
    originalPrice: null,
    image: retractableBanner,
    badge: "New",
    badgeColor: "bg-green-500"
  },
  {
    id: 4,
    title: "Yard Signs",
    description: "Perfect for events, campaigns, and promotions",
    price: "$129",
    originalPrice: null,
    image: yardSign,
    badge: "Best Value",
    badgeColor: "bg-orange-500"
  },
  {
    id: 5,
    title: "Digital Signs",
    description: "Modern LED displays for dynamic content",
    price: "$549",
    originalPrice: "$649.95",
    image: aluminumSign,
    badge: "Premium",
    badgeColor: "bg-purple-500"
  },
  {
    id: 6,
    title: "Vinyl Banners",
    description: "Large format printing for maximum impact",
    price: "$89",
    originalPrice: "$109.95",
    image: retractableBanner,
    badge: "Sale",
    badgeColor: "bg-accent-red"
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Filter tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-muted rounded-lg p-1">
            <Button variant="ghost" size="sm" className="bg-primary text-primary-foreground">All Products</Button>
            <Button variant="ghost" size="sm">New Stock</Button>
            <Button variant="ghost" size="sm">Best Deals</Button>
            <Button variant="ghost" size="sm">Top Picks</Button>
            <Button variant="ghost" size="sm">Trending Products</Button>
            <Button variant="ghost" size="sm">Bestsellers</Button>
            <Button variant="ghost" size="sm">Most Rated</Button>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge className={`absolute top-2 left-2 ${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5 text-white fill-white/20 hover:fill-accent-red cursor-pointer" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    Customize
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};