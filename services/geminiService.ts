
import { GoogleGenAI } from "@google/genai";

/**
 * Expert Indian engineering admission counselor service for SRM IST.
 * Follows strict @google/genai initialization and usage patterns.
 */
export const getCounselingResponse = async (query: string, userContext: any) => {
  // Initializing GoogleGenAI directly with process.env.API_KEY as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are an expert Indian engineering admission counselor specializing in SRM Institute of Science and Technology (SRMIST).
    User Query: ${query}
    User Context: ${JSON.stringify(userContext)}
    
    Guidelines:
    1. Focus on SRM Admission 2026 and SRMJEEE 2026.
    2. Provide data-driven advice about Kattankulathur (Main Campus), Ramapuram, Vadapalani, and Delhi NCR campuses.
    3. If the user asks about CSE, emphasize it's highly competitive.
    4. Be empathetic towards parents regarding fees (ROI focus).
    5. Subtly mention that while SRMJEEE is the main route, counseling help is available for those who miss out on high ranks.
    6. Keep the tone professional, helpful, and encouraging.
    7. Maximum 150 words.
  `;

  try {
    // Using gemini-3-flash-preview as recommended for basic/summarization tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });
    
    // Accessing .text as a property, not a method, as required.
    return response.text || "I'm having trouble connecting right now, but our human counselors can call you back! Would you like to schedule a call?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now, but our human counselors can call you back! Would you like to schedule a call?";
  }
};
