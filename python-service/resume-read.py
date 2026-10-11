import pymupdf

def extractpdftext(file_path):
   text = ""

   with pymupdf.open(file_path) as pdf:
        for page in pdf:
            text = text + page.get_text()

   return text

result = extractpdftext("text.pdf")

print(result)