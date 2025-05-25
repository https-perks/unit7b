function revealWildlifeLogs() {
  const code = document.getElementById("pines-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const wildlifeLogMap = {
    "wildlife-status": "Wildlife logs updated. Clearance validated.",
    "DecoyProtocol": "decoy",
    "WATCH": "WATCH",
    "Operational": "operational",
    "UnknownOrigin": "unknown",
    "MapFragmentCoords": "N44°36.2' W110°23.5'",
    "AnomalyFlag": "anomaly",
    "TimestampLoop": "loop",
    "SurveillanceEscalation": "surveillance escalation",
    "Evaluated": "evaluated",
    "CorruptedFootage": "corrupted",
    "Compromised": "compromised",
    "Cache2": "#2",
    "NoFlashReflection": "green",
    "Dry": "dry",
    "MorseHELP": "HELP",
    "FieldCode": "E7-B9",
    "CacheSymbolA": "symbol A",
    "CorruptedPhoto": "corrupted",
    "PatternA": "S2-Δ9",
    "CacheMarker": "cache marker",
    "Psalm23": "Psalm 23",
    "USBdrive": "USB drive",
    "ClassifiedReview": "classified",
    "KeySymbol": "key symbol",
    "GopherCache": "cache",
    "Glare": "glare"
  };

  if (code === "agentpines17") {
    accessDenied.style.display = "none";

    Object.entries(wildlifeLogMap).forEach(([id, name], index) => {
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

function revealEmberlightLogs() {
  const code = document.getElementById("pines-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const emberlightLogMap = {
    "emberlight-status": "Emberlight logs updated. Clearance validated.",
    "WaxRising": "wax rising",
    "WrittenInAsh": "it returns",
    "SigilN": "sigil N",
    "LightShape": "flame",
    "MorseCodeFog": "REVIVE",
    "CrowEyes": "emberlight",
    "Artifact9": "Psalm 29",
    "ShadowFigure": "shadow figure",
    "VisitorName": "EMBERLIGHT",
    "PrinterPhrase": "IT WAITS IN THE FIRE",
    "BreakfastCode": "flame code",
    "RoomCode": "A-7B-4"
  };

  if (code === "agentpines17") {
    accessDenied.style.display = "none";

    Object.entries(emberlightLogMap).forEach(([id, name], index) => {
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

function revealLanternLogs() {
  const code = document.getElementById("pines-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const lanternLogMap = {
    "lantern-status": "Lantern Slip logs updated. Clearance validated.",
    "LightUponArrival": "Light upon arrival",
    "ListenWhenDark": "Listen when dark",
    "StandByTheAsh": "Stand by the ash",
    "ItStillBurns": "It still burns",
    "YouAreNotAlone": "You are not alone",
    "WaitForNightfall": "Wait for nightfall",
    "TurnTwiceToSee": "Turn twice to see",
    "SevenStepsBack": "Seven steps back",
    "DoNotWakeThem": "Do not wake them",
    "LeftAtDawn": "Left at dawn",
    "WhenAllIsSilent": "When all is silent",
    "Wait": "Wait",
    "LanternIsWatching": "Lantern is watching",
    "BewareFalseFlame": "Beware false flame",
    "HideAtFirstLight": "Hide at first light",
    "AshCoversEmber": "Ash covers ember",
    "DonotLookUp": "Do not look up",
    "TheyWalkAfterDark": "They walk after dark",
    "DoNotOpenTheBox": "Do not open the box",
    "StandInCircle": "Stand in circle",
    "ItReturnsAtMidnight": "It returns at midnight",
    "RunIfYouHearIt": "Run if you hear it",
    "RememberThePath": "Remember the path",
    "ReverseTheOrder": "Reverse the order",
    "FollowTheCinders": "Follow the cinders",
    "TrustTheQuietOnes": "Trust the quiet ones",
    "TurnTheKeyTwice": "Turn the key twice",
    "AshesGoFirst": "Ashes go first",
    "HideIfRavensGather": "Hide if ravens gather",
    "BuryThisSlip": "Bury this slip",
    "KnockBeforeEntry": "Knock before entry",
    "EchoesRemain": "Echoes remain",
    "TraceTheLines": "Trace the lines",
    "WaitHere": "Wait here",
    "SpeakSoftly": "Speak softly",
    "DonotAnswer": "Do not answer",
    "MidnightIsSafe": "Midnight is safe",
    "DoNotLightTheLantern": "Do not light the lantern",
    "AshesSpeak": "Ashes speak",
    "FollowIfLost": "Follow if lost",
    "NeverReturnAlone": "Never return alone",
    "TurnAtTheStone": "Turn at the stone",
    "HideTheFlame": "Hide the flame",
    "WatchTheFire": "Watch the fire",
    "WaitForSignal": "Wait for signal",
    "AllIsNotLost": "All is not lost",
    "FollowTheLight": "Follow the light",
    "NotYet": "Not yet"
  };

  if (code === "agentpines17") {
    accessDenied.style.display = "none";

    Object.entries(lanternLogMap).forEach(([id, name], index) => {
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

function revealRaccoonLogs() {
  const code = document.getElementById("pines-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const raccoonLogMap = {
    "raccoon-status": "Raccoon Activity logs updated. Clearance validated.",
    "OperationMidnightSnack": "Operation Midnight Snack",
    "Psalm27": "27",
    "NotYourCache": "NOT YOUR CACHE",
    "StayBack": "STAY BACK",
    "AccessGranted": "ACCESS GRANTED",
    "Field42": "42",
    "TheMaze": "THE MAZE",
    "NiceTry": "NICE TRY",
    "CheddarHeist": "CHΞDDAR HΞIST",
    "MidnightBanquet": "MIDNIGHT BANQUET",
    "InTheWalls": "IN THE WALLS",
    "NotClean": "NOT CLEAN",
    "Conetact": "CONETACT",
    "WeAreMany": "WE ARE MANY",
    "WeKnow": "WE KNOW",
    "MoreSyrup": "MORE SYRUP",
    "TooSlow": "TOO SLOW",
    "FindUs": "FIND US",
    "GreenCode": "GREEN CODE",
    "NiceWork": "NICE WORK, DOC",
    "NotLost": "NOT LOST",
    "TryAgain": "TRY AGAIN",
    "Soon": "SOON",
    "TryHarder": "TRY HARDER",
    "RaccoonDust": "RACCOON DUST",
    "ReturnToSender": "RETURN TO SENDER",
    "WeSeeAll": "WE SEE ALL",
    "CloseEnough": "CLOSE ENOUGH",
    "YoullNeverFindThem": "YOU’LL NEVER FIND THEM",
    "NoRunning": "NO RUNNING IN THE HALLS",
    "RS13": "RS-13",
    "Five agents sent. None returned.": "Five agents sent. None returned.",
  };

  if (code === "agentpines17") {
    accessDenied.style.display = "none";

    Object.entries(raccoonLogMap).forEach(([id, name], index) => {
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

function revealLostAgentLogs() {
  const code = document.getElementById("pines-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const lostAgentLogMap = {
    "lostagent-status": "Lost Agent logs updated. Clearance validated.",
    "Director": "Former Director Caldera",
    "GoneToGround": "Where'd my last pinecone go?",
    "DontLookBack": "Don’t look back",
    "FindTheEggs": "is in the riddle, not the journey.",
    "AwakeInSpring": "Awake in spring",
    "TryAgainSoot": "the smoke that walks",
    "ImStillHere": "I’m still here",
    "UnderTheLog": "Under the log",
    "TakeTheBonePath": "Take the bone path",
    "TryTheOtherDoor": "Try the other door",
    "FollowTheLightSlip": "Follow the light slip",
    "BewareTheWind": "Beware the wind",
    "NoReturn": "No return",
    "TheTruthIsHidden": "The truth is hidden",
    "BurnThisPage": "Burn this page",
    "FindTheSpareKey": "Find the spare key",
    "YouAreNext": "You are next",
    "TheAnswerIsNorth": "The answer is north",
    "SeeYouSoon": "See you soon",
    "ItIsntGrape": "It isn’t grape",
    "LookToTheEast": "Look to the east",
    "ItWasntTheGround": "It wasn’t the ground"
  };

  if (code === "agentpines17") {
    accessDenied.style.display = "none";

    Object.entries(lostAgentLogMap).forEach(([id, name], index) => {
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

function revealRestrictedLogs() {
  const code = document.getElementById("restricted-code").value.trim().toLowerCase();
  const accessDenied = document.getElementById("access-denied");

  const restrictedLogMap = {
    "restricted-status": "Restricted logs updated. Clearance validated.",
    "FieldSite": "Emerald Basin, Unit 7",
    "SectionSeven": "Section Seven",
    "Phrase": "Be Still, Ember Awaits",
    "AccessID": "SABLE-711",
    "Location": "Observation Bunker South",
    "Purpose": "burning",
    "Listen": "listen closely",
    "BlockTime": "03:06",
    "RedactedVerse": "not included in this record",
    "B7": "sealed in iron, never opened",
    "WhereToGo": "Fire Ring 5",
    "TempBlock": "TEMPORARY BLOCK",
    "OverrideTime": "03:42",
    "ConvergencePhrase": "It passes through the flame",
    "Suspect": "Agent Hollow",
    "IncidentSection": "12.2",
    "AgentNames": "Agent Ember",
    "DirectorName": "Director Pines",
    "DontTrust": "lights",
    "SyndicateMsg": "operation continues",
    "AccessPath": "northwest crawlspace",
    "FinalEcho": "He calls",
    "Activation": "Flame ready",
    "LockdownCode": "77-31-02",
    "DevicePower": "psalmic resonance",
    "ContactCode": "31415",
    "ScriptureRedacted": "protect",
    "PhaseNum": "2",
    "ReturnBefore": "sun",
    "AnomalyCoords": "45.04, -110.71",
    "Observed": "glow with no source",
    "Memo": "Wren was right",
    "ArchiveLog": "A7-141",
    "ErrorCode": "541-22",
    "Sender": "Agent Soot",
    "SensorLog": "pulse-17 anomaly",
    "Statement": "it is still here",
    "PsalmicSequence": "Pattern 91B",
    "SeeMemo": "Director/4A",
    "WarningText": "The shadow",
    "PhaseRecord": "Phase Delta",
    "VaultLog": "missing pages",
    "EditTime": "03:14",
    "UserTag": "EMBER-ALERT",
    "LastPacket": "B-9A/END",
    "LastGuess": "Psalm118",
    "SeeEntry": "119A",
    "MeetingPlace": "Fire Circle",
    "UploadError": "ARCHIVE TIMEOUT",
    "WaxSigil": "Twin Pinecones",
    "AudioRedacted": "emberlight",
    "DeniedCode": "X-914",
    "RecallTime": "02:44",
    "LoopPhrase": "Stay Warm",
    "LanternSeal": "Agent Quill",
    "DirectorCode": "EMB-771",
    "DoNotOpen": "archive",
    "UploadPercent": "61%",
    "CandleTime": "214",
    "GlitchMsg": "CLEARANCE DENIED",
    "NoteWord": "HOME",
    "LockdownNum": "08-302",
    "CacheErrorTime": "03:09",
    "RepeaterSig": "pattern B-9",
    "IncidentSec": "17.4",
    "SeeEntry2": "217B",
    "PsalmicRedact": "watch over",
    "UplinkSrc": "Basin Relay",
    "OverrideCode": "EMBERLIGHT",
    "FireRingPacket": "7B-22",
    "MessageLoss": "NO SIGNAL"
  };

  if (code === "directorpineseyesonly") {
    accessDenied.style.display = "none";

    Object.entries(restrictedLogMap).forEach(([id, name], index) => {
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