import { Redirect } from "expo-router"
import { useEffect, useLayoutEffect, useState } from "react"
import * as SecureStore from "expo-secure-store"

const index = () => {
    return <Redirect href={"(about)/antiscam"} />
}

export default index
