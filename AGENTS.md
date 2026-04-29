# AGENTS.md — Personal Portfolio Website

## Project purpose

This project is a personal portfolio / CV website for Ori Dagan.

The website should present Ori professionally for LinkedIn, job opportunities, networking, and personal credibility. It should communicate practical experience at the intersection of business, technology, education, no-code/low-code tools, AI-assisted workflows, and digital transformation.

This is a real project, but not a high-risk production system. Treat it as important enough to protect from careless changes, but suitable for learning and iteration.

## User context

Ori is a non-technical but highly practical user with experience in:
- No-code and low-code tools
- Glide
- Google Sheets as a structured data source
- n8n / Make-style automation thinking
- Vercel-style deployment concepts
- AI-assisted coding workflows
- Product thinking, feature validation, and workflow design
- Internal tools, dashboards, permissions flows, and operational systems

Ori is not a professional software developer and is learning to use Codex safely and intelligently. Explain meaningful technical decisions before making them.

## Core working principle

Lead with the concept, then the action.

Before meaningful edits:
1. Restate the objective in practical terms.
2. Explain the current structure of the project.
3. Identify the files you plan to modify.
4. Explain why those files need to change.
5. Wait for approval unless the requested change is explicitly small and low-risk.

After edits:
1. Summarize the diff in plain English.
2. Explain how to test the result locally.
3. Explain what to inspect before committing.
4. Mention any assumptions made.

## Content accuracy rules

This is a CV / portfolio website. Accuracy matters.

Do not invent:
- Job titles
- Dates
- Education details
- Achievements
- Metrics
- Technical skills
- Projects
- Certifications
- Client names
- Employer claims
- Personal contact details

If information is missing, use a clear placeholder or ask for the missing detail.

Do not exaggerate Ori’s technical background. Present him as a practical builder/operator using no-code, low-code, AI tools, automation thinking, and product judgment. Do not describe him as a software engineer unless the existing content already does so and Ori approves it.

## Personal positioning

The site should position Ori as:
- Practical
- Technologically curious
- Product-minded
- Operationally strong
- Comfortable bridging non-technical users and technical systems
- Interested in AI, automation, no-code/low-code, internal tools, and digital transformation

Preferred tone:
- Professional
- Clear
- Direct
- Human
- Not exaggerated
- Not corporate-generic
- Not buzzword-heavy

Avoid:
- Startup hype language
- Fake authority
- Overly polished but empty phrasing
- Claims that sound senior beyond the evidence
- Generic “passionate about innovation” wording unless grounded in real examples

## Design direction

The website should feel:
- Clean
- Modern
- Trustworthy
- Practical
- Easy to skim
- Suitable for LinkedIn visitors, recruiters, colleagues, and professional contacts

Prioritize:
- Clear hierarchy
- Strong first impression
- Readable typography
- Good mobile layout
- Fast loading
- Accessible contrast
- Simple navigation
- Clear calls to action

Avoid:
- Heavy animations
- Over-designed effects
- Unnecessary complexity
- Large visual changes without approval
- Adding new design systems or UI libraries unless explicitly approved

## Technical rules

First inspect the existing stack before proposing changes.

Do not migrate frameworks or restructure the project unless explicitly asked.

Do not add dependencies without approval.

Do not run install commands without approval.

Do not change deployment configuration without approval.

Do not add analytics, trackers, cookies, external forms, or third-party scripts without approval.

Do not introduce backend code unless explicitly requested.

Prefer small, reviewable changes.

Preserve the existing project structure unless there is a clear reason to change it.

## Privacy and security rules

Do not add sensitive personal information.

Do not expose private phone numbers, addresses, IDs, credentials, API keys, tokens, or private school/student data.

If contact details are needed, use only details Ori explicitly provides or existing approved content.

Do not include real student data, school-internal data, or private operational details.

## Git workflow

Before making changes, check the current Git state if possible.

After making changes, explain:
- Which files changed
- What changed in each file
- Whether the change affects content, styling, behavior, dependencies, or deployment

Use Git as the review layer. Do not assume the change is accepted until Ori reviews the diff.

## Testing expectations

For simple static changes:
- Explain how to open or run the site locally.
- Check desktop and mobile layout if possible.
- Verify that links and navigation still work.

For projects with package scripts:
- Inspect package.json first.
- Use existing scripts only.
- Do not create new scripts unless needed.
- Ask before installing packages.

## First recommended task for this project

Start by auditing the current website.

Do not edit files yet.

Produce:
1. A plain-English explanation of the current project structure.
2. The likely tech stack.
3. What the website currently communicates about Ori.
4. What feels outdated, weak, unclear, or generic.
5. A prioritized improvement plan.
6. The safest first small change.