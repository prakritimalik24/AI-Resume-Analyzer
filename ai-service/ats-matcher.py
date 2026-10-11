r_skills = input("enter resume skills:").split()
j_skills = input("enter job skills:").split()




def skill_matcher(resume_skills , job_skills):
    resume_skills = {skill.lower() for skill in resume_skills}
    job_skills = {skill.lower() for skill in job_skills}

    matching_skills = resume_skills & job_skills
    missing_skills = job_skills - resume_skills

    matching_percent = len(matching_skills)/len(job_skills)*100

    if len(job_skills) == 0 :
        return 0 , matching_skills , missing_skills

   
    return matching_percent , matching_skills ,missing_skills


result = skill_matcher(r_skills,j_skills)
print(result)