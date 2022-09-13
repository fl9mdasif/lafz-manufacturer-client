import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        // console.log(email);
        if (email) {
            const url = `https://polar-atoll-50768.herokuapp.com/admin/${email}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('JWT_TOKEN')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setAdmin(data.admin)

                })
        }
    }, [user])
    return [admin]
}
export default useAdmin;