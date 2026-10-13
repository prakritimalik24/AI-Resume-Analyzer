import pymupdf
from PIL import Image
import pytesseract

# def extractpdftext(file_path):
#    text = ""

#    with pymupdf.open(file_path) as pdf:
#         for page in pdf:
#             text = text + page.get_text()

#    return text

# result = extractpdftext("text.pdf")

# print(result)

def extractimgtext(image_path):
   text = ""

   with Image.open("python-service/image.png") as image:
      text = pytesseract.image_to_string(image)

   return text

result = extractimgtext("python-service/image.png")
print(result)