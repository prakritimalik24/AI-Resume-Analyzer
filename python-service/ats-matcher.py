def skill_matcher(analysis):

    resume_skills = {
         skill.lower().strip()
         for skill in analysis["resume_skills"]
      }

    weights = {
        "required": 2,
        "preferred": 1,
        "not_specified": 1
    }  

    job_skill_weights = {}

    for item in analysis.get("job_requirements" , []):
        if not isinstance(item , dict):
            continue

        skill = item.get("skill")


        if not isinstance(skill, str) or not skill.strip():
            continue

        skill = skill.lower().strip()
        importance = item.get("importance", "not_specified")

        if not isinstance(importance, str):
            importance = "not_specified"

        importance = importance.lower().strip()
        weight = weights.get(importance, 1)

        job_skill_weights[skill] = max(
            job_skill_weights.get(skill, 0),
            weight
        )

    job_skills = set(job_skill_weights.keys())

    matching_skills = resume_skills & job_skills
    missing_skills = job_skills - resume_skills

    total_weight = sum(job_skill_weights.values())

    matched_weight = sum(
        job_skill_weights[skill]
        for skill in matching_skills
    )

    if total_weight == 0:
        matching_percent = 0
    else:
        matching_percent = round(
            (matched_weight / total_weight) * 100, 2
        )

    return {
        "matching_percent": matching_percent,
        "matching_skills": sorted(matching_skills),
        "missing_skills": sorted(missing_skills),
        "matched_weight": matched_weight,
        "total_weight": total_weight
    }



    