import { BaseToast } from "react-native-toast-message"

export const successConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{
                borderLeftColor: "black",
                backgroundColor: "black",
                height: "auto",
                zIndex: 999,
            }}
            contentContainerStyle={{
                backgroundColor: "black",
                padding: 10,
                flexWrap: "wrap",
                flexDirection: "column",
            }}
            text1Style={{
                color: "white",
                fontSize: 20,
                lineHeight: 24,
            }}
            text1Props={{
                numberOfLines: 5,
            }}
            text2Style={{
                color: "white",
                fontSize: 15,
                lineHeight: 24,
            }}
            text2Props={{
                numberOfLines: 5,
            }}
        />
    ),
}

export const errorConfig = {
    error: (props) => (
        <BaseToast
            {...props}
            style={{
                borderLeftColor: "red",
                backgroundColor: "black",
                height: "auto",
                zIndex: 999,
            }}
            contentContainerStyle={{
                backgroundColor: "black",
                padding: 10,
            }}
            text1Style={{
                color: "red",
                fontSize: 20,
                lineHeight: 24,
            }}
            text1Props={{
                numberOfLines: 2,
            }}
            text2Style={{
                color: "red",
                fontSize: 30,
                lineHeight: 34,
            }}
            text2Props={{
                numberOfLines: 5,
            }}
        />
    ),
}

// Correctly merging both configs at the top level
export const toastConfig = { ...successConfig, ...errorConfig }
