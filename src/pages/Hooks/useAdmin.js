import { useEffect, useState } from 'react';

const useAdmin = (user) => {

    const [admin, setAdmin] = useState();
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email;

    useEffect(() => {
        if (email) {
            fetch(`https://damp-brushlands-62497.herokuapp.com/admin/${email}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [email])

    return [admin,adminLoading]
};

export default useAdmin;