import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.GPTAPI,
});

export const openai = new OpenAIApi(config);
