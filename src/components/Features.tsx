import { Card } from "@/components/ui/card";
import { Truck, Shield, Palette, Clock } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Make a Custom Sign",
    description: "Upload your own files or use our free design tool. You can even make a unique design with just a few clicks and receive even our sign printing within two to five business days."
  },
  {
    icon: Shield,
    title: "Design and Print Online", 
    description: "Make custom signs online using our free design tool. You can even make a unique design with just a few clicks and receive our sign printing right at your door."
  },
  {
    icon: Truck,
    title: "Customize Your Office",
    description: "Custom office signs are a powerful tool to organize your workspace and ensure a lasting impression on your visitors. Online digital office offers everything you need on the business."
  },
  {
    icon: Clock,
    title: "Show Your Personality",
    description: "Personal and Signs often give a great opportunity to express your character and add a splash of color to bland surfaces. Design stunning graphics with our feature-rich workplace on home to match your vision and values."
  }
];

export const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Ship Within USA and Canada section */}
        <Card className="mt-12 p-8 bg-muted/50">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ship Within USA and Canada</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Make a custom sign with just a few clicks and get it shipped to your door. Custom signs printing always gives to you our reliable. If we printed the sign throughout the entire process and will offer expert advice. Our Fast Our printing company around the clock to give you the best custom signs and services in the industry.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};