import { useEffect, useState } from "react"

const useToken = user => {
    const [token, SetToken] = useState('')

    // console.log('user from useTOken', user);

    useEffect(() => {
        const email = user?.email;
        const currentUser = {
            email: email
        }
        const url = `http://localhost:5000/userEmailCollection/${email}`
        if (email) {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(currentUser),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    const accessToken = data.token
                    console.log('data form userData', data)
                    // console.log('Jwt_token', accessToken)
                    localStorage.setItem('JWT_TOKEN', accessToken)
                });
        }

    }, [user])

    return [token];
}
export default useToken;