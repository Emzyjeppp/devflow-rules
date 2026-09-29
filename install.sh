#!/usr/bin/env bash
set -e

REPO="Emzyjeppp/devflow-rules"
BRANCH="main"
RAW_BASE="https://raw.githubusercontent.com/${REPO}/${BRANCH}"

echo "--------------------------------------------------"
echo "DevFlow Rules - Installation Script"
echo "--------------------------------------------------"

TARGET="${1:-cursor}"
CWD="$(pwd)"

download_file() {
  local src_path="$1"
  local dest_path="$2"
  local dir_name
  dir_name="$(dirname "$dest_path")"
  mkdir -p "$dir_name"
  
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "${RAW_BASE}/${src_path}" -o "$dest_path"
  elif command -v wget >/dev/null 2>&1; then
    wget -qO "$dest_path" "${RAW_BASE}/${src_path}"
  else
    echo "[ERROR] Neither curl nor wget is available."
    exit 1
  fi
}

echo "Target: ${TARGET}"
echo "Destination: ${CWD}"

case "${TARGET}" in
  cursor)
    download_file "RULES.md" "${CWD}/.cursorrules"
    download_file "RULES.md" "${CWD}/.cursor/rules/devflow.mdc"
    echo "[OK] Cursor rules installed: .cursorrules and .cursor/rules/devflow.mdc"
    ;;
  windsurf)
    download_file "RULES.md" "${CWD}/.windsurfrules"
    echo "[OK] Windsurf rules installed: .windsurfrules"
    ;;
  claude)
    download_file "RULES.md" "${CWD}/CLAUDE.md"
    echo "[OK] Claude Code rules installed: CLAUDE.md"
    ;;
  copilot)
    download_file "RULES.md" "${CWD}/.github/copilot-instructions.md"
    echo "[OK] GitHub Copilot instructions installed: .github/copilot-instructions.md"
    ;;
  cline)
    download_file "RULES.md" "${CWD}/.clinerules"
    echo "[OK] Cline rules installed: .clinerules"
    ;;
  all)
    download_file "RULES.md" "${CWD}/.cursorrules"
    download_file "RULES.md" "${CWD}/.cursor/rules/devflow.mdc"
    download_file "RULES.md" "${CWD}/.windsurfrules"
    download_file "RULES.md" "${CWD}/CLAUDE.md"
    download_file "RULES.md" "${CWD}/.github/copilot-instructions.md"
    download_file "RULES.md" "${CWD}/.clinerules"
    echo "[OK] All assistant rules installed."
    ;;
  *)
    echo "[WARN] Unknown target: ${TARGET}. Defaulting to .cursorrules"
    download_file "RULES.md" "${CWD}/.cursorrules"
    ;;
esac

echo "[SUCCESS] DevFlow rules setup completed."
