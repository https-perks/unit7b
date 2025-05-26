function revealAgents() {
  const code = document.getElementById("raven-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const agentMap = {
    "directory-status": "Directory updated. Clearance validated.",
    "agent-pines": "Ryan Perkins",
    "agent-ember": "To Be Determined",
    "agent-drift": "Aidan",
    "agent-wren": "Rylan Short", 
    "agent-cinder": "Keith Short",
    "agent-hollow": "To Be Determined",
    "agent-tern": "Grace Short",
    "agent-soot": "Emma Spengler",
    "agent-fawn": "Elsie Sorrell",
    "agent-glint": "To Be Determined",
    "agent-echo": "Makayla Kunde",
    "agent-flint": "To Be Determined",
    "quote": "become us",
    "directive": "- Director Pines",
    "agent-bracken": "Jordan",
    "agent-tinder": "Carrie Anne Perkins",
    "agent-wool": "Illiana",
    "agent-bluff": "To Be Determined.",
    "agent-peat": "To Be Determined.",
    "agent-lumen": "Scotty",
    "agent-vapor": "To Be Determined.",
    "agent-blaze": "To Be Determined.",
    "agent-crook": "To Be Determined.",
    "agent-burl": "To Be Determined.",
    "agent-haze": "To Be Determined.",
    "agent-marsh": "To Be Determined.",
    "agent-flintlock": "To Be Determined.",
    "agent-gale": "To Be Determined.",
    "agent-thorn": "To Be Determined.",
    "agent-brindle": "To Be Determined.",
    "agent-slate": "To Be Determined.",
    "agent-twig": "To Be Determined.",
    "agent-knapsack": "To Be Determined.",
    "agent-bough": "To Be Determined."
  };

  if (code === "raven42") {
    accessDenied.style.display = "none";

    Object.entries(agentMap).forEach(([id, name], index) => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove("redacted");
        el.textContent = "Decrypting...";
        el.classList.add("decrypting"); // <-- ADD THIS HERE
        setTimeout(() => {
          el.textContent = name;
          el.classList.remove("decrypting"); // optional: remove flicker after reveal
        }, 500 + index * 200);
      }      
    });

  } else {
    accessDenied.style.display = "block";
  }
}