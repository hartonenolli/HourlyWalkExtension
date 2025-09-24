chrome.runtime.onInstalled.addListener(() => {
  setUpWindow();
  chrome.alarms.create("walkReminder", { periodInMinutes: 0.25 });
});

chrome.runtime.onStartup.addListener(() => {
  setUpWindow();
  chrome.alarms.create("walkReminder", { periodInMinutes: 0.25 });
});

function setUpWindow() {
  chrome.windows.create({
    url: "setup.html",
    type: "popup",
    width: 400,
    height: 600,
  });
}

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
