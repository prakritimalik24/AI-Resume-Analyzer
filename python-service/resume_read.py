import pymupdf
from PIL import Image
import pytesseract

def extractpdftext(file_path):
   text = ""

   with pymupdf.open(file_path) as pdf:
         for page in pdf:
             text = text + page.get_text()

   return text


def extractimgtext(image_path):
   text = ""

   with Image.open(image_path) as image:
      text = pytesseract.image_to_string(image)

   return text



def extract_text(file_path):
      text = ""
      if file_path.lower().endswith((".pdf")):
         return extractpdftext(file_path)
      elif file_path.lower().endswith((".png", ".jpg", ".jpeg")):
         return extractimgtext(file_path)
      else:
          raise ValueError("Unsupported file type")    