param (
    [string]$Target = "cursor"
)

$Repo = "Emzyjeppp/devflow-rules"
$Branch = "main"
$RawBase = "https://raw.githubusercontent.com/$Repo/$Branch"
$Cwd = Get-Location

Write-Host "--------------------------------------------------"
Write-Host "DevFlow Rules - Windows PowerShell Installer"
Write-Host "--------------------------------------------------"
Write-Host "Target: $Target"
Write-Host "Destination: $Cwd"

function Download-DevFlowFile {
    param (
        [string]$SrcPath,
        [string]$DestPath
    )
    $Dir = Split-Path -Parent $DestPath
    if (-not (Test-Path $Dir)) {
        New-Item -ItemType Directory -Path $Dir -Force | Out-Null
    }
    $Uri = "$RawBase/$SrcPath"
    Invoke-RestMethod -Uri $Uri -OutFile $DestPath
}

switch ($Target.ToLower()) {
    "cursor" {
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".cursorrules")
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".cursor\rules\devflow.mdc")
        Write-Host "[OK] Cursor rules installed: .cursorrules and .cursor\rules\devflow.mdc"
    }
    "windsurf" {
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".windsurfrules")
        Write-Host "[OK] Windsurf rules installed: .windsurfrules"
    }
    "claude" {
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd "CLAUDE.md")
        Write-Host "[OK] Claude Code rules installed: CLAUDE.md"
    }
    "copilot" {
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".github\copilot-instructions.md")
        Write-Host "[OK] GitHub Copilot instructions installed: .github\copilot-instructions.md"
    }
    "cline" {
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".clinerules")
        Write-Host "[OK] Cline rules installed: .clinerules"
    }
    "all" {
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".cursorrules")
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".cursor\rules\devflow.mdc")
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".windsurfrules")
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd "CLAUDE.md")
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".github\copilot-instructions.md")
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".clinerules")
        Write-Host "[OK] All assistant rules installed."
    }
    default {
        Write-Host "[WARN] Unknown target: $Target. Defaulting to .cursorrules"
        Download-DevFlowFile "RULES.md" (Join-Path $Cwd ".cursorrules")
    }
}

Write-Host "[SUCCESS] DevFlow rules setup completed."
