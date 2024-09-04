// Footer.tsx
import { Button } from "@/components/ui/button";
import { Github, TwitterIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full flex flex-col items-center justify-center">
      <div className="w-3/4 mx-auto flex flex-col max-w-[1000px] md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-2">Nickollas Giordano Arroio</h2>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nickollas Giordano Arroio. All
            rights reserved.
          </p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="https://github.com/nickollasgarroio"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <Button variant="ghost" size="icon" className="text-white">
              <Github name="github" className="h-6 w-6" />
            </Button>
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <Button variant="ghost" size="icon" className="text-white">
              <TwitterIcon className="h-6 w-6" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/nickollasgiordanoarroio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="text-white">
              <LinkedinIcon className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
