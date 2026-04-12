import fitz

pdf_path = r"c:\Users\Debangshu05\Downloads\gymkhanav3.0\gymkhana-unleashed\public\societies\IEM Student's gymkhana final.pdf"
doc = fitz.open(pdf_path)
for i in range(28, doc.page_count):
    page = doc[i]
    text = page.get_text().strip()
    if text:
        print(f'=== PAGE {i+1} ===')
        print(text)
        print()
