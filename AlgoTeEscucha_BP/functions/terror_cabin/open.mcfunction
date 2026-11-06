tag @s add cabin_open
fill ~7 ~6 ~4 ~7 ~6 ~8 air
setblock ~7 ~7 ~9 air
tellraw @a[r=18] {"rawtext":[{"text":"§8La madera cede. Una escalera baja a la cripta. §7El sello se debilita día con día. No toques la segunda palanca."}]}
playsound random.door_open @a[r=18] ~7 ~6 ~8 0.6 0.5
