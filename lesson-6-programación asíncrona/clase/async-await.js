// EJEMPLO 1

// function wait(ms=0) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   })
// }

// async function go() {
//   console.log("Starting")awa

//   await wait(2000);
//   console.log("Running");
//   console.log("Finish");
// }

// go();


// EJEMPLO 2

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

wait(200).then(() => {
  console.log('Done!');
})

const go = document.querySelector('.go');

async function animate2(e) {
  const el = e.currentTarget;
  // 1. Change the text to GO when clicked.
  el.textContent = 'GO';
  // 2. Make it a circle after 2 seconds
  await wait(200);
  el.classList.add('circle');
  await wait(500);
  el.classList.add('red');
  await wait(250);
  el.classList.remove('circle');
  await wait(500);
  el.classList.remove('red');
  el.classList.add('purple');
  await wait(500);
  el.classList.add('fadeOut');
}

go.addEventListener('click', animate2);