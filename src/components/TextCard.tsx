// components/TextCard.js

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface TextCardProps {
  title: string;
  description: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const TextCard: React.FC<TextCardProps> = ({
  title,
  description,
  content,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Card className="w-2/3 self-center m-6 pb-6 min-w-[300px]">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex mx-6 max-md:flex-col">
        <div className="w-full flex max-md:w-full">
          <CardContent className="h-full p-6 border rounded-sm flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-black pb-4">Hello there!</h1>
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

export default TextCard;
