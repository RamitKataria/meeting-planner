const getUser = async (email,Password) => {
    const response = await fetch('http://localhost:5000/newUser/register'+ email, {
        method: 'GET'
    });
    return response.json();
};


const addUser = async (userName,email,Password) => {
    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName,
            email,
            Password
        })
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
}

const userLogin = async (userName,email,Password) => {
    const response = await fetch('http://localhost:5000/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            Password
        })
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
}


export default {
    getUser,
    addUser,
    userLogin
};