import sys

def resolve_conflicts(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    state = 'normal' # 'normal', 'head', 'ours'
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('<<<<<<< HEAD'):
            state = 'head'
            continue
        elif stripped.startswith('======='):
            state = 'ours'
            continue
        elif stripped.startswith('>>>>>>>'):
            state = 'normal'
            continue
        
        if state == 'normal' or state == 'head':
            new_lines.append(line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

if __name__ == "__main__":
    resolve_conflicts(sys.argv[1])
