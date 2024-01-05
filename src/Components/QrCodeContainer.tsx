import { QRCodeSVG } from "qrcode.react"

export const QrCodeContainer = ({ tabUrl }: { tabUrl: string }) => {
  return tabUrl ? (
    <div className="qrcode">
      <div className="mb-2">
        URL: <span className="truncate"> {tabUrl}</span>
      </div>
      <QRCodeSVG value={tabUrl} />
    </div>
  ) : (
    <div className="text-purple-700">test</div>
  )
}
