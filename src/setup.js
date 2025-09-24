console.log('Setup script loaded');
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const minutes = parseFloat(button.getAttribute('data-minutes'));
    chrome.runtime.sendMessage({ action: 'setInterval', minutes });
    console.log('Sent message to set interval:', minutes);
    window.close();
  });
});
