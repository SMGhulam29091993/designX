"use server";

import { openRouter } from "@/lib/openRouter";
import { generateText } from "ai";

export const generateProjectName = async (prompt: string): Promise<string> => {
  try {
    const { text } = await generateText({
      model: openRouter.chat("google/gemini-2.5-flash-lite"),
      system: `
                You are an AI assisstant that generates very very short project name based on the user's prompt.
                - Keep it under 5 words.
                - Capitalize words appropriately.
                - Do not include special characters.
            `,
      prompt: prompt,
    });
    return text?.trim() || "Untitled Project";
  } catch (error) {
    console.log("Error generating project name:", error);
    return "Untitled Project";
  }
};
