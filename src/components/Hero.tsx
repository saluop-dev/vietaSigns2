import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transform Your Space With Custom Signs
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Elevate your brand with eye-catching displays that leave a lasting impression
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started →
            </Button>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 ml-8">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 h-32"></div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 h-24"></div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 h-24"></div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};