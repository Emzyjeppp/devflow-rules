---
name: project-starter
description: Orchestrates and enforces the use of the project-starter template as the core foundation when building new web applications.
---

# Project Starter Foundation

This skill ensures that every new web project strictly follows the starter project foundation before any code is written. 

## Source Location
The single source of truth for the starter project is the standardized `project-starter` template. Users should clone or copy the template from the designated repository or template directory.

## Core Workflow

When invoked to start or plan a new web project, follow these exact steps:

### 1. Initialize Workspace
Copy the foundational markdown files and directory structure from the starter project into the new project workspace:
- `prd.md` (Product Requirements Document)
- `techstack.md` (Technology Stack & Architecture)
- `design.md` (UI/UX & System Design)
- `rules.md` (Project Principles and Conventions)
- `AGENTS.md` (Agent Roles and Automation Tasks)

### 2. Document First (Planning Phase)
Do not generate code immediately. First, fill out the copied documents:
- Detail the **requirements** in `prd.md`.
- Finalize the **technologies** and commands in `techstack.md`.
- Clarify the **design decisions** in `design.md`.

### 3. Adopt the 6 Core Principles
Enforce the following rules (R-01 to R-06) throughout the project lifecycle:
- **R-01**: Implementation must strictly follow documented requirements (FR, NFR).
- **R-02**: Choose the simplest solution that meets the needs. Justify any added complexity.
- **R-03**: Critical behavior must be verifiable. Ensure acceptance criteria and test steps are available.
- **R-04**: Maintain existing conventions and work. Avoid out-of-scope changes.
- **R-05**: Decisions and status reports must reflect reality, including assumptions, limitations, and failures.
- **R-06**: Protect data and credentials. Never commit or log secrets.

## Execution

Whenever the user asks to "build a new web project" or "initialize a starter", trigger this skill to ensure the foundation is solidly laid out before proceeding to code generation or UI development.
