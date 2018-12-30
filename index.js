/*
    v0.0.2
    2018. 12. 30.
    Author : Dohyun Ahn
    git : https://github.com/devDohyun/simple-date-formatter
    Visit my website 도현.net
    thankyou for use my code
*/

function dateFormatter (format, lang = 'eng') {
    let obj = this
    let result = ''

    const dayNamesKor = ['일', '월', '화', '수', '목', '금', '토']
    const dayNamesEng = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']

    const periodKor = {'am': '오전', 'pm': '오후'}
    const periodEng = {'am': 'am', 'pm': 'pm'}

    let dayNames = lang === 'kor' ? dayNamesKor : dayNamesEng
    let period = lang === 'kor' ? periodKor : periodEng

    const setDigit = (val, digit = 2) => { if (val.toString().length < digit) while (val.toString().length < digit) val = '0' + val; return val}

    result = format.replace(/(yyyy|yy|MM|M|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|tt)/g, ($1) => {
        switch ($1) {
            case 'yyyy': return obj.getFullYear()
            case 'yy': return obj.getFullYear() % 100

            case 'MM': return setDigit(obj.getMonth() + 1)
            case 'M': return obj.getMonth() + 1

            case 'ddd': return dayNames[obj.getDay()]
            case 'dd': return setDigit(obj.getDate())
            case 'd': return obj.getDate()
            
            case 'HH': return setDigit(obj.getHours())
            case 'H': return obj.getHours()
            
            case 'hh': return setDigit(obj.getHours() % 12)
            case 'h': return obj.getHours() % 12

            case 'mm': return setDigit(obj.getMinutes())
            case 'm': return obj.getMinutes()

            case 'ss': return setDigit(obj.getSeconds())
            case 's': return obj.getSeconds()

            case 'tt': return obj.getHours < 12 ? period['am'] : period['pm']
            default: return $1
        }
    })

    return result
}

if (Date.prototype.dateFormatter === undefined) Date.prototype.dateFormatter = dateFormatter
else console.warn("Couldn't init dateFormatter Date.prototype.dateFormatter Already Exist")
