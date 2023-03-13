const baseUrl = 'http://localhost:3005/api/users';

export async function getAllUsers() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data.users;
};

export async function getUserById(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();

    return data.user;
};

export async function createUser(userData) {
    const {
        country,
        city,
        street,
        streetNumber,
        ...data
    } = userData;

    data.address = {
        country,
        city,
        street,
        streetNumber
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    return await response.json();
};

export async function editUser(id, userData) {
    const {
        country,
        city,
        street,
        streetNumber,
        ...data
    } = userData;

    data.address = {
        country,
        city,
        street,
        streetNumber
    }

    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();

    return result.user;
};

export async function deleteUser(userId) {
    await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });
};