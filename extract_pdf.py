import fitz
import os
import json

pdf_path = r"public\societies\IEM Student's gymkhana final.pdf"
output_dir = r"public\events"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages: {doc.page_count}")

all_text = {}
image_info = []

for i, page in enumerate(doc):
    text = page.get_text()
    print(f"\n=== PAGE {i+1} ===")
    print(text)

    all_text[f"page_{i+1}"] = text

    image_list = page.get_images(full=True)
    for img_idx, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        img_filename = f"page{i+1}_img{img_idx+1}.{image_ext}"
        img_path = os.path.join(output_dir, img_filename)
        with open(img_path, "wb") as f:
            f.write(image_bytes)
        image_info.append({"page": i+1, "img_index": img_idx+1, "file": img_filename})
        print(f"  [IMG] Saved: {img_filename}")

print("\n=== IMAGE LIST ===")
print(json.dumps(image_info, indent=2))
