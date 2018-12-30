
# simple-date-formatter

## vanila JS Date API formatter

## 1. Get Started
**Simple Date Formatter** is light Date formatter
if you import/load index.js in your code
it will be init automatically

there's few example

### 1. use Script tag
```html 
<script src="./example/location/simple-date-formatter/index.js"></script> 
```
### 2. use Javascript ```import```
```javascript
import dateFormatter from './example/location/simple-date-formatter' 
```  
after init, you can use date formatter

## 2. How to we use
It's really simple.
you can use it like this
```javascript
	new Date().dateFormatter(formatString, lang)
```
you can call function with 2 parameters there's description for then below
	
| Name | Type | Description |
|--|--|--|
| formatString | String | formatString for format Date object more Description for format string in next index. |
| lang | String | language for format. We support Korean/English, you can use Option to Korean Set to set second Parameter to 'kor'. Default is English.

## 3. Format String
| Input | Example | Description |
|--|--|--|
| yyyy | 2019 | Year with 4 digit |
| yy | 19 | Year with 2 digit |
| MM | 01...12 | Month with 2 digit |
| M | 1...12 | Month |
| ddd | Mon...Sun | Day Name If lang parameter is 'kor' then 월...일 |
| dd | 01...31 | Day of month with 2 digit |
| d | 1...31 | Day of month |
| HH | 01...24 | Hours with 2 Digit (24 Hour time) |
| H | 1...24 | Hours (24 Hour time) |
| hh | 00...12 | Hours with 2 Digit |
| h | 0...12 | Hours |
| mm | 00...59 | Minutes with 2 Digit |
| m | 0...59 | Minutes |
| ss | 00...59 | Seconds with 2 Digit |
| s | 0...59 | Seconds |
| tt | AM...PM | Post or Ante meridiem If lang parameter is 'kor' then 오전...오후 |


## 4. Demo
There's some Demo below
```javascript
new Date().dateFormatter('yyyy-MM-dd') // 2019-01-01
new Date().dateFormatter('yyyy-MM-dd HH:mm') // 2019-01-01 15:16
new Date().dateFormatter('yyyy. MM. dd. hh:mm tt') // 2019. 01. 01. 03:16 am
new Date().dateFormatter('yyyy. MM. dd. tt hh:mm', 'kor') // 2019. 01. 01. 오전 03:16
new Date().dateFormatter('yyyy. MM. dd. ddd') // 2019. 01. 01. Tue
```
Also you can use like this too
```javascript
new Date('2018-01-01').dateFormatter('ddd') /// Mon
```

Thank you for use :smile:

Author : [DohyunAhn](http://www.도현.com)
