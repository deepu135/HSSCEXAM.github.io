// Burger Menu
function toggleMenu(){
  document.querySelector('.navbar ul').classList.toggle('show');
}

// Notes Access
function openNotes(){
  alert("📂 Opening Notes (Rs.299)... Link will open your folder/Google Drive.");
  // Example: window.open("https://drive.google.com/drive/folders/1a7GEDNFQdhJNBXUh6UWHa2LMGuTn9bvW?pli=1", "_blank");
}

// Scroll To Top
let topBtn=document.getElementById("topBtn");
window.onscroll=function(){
  if(document.documentElement.scrollTop>200){topBtn.style.display="block";}
  else{topBtn.style.display="none";}
};
function scrollTopFn(){window.scrollTo({top:0,behavior:'smooth'});}

// Contact Form
document.querySelector("form").addEventListener("submit",e=>{
  e.preventDefault();
  alert("✅ Message sent securely!");
});

// Extra JS Animation on cards
document.querySelectorAll(".card").forEach(c=>{
  c.addEventListener("mouseover",()=>{
    c.style.transform="scale(1.05)";
  });
  c.addEventListener("mouseout",()=>{
    c.style.transform="scale(1)";
  });
});

// Bounce Access Button Glow
let accessBtns=document.querySelectorAll(".bounce");
setInterval(()=>{
  accessBtns.forEach(btn=>{
    btn.style.boxShadow="0 0 20px yellow";
    setTimeout(()=>btn.style.boxShadow="none",400);
  });
},2000);

// Payment Gateway Integration (Demo Razorpay)
function startPayment() {
  var options = {
    "key": "rzp_test_1234567890", // Razorpay test key
    "amount": 29900, // Rs.299 in paise
    "currency": "INR",
    "name": "HSSC Exam Notes",
    "description": "Access to Premium Notes",
    "handler": function (response){
        alert("✅ Payment Successful! Transaction ID: " + response.razorpay_payment_id);
        window.open("https://drive.google.com/drive/folders/1a7GEDNFQdhJNBXUh6UWHa2LMGuTn9bvW?pli=1", "_blank");
    },
    "prefill": {
        "name": "Student",
        "email": "student@example.com"
    },
    "theme": {
        "color": "#1976d2"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
}

// Countdown Timer (15 min)
let timeLeft = 15 * 60; 
let countdownEl = document.getElementById("countdown");

function updateTimer(){
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  countdownEl.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if(timeLeft > 0){
    timeLeft--;
  } else {
    countdownEl.innerHTML = "Offer Expired ⏳";
  }
}
setInterval(updateTimer, 1000);

// Countdown Timer (15 min)2
let timeLeft2 = 15 * 60; 
let countdownEl2 = document.getElementById("countdown2");

function updateTimer(){
  let minutes = Math.floor(timeLeft2 / 60);
  let seconds = timeLeft2 % 60;
  countdownEl.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if(timeLeft > 0){
    timeLeft2--;
  } else {
    countdownEl.innerHTML = "Offer Expired ⏳";
  }
}
setInterval(updateTimer, 1000);
