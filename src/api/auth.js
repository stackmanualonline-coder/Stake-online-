const base_lonk = ' http://10.107.85.184:4000/api/auth'

export async function register(userData) {
    const response = await fetch(base_lonk+`/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    return response.json();
}

export async function login(credentials) {
    const response = await fetch(base_lonk+`/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    return response.json();
}
export async function adminLogin(credentials) {
    const response = await fetch(base_lonk+`/admin-Login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    return response.json();
}


export async function getAllUsers() {
    const response = await fetch(base_lonk + `/all-user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}