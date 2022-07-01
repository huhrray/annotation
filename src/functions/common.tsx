export const changeNavTitle = (path: string) => {
    if (path === "/dashboard") {
        return "My Dashboard"
    } else if (path === '/wave') {
        return "Wave Trimmer"
    }
    return "MyVoice"
}