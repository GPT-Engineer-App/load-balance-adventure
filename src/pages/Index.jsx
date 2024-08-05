import { useState, useEffect } from 'react';
import { Paw, Heart, Info, Search, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const DogBreeds = () => {
  const breeds = [
    { name: 'Labrador Retriever', trait: 'Friendly and outgoing' },
    { name: 'German Shepherd', trait: 'Intelligent and versatile' },
    { name: 'Golden Retriever', trait: 'Loyal and gentle' },
    { name: 'French Bulldog', trait: 'Adaptable and playful' },
    { name: 'Bulldog', trait: 'Calm and courageous' },
    { name: 'Poodle', trait: 'Elegant and intelligent' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breeds.map((breed, index) => (
        <motion.div
          key={breed.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
              <CardDescription>{breed.trait}</CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={`https://source.unsplash.com/400x300/?${breed.name.toLowerCase().replace(' ', '-')}`} 
                alt={breed.name} 
                className="w-full h-48 object-cover rounded-md mb-2"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const FunFacts = () => {
  const facts = [
    "Dogs have a sense of smell that's up to 100,000 times stronger than humans.",
    "The Basenji is the only breed of dog that can't bark, but they can yodel!",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "Greyhounds can run up to 45 miles per hour, making them the fastest dogs.",
    "The tallest dog ever recorded was a Great Dane named Zeus, who stood 44 inches tall.",
  ];

  return (
    <div className="space-y-4">
      {facts.map((fact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="flex items-center p-4">
              <Badge variant="secondary" className="mr-4">{index + 1}</Badge>
              <p>{fact}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const CareTips = () => {
  const tips = [
    { title: "Balanced Diet", description: "Provide a balanced diet appropriate for your dog's age, size, and activity level." },
    { title: "Regular Exercise", description: "Ensure your dog gets regular exercise through walks, playtime, and activities." },
    { title: "Veterinary Check-ups", description: "Schedule regular check-ups with a veterinarian for vaccinations and health screenings." },
    { title: "Grooming", description: "Groom your dog regularly, including brushing their coat and teeth." },
    { title: "Mental Stimulation", description: "Offer mental stimulation through training, puzzles, and interactive toys." },
  ];

  return (
    <div className="space-y-4">
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tip.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "All About Dogs | Your Canine Companion Guide";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-center text-blue-800">All About Dogs</h1>
          <p className="text-xl text-center text-gray-600 mb-8">Your ultimate guide to canine companions</p>
        </motion.div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for dog breeds, facts, or care tips..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds" className="text-lg"><Paw className="mr-2 h-5 w-5" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg"><Info className="mr-2 h-5 w-5" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care" className="text-lg"><Heart className="mr-2 h-5 w-5" /> Care Tips</TabsTrigger>
          </TabsList>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TabsContent value="breeds">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Popular Dog Breeds</CardTitle>
                  <CardDescription>Explore some of the most beloved dog breeds and their unique traits.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DogBreeds />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facts">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Fun Dog Facts</CardTitle>
                  <CardDescription>Discover interesting and surprising facts about our canine companions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FunFacts />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Dog Care Tips</CardTitle>
                  <CardDescription>Learn how to keep your furry friend happy, healthy, and thriving.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CareTips />
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
