# RankAgile — Script de inicio rápido para desarrollo local
# Ejecutar desde PowerShell: .\start-dev.ps1

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

Write-Host ""
Write-Host "=== RankAgile Dev Server ===" -ForegroundColor Cyan

# Instalar dependencias si no existen
if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependencias raiz..." -ForegroundColor Yellow
    npm install
}
if (-not (Test-Path "frontend\node_modules")) {
    Write-Host "Instalando dependencias frontend..." -ForegroundColor Yellow
    Set-Location frontend; npm install; Set-Location $projectRoot
}
if (-not (Test-Path "api\node_modules")) {
    Write-Host "Instalando dependencias API..." -ForegroundColor Yellow
    Set-Location api; npm install; Set-Location $projectRoot
}

Write-Host ""
Write-Host "Iniciando API + Frontend..." -ForegroundColor Green
Write-Host "Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "API:      http://localhost:3001" -ForegroundColor White
Write-Host ""

npm run dev
