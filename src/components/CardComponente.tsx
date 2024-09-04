import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import React from "react";

interface AboutMeCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  content: string;
  buttonText?: string;
  textTitle?: string;
  onButtonClick?: () => void;
  isTextLeft?: boolean; // New prop to control the layout
}

export const CardComponente: React.FC<AboutMeCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  content,
  buttonText,
  onButtonClick,
  textTitle,
  isTextLeft = true, // Default to text on the left
}) => {
  return (
    <Card className="w-2/3 self-center m-6 px-2 pb-6 min-w-[300px] max-md:w-full max-md:mx-0">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div
        className={`flex flex-row  max-md:m-2 max-md:flex-col  ${
          isTextLeft ? "" : "flex-row-reverse"
        } `}
      >
        {/* Container da Imagem */}
        <CardContent
          className={`w-1/2 border mx-2 p-0 rounded-sm overflow-hidden flex items-center justify-center 
            max-md:w-full max-md:mb-4 max-md:mx-0`}
        >
          <img
            src={imageSrc}
            alt={altText}
            className="w-auto h-full object-cover object-top rounded-sm"
          />
        </CardContent>

        {/* Container do Texto */}
        <div className="w-1/2 flex mx-2 max-md:w-full max-md:mx-0">
          <CardContent className="h-full p-6 border rounded-sm flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-black pb-4">{textTitle}</h1>
              <p dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            {buttonText && onButtonClick && (
              <Button
                variant="default"
                className="mt-6 self-center"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};
