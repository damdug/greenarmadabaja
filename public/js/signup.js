import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');
  
    if (messageDiv) {
      try {
        const { user, session, error } = await supabase.auth.signUp({
          email: email,
          name: name, // Assuming 'name' is the password here, adjust as needed
        });
    
        if (error) {
          messageDiv.textContent = `Error: ${error.message}`;
        } else {
          messageDiv.textContent = 'Sign-up successful! Welcome to the Green Armada.';
          closeJoinForm();
        }
      } catch (error) {
        messageDiv.textContent = `Error: ${error.message}`;
      }
    }
  });
}