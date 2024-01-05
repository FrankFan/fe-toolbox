import { Button, Input, Space } from "antd"
import { useState } from "react"

const { TextArea } = Input

// https://base64.us/#

export const Base64Container = () => {
  const [text1, setTex1] = useState("")
  const [text2, setTex2] = useState("")

  // https://cryptojs.gitbook.io/docs/#encoders
  const encode = () => {
    if (!text1) return
    // var str = "hello"
    var s = CryptoJS.enc.Utf8.parse(text1)
    var base64 = CryptoJS.enc.Base64.stringify(s)
    console.log(base64)
    setTex2(base64)
  }

  const decode = () => {
    if (!text2) return
    // var base64 = "aGVsbG8="
    var s = CryptoJS.enc.Base64.parse(text2)
    var str = s.toString(CryptoJS.enc.Utf8)
    console.log(str)
    setTex1(str)
  }

  return (
    <div className="base64">
      <Space direction="vertical">
        <TextArea
          style={{ width: 380 }}
          rows={4}
          placeholder="Base64编码内容粘贴在这里"
          value={text1}
          onChange={(e) => setTex1(e.target.value)}
        />
        <Space className="mt-1">
          <Button type="primary" onClick={encode}>
            编码
          </Button>
          <Button onClick={decode}>解码</Button>
        </Space>
        <TextArea
          style={{ width: 380 }}
          rows={4}
          placeholder="Base64解码内容粘贴在这里"
          value={text2}
          onChange={(e) => setTex2(e.target.value)}
        />
      </Space>
    </div>
  )
}
