import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Type, Image, Square, Circle, Palette, Download } from "lucide-react";

export const DesignTool = () => {
  const [selectedTool, setSelectedTool] = useState("text");
  const [canvasColor, setCanvasColor] = useState("#ffffff");

  const tools = [
    { id: "text", icon: Type, label: "Text" },
    { id: "image", icon: Image, label: "Image" },
    { id: "shape", icon: Square, label: "Shapes" },
    { id: "background", icon: Palette, label: "Background" }
  ];

  const signTemplates = [
    { id: 1, name: "Warning Sign", category: "Safety", preview: "🚨 WARNING" },
    { id: 2, name: "Business Hours", category: "Business", preview: "🕒 HOURS" },
    { id: 3, name: "For Sale", category: "Real Estate", preview: "🏠 FOR SALE" },
    { id: 4, name: "No Parking", category: "Traffic", preview: "🚫 NO PARKING" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Create Your Custom Design</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our professional design tool to create stunning custom signs. Choose from templates or start from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Templates Sidebar */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Templates</h3>
            <div className="space-y-3">
              {signTemplates.map((template) => (
                <div key={template.id} className="p-3 border rounded-lg hover:bg-muted cursor-pointer">
                  <div className="text-2xl mb-1">{template.preview}</div>
                  <div className="text-sm font-medium">{template.name}</div>
                  <Badge variant="secondary" className="text-xs">{template.category}</Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm">
              Browse All Templates
            </Button>
          </Card>

          {/* Design Canvas */}
          <div className="lg:col-span-2">
            <Card className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Design Canvas</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Undo</Button>
                  <Button variant="outline" size="sm">Redo</Button>
                </div>
              </div>
              
              {/* Canvas Area */}
              <div 
                className="w-full h-96 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: canvasColor }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">YOUR DESIGN</div>
                  <div className="text-muted-foreground">Click to add text, images, or shapes</div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-muted-foreground">
                  Canvas: 12" x 8" • 300 DPI
                </div>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Download Design
                </Button>
              </div>
            </Card>
          </div>

          {/* Tools Sidebar */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Design Tools</h3>
            
            {/* Tool Selection */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {tools.map((tool) => (
                <Button
                  key={tool.id}
                  variant={selectedTool === tool.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTool(tool.id)}
                  className="flex flex-col gap-1 h-12"
                >
                  <tool.icon className="w-4 h-4" />
                  <span className="text-xs">{tool.label}</span>
                </Button>
              ))}
            </div>

            {/* Tool Options */}
            <div className="space-y-4">
              {selectedTool === "text" && (
                <>
                  <div>
                    <label className="text-sm font-medium">Add Text</label>
                    <Input placeholder="Enter your text" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Font Family</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="arial">Arial</SelectItem>
                        <SelectItem value="helvetica">Helvetica</SelectItem>
                        <SelectItem value="times">Times New Roman</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Font Size</label>
                    <Input type="number" placeholder="24" className="mt-1" />
                  </div>
                </>
              )}

              {selectedTool === "background" && (
                <>
                  <div>
                    <label className="text-sm font-medium">Background Color</label>
                    <div className="flex gap-2 mt-1">
                      <Input 
                        type="color" 
                        value={canvasColor}
                        onChange={(e) => setCanvasColor(e.target.value)}
                        className="w-12 h-10 p-1"
                      />
                      <Input 
                        value={canvasColor}
                        onChange={(e) => setCanvasColor(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </>
              )}

              {selectedTool === "shape" && (
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm">
                    <Square className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Circle className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    ▲
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t">
              <Button className="w-full" size="sm">
                Add to Cart - $249.00
              </Button>
              <Button variant="outline" className="w-full mt-2" size="sm">
                Save Design
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};