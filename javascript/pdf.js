function openModal(event) {
    event.preventDefault(); // Prevents the default behavior of the link

    var pdfUrl = event.target.href; // Get the URL of the PDF from the link's href attribute
    var pdfEmbed = document.getElementById("pdfEmbed"); // Get the <embed> element

    pdfEmbed.setAttribute("src", pdfUrl); // Set the PDF URL as the src attribute of the <embed> element

    document.getElementById("myModal").style.display = "block"; // Show the modal
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none"; // Hide the modal
    document.getElementById("pdfEmbed").setAttribute("src", ""); // Clear the src attribute of the <embed> element
  }
