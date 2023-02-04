import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    console.log('user from useTOken', user);

    useEffect(() => {

        const email = user?.user?.email;
        console.log('userEmail:', email)

        const currentUser = {
            email: email
        }
        const url = `https://lafz-server.onrender.com/user/${email}`
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
                    setToken(accessToken)
                    // console.log('data form useToken', data)
                    // console.log('Jwt_token', accessToken)
                    localStorage.setItem('JWT_TOKEN', accessToken)
                });
        }

    }, [user])

    return [token];
}
export default useToken;