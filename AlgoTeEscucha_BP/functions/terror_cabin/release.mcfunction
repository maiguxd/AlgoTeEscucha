# Once per cabin, when the player reaches the crypt. The bound entity plays the 3.3 s release.
tag @s add cabin_released
execute positioned ~5.5 ~1.08 ~9.3 run event entity @e[type=terror:cabin_bound_creature,r=2,c=1] terror:release
setblock ~5 ~0 ~6 air
setblock ~5 ~0 ~7 air
titleraw @a[x=~1,y=~1,z=~2,dx=9,dy=5,dz=9] title {"rawtext":[{"text":"lo has liberado..."}]}
titleraw @a[x=~1,y=~1,z=~2,dx=9,dy=5,dz=9] subtitle {"rawtext":[{"text":"ahora el silencio te perseguira"}]}
playsound random.anvil_break @a[x=~1,y=~1,z=~2,dx=9,dy=5,dz=9] ~5 ~3 ~9 0.55 0.6
playsound ambient.cave @a[x=~1,y=~1,z=~2,dx=9,dy=5,dz=9] ~5 ~1 ~7 0.8 0.55
