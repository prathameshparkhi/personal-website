
/* =========================================================
   PRATHAMESH.EXE — ARCHIVE SYSTEM
   Search / filters / reader / windows / taskbar / shortcuts
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   ARCHIVE CONTENT

   Add new entries to this array.
   category: ai | projects | ideas | photos | notes | misc
   type: research | build | ideas
   body: array of paragraphs, headings, lists, or code blocks
   --------------------------------------------------------- */

const archiveEntries = [
  {
    id: "coeus-kepler",
    title: "Coeus: Kepler Classifier",
    subtitle: "Machine learning and transit photometry",
    category: "ai",
    type: "research",
    fileType: "RESEARCH",
    date: "2026-10-14",
    icon: "◈",
    description:
      "An investigation into distinguishing Kepler Objects of Interest using machine-learning classification.",
    body: [
      {
        heading: "THE QUESTION",
        text:
          "Can machine learning help distinguish planetary transit candidates from astrophysical false positives using measurements from the Kepler mission?"
      },
      {
        heading: "THE APPROACH",
        text:
          "Coeus uses data from the NASA Exoplanet Archive's Kepler Objects of Interest Cumulative Table. The workflow includes data preparation, feature selection, model training, validation, and evaluation."
      },
      {
        heading: "EVALUATION",
        text:
          "The project explores classification performance using measures such as precision, recall, F1-score, and balanced accuracy. These metrics matter because the two classes are not equally represented in the dataset."
      },
      {
        heading: "WHAT COMES NEXT",
        text:
          "The next step is to document the limitations, inspect misclassifications, and make the distinction between a model prediction and scientific confirmation explicit."
      }
    ],
    links: [
      {
        label: "NASA Exoplanet Archive",
        url: "https://exoplanetarchive.ipac.caltech.edu/"
      }
    ]
  },

  {
    id: "computational-neuron",
    title: "A Computational Neuron",
    subtitle: "Modelling a simplified biological neuron",
    category: "projects",
    type: "build",
    fileType: "PROJECT",
    date: "2026-10-13",
    icon: "⌘",
    description:
      "A Python-based exploration of neuronal behaviour using a simplified mathematical model.",
    body: [
      {
        heading: "THE IDEA",
        text:
          "A biological neuron processes incoming signals and can generate an action potential when its membrane potential reaches a threshold. A computational model lets us explore some of these behaviours mathematically."
      },
      {
        heading: "THE MODEL",
        text:
          "The project begins with a leaky integrate-and-fire model. Its parameters include resting potential, firing threshold, membrane time constant, resistance, and injected current."
      },
      {
        heading: "EXPERIMENTS",
        text:
          "Changing the input current makes it possible to examine how the simulated membrane potential evolves over time and under what conditions the model produces spikes."
      },
      {
        heading: "LIMITATIONS",
        text:
          "This is a simplified mathematical model, not a complete simulation of a biological neuron. It is a starting point for investigating computational neuroscience."
      }
    ],
    links: []
  },

  {
    id: "common-ground",
    title: "Common Ground Intelligence",
    subtitle: "Turning local observations into shared knowledge",
    category: "projects",
    type: "build",
    fileType: "PROJECT",
    date: "2026-10-12",
    icon: "⌘",
    description:
      "A concept for a community intelligence platform centred on neighbourhood-level information.",
    body: [
      {
        heading: "THE PROBLEM",
        text:
          "Useful local knowledge is often fragmented. Residents may understand accessibility, infrastructure, environmental conditions, or public resources in their area, but that knowledge can be difficult to discover collectively."
      },
      {
        heading: "THE CONCEPT",
        text:
          "Common Ground Intelligence explores how structured community observations could become a shared map of neighbourhood conditions and resources."
      },
      {
        heading: "DESIGN PRINCIPLES",
        text:
          "The concept prioritises clarity, useful information, accessible interfaces, and responsible handling of community contributions."
      },
      {
        heading: "OPEN QUESTIONS",
        text:
          "How should observations be verified? How can the platform protect contributors' privacy? What would make the information useful enough for communities to maintain it?"
      }
    ],
    links: []
  },

  {
    id: "probability-ai",
    title: "Probability for AI",
    subtitle: "Thinking about uncertainty mathematically",
    category: "ai",
    type: "research",
    fileType: "LEARNING",
    date: "2026-10-10",
    icon: "◈",
    description:
      "Notes on the probability concepts that support machine learning and reasoning under uncertainty.",
    body: [
      {
        heading: "WHY PROBABILITY",
        text:
          "Machine-learning systems often operate with incomplete information. Probability provides a mathematical framework for describing uncertainty rather than treating every conclusion as absolute."
      },
      {
        heading: "THE CORE IDEA",
        text:
          "A probability model describes possible outcomes and assigns probabilities to events. In repeated independent trials, the chance of a sequence of outcomes can often be calculated by multiplying their individual probabilities."
      },
      {
        heading: "THE CONNECTION TO AI",
        text:
          "Probability appears in classification, Bayesian inference, probabilistic modelling, and the evaluation of uncertain predictions."
      },
      {
        heading: "A USEFUL HABIT",
        text:
          "When working with a probabilistic result, distinguish the assumptions of the model from the conclusion that follows mathematically."
      }
    ],
    links: []
  },

  {
    id: "building-in-public",
    title: "Building in Public",
    subtitle: "Why documenting the process matters",
    category: "notes",
    type: "ideas",
    fileType: "NOTE",
    date: "2026-10-08",
    icon: "▤",
    description:
      "A note on documenting experiments, decisions, mistakes, and unfinished work.",
    body: [
      {
        heading: "THE PROCESS IS PART OF THE WORK",
        text:
          "A finished project usually hides the sequence of questions, failed approaches, and revisions that produced it. Documenting those decisions creates a more useful record."
      },
      {
        heading: "WHAT TO RECORD",
        text:
          "Keep the original question, the approach attempted, the evidence observed, the limitations discovered, and the next experiment."
      },
      {
        heading: "THE POINT",
        text:
          "The goal is not to make every experiment look successful. It is to make the reasoning behind the work understandable and reproducible."
      }
    ],
    links: []
  },

  {
    id: "photography-observation",
    title: "Photography as Observation",
    subtitle: "Noticing light, atmosphere, and context",
    category: "photos",
    type: "ideas",
    fileType: "PHOTO LOG",
    date: "2026-10-06",
    icon: "▧",
    description:
      "An exploration of photography as a way of noticing and documenting the environment.",
    body: [
      {
        heading: "LOOK BEFORE EDITING",
        text:
          "Light direction, foreground, background, and framing determine much of what a photograph communicates before any editing begins."
      },
      {
        heading: "ATMOSPHERE",
        text:
          "Colour and contrast can help establish the mood of a scene. Subtle adjustments often preserve a stronger connection to the original conditions than extreme edits."
      },
      {
        heading: "DOCUMENTATION",
        text:
          "A useful photograph records more than an attractive view. It can preserve a moment, reveal a detail, or offer a particular perspective on a place."
      }
    ],
    links: []
  },

  {
    id: "ideas-in-progress",
    title: "Ideas in Progress",
    subtitle: "A place for questions worth exploring",
    category: "ideas",
    type: "ideas",
    fileType: "IDEA LOG",
    date: "2026-10-04",
    icon: "✳",
    description:
      "An evolving collection of questions, concepts, and possible experiments.",
    body: [
      {
        heading: "AN OPEN NOTEBOOK",
        text:
          "Not every interesting question needs to become a complete project immediately. Some ideas need more reading, better questions, or a small experiment before they become actionable."
      },
      {
        heading: "A SIMPLE METHOD",
        text:
          "Write down the question, explain why it is interesting, identify what evidence would help, and propose the smallest experiment that could make progress."
      },
      {
        heading: "STATUS",
        text:
          "This entry is a placeholder for ideas that have not yet become full research notes or working projects."
      }
    ],
    links: []
  },

  {
    id: "archive-readme",
    title: "How This Archive Works",
    subtitle: "The structure behind the digital workspace",
    category: "misc",
    type: "build",
    fileType: "DOCUMENT",
    date: "2026-10-01",
    icon: "TXT",
    description:
      "A short guide to the purpose and organisation of this personal archive.",
    body: [
      {
        heading: "STRUCTURE",
        text:
          "Entries are organised into categories so that research, builds, ideas, photography, and notes can be explored independently."
      },
      {
        heading: "SEARCH",
        text:
          "The archive search checks entry titles, descriptions, categories, and article content."
      },
      {
        heading: "MAINTENANCE",
        text:
          "New entries can be added to the archive data in blog.js. The interface automatically creates the corresponding file rows."
      }
    ],
    links: []
  }
];

