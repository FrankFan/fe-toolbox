import { Space, Typography } from "antd"
import { QRCodeSVG } from "qrcode.react"

const { Paragraph } = Typography

export const QrCodeContainer = ({ tabUrl }: { tabUrl: string }) => {
  if (!tabUrl) tabUrl = location.href

  return tabUrl ? (
    <div className="qrcode">
      <Space align="start">
        <div className="font-bold">URL:</div>
        <Paragraph ellipsis={{ rows: 2 }} copyable>
          {tabUrl}
        </Paragraph>
      </Space>

      <QRCodeSVG value={tabUrl} />
    </div>
  ) : null
}
