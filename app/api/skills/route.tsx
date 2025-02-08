import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Buffer } from "buffer";

const getGeminiResponse = async (
  input: string,
  pdfContent: { mime_type: string; data: string }[],
  prompt: string
) => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const generationConfig = {
    temperature: 0.7,
    top_p: 0.95,
    top_k: 40,
    max_output_tokens: 8192,
    response_mime_type: "text/plain",
  };
  try {
    const response = await model.generateContent(
      [input, pdfContent[0], prompt],
      generationConfig
    );
    return response.data.text;
  } catch (error: any) {
    console.error(
      "Error fetching Gemini response:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch Gemini response");
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const jobDescription = formData.get("jobDescription") as string;
    const uploadedFile = formData.get("file") as File;

    if (!uploadedFile) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    const arrayBuffer = await uploadedFile.arrayBuffer();
    const pdfContentBase64 = Buffer.from(arrayBuffer).toString("base64");
    const pdfParts = [
      {
        mime_type: "application/pdf",
        data: pdfContentBase64,
      },
    ];

    const prompt = `
      You are an experienced Technical Human Resource Manager. Review the provided resume against the job description. 
      Please share your professional evaluation on whether the candidate's profile aligns with the role. 
      Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements.
    `;

    const response = await getGeminiResponse(jobDescription, pdfParts, prompt);

    return NextResponse.json({ message: "Success", response }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: (err as Error).message }, { status: 500 });
  }
};
