

document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("Vname").value;
    var email = document.getElementById("Vemail").value;
    var address = document.getElementById("address").value;
    var skills = document.getElementById("skills").value;
  
    // Perform form validation
    if (name === "" || email === "" || address === "" || skills === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Create volunteer object
    var volunteer = {
      Vname: name,
      Vemail: email,
      
      address: address,
      skills: skills
    };
  
    // You can perform further processing with the volunteer object here (e.g., send it to a server using AJAX)
  
    // Clear form fields
    document.getElementById("Vname").value = "";
    document.getElementById("Vemail").value = "";
    document.getElementById("address").value = "";
    document.getElementById("skills").value = "";
  
    alert("Thank you for volunteering!"); // Display a thank you message
  });

  document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phno = document.getElementById('phno').value;
    var message = document.getElementById('message').value;
  
    // Do something with the form data (e.g., send it to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phno);
    console.log('Message:', message);
  
    // Optionally, display a success message or redirect to another page
    alert('Email sent successfully!');
    // window.location.href = 'thank-you.html';
  });
  


  