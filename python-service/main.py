from fastapi import FastAPI , UploadFile , File , Form , HTTPException;
from pathlib import Path;
import os;
import tempfile;
from connector import connect;

app = FastAPI(
    title = "AI Resume Analyzer",
    description= "Analyse your resume against a job description",
    version= " 1.0.0"
)

@app.post("/analyze")
async def analyze_resume_endpoint(
    resume : UploadFile = File(...),
    job_description : str = Form(...)
):
    if not job_description.strip():
        raise HTTPException(
            status_code=400,
            detail="Job description cannot be empty"
        )

    allowed_extensions = {".pdf" , ".png" ,".jpg" ,".jpeg"}
    extension = Path(resume.filename or " ").suffix.lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Only PDF , PNG , JPG and JPEG files are supported"
        )

    content = await resume.read()

    if not content:
        raise HTTPException(
            status_code=400,
            detail="Uploaded resume is empty"
        )

    if len(content) > 10 * 1024 * 1024:
        raise HTTPException(
            status_code=413,
            detail="Resume must be smaller than 10MB"
        ) 

    temp_path = None

    try:

        with tempfile.NamedTemporaryFile(
            delete=False,
            suffix=extension
        ) as temp_file:
            temp_file.write(content)
            temp_path = temp_file.name


        result = connect(temp_path , job_description)   

        return result


    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error)
        )

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Resume analysis failed."
        )

    finally:
        if temp_path and os.path.exists(temp_path):
            os.remove(temp_path)

        await resume.close()