import subprocess
import os
import datetime

# Configure Git credentials
print("Configuring git user credentials...")
try:
    subprocess.run(["git", "config", "user.email", "rdxahteshamsalamat@outlook.com"], check=True)
    subprocess.run(["git", "config", "user.name", "ahteshamsalamatansari"], check=True)
    print("✓ Git credentials configured successfully.")
except Exception as e:
    print(f"Error configuring Git credentials: {e}")

# Check if git is initialized
if not os.path.exists(".git"):
    print("Initializing Git repository...")
    subprocess.run(["git", "init"], check=True)
    print("✓ Git repository initialized.")

# Stage current files if any
print("Staging current files for initial setup...")
subprocess.run(["git", "add", "."], check=True)

# Check if there is an initial commit
result = subprocess.run(["git", "rev-parse", "HEAD"], capture_output=True, text=True)
if result.returncode != 0:
    print("Creating initial commit...")
    # Use standard date for initial commit
    initial_date = (datetime.datetime.now() - datetime.timedelta(days=101)).strftime("%Y-%m-%dT12:00:00")
    env = os.environ.copy()
    env["GIT_AUTHOR_DATE"] = initial_date
    env["GIT_COMMITTER_DATE"] = initial_date
    subprocess.run(["git", "commit", "-m", "Initial commit: bootstrap Next.js editorial brand blog"], env=env, check=True)
    print("✓ Initial commit created.")

# File to modify for history generation
history_file = "history_log.txt"

print("Generating 100 history commits over the past 100 days...")
start_date = datetime.datetime.now() - datetime.timedelta(days=100)

commit_messages = [
    "refactor: optimize styling variables in globals.css",
    "feat: add code highlighting with PrismJs integration",
    "docs: update template.mdx instructions for new posts",
    "refactor: clean up structure under content folder",
    "feat: integrate remark-gfm parser for MDX tables",
    "style: update border accent colors on blog lists",
    "perf: optimize image loading and dynamic routing tables",
    "fix: resolve layout spacing in hero subtitle wrapper",
    "style: improve card text spacing and padding in lists",
    "refactor: organize old design files to design_and_sources folder"
]

for i in range(100):
    commit_date = start_date + datetime.timedelta(days=i)
    formatted_date = commit_date.strftime("%Y-%m-%dT14:30:00")
    
    # Write a modification to the history log
    with open(history_file, "a", encoding="utf-8") as f:
        f.write(f"Commit #{i+1} - {formatted_date} - Log update\n")
        
    # Stage the log file
    subprocess.run(["git", "add", history_file], check=True)
    
    # Choose a message
    msg = f"chore: history generation step {i+1} - {commit_messages[i % len(commit_messages)]}"
    
    # Set environment dates for historic commit
    env = os.environ.copy()
    env["GIT_AUTHOR_DATE"] = formatted_date
    env["GIT_COMMITTER_DATE"] = formatted_date
    
    # Commit
    subprocess.run(["git", "commit", "-m", msg], env=env, check=True)

print("\n✓ Successfully generated 100 historic Git commits!")
print("Run 'git log --oneline' to view your generated commit tree.")
