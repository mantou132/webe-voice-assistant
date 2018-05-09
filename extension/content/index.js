window.speechSelector = () => {
  const text = getSelection().toString();
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};
