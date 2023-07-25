const images = document.querySelectorAll(".img-box img");

const h2 = document.querySelector("h2");
//console.log(h2);

//console.log(images);

//now select the star you want and its index

const ratingStars = () => {
  let arrOfScripts = [
    "We really served you poorly, how can we improve?",
    "Why did you choose 2 stars, and not 1?",
    "3 stars mean we did something right, correct?",
    "4 stars?",
    "Thanks for the 5 star rating",
  ];

  //for (let i = 0; i < arrOfScripts.length; i++) {
  //let arrIndex = arrOfScripts[i];
  //console.log(arrIndex);
  images.forEach((star, index) => {
    //add an event listener to the star
    star.addEventListener("click", () => {
      //console.log("functioning", index);
      //make sure the selected star is functioning
      //images.forEach((star, index2) => {
      // console.log(star, index2);
      //after selecting each image for manipulation
      //now it is time to apply rating abiliyties to code
      let message = arrOfScripts[index];
      console.log(message);
      h2.innerText = message;

      for (let j = 0; j < images.length; j++) {
        images[j].classList.remove("selected");
      }

      for (let i = 0; i <= index; i++) {
        images[i].classList.add("selected");
      }
      /* if (index1 >= index2) {
            star.classList.add("selected");
            //console.log(star, );

            //return (h2.innerText = `${arrIndex}`);
          } else {
            star.classList.remove("selected");
          } */
    });
  });
  //});
  // }
};

//for each image, i want to add an event handler
//by so doing, the the index of the star clicked would post the same index from the array of strings

ratingStars();

//pick selected images and return a script

const selectedArrayScript = () => {
  //console.log(h2);
};

selectedArrayScript();
