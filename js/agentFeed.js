const logEntries = [
  "[Pines]:  Intercepted squirrel chatter decoded: 'They know about the fire ring.'",
  "[Ember]:  Agent Pines last seen near Old Faithful. Weather patterns unstable. Go Rain Man, Go Rain Man!",
  "[Drift]:  Psalm Fragment Beta located beneath employee firepit, Canyon.",
  "[Wren]:   Cache Fragment Delta compromised. Initiate ember sweep protocol.",
  "[Tern]:   Contact with Agent Drift lost at Juniper Dormitory.",
  "[Soot]:   Elk cluster near Lamar Valley has not blinked in 3 hours.",
  "[Hollow]: Singing reported near the Yellowstone River at 02:36. No other agents present.",
  "[Cinder]: Unidentified boot prints leading to Fire Cache 03.",
  "[Flint]:  Bear scat arranged by size and color found outside Old Faithful Inn.",
  "[Pines]:  Report #487: ‘Heard the rocks whispering again.’",
  "[Ember]:  Shadow on trail cam didn’t match any known silhouette.",
  "[Drift]:  Agent Ember reported missing—then reappeared at roll call.",
  "[Wren]:   Cache 07 reported humming. Recommend auditory recon.",
  "[Tern]:   Raccoon paw prints found in perfect triangle formation.",
  "[Soot]:   Moss sample from Canyon exhibits luminescence at dusk.",
  "[Hollow]: Pinecone glyph discovered on interior door at Pelican dorm.",
  "[Cinder]: Fog thickness exceeded protocol limits. Initiate Mistwalk.",
  "[Flint]:  Unknown hymn echo detected near Fire Ring Theta.",
  "[Pines]:  Journal page found. Entry ends mid-sentence. No author listed.",
  "[Ember]:  Raven took bread. Returned something heavier.",
  "[Drift]:  Singing resumed at 03:14. This time, in harmony.",
  "[Wren]:   Raccoon spotted holding what appears to be a Xanterra ID. I guess they really do hire anyone.",
  "[Ember]:  S’mores left unattended. Only graham cracker fragments remain.",
  "[Soot]:   Agent Ember reported laughter in the woods. No others confirmed.",
  "[Hollow]: 17th pine tree at Mammoth no longer matches baseline photo.",
  "[Cinder]: Bark inscriptions altered since previous scan.",
  "[Flint]:  Agent Rhyolite issued psychic distress call. Frequency unreadable.",
  "[Pines]:  Three spoons found buried in a circle. Message unclear.",
  "[Ember]:  Coordinates 44.510116°N, -110.274736°W show elevated Cache activity.",
  "[Drift]:  Manual fragment disintegrated upon exposure to direct sunlight.",
  "[Wren]:   Fire ring at Canyon found rearranged at dawn.",
  "[Tern]:   Silence exceeded natural limits. Suspect wildlife withholding sound.",
  "[Soot]:   Feather with flame-like markings found outside Bison Dorm.",
  "[Hollow]: Signal repeat detected. Origin: beneath chapel floorboards.",
  "[Cinder]: Chapel pew grooved with repeated etchings: 'Xanterra? More like Xanterrible.'",
  "[Flint]:  Sand near lake spells 'RETURN' when undisturbed.",
  "[Pines]:  EDR trays stacked in spiral near trash enclosure.",
  "[Ember]:  Unauthorized sermon transcript found near Site Alpha.",
  "[Drift]:  Agent Echo reported 'shadows where shadows shouldn't be.' Haven't seen him since.",
  "[Wren]:   One boot replaced with pine needles. Owner unaware.",
  "[Tern]:   Flashlight flickered once. Then pulsed 7 times.",
  "[Soot]:   Stone cairn formed overnight. Not ranger-approved.",
  "[Hollow]: Death in Yellowstone bookmarked to page 143 in all copies.",
  "[Cinder]: Thermos left behind. Now contains melted wax.",
  "[Pines]:  Agents warned not to whistle Psalm 23 in canyon again.",
  "[Flint]:  Reflection in Columbine dorm mirror blinked out of sync.",
  "[Ember]:  All field books turned facing west. Simultaneously.",
  "[Drift]:  Tent zipper malfunctioned. Scratches inside.",
  "[Wren]:   Cache Alpha glowed faintly at moonrise.",
  "[Tern]:   Message inscribed at Yankee Jim Canyon.",
  "[Soot]:   Unmarked envelope delivered by Raven. No postage.",
  "[Hollow]: Someone’s name appeared in the condensation on window. Who's Shalyssa?",
  "[Cinder]: Canyon team lead seems trustworthy... too trustworthy. Continue surveillance.",
  "[Flint]:  Firewood rearranged into fish symbol. No known source.",
  "[Pines]:  Detected humming from pinecone pile.",
  "[Ember]:  Manual fragment found in Lake dishpit. Ink was wet.",
  "[Drift]:  Agent Pines’ ID badge appeared near amphitheater.",
  "[Wren]:   Rain only fell within five-foot radius of cache.",
  "[Tern]:   Squirrel stared too long. May be watching.",
  "[Soot]:   Rations missing. Replaced with trail mix and feather.",
  "[Hollow]: Echo repeated phrase: 'Still here.'",
  "[Cinder]: Woke to find service flyer sheet taped to inside of tent.",
  "[Flint]:  Lodgepole pine suddenly no longer visible on map.",
  "[Pines]:  Bison looked directly at agent and nodded.",
  "[Ember]:  Tree marked with three vertical slashes overnight.",
  "[Drift]:  Voice on radio said: 'Wrong frequency. Right place.'",
  "[Wren]:   Trail dust smells of campfire before ignition.",
  "[Tern]:   Water in canteen shimmered briefly. Normal after prayer.",
  "[Soot]:   Message carved in soap: 'They followed the wrong raven.'",
  "[Hollow]: Agent’s shadow lingered after departure. Measured at 2.4s.",
  "[Cinder]: Xanterra uniform repelled Emberlight again. Likely polyester shielding.",
  "[Flint]:  Legendary hospitality. Legendary breakroom grief.",
  "[Pines]:  Cache nearly discovered—covered it with a Xanterra training manual. No one touched it.",
  "[Ember]:  Xanterra employee of the month observed helping a guest. Emotionally detached but efficient.",
  "[Drift]:  Soft footprint. Crushed spirit.",
  "[Wren]:   We infiltrated Xanterra orientation. Raccoons already had the projector.",
  "[Tern]:   Old Faithful Balcony chairs replaced with Xanterra folding units. Flame flickered in protest.",
  "[Soot]:   Attempted Cache drop in laundry room. Mistaken for guest towel. Burned.",
  "[Hollow]: Legendary hospitality with a slightly haunted tone.",
  "[Cinder]: Agent overheard muttering: 'Xanterra is a lifestyle. A tired, aproned lifestyle.'",
  "[Flint]:  Xanterra: Where your break is the walk between two disasters.",
  "[Pines]:  I originally came for the nature. I stayed because my manager hid my time-off request.",
  "[Ember]:  We don’t clock out. We just vanish into the linen closet.",
  "[Drift]:  Legendary hospitality. Historic morale.",
  "[Wren]:   My love language is someone covering my shift so I can cry by a geyser.",
  "[Tern]:   This isn't just a job. It’s a legally binding canyon cult with mop buckets.",
  "[Soot]:   Teamwork makes the scream work.",
  "[Hollow]: Sleep. Eat. Fold towels. Repeat.",
  "[Cinder]: At Xanterra, you’ll meet lifelong friends, eternal mosquitos, and the ghost of your ambitions.",
  "[Flint]:  Sure, the views are amazing. So is the look in my eyes when I tell guests ‘the Wi-Fi is down.’",
  "[Pines]:  Guys, can we please stop using the live feed for random updates.",
  "[Pines]:  I know working for Xanterra sucks, but there's a better use of our time.",
  "[Pines]:  Just a reminder, the live feed is not for your fan fiction. Looking at you, Drift.",
  "[Pines]:  Can someone explain why our log entries keep getting weirder every week? Is this a bet?",
  "[Pines]:  If anyone needs me, I’ll be pretending to check signal strength and actually eating snacks.",
  "[Pines]:  Soot, you can’t just redact your chores. Sincerely, your Director.",
  "[Pines]:  We are *not* accepting new cryptid sightings until you file last week’s reports. Thanks.",
  "[Pines]:  Please remember: if you’re reading this, you’re probably too deep in the simulation.",
  "[Pines]:  Whoever keeps submitting haikus about the EDR, you’re on thin ice. But I’m weirdly impressed.",
  "[Pines]:  I swear the logs used to make more sense before Hollow started sleepwalking.",
  "[Pines]:  Reminder: Our health plan does not cover existential dread caused by reading the live feed.",
  "[Ember]:  Does anyone remember which cache we’re not supposed to touch? Asking for a friend.",
  "[Ember]:  Is it normal for the radio to pick up singing raccoons, or should I switch frequencies?",
  "[Ember]:  I refilled the lanterns with… uh, whatever was in the blue can. That’s fine, right?",
  "[Ember]:  Wait, do we actually have a squirrel agent, or did I just give my trail mix to a regular squirrel?",
  "[Ember]:  If the fire ring starts glowing, am I supposed to write that down or just… leave?",
  "[Wren]:   If anyone finds my motivation, you can throw it off the Canyon. I gave up looking.",
  "[Wren]:   I didn’t cry in the supply closet today. Progress?",
  "[Wren]:   Every time the Wi-Fi goes out, I lose another fragment of hope.",
  "[Wren]:   Sorry for snapping earlier. I just haven’t slept since the last time Pines approved time off.",
  "[Wren]:   Honestly, if the raccoons take over my job, I’ll train them myself. Maybe they’ll do better.",
  "[Drift]:  If anyone’s reading this from Gardiner, send a signal. Or a pizza. Either is fine.",
  "[Drift]:  Still the only agent at Grant. The silence is loud. Pretty sure my only coworkers now are pine martens.",
  "[Drift]:  Another day, another echo. Starting to think I’m just talking to myself on the feed.",
  "[Drift]:  Does the mist always look like it’s waving goodbye, or is that just for me?",
  "[Drift]:  Every time I hear a bird call, I pretend it’s Pines checking in. It never is.",
  "[Echo]:   Still here",
  "[Echo]:   I honestly don't know where I am. When are you all going to find me?"
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

  while (container.children.length > 10) {
    container.removeChild(container.firstChild);
  }

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