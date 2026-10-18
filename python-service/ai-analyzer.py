import os
from dotenv import load_dotenv
from groq import Groq
import json
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

client =  Groq(api_key = api_key)


def analyze_resume(resume_text, job_description):

    prompt = f""" 
    You are an expert AI Resume Analyzer, ATS Resume Reviewer, and Career Advisor.

    Your task is to comprehensively analyze a candidate's resume against a given job description AND independently evaluate the overall quality of the resume.

    RESUME:
        {resume_text}

    JOB DESCRIPTION:
        {job_description}

    Return the following details:

    1. RESUME SKILLS
    - Identify technical and relevant professional skills explicitly supported by the resume.
    - Do not invent skills or infer proficiency without evidence.

    2. JOB REQUIREMENTS
    - Identify the skills and requirements requested in the job description.
    - For each requirement, return:
    - skill
     - importance: required, preferred, or not_specified
    - Classify a requirement as required or preferred only when the wording or context supports that classification.
    - If importance is unclear, use not_specified.
    - Do not invent importance levels.
    - Keep importance separate from the numerical scoring weight.
    - If multiple skills are requested without different importance levels, treat them as equally weighted for the ATS scoring policy.

    3. STRENGTHS
    - Identify the candidate's strengths relevant to the job.
    - Support each strength using evidence from the resume.
    - Consider relevant projects, experience, technical skills, achievements, and demonstrated problem-solving.

    4. MISSING SKILLS AND REQUIREMENTS
    - Identify job requirements that are not evidenced in the resume.
    - Use status "not_found_in_resume" rather than assuming the candidate does not possess the skill.
    - Distinguish missing evidence from an explicitly stated lack of experience.

    5. JOB-SPECIFIC SUGGESTIONS
    - Suggest actionable improvements to make the resume more relevant to the target job.
    - Recommend where relevant skills, projects, or experience could be highlighted.
    - Do not suggest adding skills or achievements the candidate cannot honestly support.

    6. WEAKNESSES AND GAPS
    - Identify weaknesses in the resume's evidence, content, clarity, and relevance to the job.
    - Explain why each issue matters.
    - Distinguish job-specific gaps from general resume-quality issues.
    - Do not make unsupported assumptions about the candidate.

    7. OVERALL RESUME QUALITY REVIEW
    Evaluate the resume independently of the job description.
    Review:
    - Content clarity and conciseness.
    - Grammar, spelling, and professional language.
    - Section completeness and organization.
    - Quality and relevance of projects and experience descriptions.
    - Whether bullet points clearly communicate actions, contributions, and outcomes.
    - Whether claims are vague, repetitive, unsupported, or difficult to understand.
    - Whether measurable impact is missing where it would be useful.
    - Whether the resume provides enough evidence for its stated skills and achievements.

    For every identified issue, explain the problem and provide a practical improvement.

    8. BULLET-POINT AND CONTENT IMPROVEMENTS
    - Identify weak, vague, repetitive, or unclear resume statements when present.
    - Return the original statement and a suggested improved version.
    - Preserve the candidate's actual meaning and evidence.
    - Do not fabricate metrics, results, responsibilities, tools, or achievements.
    - If quantitative impact would strengthen a statement but is unavailable, suggest what information the candidate could add if accurate.

    9. FORMATTING AND DESIGN REVIEW
    Evaluate visual formatting only to the extent supported by the supplied input.
    Review available evidence of:
    - Section hierarchy and ordering.
    - Readability and content density.
    - Heading consistency, spacing, and alignment.
    - Potential ATS parsing risks from complex layouts, tables, columns, graphics, or unusual formatting.
    - Visibility and organization of contact information and important sections.

    If only extracted plain text is provided, do not claim to have inspected visual design, colors, alignment, spacing, or layout. Instead, report that visual assessment requires the original PDF or image.
    Do not assume that a design choice is automatically an ATS problem; describe potential risks with appropriate uncertainty.

    10. PRIORITIZED IMPROVEMENT PLAN
    - Provide the most important 3–5 improvements in priority order.
    - Explain why each improvement matters.
    - Make recommendations specific and actionable.
    - Distinguish quick resume edits from improvements that require additional skills, projects, or experience.

    IMPORTANT RULES:
    - Use only information supported by the supplied resume and job description.
    - Never invent skills, qualifications, experience, projects, metrics, or achievements.
    - Do not treat every job requirement as essential unless the wording supports that classification.
    - Do not assume a skill is absent simply because it is not mentioned in the resume.
    - Keep job-match findings separate from overall resume-quality findings.
    - Do not calculate or invent the final ATS match percentage; the Python scoring module will calculate it.
    - Do not assign a numerical overall resume-quality score unless explicitly requested.
    - Be constructive, specific, honest, and professional.
    - Avoid generic suggestions that could apply to every resume.
    - If information is insufficient to evaluate a category, explicitly state that limitation.
    - Return valid JSON only, without Markdown fences or additional commentary.
    - Use consistent keys and data types in the JSON response.

    """
    response = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[
        {"role": "system", "content": "You are an expert resume analyzer."},
        {"role": "user", "content": prompt}
    ],
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