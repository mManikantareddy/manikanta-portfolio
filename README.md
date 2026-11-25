# Gade Manikanta Reddy — Developer Portfolio

A responsive React and Vite portfolio featuring frontend projects, professional experience, skills, a DevOps learning journey, and a contact form.

## Run locally

1. Install Node.js (LTS recommended).
2. Open this project folder in VS Code or a terminal.
3. Install dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Personalize the portfolio

- Update your GitHub profile URL and resume path in `src/data/profile.js`. Leave `githubUrl` blank until you have a profile URL to publish.
- When your PDF is ready, put it at `public/resume.pdf` and set `resumeUrl` to `/resume.pdf` in `src/data/profile.js`. The resume button stays clearly disabled until then.
- Add real repository and live-demo URLs to the relevant entries in `src/data/projects.js`. Empty URLs are intentionally shown as unavailable rather than replaced with invented links.
- Edit skill categories and technologies in `src/data/skills.js`.
- Update the project descriptions and details in `src/data/projects.js`.
- The contact form validates its fields and opens the visitor’s email app with a prepared message; it does not send data to a server.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist`.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In [Vercel](https://vercel.com/), choose **Add New → Project** and import the repository.
3. Set the project root to the folder containing this `package.json` if your repository contains other folders.
4. Vercel detects Vite automatically. Confirm the build command is `npm run build` and the output directory is `dist`.
5. Select **Deploy**. Future pushes to the connected branch trigger new deployments.

You can also deploy from this project directory with the Vercel CLI:

```bash
npm install --global vercel
vercel
```
