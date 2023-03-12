const baseUrl = 'http://localhost:3005/api/users';

export async function getAllUsers() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.users;
}