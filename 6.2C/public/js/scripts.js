const cardList = [
  {
    title: "Drifters",
    image: "images/car1.jpg",
    desciption: "Drive fast, Drift Hard"
  },
  {
    title: "Classy",
    image: "images/car2.jpg",
    desciption: "Feeling a bit Classical?"
  },
  {
    title: "Fantasy-Like",
    image: "images/car3.jpg",
    desciption: "Truly Epic!"
  },
  {
    title: "Futuristic",
    image: "images/car4.jpg",
    desciption: "The Future is HERE!"
  },
  {
    title: "Powerful",
    image: "images/car5.jpg",
    desciption: "Ready for Anything"
  }
];

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
  let formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    password: $('#password').val(),
    email: $('#email').val()
  };
  console.log("Form Data Submitted: ", formData);
}


const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend =
      `<a class="carousel-item" href="#">
         <div class="card small">
           <div class="card-image">
             <img src="${item.image}">
           </div>
           <div class="card-content">
             <span class="card-title">${item.title}</span>
             <p>${item.desciption}</p>
           </div>
         </div>
       </a>`;

    $("#card-carousel").append(itemToAppend);
  });
}

$(document).ready(function(){

  $('.materialboxed').materialbox();

  $('#formSubmit').click(() => {
    submitForm();
  })

  addCards(cardList);

  $('.modal').modal();

  $('.carousel').carousel({
    fullWidth: false,
    indicators: true
  });
  setInterval(function(){
    $('.carousel').carousel('next');
  }, 1000);
});
