chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
  chrome.alarms.create("walkReminder", { periodInMinutes: 0.25 });
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