import {
  Button,
  Divider,
  Input,
  Radio,
  Space,
  type RadioChangeEvent
} from "antd"
import { useState } from "react"

import { Converter } from "~utils/Converter"

const { TextArea } = Input

enum ConvertAction {
  base64 = 1,
  hex = 2,
  urlEncode = 3
}

export const ConvertContainer = () => {
  const [text1, setTex1] = useState("")
  const [text2, setTex2] = useState("")

  const [radioValue, setRadioValue] = useState(0)

  const radioOptions = [
    { label: "Base64编解码", value: 1 },
    { label: "十六进制编解码", value: 2 },
    { label: "URL编解码", value: 3 }
  ]

  const onRadio1Change = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value)
    setRadioValue(e.target.value)
  }

  const encode = () => {
    if (!text1) return

    let resultStr = ""
    if (radioValue === ConvertAction.base64) {
      resultStr = Converter.base64Encode(text1)
    } else if (radioValue === ConvertAction.hex) {
      resultStr = Converter.hexEncode(text1)
    } else if (radioValue === ConvertAction.urlEncode) {
      resultStr = Converter.urlEncode(text1)
    }
    setTex2(resultStr)
  }

  const decode = () => {
    if (!text2) return

    let resultStr = ""
    if (radioValue === ConvertAction.base64) {
      resultStr = Converter.base64Decode(text2)
    } else if (radioValue === ConvertAction.hex) {
      resultStr = Converter.hexDecode(text2)
    } else if (radioValue === ConvertAction.urlEncode) {
      resultStr = Converter.urlDecode(text2)
    }

    setTex1(resultStr)
  }

  const clear = () => {
    setTex1("")
    setTex2("")
  }

  return (
    <div className="en-decode">
      <Space direction="vertical">
        <TextArea
          style={{ width: 380 }}
          rows={4}
          placeholder="编码内容粘贴在这里"
          value={text1}
          onChange={(e) => setTex1(e.target.value)}
        />
        <Space direction="vertical">
          <Space>
            <Radio.Group onChange={onRadio1Change} value={radioValue}>
              {radioOptions.map((item) => (
                <Radio value={item.value} key={item.value}>
                  {item.label}
                </Radio>
              ))}
            </Radio.Group>
          </Space>
        </Space>

        <Space className="mt-1">
          <Button type="primary" onClick={encode}>
            encode ↓
          </Button>
          <Button onClick={decode}>decode ↑</Button>
          <Button type="dashed" onClick={clear}>
            清空
          </Button>
        </Space>

        <TextArea
          style={{ width: 380 }}
          rows={4}
          placeholder="解码内容粘贴在这里"
          value={text2}
          onChange={(e) => setTex2(e.target.value)}
        />
      </Space>
    </div>
  )
}
