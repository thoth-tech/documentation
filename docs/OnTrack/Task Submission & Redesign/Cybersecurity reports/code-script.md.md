# CODE SCRIPT

(Malware-detection Program)

Attached below is a basic code script of a malware-detection program that can be worked with to ensure that the additional files uploaded by students do not contain any suspicious or malicious content.

The code conducts a few checks to ensure the security of the files. The first check is checking if a file is an executable file with the “.exe” extension. If that is not the case, the code checks if the file is an executable file disguised as a different file type. If this does not occur to be the case, the code checks if the file contains or is very similar to any viruses that are recognised in a specific online database. Finally, the code checks the text in the document to ensure that there are no suspicious patterns that could be malicious.

**Code:**

- To work with file paths from pathlib import Path
- To import hashlib import hashlib
- This is to work with APIs (e.g. VirusTotal and Google Malicious URL databases) import requests
- To work with PDF files, e.g. extract text import PyPDF2
- To find pa erns in text import re

path = "Downloads/some_submission.py" is_malicious = do_all_checks(submission_path=path)

def do_all_checks(submission_path):

"""

Step 1:Check if the file itself could be malicious

Step 1a: Check if the path has a suspicious extension (e.g. '.exe') Step 1b: Check if the file is executable

Step 1c: Check if the file is a known virus (compare with a Virus Database API)

Step 2: Check if the content of the text has malicious code, or links (URLs)

Step 2a: Extract text from a PDF file

Step 2b: Check if the text has malicious code

Step 2c: Extract all the URLs in the PDF File

Step 2d: Chekc if the urls are known to be malicious (compare with a Malicious URL Database)

"""

- Step 1:Check if the file itself could be malicious step_1a = is_suspicious_file_extension(submission_path) step_1b = is_file_executable(submission_path)

step_1c = is_file_a_known_virus(submission_path)

- Assumes submission is a PDF
- Step 2a

text = extract_text_from_pdf(submission_path)

- Step 2b:

step_2b = find_malicious_code_in_text(text)

if step_1a or step_1b or step_1c or step_2b: is_malicious = True

else:

is_malicious = False

return is_malicious

def is_suspicious_file_extension(submission_path):

"""Checks if the path has a suspicious extension""" suspicious_extensions = [

".bat",

".com",

".vbs",

".vbe",

".js",

".jse",

".scr",

".hta",

".reg",

".lnk",

".exe",

".dll",

".cmd",

]

extension = Path(submission_path).suffix if extension.lower() in suspicious_extensions: return True

else:

return False

def is_file_executable(submission_path):

"""Opens the file in binary mode and reads the first two bytes.

The logic checks if the first two bytes are MZ. The first two bytes of an executable file are always MZ.

"""

``with open(submission_path, "rb") as file:

- Read the first 2 bytes of the file

first_two_bytes = file.read(2)

- Check if the first 2 bytes correspond executable files

if first_two_bytes == b"MZ": return True

else:

return False

def is_file_a_known_virus(submission_path):

"""Checks if the file's signature is in a well known database (VirusTotal.com). Checks if the file's hash is known to be malicious by querying VirusTotal.

"""

- Get the file's hash.

with open(submission_path, "rb") as f:

file_hash = hashlib.sha256(f.read()).hexdigest()

virus_db_url_query = (

"h ps://www.virustotal.com/vtapi/v2/file/report?resource={}".format(file\_hash) )

- Check if the file's hash is known to be malicious.

response = requests.get(virus_db_url_query)

if response.status_code == 200:

for result in response.json()["scans"]:

if result["result"] == "malicious":

return True

return False

def extract_text_from_pdf(submission_path): """Extact Text from a pdf file"""

with open(submission_path, "rb") as file:

pdf = PyPDF2.PdfFileReader(file)

text = ""

for page_num in range(pdf.getNumPages()): page = pdf.getPage(page_num)

text += page.extractText()

return text

def find_malicious_code_in_text(text):

- Define suspicious pa erns

python_pa erns = [

r"eval\(", # eval func on

r"exec\(", # exec func on

r"os\.system\(", # os.system func on

r"subprocess\.", # subprocess module

r"import\s+os", # os module import

r"import\s+pickle", # pickle module import ]

javascript_pa erns = [

r"script", # Opening script tag

r"document\.cookie", # Accessing cookies

r"Func on\(", # Func on constructor

r"execScript\(", # execScript func on

r"setTimeout\(", # setTimeout func on

r"document\.write", # Wri ng to the HTML document ]

sql_pa erns = [

r"(\s+|;)(drop|truncate|delete|update|insert)\s+table", # SQL destruc ve ac ons r"(\s+|;)exec(\s|\()", # SQL EXEC command

r"(\s+|;)xp_cmdshell", # SQL Server xp_cmdshell func on

r"(\s+|;)sleep\s\*\(", # SLEEP func on for me-based blind SQL injec on

]

all_pa erns = python_pa erns + javascript_pa erns + sql_pa erns

for pa ern in all_pa erns:

if re.search(pa ern, text): return True

return False
