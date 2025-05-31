
import fetch from 'node-fetch';

async function createAdmin() {
  try {
    const response = await fetch('http://localhost:5000/api/admin/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'FlameDev',
        password: 'Dev4554'
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Admin user created successfully!');
      console.log('Username:', data.user.username);
      console.log('User ID:', data.user.id);
      console.log('\nYou can now login to the admin panel at /admin');
    } else {
      console.log('❌ Error:', data.error);
    }
  } catch (error) {
    console.error('❌ Failed to create admin user:', error.message);
  }
}

createAdmin();
