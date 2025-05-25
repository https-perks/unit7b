const logEntries = [
  "Intercepted squirrel chatter decoded: 'They know about the fire ring.'",
  "Agent Pines last seen near Old Faithful. Weather patterns unstable.",
  "Psalm Fragment Beta located beneath communal firepit, Canyon.",
  "Cache Fragment Delta compromised. Initiate ember sweep protocol.",
  "Contact with Agent Drift lost at Mammoth dormitory.",
  "Elk cluster near Lamar Valley has not blinked in 3 hours.",
  "Singing reported near the Yellowstone River at 02:36. No agents present.",
  "Unidentified boot prints leading to Fire Cache 03.",
  "Bear scat arranged in spirals found outside Old Faithful chapel.",
  "Report #487: ‘Heard the rocks whispering again.’",
  "Shadow on trail cam didn’t match any known silhouette.",
  "Agent Ember reported missing—then reappeared at roll call.",
  "Cache 07 reported humming. Recommend auditory recon.",
  "Raccoon paw prints found in perfect triangle formation.",
  "Moss sample from Canyon exhibits luminescence at dusk.",
  "Pinecone glyph discovered on interior dormitory door, Lake.",
  "Fog thickness exceeded protocol limits. Initiate Mistwalk.",
  "Unknown hymn echo detected near Fire Ring Theta.",
  "Journal page found. Entry ends mid-sentence. No author listed.",
  "Raven took bread. Returned something heavier.",
  "Singing resumed at 03:14. This time, in harmony.",
  "Raccoon spotted holding what appears to be a field manual scrap.",
  "S’mores left unattended. Only graham cracker fragments remain.",
  "Agent Obsidian reported laughter in the woods. No others confirmed.",
  "17th pine tree at Mammoth no longer matches baseline photo.",
  "Bark inscriptions altered since previous scan.",
  "Agent Rhyolite issued psychic distress call. Frequency unreadable.",
  "Three spoons found buried in a circle. Message unclear.",
  "Coordinates 44.510116°N, -110.274736°W show elevated Cache activity.",
  "Manual fragment disintegrated upon exposure to direct sunlight.",
  "Fire ring at Canyon found rearranged at dawn.",
  "Silence exceeded natural limits. Suspect wildlife withholding sound.",
  "Feather with flame-like markings found outside Bison Dorm.",
  "Signal repeat detected. Origin: beneath chapel floorboards.",
  "Chapel pew grooved with repeated etchings: 'Xanterra? More like Xanterrible.'",
  "Sand near lake spells 'RETURN' when undisturbed.",
  "EDR trays stacked in spiral near trash enclosure.",
  "Unauthorized sermon transcript found near Site Alpha.",
  "Agent Paintbrush reported 'shadows where shadows shouldn't be.'",
  "One boot replaced with pine needles. Owner unaware.",
  "Flashlight flickered once. Then pulsed 7 times.",
  "Stone cairn formed overnight. Not ranger-approved.",
  "Chaplain’s manual bookmarked to page 143 in all copies.",
  "Thermos left behind. Now contains melted wax.",
  "Agents warned not to whistle Psalm 23 in canyon again.",
  "Reflection in dorm mirror blinked out of sync.",
  "All field hats turned facing west. Simultaneously.",
  "Tent zipper malfunctioned. Scratches inside.",
  "Cache Alpha glowed faintly at moonrise.",
  "Message inscribed at Yankee Jim Canyon.",
  "Unmarked envelope delivered by Raven. No postage.",
  "Someone’s name appeared in the condensation on window.",
  "Canyon team lead seems trustworthy... too trustworthy. Continue surveillance.",
  "Firewood rearranged into fish symbol. No known source.",
  "Detected humming from pinecone pile.",
  "Manual fragment found under food bin. Ink was wet.",
  "Agent Pines’ ID badge appeared near amphitheater.",
  "Rain only fell within five-foot radius of cache.",
  "Squirrel stared too long. May be watching.",
  "Rations missing. Replaced with trail mix and feather.",
  "Echo repeated phrase: 'Still here.'",
  "Woke to find service flyer sheet taped to inside of tent.",
  "Lodgepole pine suddenly no longer visible on map.",
  "Bison looked directly at agent and nodded.",
  "Tree marked with three vertical slashes overnight.",
  "Voice on radio said: 'Wrong frequency. Right place.'",
  "Trail dust smells of campfire before ignition.",
  "Water in canteen shimmered briefly. Normal after prayer.",
  "Message carved in soap: 'They followed the wrong raven.'",
  "Agent’s shadow lingered after departure. Measured at 2.4s.",
  "Xanterra uniform repelled Emberlight again. Likely polyester shielding.",
  "Legendary hospitality. Legendary breakroom grief.",
  "Cache nearly discovered—covered it with a Xanterra training manual. No one touched it.",
  "Xanterra employee of the month observed helping a guest. Emotionally detached but efficient.",
  "Soft footprint. Crushed spirit.",
  "We infiltrated Xanterra orientation. Raccoons already had the projector.",
  "Chapel chairs replaced with Xanterra folding units. Flame flickered in protest.",
  "Attempted Cache drop in laundry room. Mistaken for guest towel. Burned.",
  "Legendary hospitality with a slightly haunted tone.",
  "Agent overheard muttering: 'Xanterra is a lifestyle. A tired, aproned lifestyle.'",
  "Xanterra: Where your break is the walk between two disasters.",
  "I came for the nature. I stayed because my manager hid my time-off request.",
  "We don’t clock out. We just vanish into the linen closet.",
  "Legendary hospitality. Historic morale.",
  "My love language is someone covering my shift so I can cry by a geyser.",
  "This isn't just a job. It’s a legally binding canyon cult with mop buckets.",
  "Teamwork makes the scream work.",
  "Sleep. Eat. Fold towels. Repeat.",
  "At Xanterra, you’ll meet lifelong friends, eternal mosquitos, and the ghost of your ambitions.",
  "Sure, the views are amazing. So is the look in my eyes when I tell guests ‘the Wi-Fi is down.’",
];

let availableEntries = [...logEntries];
let activeCursor = null;

function typeLog(entry, container, callback) {
  let i = 0;
  const p = document.createElement("p");
  p.classList.add("log-line");
  const span = document.createElement("span");
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.textContent = "|";
  cursor.style.animation = "none";
  p.appendChild(span);
  p.appendChild(cursor);
  container.appendChild(p);

  if (activeCursor) activeCursor.remove();
  activeCursor = cursor;

  const interval = setInterval(() => {
    span.textContent += entry.charAt(i);
    container.scrollTop = container.scrollHeight;
    i++;
    if (i >= entry.length) {
      clearInterval(interval);
      cursor.style.animation = "blink 1s step-start infinite";
      if (callback) callback();
    }
  }, 40);
}

function scheduleNextTyping(container) {
  const delay = 5000 + Math.random() * 5000;
  setTimeout(() => {
    if (availableEntries.length === 0) {
      availableEntries = [...logEntries];
    }
    const index = Math.floor(Math.random() * availableEntries.length);
    const entry = availableEntries.splice(index, 1)[0];
    typeLog(entry, container, () => scheduleNextTyping(container));
  }, delay);
}

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("log-entry");
  container.style.overflowY = "auto";
  container.style.maxHeight = "150px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "flex-end";

  const firstIndex = Math.floor(Math.random() * availableEntries.length);
  const firstEntry = availableEntries.splice(firstIndex, 1)[0];
  typeLog(firstEntry, container, () => scheduleNextTyping(container));
});