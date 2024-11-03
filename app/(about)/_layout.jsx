import { Stack } from "expo-router"

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="antiscam" options={{ headerShown: false }} />
            <Stack.Screen name="privacy" options={{ headerShown: false }} />
            <Stack.Screen name="terms" options={{ headerShown: false }} />
        </Stack>
    )
}
