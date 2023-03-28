const BASE_URL = 'http://localhost:3000'

// Get all users
export const getAllUsers = async () => {
    const res = await fetch(`${BASE_URL}/api/users`);
    const json = await res.json();
    return json;
};

// Get user
export const getUser = async (_id) => {
    const res = await fetch(`${BASE_URL}/api/users/${_id}`);
    const json = await res.json();
    if (json) return json;
    else return {};
}