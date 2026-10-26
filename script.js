
document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       LOADER
    ========================================== */

    const loader = document.getElementById("loader");
    const progress = document.getElementById("loaderProgress");
    const loaderText = document.getElementById("loaderText");

    const loadingMessages = [
        "INITIALISING SYSTEM...",
        "LOADING STARFIELD...",
        "MOUNTING DIGITAL WORLD...",
        "CALIBRATING PIXELS...",
        "SYSTEM READY."
    ];

    let percentage = 0;
    let loadingInterval = null;

    if (loader && progress && loaderText) {

        loadingInterval = setInterval(() => {

            percentage = Math.min(
                percentage + Math.random() * 12 + 7,
                100
            );

            progress.style.width = `${percentage}%`;

            const messageIndex = Math.min(
                Math.floor(percentage / 20),
                loadingMessages.length - 1
            );

            loaderText.textContent =
                loadingMessages[messageIndex];

            if (percentage >= 100) {

                clearInterval(loadingInterval);

                setTimeout(() => {

                    loader.classList.add("hidden");

                }, 650);

            }

        }, 120);

    }



    /* =========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll("main section");

    const links =
        document.querySelectorAll(".nav-link");

    if ("IntersectionObserver" in window) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) return;

                        links.forEach(link => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") ===
                                `#${entry.target.id}`
                            );

                        });

                    });

                },
                {
                    threshold: 0.45
                }
            );

        sections.forEach(section => {

            sectionObserver.observe(section);

        });

    }



    /* =========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) return;

                        entry.target
                            .classList
                            .add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }



    /* =========================================
       MAGNETIC BUTTONS
    ========================================== */

    document
        .querySelectorAll(".magnetic")
        .forEach(element => {

            element.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        element.getBoundingClientRect();

                    const x =
                        (
                            event.clientX -
                            rect.left -
                            rect.width / 2
                        ) * 0.1;

                    const y =
                        (
                            event.clientY -
                            rect.top -
                            rect.height / 2
                        ) * 0.1;

                    element.style.transform =
                        `translate(${x}px, ${y}px)`;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.transform = "";

                }
            );

        });



    /* =========================================
       3D TILT
    ========================================== */

    document
        .querySelectorAll(".tilt-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    if (!rect.width || !rect.height) return;

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const rotateY =
                        (
                            x / rect.width - 0.5
                        ) * 7;

                    const rotateX =
                        (
                            y / rect.height - 0.5
                        ) * -7;

                    card.style.transform =
                        `perspective(700px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        });



    /* =========================================
       GAME BOY
    ========================================== */

    const gameMessage =
        document.getElementById("gameMessage");

    const gameMessages = {

        A: [
            "SIGNAL RECEIVED",
            "PIXEL MODE ON",
            "NICE CHOICE"
        ],

        B: [
            "NICE TRY",
            "SECRET CHANNEL",
            "LEVEL UP"
        ]

    };

    let gameMessageTimer = null;

    document
        .querySelectorAll(".game-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (!gameMessage) return;

                    const key =
                        button.dataset.game;

                    const messages =
                        gameMessages[key];

                    if (!messages) return;

                    gameMessage.textContent =
                        messages[
                            Math.floor(
                                Math.random() * messages.length
                            )
                        ];

                    clearTimeout(gameMessageTimer);

                    gameMessageTimer = setTimeout(
                        () => {

                            gameMessage.textContent =
                                "PRESS A OR B";

                        },
                        1400
                    );

                }
            );

        });



    /* =========================================
       CONTACT / SEND A SIGNAL
    ========================================== */

    const signalButton =
        document.getElementById("signalButton");

    const signalModal =
        document.getElementById("signalModal");

    const closeSignal =
        document.getElementById("closeSignal");


    function openSignalModal() {

        if (!signalModal) return;

        signalModal.classList.add("open");

        signalModal.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    function closeSignalModal() {

        if (!signalModal) return;

        signalModal.classList.remove("open");

        signalModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (signalButton && signalModal) {

        signalButton.addEventListener(
            "click",
            openSignalModal
        );

    }


    if (closeSignal && signalModal) {

        closeSignal.addEventListener(
            "click",
            closeSignalModal
        );

    }


    if (signalModal) {

        signalModal.addEventListener(
            "click",
            event => {

                if (event.target === signalModal) {

                    closeSignalModal();

                }

            }
        );

    }



    /* =========================================
       TERMINAL ELEMENTS
    ========================================== */

    const terminalModal =
        document.getElementById("terminalModal");

    const openTerminalButton =
        document.getElementById("systemButton");

    const closeTerminalButton =
        document.getElementById("closeTerminal");

    const terminalForm =
        document.getElementById("terminalForm");

    const terminalInput =
        document.getElementById("terminalInput");

    const terminalOutput =
        document.getElementById("terminalOutput");



    /* =========================================
       TERMINAL OPEN / CLOSE
    ========================================== */

    function openTerminal() {

        if (!terminalModal) return;

        terminalModal.classList.add("open");

        terminalModal.setAttribute(
            "aria-hidden",
            "false"
        );

        setTimeout(() => {

            if (terminalInput) {

                terminalInput.focus();

            }

        }, 100);

    }


    function closeTerminal() {

        if (!terminalModal) return;

        terminalModal.classList.remove("open");

        terminalModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (openTerminalButton) {

        openTerminalButton.addEventListener(
            "click",
            openTerminal
        );

    }


    if (closeTerminalButton) {

        closeTerminalButton.addEventListener(
            "click",
            closeTerminal
        );

    }


    if (terminalModal) {

        terminalModal.addEventListener(
            "click",
            event => {

                if (event.target === terminalModal) {

                    closeTerminal();

                }

            }
        );

    }



    /* =========================================
       TERMINAL COMMANDS
    ========================================== */

    const commands = {

        help: () =>

            'COMMANDS: help, about, projects, blog, contact, clear, stardance, normal',


        about: () =>

            "A curious builder exploring code, ideas, stars and digital experiences.",


        projects: () =>

            "PROJECTS: COMMON GROUND / STARDANCE / MORE SOON",


        blog: () =>

            "BLOG: thoughts, stories, tech, experiments.",


        contact: () =>

            "UPLINK: scroll to CONTACT and send a signal.",


        stardance: () => {

            document.body.classList.add(
                "stardance-mode"
            );

            return "✦ STARDANCE MODE ACTIVATED ✦";

        },


        normal: () => {

            document.body.classList.remove(
                "stardance-mode"
            );

            return "DEFAULT THEME RESTORED.";

        },


        clear: () =>

            "__CLEAR__"

    };



    /* =========================================
       TERMINAL OUTPUT
    ========================================== */

    function addTerminalLine(text) {

        if (!terminalOutput) return;

        const paragraph =
            document.createElement("p");

        // Use textContent to prevent HTML injection.
        paragraph.textContent = String(text);

        terminalOutput.appendChild(
            paragraph
        );

    }



    /* =========================================
       TERMINAL FORM SUBMISSION
    ========================================== */

    if (terminalForm) {

        terminalForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                if (!terminalInput || !terminalOutput) {
                    return;
                }

                const command =
                    terminalInput.value
                        .trim()
                        .toLowerCase();

                if (!command) return;


                addTerminalLine(
                    `> ${command}`
                );


                if (
                    Object.prototype.hasOwnProperty.call(
                        commands,
                        command
                    )
                ) {

                    const result =
                        commands[command]();


                    if (result === "__CLEAR__") {

                        terminalOutput.replaceChildren();

                    } else {

                        addTerminalLine(result);

                    }

                } else {

                    addTerminalLine(
                        `UNKNOWN COMMAND: ${command}. TYPE "help".`
                    );

                }


                terminalInput.value = "";


                terminalOutput.scrollTop =
                    terminalOutput.scrollHeight;

            }
        );

    }
    

    


    /* =========================================
       EASTER EGG
    ========================================== */

    let secret = "";

    const secretCode = "stardance";


    document.addEventListener(
        "keydown",
        event => {

            const target = event.target;

            // Ignore typing inside form fields and editable elements.
            if (
                target instanceof HTMLElement &&
                (
                    target.isContentEditable ||
                    [
                        "INPUT",
                        "TEXTAREA",
                        "SELECT"
                    ].includes(target.tagName)
                )
            ) {

                return;

            }


            // Ignore keys that are not single characters.
            if (event.key.length !== 1) return;


            secret += event.key.toLowerCase();


            secret = secret.slice(
                -secretCode.length
            );


            if (secret === secretCode) {

                document.body.classList.add(
                    "stardance-mode"
                );


                document.body.animate(
                    [
                        {
                            filter: "hue-rotate(0deg)"
                        },

                        {
                            filter: "hue-rotate(90deg)"
                        },

                        {
                            filter: "hue-rotate(0deg)"
                        }
                    ],
                    {
                        duration: 1200
                    }
                );


                showToast(
                    "✦ STARDANCE MODE ACTIVATED ✦"
                );


                secret = "";

            }

        }
    );



    /* =========================================
       ESCAPE KEY
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") return;

            closeTerminal();

            closeSignalModal();

        }
    );



    /* =========================================
       TOAST NOTIFICATIONS
    ========================================== */

    function showToast(message) {

        const toast =
            document.getElementById("toast");


        if (!toast) return;


        toast.textContent = message;


        toast.classList.add("show");


        clearTimeout(
            showToast.timer
        );


        showToast.timer = setTimeout(
            () => {

                toast.classList.remove("show");

            },
            2200
        );

    }



    /* =========================================
       CONSOLE MESSAGE
    ========================================== */

    console.log(`

╔══════════════════════════════════════╗
║           PRATHAMESH.EXE             ║
║           SYSTEM ONLINE              ║
║           STARDANCE // 2026           ║
║                                      ║
║           Type "stardance"            ║
║           for a secret.              ║
╚══════════════════════════════════════╝

    `);


});



/* ==========================================
   PIXEL.EXE — DIGITAL ALIEN COMPANION
   ========================================== */
(() => {
  function initialisePixel() {
    const pixel = document.getElementById("pixel-companion");
    if (!pixel || pixel.dataset.initialised === "true") return;

    const creature = pixel.querySelector("#pixel-creature");
    const bubble = pixel.querySelector("#pixel-bubble");
    const panel = pixel.querySelector("#pixel-window");
    const close = pixel.querySelector("#pixel-close");
    const mood = pixel.querySelector("#pixel-mood");

    if (!creature || !bubble || !panel || !close || !mood) {
      console.warn("PIXEL.EXE: One or more HTML elements are missing.");
      return;
    }

    
    creature.addEventListener("mouseenter", () => {
    if (
        !pixel.classList.contains("is-dancing") &&
        !pixel.classList.contains("is-sleeping") &&
        !pixel.classList.contains("is-excited")
    ) {
        bubble.textContent = "Hehe. You found me. ✦";
        bubble.classList.add("is-visible");
    }
    });

    creature.addEventListener("mouseleave", () => {
    // Hide the greeting when the pointer leaves.
    // Remove this line if you want the bubble to stay visible.
    bubble.classList.remove("is-visible");
    });


    pixel.dataset.initialised = "true";

    let idleTimer;
    let danceTimer;
    let messageIndex = 0;
    let energy = 3;

    const idleMessages = [
      "Psst. Your code looks interesting. 👾",
      "I live here now. Hope that's okay.",
      "Have you tried turning reality off and on?",
      "01001000 01101001! That's 'Hi' in binary.",
      "Tiny alien. Massive ambitions.",
      "I was promised 3.7 cookies. Where are they?",
      "Your friendly neighbourhood pixel creature.",
      "Achievement unlocked: you found me!"
    ];

function say(message, currentMood = "CURIOUS") {
  bubble.textContent = message;
  mood.textContent = currentMood;
  bubble.classList.add("is-visible");
}


function setPanel(open) {
  panel.hidden = !open;
}


    function stopDance() {
      clearTimeout(danceTimer);
      pixel.classList.remove("is-dancing");
    }

    function react(action) {
      stopDance();
      pixel.classList.remove("is-excited", "is-sleeping");

      switch (action) {
        case "pet":
          say("PURRR... wait, aliens can purr?! ♡", "LOVED");
          pixel.classList.add("is-excited");
          break;

        case "feed":
          energy = Math.min(energy + 1, 5);
          say(
            energy >= 5
              ? "MAXIMUM SNACK LEVEL. I AM UNSTOPPABLE."
              : "YUM! One cosmic snack consumed. ✦",
            "ENERGISED"
          );
          pixel.classList.add("is-excited");
          break;

        
        case "dance":
        pixel.classList.remove("is-excited", "is-sleeping");
        pixel.classList.add("is-dancing");

        say("INTERGALACTIC GROOVE ACTIVATED ♫", "PARTY MODE");

        clearTimeout(danceTimer);
        danceTimer = setTimeout(() => {
            pixel.classList.remove("is-dancing");
            say("That was my hit single.", "PLEASED");
        }, 5000);
        break;


        case "help":
          say("Pet me, feed me, make me dance, or type 'pixel' anywhere outside a text field.", "HELPFUL");
          break;

        case "sleep":
          say("Zzz... dreaming of better Wi-Fi.", "SLEEPING");
          pixel.classList.add("is-sleeping");
          break;

        default:
          say("UNKNOWN COMMAND. My tiny brain is buffering.", "CONFUSED");
      }
    }

    // Clicking the alien opens its control panel.
    creature.addEventListener("click", () => {
      setPanel(panel.hidden);
    });

    // Closing the panel.
    close.addEventListener("click", (event) => {
      event.stopPropagation();
      panel.hidden = true;
      say("I'll be right here. Click me if you need me!");
    });

    // Pet, Feed, Dance and Help.
    pixel.querySelectorAll("[data-pixel-action]").forEach((button) => {
      button.addEventListener("click", () => {
        react(button.dataset.pixelAction);
      });
    });

    // Keyboard Easter eggs: type commands outside text fields.
    let typed = "";
    let resetTypedTimer;

    document.addEventListener("keydown", (event) => {
      const target = event.target;
      const typingInField =
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

      if (typingInField || event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }

      if (event.key === "Escape") {
        panel.hidden = true;
        return;
      }

      if (event.key === "Enter") {
        const command = typed.toLowerCase().trim();
        typed = "";

        if (command === "pixel") {
          setPanel(true);
        } else if (["pet", "feed", "dance", "help", "sleep"].includes(command)) {
          react(command);
        } else if (command === "wake") {
          pixel.classList.remove("is-sleeping");
          say("I'M AWAKE! What did I miss?!", "AWAKE");
        }

        return;
      }

      if (event.key.length === 1) {
        typed += event.key;
        typed = typed.slice(-20);

        clearTimeout(resetTypedTimer);
        resetTypedTimer = setTimeout(() => {
          typed = "";
        }, 2500);
      }
    });

    // Occasional idle chatter. Pause while the panel is open.
    idleTimer = setInterval(() => {
      if (!panel.hidden || pixel.matches(":hover")) return;

      say(idleMessages[messageIndex % idleMessages.length], "CURIOUS");
      messageIndex++;
    }, 18000);

    // Keep the timer reference on the element for easy debugging.
    pixel.dataset.ready = "true";

    console.log("PIXEL.EXE: Companion initialised successfully 👾");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialisePixel, { once: true });
  } else {
    initialisePixel();
  }
})();


(() => {
  const canvas = document.querySelector("#pixel-trail");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const particles = [];
  const colors = ["#c084fc", "#a855f7", "#e879f9", "#f0abfc"];
  let width = 0;
  let height = 0;
  let lastX = null;
  let lastY = null;
  let lastSpawn = 0;
  let frame = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawn(x, y, count = 2, burst = false) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = burst
        ? 1.2 + Math.random() * 3.5
        : 0.2 + Math.random() * 1.1;

      particles.push({
        x: x + (Math.random() - 0.5) * 5,
        y: y + (Math.random() - 0.5) * 5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: burst ? 2 + Math.random() * 4 : 2 + Math.random() * 2,
        life: burst ? 35 + Math.random() * 15 : 20 + Math.random() * 15,
        maxLife: burst ? 50 : 35,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Keep memory and rendering costs bounded.
    if (particles.length > 180) {
      particles.splice(0, particles.length - 180);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.97;
      p.vy *= 0.97;
      p.life--;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      const alpha = Math.min(1, p.life / 10, p.life / p.maxLife);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 7;

      // Crisp little square pixels.
      ctx.fillRect(
        Math.round(p.x),
        Math.round(p.y),
        Math.ceil(p.size),
        Math.ceil(p.size)
      );
    }

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    frame = requestAnimationFrame(animate);
  }

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;

    const now = performance.now();

    if (lastX !== null && now - lastSpawn > 18) {
      const distance = Math.hypot(
        event.clientX - lastX,
        event.clientY - lastY
      );

      const count = Math.min(5, Math.max(1, Math.floor(distance / 12)));

      spawn(event.clientX, event.clientY, count);
      lastSpawn = now;
    }

    lastX = event.clientX;
    lastY = event.clientY;
  });

  window.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") {
      spawn(event.clientX, event.clientY, 18, true);
    }
  });

  window.addEventListener("blur", () => {
    lastX = null;
    lastY = null;
  });

  window.addEventListener("resize", resize);

  resize();
  animate();
})();



(() => {
  const original = document.querySelector("#pixel-creature");

  if (!original || original.dataset.cloneFeature) return;
  original.dataset.cloneFeature = "true";

  let clicks = 0;
  let lastClick = 0;
  let clones = [];
  let animationId = null;
  let running = false;

  const CLONE_COUNT = 5;
  const SPEED_MIN = 180;
  const SPEED_MAX = 320;

  function spawnArmy() {
    if (running) return;

    running = true;
    clicks = 0;

    const rect = original.getBoundingClientRect();

    for (let i = 0; i < CLONE_COUNT; i++) {
      const clone = original.cloneNode(true);

      clone.removeAttribute("id");
      clone.removeAttribute("aria-controls");
      clone.removeAttribute("aria-expanded");
      clone.removeAttribute("tabindex");
      clone.setAttribute("aria-hidden", "true");
      clone.classList.add("pixel-clone");

      clone.style.position = "fixed";
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.top = `${rect.top}px`;
      clone.style.margin = "0";
      clone.style.pointerEvents = "none";
      clone.style.scale = "1";

      document.body.appendChild(clone);

      // Give every clone its own direction and speed.
      const angle = (Math.PI * 2 * i) / CLONE_COUNT
        + Math.random() * 0.5;

      const speed =
        SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);

      clones.push({
        el: clone,
        x: rect.left + (Math.random() - 0.5) * 40,
        y: rect.top + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed
      });
    }

    let previous = performance.now();

    function move(now) {
      const dt = Math.min((now - previous) / 1000, 0.04);
      previous = now;

      clones.forEach(c => {
        const w = c.el.offsetWidth;
        const h = c.el.offsetHeight;

        // Move forever, like a classic DVD screensaver.
        c.x += c.vx * dt;
        c.y += c.vy * dt;

        const maxX = Math.max(0, window.innerWidth - w);
        const maxY = Math.max(0, window.innerHeight - h);

        // Bounce off left and right edges.
        if (c.x <= 0) {
          c.x = 0;
          c.vx = Math.abs(c.vx);
        } else if (c.x >= maxX) {
          c.x = maxX;
          c.vx = -Math.abs(c.vx);
        }

        // Bounce off top and bottom edges.
        if (c.y <= 0) {
          c.y = 0;
          c.vy = Math.abs(c.vy);
        } else if (c.y >= maxY) {
          c.y = maxY;
          c.vy = -Math.abs(c.vy);
        }

        c.el.style.left = `${c.x}px`;
        c.el.style.top = `${c.y}px`;
      });

      // Never remove the clones or stop the animation.
      animationId = requestAnimationFrame(move);
    }

    animationId = requestAnimationFrame(move);
  }

  original.addEventListener("click", () => {
    const now = performance.now();

    if (now - lastClick > 1800) {
      clicks = 0;
    }

    lastClick = now;
    clicks++;

    if (clicks >= 5) {
      spawnArmy();
    }
  });
})();


(() => {
  const lamp = document.getElementById("pixel-lamp");
  const button = document.getElementById("lamp-switch");

  if (!lamp || !button || lamp.dataset.ready) return;
  lamp.dataset.ready = "true";

  // Create the viewport lighting layer.
  let ambient = document.getElementById("lamp-ambient");

  if (!ambient) {
    ambient = document.createElement("div");
    ambient.id = "lamp-ambient";
    ambient.setAttribute("aria-hidden", "true");
    document.body.appendChild(ambient);
  }

  const tooltip = lamp.querySelector(".lamp-tooltip");
  let audio;

  function playSound(isOn) {
    try {
      audio ??= new (
        window.AudioContext || window.webkitAudioContext
      )();

      if (audio.state === "suspended") audio.resume();

      const now = audio.currentTime;
      const osc = audio.createOscillator();
      const gain = audio.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(isOn ? 620 : 360, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.07);

      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start(now);
      osc.stop(now + 0.08);

      if (isOn) {
        const chime = audio.createOscillator();
        const volume = audio.createGain();

        chime.type = "sine";
        chime.frequency.setValueAtTime(880, now + 0.04);
        chime.frequency.setValueAtTime(1175, now + 0.11);

        volume.gain.setValueAtTime(0.001, now);
        volume.gain.setValueAtTime(0.025, now + 0.04);
        volume.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

        chime.connect(volume);
        volume.connect(audio.destination);
        chime.start(now + 0.04);
        chime.stop(now + 0.25);
      }
    } catch (error) {
      // Lighting still works when audio is unavailable.
    }
  }

  button.addEventListener("click", () => {
    const isOn = !lamp.classList.contains("lamp-on");

    lamp.classList.toggle("lamp-on", isOn);
    lamp.classList.toggle("lamp-off", !isOn);
    document.body.classList.toggle("lamp-illuminated", isOn);

    button.setAttribute("aria-pressed", String(isOn));
    button.setAttribute(
      "aria-label",
      isOn ? "Turn lamp off" : "Turn lamp on"
    );

    if (tooltip) {
      tooltip.textContent = isOn
        ? "[ CLICK TO TURN OFF ]"
        : "[ CLICK TO TURN ON ]";
    }

    playSound(isOn);
  });
})();

