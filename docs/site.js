// Algo te escucha: la portada juega con la regla del add-on.
// El cursor (o el dedo) es una linterna. Si la criatura queda iluminada, no se
// mueve. Si la dejas a oscuras, se acerca un paso. Al cuarto paso: «i see you».
(function () {
  "use strict";

  var stage = document.querySelector("[data-stage]");
  if (!stage) return;
  var frames = Array.prototype.slice.call(stage.querySelectorAll("[data-creature] img"));
  var caught = stage.querySelector("[data-caught]");
  var hint = document.querySelector("[data-hint]");
  var soundBtn = document.querySelector("[data-sound]");
  var song = document.querySelector("[data-song]");
  var scream = document.querySelector("[data-iseeyou]");

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var touch = window.matchMedia("(hover: none)").matches;

  if (touch && hint) hint.textContent = "Mantén el dedo sobre él. Si lo sueltas, se acerca.";

  // ----- Sonido opcional ------------------------------------------------------
  var soundOn = false;
  if (soundBtn && song) {
    soundBtn.addEventListener("click", function () {
      soundOn = !soundOn;
      soundBtn.setAttribute("aria-pressed", String(soundOn));
      soundBtn.textContent = soundOn ? "Silenciar" : "Activar sonido";
      if (soundOn) {
        song.volume = 0.55;
        var p = song.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        song.pause();
      }
    });
  }

  // Con movimiento reducido: la criatura queda quieta y sin sustos.
  if (reduced) return;

  // Dónde está la cabeza de la criatura en cada imagen (fracción del ancho y alto).
  var HEAD = [
    { u: 0.70, v: 0.40, r: 0.06 },
    { u: 0.70, v: 0.42, r: 0.08 },
    { u: 0.72, v: 0.36, r: 0.12 },
    { u: 0.76, v: 0.38, r: 0.18 },
  ];
  var IMG_W = 1920, IMG_H = 1080, POS_X = 0.72, POS_Y = 0.5;
  var STEP_MS = 2200;

  var step = 0;
  var dark = 0;
  var pausedUntil = 0;
  var awake = false; // no empieza hasta que mueves la linterna
  var visible = true;
  var lamp = null; // posición de la linterna en px, o null si no hay
  var last = performance.now();

  function show(n) {
    step = n;
    for (var i = 0; i < frames.length; i++) frames[i].classList.toggle("is-on", i === n);
  }

  // Pasa un punto de la imagen (u, v) a la pantalla, teniendo en cuenta object-fit: cover.
  function toStage(u, v) {
    var W = stage.clientWidth, H = stage.clientHeight;
    var s = Math.max(W / IMG_W, H / IMG_H);
    var dw = IMG_W * s, dh = IMG_H * s;
    return { x: (W - dw) * POS_X + u * dw, y: (H - dh) * POS_Y + v * dh, s: dw };
  }

  function setLamp(x, y) {
    lamp = { x: x, y: y };
    stage.style.setProperty("--x", x + "px");
    stage.style.setProperty("--y", y + "px");
  }

  function dropLamp() {
    lamp = null;
    stage.style.removeProperty("--x");
    stage.style.removeProperty("--y");
  }

  function lit() {
    if (!lamp) return false;
    var h = HEAD[step];
    var p = toStage(h.u, h.v);
    var dx = lamp.x - p.x, dy = lamp.y - p.y;
    var reach = Math.max(70, h.r * p.s);
    return dx * dx + dy * dy < reach * reach;
  }

  function catchYou(now) {
    caught.classList.add("is-on");
    if (soundOn && scream) {
      scream.currentTime = 0;
      var p = scream.play();
      if (p && p.catch) p.catch(function () {});
    }
    pausedUntil = now + 4200;
    setTimeout(function () {
      caught.classList.remove("is-on");
      show(0);
      dark = 0;
    }, 1500);
  }

  function tick(now) {
    // Tope de medio segundo: si el navegador va lento sigue contando bien,
    // pero volver a una pestaña dormida no lo hace saltar de golpe.
    var dt = Math.min(1000, now - last);
    last = now;
    if (awake && visible && now > pausedUntil) {
      if (lit()) {
        dark = 0;
      } else {
        dark += dt;
        if (dark > STEP_MS) {
          dark = 0;
          if (step < frames.length - 1) show(step + 1);
          else catchYou(now);
        }
      }
    }
    requestAnimationFrame(tick);
  }

  var hero = stage.parentElement;
  function point(e) {
    var r = stage.getBoundingClientRect();
    setLamp(e.clientX - r.left, e.clientY - r.top);
    awake = true;
  }

  hero.addEventListener("pointermove", function (e) {
    if (e.pointerType === "touch" && e.buttons === 0) return;
    point(e);
  });
  hero.addEventListener("pointerdown", point);
  hero.addEventListener("pointerleave", dropLamp);
  hero.addEventListener("pointerup", function (e) {
    if (e.pointerType === "touch") dropLamp();
  });
  hero.addEventListener("pointercancel", dropLamp);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
    }, { threshold: 0.35 }).observe(hero);
  }

  document.addEventListener("visibilitychange", function () {
    // Si te vas de la pestaña y vuelves, está más cerca.
    if (document.hidden || !awake) return;
    if (step < frames.length - 1) show(step + 1);
  });

  requestAnimationFrame(tick);
})();
