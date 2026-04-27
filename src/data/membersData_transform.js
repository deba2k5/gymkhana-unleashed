
import fs from 'fs';

const filePath = 'c:/Users/Debangshu05/Downloads/gymkhanav3.0/gymkhana-unleashed/src/data/membersData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update Member interface
content = content.replace(
  'export interface Member {',
  'export interface Member {\n  slug: string;\n  about?: string;\n  image?: string;\n  achievements?: string[];'
);

// 2. Helper to generate slug
const slugify = (name) => name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

// 3. Add slugs to all members
const nameRegex = /name:\s*"([^"]+)"/g;
content = content.replace(nameRegex, (match, name) => {
    const slug = slugify(name);
    return `name: "${name}", slug: "${slug}"`;
});

// 4. Add sample data for Surjyanshu Ghosh
content = content.replace(
    'name: "Surjyanshu Ghosh", slug: "surjyanshu-ghosh", dept: "B.TECH (CSE AI)", phone: "7439122770", email: "surjyanshuatwork@gmail.com"',
    'name: "Surjyanshu Ghosh", slug: "surjyanshu-ghosh", dept: "B.TECH (CSE AI)", phone: "7439122770", email: "surjyanshuatwork@gmail.com",\n      about: "As the General Secretary of IEM Gymkhana, Surjyanshu oversees the overall coordination and management of all student activities, events, and initiatives within the institute. He is a passionate leader dedicated to fostering a vibrant and inclusive campus culture.",\n      achievements: [\n        "Led the organization of IEMPACT 2024 with 5000+ attendees.",\n        "Introduced the Smart Makers Festival to promote innovation among students.",\n        "Streamlined the communication between different societies and the management.",\n        "Represented IEM at multiple national level leadership summits."\n      ]'
);

// 5. Add sample data for Sayantika Neogi
content = content.replace(
    'name: "Sayantika Neogi", slug: "sayantika-neogi", dept: "B.TECH (CSE)", phone: "9749125069", email: "sayantikaneogi22@gmail.com"',
    'name: "Sayantika Neogi", slug: "sayantika-neogi", dept: "B.TECH (CSE)", phone: "9749125069", email: "sayantikaneogi22@gmail.com",\n      about: "Sayantika is a dynamic leader serving as the Vice President of IEM Gymkhana. She plays a crucial role in supporting student welfare and ensuring the smooth execution of gymkhana operations.",\n      achievements: [\n        "Co-organized the IEM-UEM Kolkata Marathon with record participation.",\n        "Spearheaded the Anti-Ragging awareness campaign on campus.",\n        "Developed a more efficient system for student grievance redressal.",\n        "Coordinated with various student chapters for technical workshops."\n      ]'
);

fs.writeFileSync(filePath, content);
console.log('Updated membersData.ts successfully.');
