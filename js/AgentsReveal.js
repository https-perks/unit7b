function revealAgents() {
  const code = document.getElementById("raven-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const agentMap = {
    "directory-status": "Directory updated. Clearance validated.",
    "agent-pines": "Ryan Perkins",
    "agent-ember": "Emma Spengler",
    "agent-drift": "Aidan Lastname",
    "agent-wren": "Rylan Short",
    "agent-cinder": "Grace Short",
    "agent-hollow": "Keith Short",
    "agent-tern": "Jeff Ballard",
    "agent-soot": "Valerie Ballard",
    "agent-fawn": "Elsie Sorrel",
    "agent-glint": "Kelsey Lundgard",
    "agent-echo": "Makayla Kunde",
    "agent-flint": "Yet to be named",
    "quote": "become us",
    "directive": "- Director Pines"
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