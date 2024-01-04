import { QRCodeSVG } from "qrcode.react"

export const QrCodeContainer = ({ tabUrl }: { tabUrl: string }) => {
  return tabUrl ? (
    <div className="qrcode">
      <div>url: {tabUrl}</div>
      <QRCodeSVG value={tabUrl} />
    </div>
  ) : (
    <div className="text-purple-700">test</div>
  )
}
