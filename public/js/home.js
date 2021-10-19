

announcements = JSON.parse(announcements);
var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

var eventcontainer = document.getElementById("eventcontainer");
month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderAnnouncements(order) {
  let start, increment;
  if (!order) {
    document.getElementById("announcement_order").innerHTML = "LATEST";
    start = 0;
    increment = 1;
  } else {
    document.getElementById("announcement_order").innerHTML = "OLDEST";
    start = announcements.length - 1;
    increment = -1;
  }

  let to_render = "";
  while (start < announcements.length && start >= 0) {
    let element = announcements[start];
    let date = new Date(element.creation);
    to_render += `
    <div class="boxes">
    <div class="card box shadow p-1 mb-1 bg-body rounded">
      <div class="card-body">
      <p class="card-title">
          ${announcements.creation}
            
       </p>
       
           <p class="card-text">
            ${element.description}
          </p>
          <a href="${
            element.link
          } " style="float:right;"><svg width="32" height="33" viewBox="0 0 32 33" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M21.4394 29.3923H10.546C5.83935 29.3923 2.66602 26.3643 2.66602 21.8456V10.2856C2.66602 5.76559 5.83935 2.72559 10.546 2.72559H21.4394C26.1593 2.72559 29.3327 5.76559 29.3327 10.2856V21.8456C29.3327 26.3643 26.1593 29.3923 21.4394 29.3923ZM19.026 15.0589H10.5593C9.99932 15.0589 9.55932 15.5123 9.55932 16.0589C9.55932 16.6189 9.99932 17.0589 10.5593 17.0589H19.026L15.7193 20.3523C15.5327 20.5389 15.426 20.8056 15.426 21.0589C15.426 21.3109 15.5327 21.5656 15.7193 21.7656C16.106 22.1523 16.746 22.1523 17.1327 21.7656L22.1593 16.7656C22.5327 16.3923 22.5327 15.7256 22.1593 15.3523L17.1327 10.3523C16.746 9.96559 16.106 9.96559 15.7193 10.3523C15.3327 10.7523 15.3327 11.3789 15.7193 11.7789L19.026 15.0589Z"
                fill="#A5ADBC" />
            </svg>
          </a>  
        </div>
      </div>
    </div>`;
    start += increment;
  }
  document.getElementById("home_announcements").innerHTML = to_render;
}

renderAnnouncements(0);
