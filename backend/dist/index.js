"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroqChatCompletion = getGroqChatCompletion;
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const prompt_1 = require("./prompt");
const Baseprompt_1 = require("./Baseprompt");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
const groq = new groq_sdk_1.default({ apiKey: process.env.GROQ_API_KEY });
function getGroqChatCompletion(messages) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield groq.chat.completions.create({
                messages: [
                    {
                        role: "user",
                        content: [prompt_1.Baseprompt, Baseprompt_1.basePrompt].join("\n\n"),
                    },
                    {
                        role: "system",
                        content: (0, prompt_1.prompt)(),
                    },
                    {
                        role: "user",
                        content: messages,
                    }
                ],
                model: "deepseek-r1-distill-llama-70b",
                max_tokens: 8000,
            }).asResponse();
            // Read the response body as JSON
            const data = yield response.json();
            // console.log("Parsed Response:", data);  // Log the parsed response
            return data;
        }
        catch (error) {
            console.error("Error during API call:", error);
            throw error;
        }
    });
}
app.post("/chat", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { messages } = req.body;
    try {
        const chatCompletion = yield getGroqChatCompletion(messages);
        if (chatCompletion.choices && ((_b = (_a = chatCompletion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content)) {
            res.json({ message: chatCompletion.choices[0].message.content });
        }
        else {
            res.json({ message: "No valid response received. Response object may be malformed." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching completion:", error });
    }
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
