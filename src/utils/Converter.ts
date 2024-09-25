import CryptoJS from "crypto-js"

export interface QueryStringParams {
  [key: string]: string
}

export interface UrlPropsType {
  protocol: string
  domain: string
  path: string
  hash?: string
}

/**
 * @see
 * https://base64.us/#
 * https://cryptojs.gitbook.io/docs/#encoders
 */
export class Converter {
  static base64Encode(text: string): string {
    const words = CryptoJS.enc.Utf8.parse(text)
    const base64 = CryptoJS.enc.Base64.stringify(words)
    return base64
  }

  static base64Decode(base64: string): string {
    const words = CryptoJS.enc.Base64.parse(base64)
    const text = words.toString(CryptoJS.enc.Utf8)
    return text
  }

  static hexEncode(str: string) {
    // UTF-8 字符串转换为 HEX
    const outputHex = CryptoJS.enc.Utf8.parse(str).toString(CryptoJS.enc.Hex)
    console.log(outputHex) // 输出 "48656c6c6f2c20576f726c6421"
    return outputHex
  }

  static hexDecode(inputHex: string) {
    // HEX 转换为 UTF-8 字符串
    const utf8String = CryptoJS.enc.Hex.parse(inputHex).toString(
      CryptoJS.enc.Utf8
    )
    console.log(utf8String) // 输出 "Hello, World!"
    return utf8String
  }

  static urlEncode(url: string): string {
    return encodeURIComponent(url)
  }

  static urlDecode(encodedUrl: string): string {
    return decodeURIComponent(encodedUrl)
  }

  static getQueryString(url: string): QueryStringParams {
    if (!url) return {}
    const queryString = {} as QueryStringParams

    const query = url.split("?")[1]
    if (!query) {
      return queryString
    }

    // Remove fragment
    const fragmentStart = query.indexOf("#")
    let queryPart = query
    if (fragmentStart !== -1) {
      queryPart = query.slice(0, fragmentStart)
    }

    // Split into key-value pairs
    const pairs = queryPart.split("&")

    pairs.forEach((pair) => {
      const keyValue = pair.split("=")
      const key = decodeURIComponent(keyValue[0])
      let value = keyValue[1] && decodeURIComponent(keyValue[1])

      if (key) {
        queryString[key] = value
      }
    })

    return queryString
  }

  static parseUrl(url: string): UrlPropsType {
    const parser = document.createElement("a")
    parser.href = url

    const protocol = parser.protocol
    const domain = parser.hostname
    const path = parser.pathname
    const hash = parser.hash

    return { protocol, domain, path, hash }
  }
}
