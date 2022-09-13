import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;

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
                    // console.log(data.admin)
                    setAdmin(data.admin)
                    setAdminLoading(false)

                })
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;