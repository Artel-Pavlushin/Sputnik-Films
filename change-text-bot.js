const btn2 = document.getElementById('bot');

// ✅ Change button text on click
btn2.addEventListener('click', function handleClick1() {
    const initialText = 'hello@sputnikfilms.ru';

    btn2.innerHTML = `<p style="display: none;" id="text-to-copy">hello@sputnikfilms.ru</p>
  <p class="contact__bracket contact__text">[</p>
  <p class="contact__text" id="text-display">
      скопировано</p>
  <p class="contact__bracket contact__text">]</p>`;
});


btn2.addEventListener('onmouseover', function backtext1() {
    const initialText = 'скопировано';

    btn2.innerHTML = `<p style="display: none;" id="text-to-copy">hello@sputnikfilms.ru</p>
  <p class="contact__bracket contact__text">[</p>
  <p class="contact__text" id="text-display">
  hello@sputnikfilms.ru </p>
  <p class="contact__bracket contact__text">]</p>`;
});
