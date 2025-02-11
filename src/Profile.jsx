import { useEffect, useState } from "react";

const Profile = () => {
    const [user, setUser] = useState()
    console.log(user)
    useEffect(() => {
        const getData = async () => {
            const resposne = await fetch("http://localhost:5000/api/linkedin/get-user", {
                method: 'get',
                credentials: 'include',
            })
            const data = await resposne.json()
            console.log(data)
            if (resposne.ok) {
                setUser(data.user)
            }
        }
        getData()
    }, [])
    return (
        <div>
            <h1>profile</h1>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
            <img src={user?.avatar} alt="" className="w-20" />
        </div>
    );
};

export default Profile;