from fastapi import FastAPI , UploadFile , File , Form , HTTPException;
from pathlib import Path;
import os;
import tempfile;
from connector import connect;

app = FastAPI(
    title = "AI Resume Analyzer"
    description= "Analyse your resume against a job description"
    version= " 1.0.0"
)