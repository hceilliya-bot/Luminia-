README_VISUAL: Deploying to GitHub + Vercel (visual guide)
========================================================

Step A — Create a GitHub repo
1. Go to https://github.com and log in.
2. Click the + icon (top-right) -> New repository.
3. Name it `luminia` and set it Public or Private.
4. Upload the project files: click 'Add file' -> 'Upload files', then drag & drop the project folder contents.
5. Commit changes (Add a summary message like 'Initial commit').
(Visual cue: The green 'Code' button will show your repo link once created.)

Step B — Import repo to Vercel
1. Go to https://vercel.com and log in.
2. Click 'New Project' -> 'Import Git Repository'.
3. Choose the GitHub account and select the `luminia` repo.
4. In the 'Configure Project' screen, leave defaults and click 'Deploy'.
(Visual cue: Vercel shows a 'Deployment' page with build logs.)

Step C — Set Environment Variable
1. On the Vercel dashboard for your project, click 'Settings' -> 'Environment Variables'.
2. Add a new variable:
   - Name: OPENAI_API_KEY
   - Value: <your OpenAI API key>
3. Click 'Save'. Trigger a redeploy via 'Deployments' -> 'Redeploy' if needed.
(Visual cue: The variable appears in the list with a lock icon.)

Step D — Open your site
1. After deployment finishes, click the domain link on the project's main page.
2. Chat with Luminia!

Troubleshooting:
- If you get "AI request failed", check Vercel logs (Project -> Deployments -> View Logs).
- If responses are empty, verify OPENAI_API_KEY in Vercel and that your OpenAI account has usage enabled.
