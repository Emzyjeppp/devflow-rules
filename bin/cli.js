#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT_DIR = path.resolve(__dirname, '..');
const RULES_SRC = path.join(ROOT_DIR, 'RULES.md');
const SKILLS_SRC = path.join(ROOT_DIR, 'skills');

function printBanner() {
  console.log('--------------------------------------------------');
  console.log('DevFlow Rules - AI Coding Assistant Rules Setup');
  console.log('--------------------------------------------------');
}

function printHelp() {
  printBanner();
  console.log('Usage:');
  console.log('  npx devflow-rules <command> [options]\n');
  console.log('Commands:');
  console.log('  init                  Install rules into current project');
  console.log('  list                  List all available skills');
  console.log('  add <skill>           Install a specific skill to current project');
  console.log('  help                  Show this help message\n');
  console.log('Options for init:');
  console.log('  --target=<assistant>  Target assistant (cursor, windsurf, claude, copilot, agy, cline, all)');
  console.log('  --all                 Install configurations for all supported tools');
  console.log('  --copy-skills         Also copy the entire skills/ folder to local project\n');
  console.log('Examples:');
  console.log('  npx devflow-rules init --target=cursor');
  console.log('  npx devflow-rules init --all');
  console.log('  npx devflow-rules add dealtech-ui');
}

function readRulesContent() {
  if (!fs.existsSync(RULES_SRC)) {
    console.error('[ERROR] RULES.md not found in package root.');
    process.exit(1);
  }
  return fs.readFileSync(RULES_SRC, 'utf8');
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    ensureDir(dest);
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
  }
}

function installTarget(target, cwd, rulesContent) {
  switch (target.toLowerCase()) {
    case 'cursor': {
      const cursorRulesFile = path.join(cwd, '.cursorrules');
      fs.writeFileSync(cursorRulesFile, rulesContent, 'utf8');
      
      const cursorRulesDir = path.join(cwd, '.cursor', 'rules');
      ensureDir(cursorRulesDir);
      const mdcFile = path.join(cursorRulesDir, 'devflow.mdc');
      const mdcContent = '---\ndescription: DevFlow engineering rules and best practices\nglobs: *\n---\n\n' + rulesContent;
      fs.writeFileSync(mdcFile, mdcContent, 'utf8');
      
      console.log('[OK] Installed Cursor rules: .cursorrules and .cursor/rules/devflow.mdc');
      break;
    }
    case 'windsurf': {
      const windsurfFile = path.join(cwd, '.windsurfrules');
      fs.writeFileSync(windsurfFile, rulesContent, 'utf8');
      console.log('[OK] Installed Windsurf rules: .windsurfrules');
      break;
    }
    case 'claude':
    case 'claudecode': {
      const claudeFile = path.join(cwd, 'CLAUDE.md');
      fs.writeFileSync(claudeFile, rulesContent, 'utf8');
      console.log('[OK] Installed Claude Code rules: CLAUDE.md');
      break;
    }
    case 'copilot': {
      const copilotDir = path.join(cwd, '.github');
      ensureDir(copilotDir);
      const copilotFile = path.join(copilotDir, 'copilot-instructions.md');
      fs.writeFileSync(copilotFile, rulesContent, 'utf8');
      console.log('[OK] Installed GitHub Copilot instructions: .github/copilot-instructions.md');
      break;
    }
    case 'cline':
    case 'roo': {
      const clineFile = path.join(cwd, '.clinerules');
      fs.writeFileSync(clineFile, rulesContent, 'utf8');
      console.log('[OK] Installed Cline/Roo-Code rules: .clinerules');
      break;
    }
    case 'agy':
    case 'antigravity': {
      const agySkillsDir = path.join(cwd, '.agent', 'skills');
      ensureDir(agySkillsDir);
      copyRecursive(SKILLS_SRC, agySkillsDir);
      console.log('[OK] Installed Antigravity skills: .agent/skills/');
      break;
    }
    default: {
      console.log(`[WARN] Unknown target: ${target}`);
    }
  }
}

function listSkills() {
  printBanner();
  console.log('Available Skills in devflow-rules:\n');
  if (!fs.existsSync(SKILLS_SRC)) {
    console.log('No skills directory found.');
    return;
  }
  const skills = fs.readdirSync(SKILLS_SRC, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const skill of skills) {
    const skillMd = path.join(SKILLS_SRC, skill, 'SKILL.md');
    let desc = 'No description';
    if (fs.existsSync(skillMd)) {
      const content = fs.readFileSync(skillMd, 'utf8');
      const match = content.match(/description:\s*([^\r\n]+)/);
      if (match) {
        desc = match[1].trim();
      }
    }
    console.log(`- ${skill}:`);
    console.log(`    ${desc}`);
  }
  console.log('\nInstall individual skill: npx devflow-rules add <skill-name>');
}

