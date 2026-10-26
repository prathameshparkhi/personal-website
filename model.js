document.addEventListener("DOMContentLoaded", () => {

   
    /* LOADER */

    const loader = document.getElementById("loader");
    const progress = document.getElementById("loaderProgress");
    const loaderText = document.getElementById("loaderText");

    const messages = [
        "INITIALISING SYSTEM...",
        "LOADING STARFIELD...",
        "MOUNTING DIGITAL WORLD...",
        "CALIBRATING PIXELS...",
        "SYSTEM READY."
    ];

    let percentage = 0;

    const loading = setInterval(() => {
        percentage = Math.min(percentage + Math.random() * 12 + 7, 100);

        progress.style.width = `${percentage}%`;

        const messageIndex = Math.min(
            Math.floor(percentage / 20),
            messages.length - 1
        );

        loaderText.textContent = messages[messageIndex];

        if (percentage >= 100) {
            clearInterval(loading);

            setTimeout(() => {
                loader.classList.add("hidden");
            }, 650);
        }
    }, 120);



    
    /* ACTIVE NAVIGATION */

    const sections = document.querySelectorAll("main section");
    const links = document.querySelectorAll(".nav-link");

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                links.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            });
        },
        { threshold: 0.45 }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    /* =========================================
       SCROLL REVEAL
    ========================================== */

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            revealObserver.observe(element);

        });





    
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


                    const x =
                        event.clientX
                        -
                        rect.left;


                    const y =
                        event.clientY
                        -
                        rect.top;


                    const rotateY =
                        (
                            x / rect.width
                            -
                            .5
                        ) * 7;


                    const rotateX =
                        (
                            y / rect.height
                            -
                            .5
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

                    card.style.transform =
                        "";

                }
            );

        });



    /* =========================================
       GAMEBOY
    ========================================== */

    const gameMessage =
        document.getElementById(
            "gameMessage"
        );


    document
        .querySelectorAll(".game-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        button.dataset.game;


                    const messages = {

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


                    const list =
                        messages[key];


                    gameMessage.textContent =
                        list[
                            Math.floor(
                                Math.random()
                                * list.length
                            )
                        ];


                    setTimeout(() => {

                        gameMessage.textContent =
                            "PRESS A OR B";

                    }, 1400);

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


if (
    signalButton &&
    signalModal &&
    closeSignal
) {

    signalButton.addEventListener(
        "click",
        () => {

            signalModal.classList.add("open");

            signalModal.setAttribute(
                "aria-hidden",
                "false"
            );

        }
    );


    closeSignal.addEventListener(
        "click",
        () => {

            signalModal.classList.remove("open");

            signalModal.setAttribute(
                "aria-hidden",
                "true"
            );

        }
    );


    signalModal.addEventListener(
        "click",
        event => {

            if (
                event.target === signalModal
            ) {

                signalModal.classList.remove("open");

                signalModal.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

}

    /* =========================================
       TERMINAL
    ========================================== */

    const modal =
        document.getElementById(
            "terminalModal"
        );


    const openTerminalButton =
        document.getElementById(
            "systemButton"
        );


    const closeTerminalButton =
        document.getElementById(
            "closeTerminal"
        );


    const terminalForm =
        document.getElementById(
            "terminalForm"
        );


    const terminalInput =
        document.getElementById(
            "terminalInput"
        );


    const terminalOutput =
        document.getElementById(
            "terminalOutput"
        );


    function openTerminal() {

        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        setTimeout(() => {

            terminalInput.focus();

        }, 100);

    }


    function closeTerminal() {

        modal.classList.remove(
            "open"
        );

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    openTerminalButton
        .addEventListener(
            "click",
            openTerminal
        );


    closeTerminalButton
        .addEventListener(
            "click",
            closeTerminal
        );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeTerminal();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeTerminal();

            }

        }
    );


    const commands = {

        help:
            () =>
                "COMMANDS: help, about, projects, blog, contact, clear, stardance",

        about:
            () =>
                "A curious builder exploring code, ideas, stars and digital experiences.",

        projects:
            () =>
                "PROJECTS: COMMON GROUND / STARDANCE / MORE SOON",

        blog:
            () =>
                "BLOG: thoughts, stories, tech, experiments.",

        contact:
            () =>
                "UPLINK: scroll to CONTACT and send a signal.",

        stardance:
            () =>
                "✦ STARDANCE MODE // ACTIVATED ✦",

        stardance: () => {
            document.body.classList.toggle("stardance-mode");
            return document.body.classList.contains("stardance-mode")
                ? "✦ STARDANCE MODE ACTIVATED ✦"
                : "STARDANCE MODE ACTIVATED";
        
        },

        normal: () => {
            document.body.classList.remove("stardance-mode");
            return "DEFAULT THEME"
        }

        clear:
            () =>
                "__CLEAR__"

    };


    terminalForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const command =
                terminalInput.value
                    .trim()
                    .toLowerCase();


            if (!command)
                return;


            addTerminalLine(
                `> ${escapeHTML(command)}`
            );


            if (commands[command]) {

                const result =
                    commands[command]();


                if (
                    result === "__CLEAR__"
                ) {

                    terminalOutput.innerHTML =
                        "";

                } else {

                    addTerminalLine(
                        result
                    );

                }

            } else {

                addTerminalLine(
                    `UNKNOWN COMMAND:
                    ${escapeHTML(command)}.
                    TYPE "help".`
                );

            }


            terminalInput.value = "";


            terminalOutput.scrollTop =
                terminalOutput.scrollHeight;

        }
    );


    function addTerminalLine(text) {

        const paragraph =
            document.createElement("p");

        paragraph.innerHTML =
            text;

        terminalOutput.appendChild(
            paragraph
        );

    }


    function escapeHTML(value) {

        return value.replace(
            /[&<>"']/g,
            character => ({

                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"

            })[character]
        );

    }



    /* =========================================
       EASTER EGG
    ========================================== */

    let secret = "";

    const secretCode =
        "stardance";


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.target === terminalInput
            )
                return;


            secret +=
                event.key.toLowerCase();


            secret =
                secret.slice(
                    -secretCode.length
                );


            if (
                secret === secretCode
            ) {

                document.body.animate(
                    [
                        {
                            filter:
                                "hue-rotate(0deg)"
                        },

                        {
                            filter:
                                "hue-rotate(90deg)"
                        },

                        {
                            filter:
                                "hue-rotate(0deg)"
                        }
                    ],
                    {
                        duration: 1200
                    }
                );


                showToast(
                    "✦ STARDANCE MODE ACTIVATED ✦"
                );

            }

        }
    );



    /* =========================================
       TOAST
    ========================================== */

    function showToast(message) {

        const toast =
            document.getElementById(
                "toast"
            );


        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            showToast.timer
        );


        showToast.timer =
            setTimeout(() => {

                toast.classList.remove(
                    "show"
                );

            }, 2200);

    }



    /* =========================================
       CONSOLE MESSAGE
    ========================================== */

    console.log(`

╔══════════════════════════════════════╗
║           PRATHAMESH.EXE            ║
║           SYSTEM ONLINE             ║
║           STARDANCE // 2026         ║
║                                     ║
║           Type "stardance"           ║
║           for a secret.             ║
╚══════════════════════════════════════╝

    `);

});

