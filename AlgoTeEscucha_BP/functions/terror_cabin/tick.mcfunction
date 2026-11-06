execute as @e[type=terror:cabin_corpse,tag=!cabin_open] at @s positioned ~-4.5 ~-7 ~-5.5 if block ~7 ~8 ~9 minecraft:lever ["open_bit"=true] run function terror_cabin/open
execute as @e[type=terror:cabin_corpse,tag=!cabin_released] at @s positioned ~-4.5 ~-7 ~-5.5 if entity @a[x=~2,y=~1,z=~3,dx=6,dy=3,dz=7] run function terror_cabin/release
