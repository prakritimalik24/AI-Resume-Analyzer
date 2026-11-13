from ai_analyzer import analyze_resume
from ats_matcher import skill_matcher
from resume_read import extract_text

def connect(file_path, job_description):

    print("CONNECT FUNCTION STARTED", flush=True)

    if not job_description or not job_description.strip():
        raise ValueError("Job description cannot be empty")

    print("BEFORE TEXT EXTRACTION", flush=True)

    resume_text = extract_text(file_path)

    print("AFTER TEXT EXTRACTION", flush=True)
    print("EXTRACTED TEXT LENGTH:", len(resume_text or ""), flush=True)

    if not resume_text or not resume_text.strip():
        raise ValueError("Could not extract text from resume")

    print("BEFORE AI ANALYZER CALL", flush=True)

    analysis = analyze_resume(resume_text, job_description)

    print("AFTER AI ANALYZER CALL", flush=True)

    matcher_result = skill_matcher(analysis)

    return {
        "analysis": analysis,
        "ats_match": matcher_result
    }