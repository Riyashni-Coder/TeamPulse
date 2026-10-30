@echo off
title TeamPulse HR Management
cd /d "%~dp0"
echo.
echo 
echo       TeamPulse HR Management
echo 
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js LTS from https://nodejs.org/
  pause
  exit /b 1
)
if not exist "server\node_modules" (
  echo Installing backend packages...
  call npm install --prefix server
  if errorlevel 1 goto error
)
if not exist "client\node_modules" (
  echo Installing frontend packages...
  call npm install --prefix client
  if errorlevel 1 goto error
)
if not exist "node_modules\concurrently" (
  call npm install
  if errorlevel 1 goto error
)
if not exist "server\.env" copy "server\.env.example" "server\.env" >nul
echo.
echo Starting API and website...
echo Website: http://localhost:5173
echo API:     http://localhost:5000/api/health
echo Keep this window open while using TeamPulse.
echo.
call npm run dev
pause
exit /b 0
:error
echo.
echo Installation failed. Check your internet connection and try again.
pause
