const btn1 = document.getElementById('contact');

// ✅ Change button text on click
btn1.addEventListener('click', function handleClick() {
    const initialText = 'hello@sputnikfilms.ru';

    btn1.innerHTML = `<p style="display: none;" id="text-to-copy">hello@sputnikfilms.ru</p>
  <p class="contact__bracket contact__text">[</p>
  <p class="contact__text" id="text-display">
      скопировано</p>
  <p class="contact__bracket contact__text">]</p>`;
});


btn1.addEventListener('onmouseover', function backtext() {
    const initialText = 'скопировано';

    btn1.innerHTML = `<p style="display: none;" id="text-to-copy">hello@sputnikfilms.ru</p>
  <p class="contact__bracket contact__text">[</p>
  <p class="contact__text" id="text-display">
  hello@sputnikfilms.ru </p>
  <p class="contact__bracket contact__text">]</p>`;
});



