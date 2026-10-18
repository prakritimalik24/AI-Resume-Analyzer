from ai_analyzer import analyze_resume
from ats_matcher import skill_matcher
from resume_read import extract_text

def connect(file_path , job_description):

    if not job_description or not job_description.strip():
        raise ValueError("Job description cannot be empty")

    resume_text = extract_text(file_path)

    if not resume_text or not resume_text.strip():
        raise ValueError("Could not extract text from resume")


    analysis = analyze_resume(resume_text , job_description)

    matcher_result = skill_matcher(analysis)

    final_result = {
        "analysis" : analysis,
        "ats_match" : matcher_result
    }


    return final_result
