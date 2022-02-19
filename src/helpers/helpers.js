export const giveFormatToNumbers = (num) => {

    let numString = num.toString().replace(".",",")
    let str = numString.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");

}