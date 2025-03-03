import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const uploadedFile = formData.get("file") as File;

    if (!uploadedFile) {
      return NextResponse.json({ message: "Missing file" }, { status: 400 });
    }

    // Convert PDF to Base64
    const arrayBuffer = await uploadedFile.arrayBuffer();
    const pdfContentBase64 = Buffer.from(arrayBuffer).toString("base64");

    // Prepare data for Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
      Parse the resume and extract the following information in JSON format:
      - Name
      - Email
      - Phone
      - Github
      - LinkedIn
      - Skills
      - Experience
      - Education
      - Certifications
      - Awards
      - Achievements
      - Projects

      Return a valid JSON response without any markdown formatting.
    `;

    const response = await model.generateContent([
      {
        inlineData: {
          mimeType: "application/pdf",
          data: pdfContentBase64,
        },
      },
      { text: prompt }
    ]);

    let result = response.response.text(); // Await response correctly

    // **Fix: Remove Markdown-style formatting**
    result = result.replace(/```json/g, "").replace(/```/g, "").trim();

    // Parse into JSON safely
    const parsedData = JSON.parse(result);

    return NextResponse.json({ parsedData }, { status: 200 });

  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