/* ---------------------------------------------------------
   DOM REFERENCES
   --------------------------------------------------------- */

const fileList = document.getElementById("fileList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const itemCounter = document.getElementById("itemCounter");
const currentCategoryTitle = document.getElementById("currentCategoryTitle");
const selectionStatus = document.getElementById("selectionStatus");
const readerWindow = document.getElementById("readerWindow");
const readerContent = document.getElementById("readerContent");
const readerWindowTitle = document.getElementById("readerWindowTitle");
const explorerWindow = document.getElementById("explorerWindow");
const readmeWindow = document.getElementById("readmeWindow");
const toast = document.getElementById("toast");
const systemClock = document.getElementById("systemClock");

const readerTaskbarButton = document.getElementById("readerTaskbarButton");
const readmeTaskbarButton = document.getElementById("readmeTaskbarButton");

/* ---------------------------------------------------------
   STATE
   --------------------------------------------------------- */

let activeCategory = "all";
let activeFilter = "all";
let selectedEntryId = null;
let activeReaderEntryId = null;
let highestZIndex = 10;
let toastTimeout = null;
let draggedWindow = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

/* ---------------------------------------------------------
   HELPERS
   --------------------------------------------------------- */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

function getCategoryLabel(category) {
  const labels = {
    all: "ALL FILES",
    ai: "AI & RESEARCH",
    projects: "PROJECTS",
    ideas: "IDEAS",
    photos: "PHOTOGRAPHY",
    notes: "NOTES",
    misc: "MISCELLANEOUS"
  };

  return labels[category] || "ALL FILES";
}

function getEntryById(id) {
  return archiveEntries.find((entry) => entry.id === id);
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("visible");

  window.clearTimeout(toastTimeout);

  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2400);
}

