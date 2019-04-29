class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {

  }

  static titleize(string) {
    let result=''
    let array=capitalize(string).then(string.split(' '))
    for (let str of array)  {
      if (str == ('the'||'a'||'an'||'but'||'of'||'and'||'for'||'at'||'by'||'from')) {
      } else  {
        result = result + ' ' + capitalize(str)
      }
    }
    return result
  }
}