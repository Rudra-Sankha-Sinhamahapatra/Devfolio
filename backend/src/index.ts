import Groq from "groq-sdk";
import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import { Baseprompt, prompt } from "./prompt";
import { basePrompt } from "./Baseprompt";
const app = express ()
dotenv.config()
app.use(express.json())
app.use(cors())


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface GroqCompletionResponse {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
}

export async function getGroqChatCompletion(messages:string): Promise<GroqCompletionResponse> {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role:"user",
          content: [Baseprompt,basePrompt].join("\n\n"),
        },
        {
          role: "system",
          content: prompt(),
        },
        {
          role: "user",
          content: messages,
        }
      ],
      
      model: "deepseek-r1-distill-llama-70b",
      max_tokens:10000,
      
    }).asResponse();
    // Read the response body as JSON
    const data = await response.json();
    // console.log("Parsed Response:", data);  // Log the parsed response

    return data as GroqCompletionResponse;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
}


app.post ("/chat",async (req,res)=>{
  const {messages} = req.body;
  try {
    const chatCompletion = await getGroqChatCompletion(messages);
    
    if (chatCompletion.choices && chatCompletion.choices[0]?.message?.content) {
      res.json({message: chatCompletion.choices[0].message.content});
    } else {
      res.json({message:"No valid response received. Response object may be malformed."});
    }
  } catch (error) {
    res.status(500).json({message:"Error fetching completion:", error});
  }
})

app.listen(3000,()=>{
  console.log("Server is running on port 3000")
})