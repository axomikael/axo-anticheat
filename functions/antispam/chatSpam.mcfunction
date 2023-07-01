scoreboard objectives add chatSpam dummy
scoreboard objectives add chatsSent dummy
scoreboard objectives add mute dummy
scoreboard objectives add time dummy

scoreboard players set @a[scores={chatSpam=10..}] chatSpam 0

ability @a[scores={mute=1..}] mute true
scoreboard players add @a[scores={mute=1..}] time 1
ability @a[scores={time=60..}] mute false
