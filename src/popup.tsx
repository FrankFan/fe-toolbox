import { Button, Tabs, type TabsProps } from "antd"
import { useEffect, useState } from "react"

import { Base64Container } from "~Components/Base64Container"
import { QrCodeContainer } from "~Components/QrCodeContainer"
import { QueryStringContainer } from "~Components/QueryStringContainer"

import "~style.css"

import { getQueryString, type QueryStringParams } from "~utils"

function getCurrentTab(callback: any) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0]
    callback(activeTab.url)
  })
  return callback("")
}

function IndexPopup() {
  const [tabUrl, setTabUrl] = useState("")
  const [qs, setQs] = useState<QueryStringParams>(null)

  const onChange = (key: string) => {
    console.log(key)
  }

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "二维码",
      children: <QrCodeContainer tabUrl={tabUrl} />
    },
    {
      key: "2",
      label: "Query String",
      children: <QueryStringContainer qs={qs} />
    },
    {
      key: "3",
      label: "Base64",
      children: <Base64Container />
    }
  ]

  useEffect(() => {
    getCurrentTab((currentTabUrl: string) => {
      setTabUrl(currentTabUrl)
    })
  }, [])

  useEffect(() => {
    const qs = getQueryString(tabUrl)
    console.log(qs)
    setQs(qs)
  }, [tabUrl])

  return (
    <div className="root">
      <Button
        type="dashed"
        onClick={() => {
          window.open(location.href)
        }}>
        open tab
      </Button>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default IndexPopup
