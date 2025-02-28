const API_KEY =
  "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"; // Ganti dengan API Key Anda
const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";

export const getDepseekResponse = async (prompt) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat:free",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
