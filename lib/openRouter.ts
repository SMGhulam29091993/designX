import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const openRouter = createOpenRouter({
  apiKey: process.env.OPEN_ROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});
