document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');
  
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
  
      let data;
      try {
        data = await response.json();
      } catch (error) {
        data = { error: 'Invalid JSON response from server' };
      }
  
      if (response.ok) {
        messageDiv.textContent = 'Sign-up successful! Welcome to the Green Armada.';
        closeJoinForm();
      } else {
        messageDiv.textContent = `Error: ${data.error}`;
      }
    } catch (error) {
      messageDiv.textContent = `Error: ${error.message}`;
    }
  });
  