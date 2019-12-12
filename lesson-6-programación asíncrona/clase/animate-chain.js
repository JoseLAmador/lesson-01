const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

    wait(200).then(() => {
      console.log('Done!');
    });



const go = document.querySelector('.go');

function animate(e) {
  const el = e.currentTarget;
  // 1. Change the text to GO when clicked.
  el.textContent = 'GO';
  // 2. Make it a circle after 2 seconds
  wait(200)
    .then(() => {
      el.classList.add('circle');
      return wait(500);
    })
    .then(() => {
      // 3. Make it red after 0.5s
      el.classList.add('red');
      return wait(250);
    })
    .then(() => {
      el.classList.remove('circle');
      return wait(500);
    })
    .then(() => {
      el.classList.remove('red');
      el.classList.add('purple');
      return wait(500);
    })
    .then(() => {
      el.classList.add('fadeOut');
    })
}

go.addEventListener('click', animate);