function addSkill(skillName, cwd) {
  const targetSkillDir = path.join(SKILLS_SRC, skillName);
  if (!fs.existsSync(targetSkillDir)) {
    console.error(`[ERROR] Skill "${skillName}" not found.`);
    listSkills();
    process.exit(1);
  }
  const destDir = path.join(cwd, 'skills', skillName);
  copyRecursive(targetSkillDir, destDir);
  console.log(`[OK] Installed skill "${skillName}" to ${destDir}`);
}

async function runInteractiveInit(cwd, rulesContent) {
  printBanner();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (q) => new Promise(res => rl.question(q, res));

  console.log('Select target assistants to configure in this project:\n');
  console.log('1) All supported tools (Cursor, Windsurf, Claude Code, Copilot, Cline, Antigravity)');
  console.log('2) Cursor (.cursorrules & .cursor/rules/devflow.mdc)');
  console.log('3) Windsurf (.windsurfrules)');
  console.log('4) Claude Code (CLAUDE.md)');
  console.log('5) GitHub Copilot (.github/copilot-instructions.md)');
  console.log('6) Cline / Roo-Code (.clinerules)');
  console.log('7) Antigravity / Agentic Skills (.agent/skills/)\n');

  const answer = (await question('Enter choice [1-7] (default 1): ')).trim() || '1';
  rl.close();

  console.log('\nApplying configurations...');
  if (answer === '1') {
    const targets = ['cursor', 'windsurf', 'claude', 'copilot', 'cline', 'agy'];
    for (const t of targets) installTarget(t, cwd, rulesContent);
  } else if (answer === '2') {
    installTarget('cursor', cwd, rulesContent);
  } else if (answer === '3') {
    installTarget('windsurf', cwd, rulesContent);
  } else if (answer === '4') {
    installTarget('claude', cwd, rulesContent);
  } else if (answer === '5') {
    installTarget('copilot', cwd, rulesContent);
  } else if (answer === '6') {
    installTarget('cline', cwd, rulesContent);
  } else if (answer === '7') {
    installTarget('agy', cwd, rulesContent);
  } else {
    console.log('[WARN] Invalid selection. Installing all.');
    const targets = ['cursor', 'windsurf', 'claude', 'copilot', 'cline', 'agy'];
    for (const t of targets) installTarget(t, cwd, rulesContent);
  }

  console.log('\n[SUCCESS] DevFlow rules setup completed.');
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';
  const cwd = process.cwd();

  if (command === 'help' || args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }

  if (command === 'list') {
    listSkills();
    return;
  }

  if (command === 'add') {
    const skillName = args[1];
    if (!skillName) {
      console.error('[ERROR] Missing skill name. Usage: npx devflow-rules add <skill-name>');
      process.exit(1);
    }
    addSkill(skillName, cwd);
    return;
  }

  if (command === 'init') {
    const rulesContent = readRulesContent();
    const targetArg = args.find(a => a.startsWith('--target='));
    const isAll = args.includes('--all');
    const copySkills = args.includes('--copy-skills');

    if (isAll) {
      const targets = ['cursor', 'windsurf', 'claude', 'copilot', 'cline', 'agy'];
      for (const t of targets) installTarget(t, cwd, rulesContent);
      if (copySkills) copyRecursive(SKILLS_SRC, path.join(cwd, 'skills'));
      console.log('\n[SUCCESS] All targets configured successfully.');
      return;
    }

    if (targetArg) {
      const target = targetArg.split('=')[1];
      if (target === 'all') {
        const targets = ['cursor', 'windsurf', 'claude', 'copilot', 'cline', 'agy'];
        for (const t of targets) installTarget(t, cwd, rulesContent);
      } else {
        installTarget(target, cwd, rulesContent);
      }
      if (copySkills) copyRecursive(SKILLS_SRC, path.join(cwd, 'skills'));
      console.log('\n[SUCCESS] Target configuration completed.');
      return;
    }

    await runInteractiveInit(cwd, rulesContent);
    if (copySkills) copyRecursive(SKILLS_SRC, path.join(cwd, 'skills'));
    return;
  }

  console.error(`[ERROR] Unknown command: ${command}`);
  printHelp();
  process.exit(1);
}

main().catch(err => {
  console.error('[ERROR]', err);
  process.exit(1);
});
