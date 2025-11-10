import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const { message, mode } = req.body;

    const prompt = `
      You are Luminia — an AI companion who is energetic, funny, supportive,
      and motivational, with a calm, wise spiritual aura, Harvard-smart, and street-intelligent.
      Mode: ${mode}.
      User: ${message}
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });

    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI request failed" });
  }
}
