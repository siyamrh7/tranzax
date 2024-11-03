import { Stack } from "expo-router"

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="advertise" options={{ headerShown: false }} />
            <Stack.Screen name="packages" options={{ headerShown: false }} />
            <Stack.Screen name="payment" options={{ headerShown: false }} />
        </Stack>
    )
}
