import { DefaultTheme } from "@react-navigation/native"

export const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#fff",
    },
    fonts: {
        regular: "Poppins-Regular",
        bold: "Poppins-Bold",
        semiBold: "Poppins-SemiBold",
        light: "Poppins-Light",
    },
}
