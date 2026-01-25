# Fix PowerShell Execution Policy

If you want to use PowerShell directly with npm, you need to change the execution policy.

## Option 1: Run PowerShell as Administrator (Recommended)

1. Right-click on PowerShell and select "Run as Administrator"
2. Run this command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y` when prompted
4. Close and reopen PowerShell

## Option 2: Bypass for Current Session Only

Run this in PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

Then run `npm run dev`

## Option 3: Use Command Prompt (cmd.exe)

Simply use Command Prompt instead of PowerShell - it doesn't have execution policy restrictions.

## Option 4: Use the Batch File

Double-click `start-dev.bat` in your project folder to start the dev server.
