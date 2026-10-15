import os
from dotenv import load_dotenv
from groq import Groq
import json
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

client =  Groq(api_key = api_key)


def analyze_resume(resume_text, job_description):

    prompt = f""" 
    You are an expert resume analyzer
    Analyse the resume againt the job description.

    RESUME:
    {resume_text}

    JOB DESCRIPTION:
    {job_description}

    Return these details:
    1.Resume skills: Identify technical skills explicitly supported by the resume text.

    2.Job requirements: Identify the skills and requirements requested in the job description.

    3.Classify a requirement as required or preferred only when the wording or context supports that classification.

    4.If the importance is unclear, use not_specified.

    5.Do not invent importance levels that the job description does not support.

    6.If multiple skills are requested without different importance levels, treat them as equally weighted for the ATS scoring policy.

    7.Strengths: Identify the candidate's strengths based on evidence in the resume that is relevant to the job.

    8.Missing skills: Identify job-required skills that are not evidenced in the resume. Do not assume the candidate lacks a skill simply because the resume does not mention it; describe it as not_found_in_resume.

    9.Suggestions: Provide specific, actionable improvements based on the resume and job description.

    10.Weaknesses or gaps: Identify gaps in the supplied resume evidence, not unsupported assumptions about the candidate.

    Important rules:

    Use only the information supported by the provided text.

    Never invent skills, qualifications, experience, or achievements.

    Do not treat every skill mentioned in a job description as essential unless the wording supports that classification.

    Keep importance separate from the scoring weight.

    Return valid JSON only, with no Markdown fences or extra commentary.

    Only use information supported by the provided text.
    Do not invent skills or experience.
    """
    response = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[
        {"role": "system", "content": "You are an expert resume analyzer."},
        {"role": "user", "content": prompt}
    ]
    response_format={"type": "json_object"}
    )

    result = response.choices[0].message.content
    return json.loads(result)

resume = "I know Python, Java and React."
job = "Looking for Python, SQL and React skills."

result = analyze_resume(resume, job)

print(result["resume_skills"])
print(result["job_requirements"])
print(result["missing_skills"]) 