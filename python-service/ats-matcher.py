def skill_matcher(analysis):

    resume_skills = {
         skill.lower().strip()
         for skill in analysis["resume_skills"]
      }

    job_requirements = {
             item["skill"].lower().strip()
             for item in analysis["job_requirements"]
          }

    matching_skills = resume_skills & job_requirements
    missing_skills = job_requirements - resume_skills

    matched = len(matching_skills)
    req_skills = len(job_requirements)

    if req_skills == 0 :
        matching_percent = 0 
    
    else:
        matching_percent = (matched / req_skills)*100


    return {
        "matching_percent": round(matching_percent, 2),
        "matching_skills": list(matching_skills),
        "missing_skills": list(missing_skills)
    }

