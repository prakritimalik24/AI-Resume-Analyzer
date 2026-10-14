import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

client =  genai.Client(api_key = api_key)
response = client.models.generate_content(
     model = "gemini-3.8-flash",
     contents = "Explain what is an ats resume analyzer"
)

def analyze_resume(resume_text, job_description):

    prompt = f""" 
    You are an expert resume analyzer
    Analyse the resume againt the job description.

    RESUME:
    {resume_text}

    JOB DESCRIPTION:
    {job_description}

    Return these details:
    1. Skills found in the resume.
    2. Job requirements with importance:
    essential, preferred, or optional.
    3. Candidate's strengths based on the resume.
    4. Actionable suggestions to improve the resume.
    5. Skills missing in the resume and suggestions to improve them.
    6. Candidate's weeknesses based on the resume.

    Only use information supported by the provided text.
    Do not invent skills or experience.
    """
    pass

print(response.text)