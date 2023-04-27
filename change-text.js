const btn = document.getElementById('contact');

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
    const initialText = 'hello@sputnikfilms.ru';

    btn.innerHTML = `<p style="display: none;" id="text-to-copy">hello@sputnikfilms.ru</p>
  <p class="contact__bracket contact__text">[</p>
  <p class="contact__text" id="text-display">
      скопировано</p>
  <p class="contact__bracket contact__text">]</p>`;
});


btn.addEventListener('onmouseover', function backtext() {
    const initialText = 'скопировано';

    btn.innerHTML = `<p style="display: none;" id="text-to-copy">hello@sputnikfilms.ru</p>
  <p class="contact__bracket contact__text">[</p>
  <p class="contact__text" id="text-display">
  hello@sputnikfilms.ru </p>
  <p class="contact__bracket contact__text">]</p>`;
});