function bringToFront(element) {
  if (!element) return;

  highestZIndex += 1;
  element.style.zIndex = String(highestZIndex);
}

/* ---------------------------------------------------------
   SEARCH AND FILTERING
   --------------------------------------------------------- */

function getFilteredEntries() {
  const query = (searchInput?.value || "").trim().toLowerCase();

  return archiveEntries.filter((entry) => {
    const matchesCategory =
      activeCategory === "all" || entry.category === activeCategory;

    const matchesFilter =
      activeFilter === "all" || entry.type === activeFilter;

    const searchableText = [
      entry.title,
      entry.subtitle,
      entry.description,
      entry.category,
      entry.type,
      entry.fileType,
      ...entry.body.map((section) =>
        `${section.heading || ""} ${section.text || ""}`
      )
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      query === "" || searchableText.includes(query);

    return matchesCategory && matchesFilter && matchesSearch;
  });
}

function getFileSymbolClass(entry) {
  if (entry.category === "ai") return "research";
  if (entry.category === "projects") return "project";
  if (entry.category === "photos") return "photo";

  return "";
}

function renderFiles() {
  if (!fileList) return;

  const entries = getFilteredEntries();

  currentCategoryTitle.textContent = getCategoryLabel(activeCategory);
  itemCounter.textContent = `${String(entries.length).padStart(2, "0")} FILES`;

  fileList.replaceChildren();

  entries.forEach((entry) => {
    const row = document.createElement("button");

    row.type = "button";
    row.className = "file-row";
    row.dataset.entryId = entry.id;
    row.setAttribute("aria-label", `Open ${entry.title}`);

    if (entry.id === selectedEntryId) {
      row.classList.add("selected");
    }

    const symbolClass = getFileSymbolClass(entry);

    row.innerHTML = `
      <span class="file-name">
        <span class="file-symbol ${symbolClass}">
          ${escapeHTML(entry.icon)}
        </span>
        <span class="file-name-text">
          <strong>${escapeHTML(entry.title)}</strong>
          <small>${escapeHTML(entry.subtitle)}</small>
        </span>
      </span>
      <span class="file-type">${escapeHTML(entry.fileType)}</span>
      <span class="file-date">${escapeHTML(formatDate(entry.date))}</span>
    `;

    row.addEventListener("click", () => {
      selectedEntryId = entry.id;

      fileList.querySelectorAll(".file-row").forEach((fileRow) => {
        fileRow.classList.toggle(
          "selected",
          fileRow.dataset.entryId === selectedEntryId
        );
      });

      selectionStatus.textContent = `SELECTED: ${entry.id.toUpperCase()}`;
    });

    row.addEventListener("dblclick", () => {
      openArticle(entry.id);
    });

    fileList.appendChild(row);
  });

  emptyState.hidden = entries.length !== 0;
  fileList.hidden = entries.length === 0;

  if (entries.length === 0) {
    selectionStatus.textContent = "NO MATCHING FILES";
  } else if (!entries.some((entry) => entry.id === selectedEntryId)) {
    selectionStatus.textContent = "READY";
  }
}

function setCategory(category) {
  const validCategories = [
    "all",
    "ai",
    "projects",
    "ideas",
    "photos",
    "notes",
    "misc"
  ];

  if (!validCategories.includes(category)) {
    category = "all";
  }

  activeCategory = category;

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.category === activeCategory
    );
  });

  renderFiles();
}

