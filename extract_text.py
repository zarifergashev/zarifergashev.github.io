import PyPDF2

# Path to the PDF file
pdf_path = 'Resume-2.pdf'

# Open the PDF file
with open(pdf_path, 'rb') as file:
    # Create a PDF reader object
    pdf_reader = PyPDF2.PdfReader(file)
    
    # Initialize a variable to store text
    extracted_text = ''
    
    # Iterate through each page of the PDF
    for page in pdf_reader.pages:
        # Extract text from each page
        extracted_text += page.extract_text() + '\n'

# Save the extracted text to a file
with open('extracted_text.txt', 'w') as text_file:
    text_file.write(extracted_text)

print('Text extraction complete. Check extracted_text.txt for the output.')
