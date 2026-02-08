function copyLink(button) {
  const input = button.previousElementSibling;

  // MÉTODO MODERNO (https / localhost)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(input.value).then(() => {
      feedback(button);
    });
  } 
  // MÉTODO ANTIGUO (fallback)
  else {
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    feedback(button);
  }
}

function feedback(button) {
  const original = button.textContent;
  button.textContent = "✅ Copiado";
  setTimeout(() => button.textContent = original, 1500);
}