function setFilter(filter) {
  const validFilters = ["all", "research", "build", "ideas"];

  if (!validFilters.includes(filter)) {
    filter = "all";
  }

  activeFilter = filter;

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.filter === activeFilter
    );
  });

  renderFiles();
}

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

searchInput?.addEventListener("input", renderFiles);

document.getElementById("resetSearch")?.addEventListener("click", () => {
  if (searchInput) searchInput.value = "";

  setCategory("all");
  setFilter("all");

  selectedEntryId = null;
  renderFiles();

  showToast("ARCHIVE VIEW RESET");
});

/* ---------------------------------------------------------
   ARTICLE READER
   --------------------------------------------------------- */

function renderArticleBody(entry) {
  return entry.body
    .map((section) => {
      const heading = section.heading
        ? `<h2>${escapeHTML(section.heading)}</h2>`
        : "";

      const paragraph = section.text
        ? `<p>${escapeHTML(section.text)}</p>`
        : "";

      return `${heading}${paragraph}`;
    })
    .join("");
}

function renderArticleLinks(links = []) {
  if (!links.length) return "";

  const linkItems = links
    .map((link) => {
      const safeURL = escapeHTML(link.url);

      return `
        <li>
          <a href="${safeURL}" target="_blank" rel="noopener noreferrer">
            ${escapeHTML(link.label)} ↗
          </a>
        </li>
      `;
    })
    .join("");

  return `
    <div class="reader-rule"></div>
    <h2>EXTERNAL REFERENCES</h2>
    <ul>${linkItems}</ul>
  `;
}

