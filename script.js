document.addEventListener("DOMContentLoaded", () => {

    /* LOADER */

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

    if (loader && progress && loaderText) {
        const loading = setInterval(() => {
            percentage = Math.min(
                percentage + Math.random() * 12 + 7,
                100
            );

            progress.style.width = `${percentage}%`;

            const index = Math.min(
                Math.floor(percentage / 20),
                loadingMessages.length - 1
            );

            loaderText.textContent = loadingMessages[index];

            if (percentage >= 100) {
                clearInterval(loading);

                setTimeout(() => {
                    loader.classList.add("hidden");
                }, 650);
            }
        }, 120);
    } else if (loader) {
        loader.classList.add("hidden");
    }


    /* ACTIVE NAVIGATION */

    const sections = document.querySelectorAll("main section");
    const links = document.querySelectorAll(".nav-link");

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                links.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            });
        }, { threshold: 0.45 });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        /* SCROLL REVEAL */

        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12 });

        document.querySelectorAll(".reveal").forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        document.querySelectorAll(".reveal").forEach(element => {
            element.classList.add("visible");
        });
    }


    /* MAGNETIC BUTTONS */

    document.querySelectorAll(".magnetic").forEach(element => {
        element.addEventListener("mousemove", event => {
            const rect = element.getBoundingClientRect();

            const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
            const y = (event.clientY - rect.top - rect.height / 2) * 0.1;

            element.style.transform = `translate(${x}px, ${y}px)`;
        });

        element.addEventListener("mouseleave", () => {
            element.style.transform = "";
        });
    });


    /* 3D TILT */

    document.querySelectorAll(".tilt-card").forEach(card => {
        card.addEventListener("mousemove", event => {
            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateY = (x / rect.width - 0.5) * 7;
            const rotateX = (y / rect.height - 0.5) * -7;

            card.style.transform =
                `perspective(700px) rotateX(${rotateX}deg) ` +
                `rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });


    /* GAMEBOY BUTTONS */

    const gameMessage = document.getElementById("gameMessage");

    document.querySelectorAll(".game-button").forEach(button => {
        button.addEventListener("click", () => {
            const key = button.dataset.game;

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

            const options = gameMessages[key];

            if (!gameMessage || !options || options.length === 0) {
                return;
            }

            gameMessage.textContent =
                options[Math.floor(Math.random() * options.length)];

            setTimeout(() => {
                gameMessage.textContent = "PRESS A OR B";
            }, 1400);
        });
    });


    /* CONTACT / SEND A SIGNAL */

    const signalButton = document.getElementById("signalButton");
    const signalModal = document.getElementById("signalModal");
    const closeSignal = document.getElementById("closeSignal");

    function closeSignalModal() {
        if (!signalModal) return;

        signalModal.classList.remove("open");
        signalModal.setAttribute("aria-hidden", "true");
    }

    if (signalButton && signalModal && closeSignal) {
        signalButton.addEventListener("click", () => {
            signalModal.classList.add("open");
            signalModal.setAttribute("aria-hidden", "false");
        });

        closeSignal.addEventListener("click", closeSignalModal);

        signalModal.addEventListener("click", event => {
            if (event.target === signalModal) {
                closeSignalModal();
            }
        });
    }


    /* TERMINAL */

    const modal = document.getElementById("terminalModal");
    const openTerminalButton = document.getElementById("systemButton");
    const closeTerminalButton = document.getElementById("closeTerminal");
    const terminalForm = document.getElementById("terminalForm");
    const terminalInput = document.getElementById("terminalInput");
    const terminalOutput = document.getElementById("terminalOutput");

    function openTerminal() {
        if (!modal) return;

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");

        if (terminalInput) {
            setTimeout(() => terminalInput.focus(), 100);
        }
    }

    function closeTerminal() {
        if (!modal) return;

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
    }

    if (modal && openTerminalButton) {
        openTerminalButton.addEventListener("click", openTerminal);
    }

    if (modal && closeTerminalButton) {
        closeTerminalButton.addEventListener("click", closeTerminal);
    }

    if (modal) {
        modal.addEventListener("click", event => {
            if (event.target === modal) closeTerminal();
        });
    }

    const commands = {
        help: () =>
            "COMMANDS: help, about, projects, blog, contact, clear, stardance, normal",

        about: () =>
            "A curious builder exploring code, ideas, stars and digital experiences.",

        projects: () =>
            "PROJECTS: COMMON GROUND / STARDANCE / MORE SOON",

        blog: () =>
            "BLOG: thoughts, stories, tech, experiments.",

        contact: () =>
            "UPLINK: scroll to CONTACT and send a signal.",

        stardance: () => {
            document.body.classList.toggle("stardance-mode");

            return document.body.classList.contains("stardance-mode")
                ? "STARDANCE MODE ACTIVATED"
                : "STARDANCE MODE DEACTIVATED";
        },

        normal: () => {
            document.body.classList.remove("stardance-mode");
            return "DEFAULT THEME";
        },

        clear: () => "__CLEAR__"
    };

    function addTerminalLine(message) {
        if (!terminalOutput) return;

        const paragraph = document.createElement("p");
        paragraph.textContent = message;
        terminalOutput.appendChild(paragraph);
    }

    if (terminalForm && terminalInput && terminalOutput) {
        terminalForm.addEventListener("submit", event => {
            event.preventDefault();

            const command = terminalInput.value.trim().toLowerCase();
            if (!command) return;

            addTerminalLine(`> ${command}`);

            if (Object.prototype.hasOwnProperty.call(commands, command)) {
                const result = commands[command]();

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
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        });
    }


    /* ESCAPE KEY */

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeTerminal();
            closeSignalModal();
        }
    });


    /* STARDANCE EASTER EGG */

    let secret = "";
    const secretCode = "stardance";

    document.addEventListener("keydown", event => {
        if (
            event.target instanceof HTMLElement &&
            (
                event.target.matches("input") ||
                event.target.matches("textarea") ||
                event.target.isContentEditable
            )
        ) {
            return;
        }

        if (event.key.length !== 1) return;

        secret += event.key.toLowerCase();
        secret = secret.slice(-secretCode.length);

        if (secret === secretCode) {
            document.body.animate(
                [
                    { filter: "hue-rotate(0deg)" },
                    { filter: "hue-rotate(90deg)" },
                    { filter: "hue-rotate(0deg)" }
                ],
                { duration: 1200 }
            );

            showToast("STARDANCE MODE ACTIVATED");
            secret = "";
        }
    });


    /* TOAST */

    function showToast(message) {
        const toast = document.getElementById("toast");
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("show");

        clearTimeout(showToast.timer);

        showToast.timer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }


    /* PIXEL COMPANION */

    const pixelCreature = document.getElementById("pixel-creature");
    const pixelWindow = document.getElementById("pixel-window");
    const pixelClose = document.getElementById("pixel-close");
    const pixelBubble = document.getElementById("pixel-bubble");
    const pixelMood = document.getElementById("pixel-mood");

    if (pixelCreature && pixelWindow) {
        pixelCreature.addEventListener("click", () => {
            pixelWindow.hidden = !pixelWindow.hidden;
        });
    }

    if (pixelClose && pixelWindow) {
        pixelClose.addEventListener("click", () => {
            pixelWindow.hidden = true;
        });
    }

    const pixelReplies = {
        pet: ["AFFECTION RECEIVED", "FRIENDSHIP +1", "PURR.EXE"],
        feed: ["ENERGY RESTORED", "YUM.EXE", "PIXEL IS HAPPY"],
        dance: ["DANCE MODE", "BEAT DETECTED", "PIXEL GROOVING"],
        help: ["I LIVE IN YOUR SCREEN", "CLICK ME TO OPEN THIS MENU", "STATUS: TINY BUT POWERFUL"]
    };

    document.querySelectorAll("[data-pixel-action]").forEach(button => {
        button.addEventListener("click", () => {
            const action = button.dataset.pixelAction;
            const replies = pixelReplies[action];

            if (!replies) return;

            const reply = replies[Math.floor(Math.random() * replies.length)];

            if (pixelBubble) pixelBubble.textContent = reply;
            if (pixelMood) pixelMood.textContent = action.toUpperCase();

            if (action === "dance" && pixelCreature) {
                pixelCreature.classList.add("pixel-dancing");

                setTimeout(() => {
                    pixelCreature.classList.remove("pixel-dancing");
                }, 1000);
            }
        });
    });


    /* PIXEL LAMP */

    const lamp = document.getElementById("pixel-lamp");
    const lampSwitch = document.getElementById("lamp-switch");

    if (lamp && lampSwitch) {
        lampSwitch.addEventListener("click", () => {
            const isOn = lamp.classList.toggle("lamp-on");

            lamp.classList.toggle("lamp-off", !isOn);
            lampSwitch.setAttribute("aria-pressed", String(isOn));
            lampSwitch.setAttribute(
                "aria-label",
                isOn ? "Turn lamp off" : "Turn lamp on"
            );
        });
    }


    /* CUSTOM CURSOR */

    const cursorDot = document.getElementById("cursorDot");
    const cursorRing = document.getElementById("cursorRing");

    if (cursorDot && cursorRing && window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener("mousemove", event => {
            cursorDot.style.left = `${event.clientX}px`;
            cursorDot.style.top = `${event.clientY}px`;

            cursorRing.style.left = `${event.clientX}px`;
            cursorRing.style.top = `${event.clientY}px`;
        });
    }


    /* PIXEL TRAIL */

    const trailCanvas = document.getElementById("pixel-trail");
    const trailContext = trailCanvas ? trailCanvas.getContext("2d") : null;

    if (trailCanvas && trailContext) {
        const resizeTrail = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 2);

            trailCanvas.width = Math.floor(window.innerWidth * ratio);
            trailCanvas.height = Math.floor(window.innerHeight * ratio);

            trailCanvas.style.width = `${window.innerWidth}px`;
            trailCanvas.style.height = `${window.innerHeight}px`;

            trailContext.setTransform(ratio, 0, 0, ratio, 0, 0);
        };

        resizeTrail();
        window.addEventListener("resize", resizeTrail);

        const pixels = [];
        let lastPixelTime = 0;

        document.addEventListener("mousemove", event => {
            const now = performance.now();

            if (now - lastPixelTime < 35) return;
            lastPixelTime = now;

            pixels.push({
                x: event.clientX,
                y: event.clientY,
                life: 1,
                size: 2 + Math.random() * 4
            });

            if (pixels.length > 45) pixels.shift();
        });

        const drawTrail = () => {
            trailContext.clearRect(
                0,
                0,
                window.innerWidth,
                window.innerHeight
            );

            for (let i = pixels.length - 1; i >= 0; i--) {
                const pixel = pixels[i];

                pixel.life -= 0.025;

                if (pixel.life <= 0) {
                    pixels.splice(i, 1);
                    continue;
                }

                trailContext.globalAlpha = pixel.life;
                trailContext.fillStyle = "#d946ef";
                trailContext.fillRect(
                    pixel.x,
                    pixel.y,
                    pixel.size,
                    pixel.size
                );
            }

            trailContext.globalAlpha = 1;
            requestAnimationFrame(drawTrail);
        };

        drawTrail();
    }


    /* CONSOLE MESSAGE */

    console.log(`
╔══════════════════════════════════════╗
║           PRATHAMESH.EXE             ║
║           SYSTEM ONLINE              ║
║           STARDANCE // 2026          ║
║                                      ║
║           Type "stardance"           ║
║           for a secret.              ║
╚══════════════════════════════════════╝
    `);

});
