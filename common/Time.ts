
export const getDate = ()=>{
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        Zero = '0'
    // hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    // minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    // second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    month >= 1 && month <= 9 ? (Zero + month) : "";
    day >= 0 && day <= 9 ? (Zero = "0" + day) : "";
    let timer = year + '-' + month + '-' + day;
    // var timer = year + '-' + month + '-' + day+ ' ' + hour + ':' + minute + ':' + second;
    return timer;

}