function nickname/steve
function nickname/null

tag @r add kick_s
tag @a remove kick_s

scoreboard objectives add kick dummy
scoreboard players add @a kick 0

gamerule sendcommandfeedback false
gamerule commandblockoutput false

tp @a[tag=kick] 0 1000 0
gamemode spectator @a[tag=kick]
tellraw @a[tag=kick] {"rawtext":[{"text":"§l[§eAxO§r§l] §cPls change nickname!"}]}
ability @a[tag=kick] mute true
title @a[tag=kick] title §l§c-§l§r
title @a[tag=kick] subtitle §l§cCHANGE NICKNAME
