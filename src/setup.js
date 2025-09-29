console.log('Setup script loaded');
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const minutes = parseFloat(button.getAttribute('data-minutes'));
    if (minutes === 0) {
      chrome.runtime.sendMessage({ action: 'clearInterval' });
      console.log('Sent message to clear interval');
      timer = setTimeout(() => {
        window.close();
      }, 300); // Close after 0.3 seconds
      return;
    }
    chrome.runtime.sendMessage({ action: 'setInterval', minutes });
    console.log('Sent message to set interval:', minutes);
    timer = setTimeout(() => {
      window.close();
    }, 300); // Close after 0.3 seconds
  });
});