function openArticle(id) {
  const entry = getEntryById(id);

  if (!entry) {
    showToast("FILE NOT FOUND");
    return;
  }

  activeReaderEntryId = id;
  selectedEntryId = id;

  readerWindowTitle.textContent = `${entry.id.toUpperCase()}.TXT`;

  readerContent.innerHTML = `
    <div class="reader-meta">
      <span class="reader-category">${escapeHTML(entry.category.toUpperCase())}</span>
      <span>${escapeHTML(entry.fileType)}</span>
      <span>${escapeHTML(formatDate(entry.date))}</span>
    </div>

    <h1>${escapeHTML(entry.title)}</h1>
    <p class="reader-excerpt">${escapeHTML(entry.description)}</p>

    <div class="reader-rule"></div>

    <div class="reader-body">
      ${renderArticleBody(entry)}
      ${renderArticleLinks(entry.links)}
    </div>

    <div class="reader-footer">
      <span>FILE ID: ${escapeHTML(entry.id)}</span>
      <button class="reader-back" type="button" data-reader-back>
        ← BACK TO ARCHIVE
      </button>
    </div>
  `;

  readerContent.querySelector("[data-reader-back]")?.addEventListener("click", () => {
    closeWindow("readerWindow");
    showWindow("explorerWindow");
  });

  readerWindow.hidden = false;
  readerTaskbarButton.hidden = false;

  showWindow("readerWindow");
  bringToFront(readerWindow);

  renderFiles();

  selectionStatus.textContent = `OPENED: ${entry.id.toUpperCase()}`;
  showToast(`OPENED ${entry.title.toUpperCase()}`);
}

/* ---------------------------------------------------------
   WINDOW MANAGEMENT
   --------------------------------------------------------- */

function showWindow(id) {
  const element = document.getElementById(id);

  if (!element) return;

  element.hidden = false;
  element.classList.remove("minimized");
  element.style.display = "";
  bringToFront(element);

  updateTaskbarState();
}

function closeWindow(id) {
  const element = document.getElementById(id);

  if (!element) return;

  if (id === "explorerWindow") {
    /*
      Keep the main explorer available: closing it resets its
      visible state instead of removing the only archive entry point.
    */
    element.hidden = true;
  } else {
    element.hidden = true;
  }

  if (id === "readerWindow") {
    readerTaskbarButton.hidden = true;
  }

  if (id === "readmeWindow") {
    readmeTaskbarButton.hidden = true;
  }

  updateTaskbarState();
}

function minimizeWindow(id) {
  const element = document.getElementById(id);

  if (!element) return;

  element.hidden = true;
  updateTaskbarState();
}

function maximizeWindow(id) {
  const element = document.getElementById(id);

  if (!element) return;

  element.classList.toggle("maximized");

  if (element.classList.contains("maximized")) {
    element.dataset.previousStyle = JSON.stringify({
      position: element.style.position,
      top: element.style.top,
      left: element.style.left,
      right: element.style.right,
      width: element.style.width,
      height: element.style.height,
      margin: element.style.margin
    });

    element.style.position = "fixed";
    element.style.top = "58px";
    element.style.left = "12px";
    element.style.right = "12px";
    element.style.width = "auto";
    element.style.height = "calc(100dvh - 122px)";
    element.style.margin = "0";
    element.style.overflowY = "auto";

    bringToFront(element);
  } else {
    try {
      const previous = JSON.parse(element.dataset.previousStyle || "{}");

      Object.assign(element.style, previous);
    } catch {
      element.style.position = "";
      element.style.top = "";
      element.style.left = "";
      element.style.right = "";
      element.style.width = "";
      element.style.height = "";
      element.style.margin = "";
    }

    element.style.overflowY = "";
    delete element.dataset.previousStyle;
  }
}

function updateTaskbarState() {
  document.querySelectorAll(".taskbar-app").forEach((button) => {
    const targetId = button.dataset.openWindow;
    const target = targetId ? document.getElementById(targetId) : null;

    button.classList.toggle(
      "active",
      Boolean(target && !target.hidden)
    );
  });
}

document.querySelectorAll("[data-window-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.windowAction;
    const target = button.dataset.target;

    if (action === "close") closeWindow(target);
    if (action === "minimize") minimizeWindow(target);
    if (action === "maximize") maximizeWindow(target);
  });
});

