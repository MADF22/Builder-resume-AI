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
