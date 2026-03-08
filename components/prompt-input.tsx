"use client";
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "./ui/input-group";
import { cn } from "@/lib/utils";
import { Spinner } from "./ui/spinner";
import { CornerDownLeftIcon } from "lucide-react";

const PromptInput: React.FC<{
  className?: string;
  promptText: string;
  setPromptText: (text: string) => void;
  isLoading?: boolean;
  onSubmit?: () => void;
  hideSubmitBtn?: boolean;
}> = ({ className, promptText, setPromptText, isLoading, onSubmit, hideSubmitBtn }) => {
  return (
    <>
      <div className="bg-background">
        <InputGroup className={cn("min-h-43 rounded-3xl bg-background", className && className)}>
          <InputGroupTextarea
            className="text-base! py-2.5!"
            placeholder="I want to design an app that ...."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
          />
          <InputGroupAddon align="block-end" className="flex items-center justify-end">
            {!hideSubmitBtn && (
              <InputGroupButton
                variant="default"
                className=""
                size="sm"
                disabled={!promptText.trim() || isLoading}
                onClick={() => onSubmit?.()}
              >
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    Design
                    <CornerDownLeftIcon className="size-4" />
                  </>
                )}
              </InputGroupButton>
            )}
          </InputGroupAddon>
        </InputGroup>
      </div>
    </>
  );
};

export default PromptInput;
