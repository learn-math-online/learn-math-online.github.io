setlocal EnableDelayedExpansion
set auau=1
REM 367179558
set auau2=1
:loop
if %auau%==58 goto exit
curl -O -J "https://5dd26350-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/dd59dcf6-eb11-429a-9ad7-16951e7be4a2/assets/teams/%auau%.xml"
set /a auau+=1
set /a auau2+=1
goto loop

:exit
