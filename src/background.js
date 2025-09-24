chrome.runtime.onInstalled.addListener(() => {
  setUpWindow();
});

chrome.runtime.onStartup.addListener(() => {
  setUpWindow();
});

function setUpWindow() {
  chrome.windows.create({
    url: "setup.html",
    type: "popup",
    width: 400,
    height: 600,
  });
}

// Function to set or clear the alarm
function setWalkReminder(minutes) {
  chrome.alarms.create("walkReminder", { periodInMinutes: minutes });
}

// Listen for messages from setup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setInterval' && typeof request.minutes === 'number') {
    setWalkReminder(request.minutes);
    sendResponse({ status: 'success' });
  }
  return true;
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "walkReminder") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Time to Walk!",
      message: "It's been an hour. Time to take a short walk and stretch your legs.",
      priority: 2,
    });
  }
});
