import { Request, Response } from "express";
import { getGroqChatCompletion } from "..";

export const chatHandler = async (req: Request, res: Response) => {
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
  }