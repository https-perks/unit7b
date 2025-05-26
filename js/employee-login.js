// === employee-login.js ===

// 1. List of allowed user/pass combos (with display names & avatar initials)
const VALID_CREDENTIALS = [
  { username: "unit7bagent", password: "proceed2025", display: "Agent", avatar: "A", avatarImg: "" },
  { username: "pines", password: "director68", display: "Director Pines", avatar: "P", avatarImg: "/portal/agent-images/pines.png" },
  { username: "ember", password: "alwayslost4nothing", display: "Agent Ember", avatar: "E", avatarImg: "/portal/agent-images/ember.png" },
  { username: "drift", password: "lonely1atgrant", display: "Agent Drift", avatar: "D", avatarImg: "/portal/agent-images/drift.png" },
  { username: "wren", password: "3eggsonly", display: "Agent Wren", avatar: "W", avatarImg: "/portal/agent-images/wren.png" },
  { username: "cinder", password: "1ghostelk", display: "Agent Cinder", avatar: "C", avatarImg: "/portal/agent-images/cinder.png" },
  { username: "hollow", password: "treefort40", display: "Agent Hollow", avatar: "H", avatarImg: "/portal/agent-images/hollow.png" },
  { username: "tern", password: "ravenhater1", display: "Agent Tern", avatar: "T", avatarImg: "/portal/agent-images/tern.png" },
  { username: "soot", password: "breadcrumb555", display: "Agent Soot", avatar: "S", avatarImg: "/portal/agent-images/soot.png" },
  { username: "fawn", password: "chippy23", display: "Agent Fawn", avatar: "F", avatarImg: "/portal/agent-images/fawn.png" },
  { username: "glint", password: "m00nwalking", display: "Agent Glint", avatar: "G", avatarImg: "/portal/agent-images/glint.png" },
  { username: "echo", password: "st1llm1ss1ng", display: "Agent Echo", avatar: "E", avatarImg: "/portal/agent-images/echo.png" },
  { username: "flint", password: "spark2024", display: "Agent Flint", avatar: "F", avatarImg: "/portal/agent-images/flint.png" },
];

// 2. Login helpers
function setLoggedIn(userObj) {
  sessionStorage.setItem("unit7b_logged_in", "true");
  sessionStorage.setItem("unit7b_username", userObj.username);
  sessionStorage.setItem("unit7b_display", userObj.display || userObj.username);
  sessionStorage.setItem("unit7b_avatar", userObj.avatar || (userObj.display ? userObj.display.charAt(0) : "A"));
  if (userObj.avatarImg) {
    sessionStorage.setItem("unit7b_avatar_img", userObj.avatarImg);
  } else {
    sessionStorage.removeItem("unit7b_avatar_img");
  }
}

function isLoggedIn() {
  return sessionStorage.getItem("unit7b_logged_in") === "true";
}

function isValidLogin(username, password) {
  // Return the whole object for personalization
  return VALID_CREDENTIALS.find(
    (cred) =>
      cred.username.toLowerCase() === username.toLowerCase() &&
      cred.password === password
  );
}

// 3. Login form logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  if (!form) return; // Not the login page

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorBox = document.getElementById("error-message");
    const userObj = isValidLogin(username, password);

    if (userObj) {
      setLoggedIn(userObj);
      window.location.href = "/portal/employee-login/agent-landing.html";
    } else {
      errorBox.textContent = "Incorrect username or password.";
      setTimeout(() => {
        errorBox.textContent = "";
        window.location.href = "/portal.html";
      }, 1500);
    }
  });
});

// 4. Page protection for portal pages
function protectPage() {
  if (!isLoggedIn()) {
    window.location.href = "/portal.html";
  }
}

// 5. Use on agent-landing.html to update title, heading, and avatar
function personalizeWelcome() {
  // Protect page first!
  protectPage();
  const display = sessionStorage.getItem('unit7b_display') || 'Agent';
  const avatar = sessionStorage.getItem('unit7b_avatar') || display.charAt(0).toUpperCase();
  const avatarImg = sessionStorage.getItem('unit7b_avatar_img');

  // Set the page <title>
  document.title = `Welcome, ${display}`;

  // Set a visible heading (if present)
  document.addEventListener("DOMContentLoaded", function () {
    let heading = document.getElementById('welcome-heading');
    if (heading) heading.textContent = `Welcome, ${display}`;

    let avatarElem = document.getElementById('agent-avatar');
    if (avatarElem) {
      if (avatarImg) {
        avatarElem.innerHTML = `<img src="${avatarImg}" alt="${display}" class="portal-avatar-img">`;
      } else {
        avatarElem.textContent = avatar;
      }
      avatarElem.setAttribute('data-agent', display);
    }
  });
}

// 6. Optional: Log out helper
function logOut() {
  sessionStorage.removeItem("unit7b_logged_in");
  sessionStorage.removeItem("unit7b_username");
  sessionStorage.removeItem("unit7b_display");
  sessionStorage.removeItem("unit7b_avatar");
  window.location.href = "/portal.html";
}

// Usage on the login page: <script src="/js/employee-login.js"></script>
// Usage on protected portal page: 
// <script src="/js/employee-login.js"></script>
// <script>personalizeWelcome();</script>
// For log out: <button onclick="logOut()">Log Out</button>
