# Contributing to DevFlow Rules

Thank you for your interest in contributing to DevFlow Rules. We welcome contributions that expand our rulesets, add useful engineering skills, and refine guidelines for AI coding assistants.

## Code of Conduct

All contributors are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure interactions remain respectful and professional.

## Contribution Workflow

1. **Fork and Clone**: Fork the repository to your GitHub account and clone it locally.
2. **Create a Branch**: Create a feature branch with a descriptive name (`git checkout -b feat/add-new-skill`). Do not use emojis in branch names.
3. **Make Changes**: Implement your skill, update rules, or refine documentation.
4. **Verify Standards**:
   - Ensure markdown files are properly formatted.
   - Run the no-emoji verification regex on changed files.
   - Test CLI command functionality if modifying `bin/cli.js` or installer scripts.
5. **Commit**: Write semantic commit messages following [skills/commit-nyancodeid/SKILL.md](skills/commit-nyancodeid/SKILL.md).
6. **Push and Open PR**: Push to your fork and submit a Pull Request against the `main` branch.

## Guidelines for Adding New Skills

When adding a new skill under `skills/<skill-name>/`:

1. **`SKILL.md` is Required**: Every skill folder must contain a `SKILL.md` file.
2. **YAML Frontmatter**: Include valid YAML frontmatter at the top:
   ```yaml
   ---
   name: your-skill-name
   description: Concise explanation of what this skill does and when to apply it.
   ---
   ```
3. **Actionable Instructions**: Structure the skill with clear principles, step-by-step workflows, and verification checklists.
4. **Self-Contained References**: If your skill references external concepts or templates, place them in a `references/` subfolder within your skill directory.
5. **Update Catalogs**: Add your new skill to `README.md`, `bin/cli.js`, and `docs/index.html`.

## Writing and Design Standards

- **Zero-Emoji Rule**: Never include emojis or decorative unicode symbols in documentation, code, commit messages, or file names.
- **Natural Language**: Follow `humanize-writing` standards. Avoid marketing jargon, artificial AI clichés, and em dashes (`—`).
- **Attribution**: If adapting ideas from open source projects, provide explicit attribution and links in the *Sources and Attribution* section of `README.md`.

## Commit Message Convention

Format all commit messages as:

```text
<type>(<scope>): <subject>

<body>
```

Examples:
- `feat(skills): add docker containerization skill`
- `fix(cli): resolve path resolution issue on windows`
- `docs(readme): add installation guide for neo-vim`
