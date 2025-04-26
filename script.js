document.getElementById('mainBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  const hoverText = document.getElementById('hoverText');
  hoverText.addEventListener('mouseover', () => {
    hoverText.style.color = 'red';
  });
  hoverText.addEventListener('mouseout', () => {
    hoverText.style.color = 'black';
  });
  
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  document.getElementById('mainBtn').addEventListener('dblclick', () => {
    document.getElementById('secretAction').innerText = "You found the secret!";
  });
  
  document.getElementById('colorChanger').addEventListener('click', function() {
    this.style.backgroundColor = 'purple';
    this.innerText = 'Vibe changed!';
  });
  
  let images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  let imgIndex = 0;
  setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById('slideImg').src = images[imgIndex];
  }, 2000);
  
  function openTab(tabName) {
    let contents = document.getElementsByClassName('tabContent');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
  }
  
  document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      feedback.innerText = "Invalid email format!";
      feedback.style.color = "red";
      return;
    }
    if (password.length < 8) {
      feedback.innerText = "Password must be at least 8 characters.";
      feedback.style.color = "red";
      return;
    }
    feedback.innerText = "Form is good to go";
    feedback.style.color = "green";
  });
  
  document.getElementById('password').addEventListener('input', function() {
    const feedback = document.getElementById('feedback');
    if (this.value.length < 8) {
      feedback.innerText = "Keep typing... almost there!";
      feedback.style.color = "orange";
    } else {
      feedback.innerText = "Strong password!";
      feedback.style.color = "green";
    }
  });
  