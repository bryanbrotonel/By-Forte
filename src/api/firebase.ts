// Fetch firebase data from the server
export async function fetchFirebase(body = {}) {
  return await fetch('/.netlify/functions/firebase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}