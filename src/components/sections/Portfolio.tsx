
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Briefcase, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project in Development",
      description: "Currently working on an exciting project that will showcase my skills in Java full stack development. Stay tuned for updates!",
      status: "In Progress",
      category: "Full Stack",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["Java", "Spring Boot", "React", "Database"]
    },
    {
      id: 2,
      title: "Web Design Portfolio",
      description: "A collection of modern web design concepts and UI/UX explorations. Focusing on clean, minimalistic designs with bold accents.",
      status: "Planning",
      category: "Design",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["UI/UX", "Responsive", "Modern Design", "CSS"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Current projects and upcoming work showcasing my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-in-left">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'In Progress' 
                      ? 'bg-electric-blue text-white' 
                      : 'bg-electric-purple text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/90 dark:bg-black/90 rounded-full">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group"
                  disabled={project.status === 'Planning'}
                >
                  {project.status === 'In Progress' ? 'Coming Soon' : 'In Planning'}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-purple/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm actively working on exciting projects that will demonstrate my growing skills 
              in Java full stack development and web design. Check back regularly for updates!
            </p>
            <Button className="electric-gradient text-white hover:opacity-90">
              Follow My Progress
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
