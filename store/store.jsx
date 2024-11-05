import axios from "axios"
import { createContext, useEffect, useState, useLayoutEffect } from "react"

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [showMenu, setShowMenu] = useState(false)
    const [categories, setCategories] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [packageLists, setPackageLists] = useState([])
    const [error, setError] = useState([])
    const [cityLists, setCityLists] = useState([])
    const [countries, setCountries] = useState([])
    const [servicePackages, setServicePackages] = useState([])
    const getAllCategories = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/categories?embed=children`
            )
            if (res.status === 200) {
                setAllCategories(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch all categories:", err)
            setError("Could not load all categories.")
        }
    }
    const getCountriesLists = async () => {
        try {
            const res = await axios.get(`https://tranzaxx.com/api/countries`)
            if (res.data.success) {
                setCountries(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch countries:", err)
            setError("Could not load countries.")
        }
    }
    const getServicePackages = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/packages?embed=currency`
            )
            if (res.status === 200) {
                setServicePackages(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch service packages:", err)
            setError("Could not load service packages.")
        }
    }
    const packagesLits = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/packages?embed=currency`
            )
            if (res.status === 200) {
                setPackageLists(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch package lists:", err)
            setError("Could not load package lists.")
        }
    }
    const getCategories = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/homeSections`
            )
            if (res.status === 200) {
                setCategories(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch categories:", err)
            setError("Could not load categories.")
        }
    }
    const getPosts = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/posts`
            )
            if (res.status === 200) {
                setPosts(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch posts:", err)
            setError("Could not load posts.")
        }
    }
    const getAllPostsDetails = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/posts?embed=user,category,videos,city`
            )
            if (res.status === 200) {
                setAllPosts(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch all posts details:", err)
            setError("Could not load all posts details.")
        }
    }
    const getCityLists = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/countries/US/cities?embed=laudantium`
            )
            if (res.status === 200) {
                setCityLists(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch city lists:", err)
            setError("Could not load city lists.")
        }
    }
    useLayoutEffect(() => {
        const getAllData = async () => {
            await getAllPostsDetails()
            await getCategories()
            await getPosts()
            await getAllCategories()
            await packagesLits()
            await getCityLists()
            await getServicePackages()
            await getCountriesLists()
        }
        getAllData()
    }, [])
    return (
        <AppContext.Provider
            value={{
                showMenu,
                setShowMenu,
                categories,
                posts,
                allCategories,
                allPosts,
                packageLists,
                cityLists,
                servicePackages,
                countries,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
