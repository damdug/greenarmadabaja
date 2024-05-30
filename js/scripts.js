// scripts.js

// Function to show the join form modal
function showJoinForm() {
    const modal = document.getElementById('join-form-modal');
    if (modal) {
      modal.style.display = 'block';
    } else {
      console.error('Modal element not found');
    }
  }
  
  // Function to hide the join form modal
  function closeJoinForm() {
    const modal = document.getElementById('join-form-modal');
    if (modal) {
      modal.style.display = 'none';
    } else {
      console.error('Modal element not found');
    }
  }
  
  // Event listener to close the modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById('join-form-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  
  // DOMContentLoaded event listener to ensure the DOM is fully loaded before running scripts
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Scripts.js loaded');
    
    // Other custom scripts can be added here
    // Example: Initialize other components or add event listeners
  });
  