import { DefaultTheme } from "@react-navigation/native"

export const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#ffffff",
    },
    fonts: {
        regular: "Poppins-Regular",
        bold: "Poppins-Bold",
        semiBold: "Poppins-SemiBold",
        light: "Poppins-Light",
    },
}
