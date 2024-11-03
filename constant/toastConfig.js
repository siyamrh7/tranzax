import CustomToast from "../components/shared/toast/CustomToast"

const toastConfig = {
    customToast: ({ text1 = "d", text2 = "d", hide }) => (
        <CustomToast text1={text1} text2={text2} onPressCancel={hide} />
    ),
}

export default toastConfig
