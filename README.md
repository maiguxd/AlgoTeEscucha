# Algo te escucha

Add-on de terror psicológico para **Minecraft Bedrock 1.21.50+** (incluye 1.22).

Creadores: **Yoimar** y **Johan**.

Una sola criatura original, `listener:the_listener`. Modelo 3D propio (no es un billboard ni una entidad vanilla retexturizada). Solo persigue si no la miras. Si la miras de frente, se detiene.

## Instalar

1. Descarga `AlgoTeEscucha_1.0.15.mcaddon` desde los Releases (o arma el pack con las carpetas de este repo).
2. Ábrelo con Minecraft. Importa los dos packs.
3. Actívalos juntos en un mundo de supervivencia o aventura.
4. No hace falta activar Beta APIs ni experimentos.

Si Minecraft dice que el pack ya existe, borra los packs viejos e importa este.

## Qué hace (1.0.15)

- Aparece de noche en lo oscuro. De día es raro; en cueva sale más.
- Si lo miras, se congela. Si le das la espalda, te sigue. A menos de ~36 bloques corre, por debajo del sprint.
- La primera vez que te alcanza: se oscurece todo, una voz dice «i see you», pega 4 corazones y desaparece.
- Después eso vuelve a pasar a veces. En cueva, un 30% más que arriba.
- De noche, en cueva o sitio cerrado y oscuro, la canción suena sí o sí. Entre el segundo 20 y el 30 hay un 40% de que él aparezca, y la música sigue.
- Los pasos de piedra no van seguidos: caen cada 10–20 segundos. Si lo miras, se cortan.
- Una vez por noche escribe tu nombre. Puede apagar una antorcha. Si intentas dormir y está cerca, te despierta.
- Abre puertas de madera. Evita lava, fuego y hoyos. Si lo empujas, la trampa sí puede funcionar.
- Textos en español e inglés. El juego elige el idioma del cliente.

## Estructura

- `AlgoTeEscucha_BP/` — behavior pack (entidad, ítem, textos, Script API)
- `AlgoTeEscucha_RP/` — resource pack (modelo, animaciones, texturas, sonidos)
- `LEEME.txt` — notas completas

La lógica está en `AlgoTeEscucha_BP/scripts/main.js` (`@minecraft/server` 1.16.0).

## Originalidad

Obra original de Yoimar y Johan. El modelo, las texturas, los sonidos, los textos y el código se hicieron para este proyecto. No es un retexture de una criatura vanilla ni usa recursos con copyright de terceros.

## 1.0.15
- Baja el umbral de presencia de 8 min a 2 min.
- Sube las chances de aparición (noche ~55%, cuevas de día ~22%).


## 1.0.15
- Spawn aleatorio entre todos los jugadores elegibles (no solo anfitrión).
- En casas aparece a 3 bloques detrás del jugador.
- Puede romper hasta 3 bloques (piedra, adoquín, tierra, etc.).
- A veces aparece de la nada y desaparece si te acercas.

## 1.0.15
- 60% de noche / 50% de día cada 2 minutos.
- Alta probabilidad de aparecer a 9 bloques detrás + sonido de rama rompiéndose.

## 1.0.15
- Aparece y desaparece cada ~5 min (entre 3.5 y 6.5, no fijo): 80% sí, 20% no.

## 1.0.15
- Modelo terror_skeleton (~4 bloques) con idle, caminar y ataque al golpear.
