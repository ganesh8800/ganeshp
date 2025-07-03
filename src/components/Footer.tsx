
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              GANESH P
            </h3>
            <p className="text-muted-foreground">
              Web Designer & Java Full Stack Developer
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by GANESH P</span>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} GANESH P. Ready to start my career journey.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
