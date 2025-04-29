export async function queryFunction(input: string) {
  return await fetch(input) // Fetch lif31up github profile
    .then((response) => {
      if (!response.ok) return null; // Return null if response isn't OK
      return response.json(); // Parse JSON if successful
    })
    .then((data) => {
      return data; // Return parsed data
    });
} // queryFunction:: success ? JSON : null
