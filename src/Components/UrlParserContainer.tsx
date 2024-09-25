import JsonView from "react18-json-view"

import {
  Converter,
  type QueryStringParams,
  type UrlPropsType
} from "~utils/Converter"

import "react18-json-view/src/style.css"

import { Space } from "antd"
import { useEffect, useState } from "react"

interface IProps {
  qs: QueryStringParams
  tabUrl: string
}

export const UrlParserContainer = ({ qs, tabUrl }: IProps) => {
  const [urlProps, setUrlProps] = useState<UrlPropsType>(null)

  useEffect(() => {
    console.log("tabUrl = ", tabUrl)
    if (!tabUrl) {
      console.log(location.href)
      tabUrl = location.href
    }

    const res = Converter.parseUrl(tabUrl)
    setUrlProps(res)
  }, [tabUrl])
  return (
    <div>
      {urlProps && (
        <Space direction="vertical">
          <div>
            <span className="font-bold">协议:</span> {urlProps.protocol}
          </div>
          <div>
            <span className="font-bold">域名:</span> {urlProps.domain}
          </div>
          <div>
            <span className="font-bold">路径:</span> {urlProps.path}
          </div>
          {urlProps.hash && (
            <div>
              <span className="font-bold">hash:</span> {urlProps.hash}
            </div>
          )}
        </Space>
      )}
      {Object.keys(qs).length > 0 ? (
        <>
          <div className="font-bold">Query String:</div>
          <JsonView
            src={qs}
            collapseStringMode="directly"
            collapseStringsAfterLength={20}
          />
        </>
      ) : null}
    </div>
  )
}
