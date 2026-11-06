# Runs as the cabin corpse, at the structure origin. Once per cabin.
tag @s add cabin_released
execute positioned ~5.5 ~1.08 ~9.3 run event entity @e[type=terror:cabin_bound_creature,r=2,c=1] terror:release
setblock ~5 ~0 ~6 air
setblock ~5 ~0 ~7 air
summon listener:the_listener ~4.5 ~1 ~6.5
tag @e[type=listener:the_listener,x=~4.5,y=~1,z=~6.5,r=2,c=1] add cabin_freed
titleraw @a[x=~1,y=~1,z=~2,dx=9,dy=5,dz=9] title {"rawtext":[{"text":"lo has liberado..."}]}
titleraw @a[x=~1,y=~1,z=~2,dx=9,dy=5,dz=9] subtitle {"rawtext":[{"text":"ahora el silencio te perseguira"}]}
playsound ambient.cave @a[x=~1,y=~1,z=~2,dx=9,dy=5,dz=9] ~5 ~1 ~7 0.9 0.55