document.querySelectorAll("[data-open-window]").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.openWindow;

    if (id === "readerWindow" && !activeReaderEntryId) {
      showToast("OPEN A FILE FIRST");
      return;
    }

    if (id === "readmeWindow") {
      readmeTaskbarButton.hidden = false;
    }

    showWindow(id);
  });
});

/* ---------------------------------------------------------
   DESKTOP SHORTCUTS
   --------------------------------------------------------- */

document.querySelectorAll("[data-category-shortcut]").forEach((button) => {
  button.addEventListener("click", () => {
    showWindow("explorerWindow");

    setFilter("all");
    setCategory(button.dataset.categoryShortcut);

    explorerWindow.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* ---------------------------------------------------------
   DRAGGABLE WINDOWS

   Drag using a titlebar. On small screens, keep the window
   within the viewport rather than letting it disappear.
   --------------------------------------------------------- */

document.querySelectorAll(".window").forEach((windowElement) => {
  const handle = windowElement.querySelector("[data-drag-handle]");

  if (!handle) return;

  handle.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".window-controls")) return;
    if (windowElement.classList.contains("maximized")) return;

    /*
      The main explorer stays in normal document flow.
      Other windows can be dragged when they are positioned
      independently.
    */
    if (windowElement.id === "explorerWindow") return;

    draggedWindow = windowElement;
    bringToFront(draggedWindow);

    const rect = draggedWindow.getBoundingClientRect();

    dragOffsetX = event.clientX - rect.left;
    dragOffsetY = event.clientY - rect.top;

    draggedWindow.style.position = "fixed";
    draggedWindow.style.margin = "0";
    draggedWindow.style.left = `${rect.left}px`;
    draggedWindow.style.top = `${rect.top}px`;
    draggedWindow.style.right = "auto";

    handle.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  });

  handle.addEventListener("pointermove", (event) => {
    if (draggedWindow !== windowElement) return;

    const maxLeft = Math.max(0, window.innerWidth - windowElement.offsetWidth);
    const maxTop = Math.max(50, window.innerHeight - 70);

    const left = Math.min(
      Math.max(0, event.clientX - dragOffsetX),
      maxLeft
    );

    const top = Math.min(
      Math.max(50, event.clientY - dragOffsetY),
      maxTop
    );

    windowElement.style.left = `${left}px`;
    windowElement.style.top = `${top}px`;
  });

  const stopDragging = () => {
    if (draggedWindow === windowElement) {
      draggedWindow = null;
    }
  };

  handle.addEventListener("pointerup", stopDragging);
  handle.addEventListener("pointercancel", stopDragging);
});

/* ---------------------------------------------------------
   LIVE CLOCK
   --------------------------------------------------------- */

function updateClock() {
  if (!systemClock) return;

  systemClock.textContent = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());
}

updateClock();
window.setInterval(updateClock, 1000);

/* ---------------------------------------------------------
   KEYBOARD SHORTCUTS
   --------------------------------------------------------- */

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping =
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target.isContentEditable;

  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    searchInput?.focus();
    return;
  }

  if (event.key === "Escape") {
    if (searchInput && document.activeElement === searchInput) {
      searchInput.blur();
      searchInput.value = "";
      renderFiles();
      return;
    }

    if (!readerWindow.hidden) {
      closeWindow("readerWindow");
      return;
    }

    if (!readmeWindow.hidden) {
      closeWindow("readmeWindow");
    }
  }

  if (event.key === "Enter" && !isTyping && selectedEntryId) {
    openArticle(selectedEntryId);
  }
});

/* ---------------------------------------------------------
   INITIALISE
   --------------------------------------------------------- */

renderFiles();
updateTaskbarState();
updateClock();

console.log(
  `%c ARCHIVE.EXE %c ${archiveEntries.length} FILES LOADED `,
  "background:#ff6caf;color:#03050b;font-weight:bold;padding:4px;",
  "background:#0d101a;color:#d5b8ff;padding:4px;"
);
