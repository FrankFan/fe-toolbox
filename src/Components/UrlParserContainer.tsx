import JsonView from "react18-json-view"

import {
  Converter,
  type QueryStringParams,
  type UrlPropsType
} from "~utils/Converter"

import "react18-json-view/src/style.css"

import { Space } from "antd"
import { useEffect, useState } from "react"

import { ExtensionHepler } from "~utils/ExtensoinHelper"

interface IProps {
  qs: QueryStringParams
  tabUrl: string
}

export const UrlParserContainer = ({ qs, tabUrl }: IProps) => {
  const [urlProps, setUrlProps] = useState<UrlPropsType>(null)

  useEffect(() => {
    ExtensionHepler.getCurrentTab((tabUrl: string) => {
      const res = Converter.parseUrl(tabUrl)
      console.log(res)
      debugger
      setUrlProps(res)
    })
  }, [])
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
      ) : (
        <div className="text-purple-700 mt-2">no query string found</div>
      )}
    </div>
  )
}
