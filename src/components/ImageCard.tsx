// components/ImageCard.js

import { CardContent } from "@/components/ui/card";

interface ImageCardProps {
  imageSrc: string;
  altText: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, altText }) => {
  return (
    <CardContent className="w-1/2 border p-0 mr-2 rounded-sm overflow-hidden flex items-center justify-center max-md:w-full">
      <img
        src={imageSrc}
        alt={altText}
        className="w-auto h-full object-cover object-top rounded-sm"
      />
    </CardContent>
  );
};

export default ImageCard;
