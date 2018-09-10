//TODO: Implement hexToRgb
function hexToRgb(hexString:string):  { r: number; g: number; b: number;}  {
    if (hexString.length===3) {
        const hr = hexString[0]
        const hg = hexString[1]
        const hb = hexString[2]
        hexString = `${hr}${hr}${hg}${hg}${hb}${hb}` 
    }
    function hexToNumber(hexString:string): number{
        return parseInt(hexString, 16);
    }
    return {
        r:hexToNumber(hexString.slice(0,2)),
        g: hexToNumber(hexString.slice(2,4)),
        b: hexToNumber(hexString.slice(4,6)),
    }
}


//TODO: Implement rgbToHex
function rgbToHex(red:number, green:number, blue:number): string {
    if (red===299 && green===0 && blue === 0) {
        console.log(`${numberToHex(red)}${numberToHex(green)}${numberToHex(blue)}`)
    }
    function numberToHex(number:number): string{
        if (number>=256) {
            number = 255
        }
        if (number <=0) {
            number = 0
        }
        const postiveNumber = Math.abs(number)
        let hexStringForChannel = postiveNumber.toString(16);
        if (hexStringForChannel === '0') {
            hexStringForChannel = '00'
        }
        return hexStringForChannel
    }
    return `${numberToHex(red)}${numberToHex(green)}${numberToHex(blue)}`
}

export {rgbToHex, hexToRgb}