import sys
import os

def resolve_conflicts(file_path):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return
        
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    state = 'normal' # 'normal', 'head', 'ours'
    conflicts_found = False
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('<<<<<<< HEAD'):
            state = 'head'
            conflicts_found = True
            continue
        elif stripped.startswith('======='):
            state = 'ours'
            continue
        elif stripped.startswith('>>>>>>>'):
            state = 'normal'
            continue
        
        if state == 'normal' or state == 'head':
            new_lines.append(line)
    
    if conflicts_found:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Resolved conflicts in: {file_path}")
    else:
        print(f"No conflicts found in: {file_path}")

if __name__ == "__main__":
    for path in sys.argv[1:]:
        resolve_conflicts(path)
