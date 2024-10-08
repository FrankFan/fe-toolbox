import { Button, Tabs, type TabsProps } from "antd"
import { useEffect, useState } from "react"

import { ConvertContainer } from "~Components/ConvertContainer"
import { QrCodeContainer } from "~Components/QrCodeContainer"
import { UrlParserContainer } from "~Components/UrlParserContainer"

import "~style.css"

import { Converter, type QueryStringParams } from "~utils/Converter"
import { ExtensionHepler } from "~utils/ExtensoinHelper"

function IndexPopup() {
  const [tabUrl, setTabUrl] = useState("")
  const [qs, setQs] = useState<QueryStringParams>(null)

  const onChange = (key: string) => {
    // console.log(key)
  }

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "二维码",
      children: <QrCodeContainer tabUrl={tabUrl} />
    },
    {
      key: "2",
      label: "URL解析",
      children: <UrlParserContainer tabUrl={tabUrl} qs={qs} />
    },
    {
      key: "3",
      label: "信息编码转换",
      children: <ConvertContainer />
    }
  ]

  useEffect(() => {
    ExtensionHepler.getCurrentTab((tabUrl: string) => {
      setTabUrl(tabUrl)
    })
  }, [])

  useEffect(() => {
    const qs = Converter.getQueryString(tabUrl || location.href)
    setQs(qs)
  }, [tabUrl])

  return (
    <div className="root">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default IndexPopup
