function revealLogs() {
  const code = document.getElementById("pines-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const logMap = {
    "log-status": "Logs updated. Clearance validated.",
    "BisonProtocol": "Code D6 – Non-hazardous parade",
    "Note1002": "\"YOU’RE LATE\"",
    "SteamSong": "Psalmic Sequence 23A",
    "RadioMessage": "Return to Ring 3",
    "NorrisThief": "Agent Ember",
    "SootNote": "TRY TEA",
    "PianoTune": "Nearer, My God, to Thee",
    "FinalLog": "THE FLAME WAITS",
    "Three agents entered. Only one returned.": "Incident Echo-Delta. Identities classified.",
    "502Boots": "pine needles",
    "504Audio": "pending analysis",
    "508Cake": "Charlie 418",
    "511Stone": "SEVEN-B",
    "514Memory": "blue lantern symbol",
    "524Chorus": "Yo Mama's hot mixtapes of 1992",
    "533Laugh": "Bubble butt, bubble butt, bubble bubble bubble butt...",
    "537Badge": "Unit 7-B Mini Task Force",
    "540Song": "Wasn't Me by Shaggy",
    "548Note": "I'm a catch.",
    "550Slip": "My milkshakes bring all the boys to the yard.",
    "559Wax": "Unit 7-B, return to sender",
    "560Photo": "FRIENDS",
    "562Bison": "one accidental nap",
    "563Sock": "thermal, size medium",
    "584Note": "Not a real thing",
    "586Redacted": "Further details of this meeting have been redacted for staff morale."
  };

  if (code === "agentpines17") {
    accessDenied.style.display = "none";

    Object.entries(logMap).forEach(([id, name], index) => {
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