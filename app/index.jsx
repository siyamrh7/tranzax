// import { Redirect } from "expo-router"
// import { useEffect, useLayoutEffect, useState } from "react"
// import * as SecureStore from "expo-secure-store"

// const index = () => {
//     return <Redirect href={"(add)/packages"} />
// }

// export default index

import { Redirect } from "expo-router"
import { useEffect, useLayoutEffect, useState } from "react"
import * as SecureStore from "expo-secure-store"

const index = () => {
    const [state, setState] = useState(null)
    useLayoutEffect(() => {
        const token = SecureStore.getItem("userToken")
        setState(token)
    }, [])
    return <Redirect href={state ? "(root)/home" : "(auth)/welcome"} />
}

export default index
