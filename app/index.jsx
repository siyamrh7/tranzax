// import { useContext, useEffect, useLayoutEffect, useState } from "react"
// import * as SecureStore from "expo-secure-store"
// import { AppContext } from "../store/store"

// const index = () => {
//     return <Redirect href={"(auth)/login"} />
// }

// export default index

import { Redirect } from "expo-router"
import { useContext, useEffect, useLayoutEffect, useState } from "react"
import * as SecureStore from "expo-secure-store"
import { AppContext } from "../store/store"

const index = () => {
    const { user, setUser } = useContext(AppContext)

    const [state, setState] = useState(null)
    useLayoutEffect(() => {
        const token = SecureStore.getItem("userToken")
        setUser(token)
    }, [])
    return <Redirect href={state ? "(root)/home" : "(auth)/welcome"} />
}

export default index
