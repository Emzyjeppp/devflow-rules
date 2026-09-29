# DevFlow Rules

A collection of development rules and ready-to-use skills for AI coding assistants. Designed to build consistent web interfaces, keep code minimal and maintainable, and enforce disciplined git workflows.

This repository consolidates battle-tested practices from DealTech UI, Vibes-Plug, Ponytail, nyancodeid commit conventions, and Humanize Pro into a single, unified ruleset.

## Core Principles

1. **Concrete UI Components**: Adopt clear component hierarchies (elements, sections, pages) and adapt them to project-specific architectures.
2. **Phase-Driven Progression**: Orchestrate development across an 8-phase workflow from PRD specification to production release.
3. **Lean Solutions (YAGNI)**: Prioritize standard library functions and native platform capabilities before adding external dependencies.
4. **Structured Commit Messages**: Maintain conventional semantic commit formats with standard types, scopes, subjects, and clear change descriptions.
5. **Natural and Factual Language**: Eliminate artificial AI writing clichés and maintain precise, active, and factual technical communication.
6. **Zero-Emoji Discipline**: Avoid emojis and decorative symbols in code, user interfaces, commit messages, and documentation.

## Repository Structure

```text
devflow-rules/
|-- .gitignore
|-- LICENSE
|-- README.md
|-- RULES.md
`-- skills/
    |-- commit-nyancodeid/
    |   `-- SKILL.md
    |-- dealtech-ui/
    |   `-- SKILL.md
    |-- devflow-orchestrator/
    |   `-- SKILL.md
    |-- humanize-writing/
    |   |-- SKILL.md
    |   `-- references/
    |       |-- ai-tells.md
    |       `-- channels.md
    |-- no-emoji/
    |   |-- SKILL.md
    |   `-- references/
    |       `-- svg-icons.md
    `-- ponytail-lean/
        `-- SKILL.md
```

## Skills Catalog

| Skill | Description | Entry Point |
|---|---|---|
| `dealtech-ui` | Guidance on selecting and adapting concrete UI components based on element, section, and page hierarchies. | [skills/dealtech-ui/SKILL.md](skills/dealtech-ui/SKILL.md) |
| `devflow-orchestrator` | 8-phase development workflow orchestration from initial requirements (PRD) to release. | [skills/devflow-orchestrator/SKILL.md](skills/devflow-orchestrator/SKILL.md) |
| `ponytail-lean` | Anti-overengineering rules, YAGNI enforcement, and standard library prioritization. | [skills/ponytail-lean/SKILL.md](skills/ponytail-lean/SKILL.md) |
| `commit-nyancodeid` | Standardized Git commit message conventions adapted from nyancodeid guidelines. | [skills/commit-nyancodeid/SKILL.md](skills/commit-nyancodeid/SKILL.md) |
| `humanize-writing` | Natural, concise, and non-artificial writing guidelines for technical and UI communication. | [skills/humanize-writing/SKILL.md](skills/humanize-writing/SKILL.md) |
| `no-emoji` | Rules prohibiting decorative symbols and emojis, with inline SVG and text-badge alternatives. | [skills/no-emoji/SKILL.md](skills/no-emoji/SKILL.md) |

## Usage Guidelines

You can integrate these rules into your workflow through several methods depending on your development environment:

### 1. Manual Prompt Injection
Copy the contents of [RULES.md](RULES.md) or specific `SKILL.md` files directly into your AI coding assistant prompt when starting a task.

### 2. Project Rule Configuration (Cursor, Windsurf, Claude Code, Copilot)
Attach or reference [RULES.md](RULES.md) in your project instruction files:
- **Cursor**: Copy to `.cursorrules` or `.cursor/rules/`.
- **Windsurf**: Copy to `.windsurfrules`.
- **Claude Code**: Copy or link inside `CLAUDE.md`.
- **GitHub Copilot**: Place into `.github/copilot-instructions.md`.

### 3. Agentic Skill Directory
If your AI coding agent supports directory-based skill discovery (such as Antigravity or compatible agentic frameworks), copy the `skills/` folder into your custom skills directory.

> Note: This repository contains markdown-based rules and instructions. Reading or referencing these files does not automatically install runtime packages or external plugins.

## Prompt Examples

### Building a New Feature
```text
Apply the guidelines in RULES.md. Build a responsive user data table component with search filtering and pagination using Tailwind CSS. Follow ponytail-lean principles to keep the code minimal and no-emoji for all UI states.
```

### Composing a Commit Message
```text
Based on the current git diff, generate a commit message following skills/commit-nyancodeid/SKILL.md. Ensure proper type, scope, character limit, and no emojis.
```

### Polishing UI Copy
```text
Review the modal confirmation messages in this file according to skills/humanize-writing/SKILL.md. Make the text concise, direct, action-oriented, and free of em dashes or artificial filler words.
```

## Sources and Attribution

The rules and skills in this repository are adapted from the following open references:

- **DealTech UI**: Public UI component collection ([Deal-Tech/dealtech-ui-for-public-component](https://github.com/Deal-Tech/dealtech-ui-for-public-component)).
- **Vibes-Plug**: Multi-agent orchestration workflows by Roedy Rustam ([roedyrustam/vibes-plug](https://github.com/roedyrustam/vibes-plug)).
- **Ponytail**: Minimalist software engineering and anti-overengineering rules by Dietrich Gebert ([DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)).
- **nyancodeid Commit Guidelines**: Conventional commit message structure by nyancodeid ([Gist nyancodeid](https://gist.github.com/nyancodeid/63f19941c81252bb0cca9c14497cf9f7)).
- **Humanize Pro**: Natural language writing and AI-tell removal guide by msdanyg ([msdanyg/humanize-pro](https://github.com/msdanyg/humanize-pro)).
- **Zero-Emoji Discipline**: Standards for symbol-free interfaces and codebases.

## License

This repository is distributed under the [MIT](LICENSE) License.
