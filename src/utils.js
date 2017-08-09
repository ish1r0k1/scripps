import { Base64 } from 'js-base64'

export const timeToSeconds = (hmsStr) => {
  const p = hmsStr.split(':')
  let s = 0
  let m = 1

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10)
    m *= 60
  }

  return s
}

export function serialize(obj) {
  const str = []

  let p
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' +encodeURIComponent(obj[p]))
    }
  }
  return str.join('&')
}

export function compressString(str) {
  return Base64.encodeURI(RawDeflate.deflate(Base64.utob(str)))

  // return Base64.btoa(
  //   RawDeflate.deflate(
  //     unescape(
  //       encodeURIComponent(str)
  //     )
  //   )
  // )
}

export function decompressString(str) {
  return Base64.btou(RawDeflate.inflate(Base64.decode(str)))

  // return decodeURIComponent(
  //   escape(
  //     RawDeflate.inflate(
  //       Base64.atob(str)
  //     )
  //   )
  // )
}

export const prepareTitle = (str) => {
  return str
    .replace(/\[.*\]/, '')
      .replace(/\(.*\)/, '')
        .replace(/\s$/, '')
}
