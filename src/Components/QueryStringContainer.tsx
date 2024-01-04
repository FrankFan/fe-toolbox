import JsonView from "react18-json-view"

import type { QueryStringParams } from "~utils"

import "react18-json-view/src/style.css"

export const QueryStringContainer = ({ qs }: { qs: QueryStringParams }) => {
  return (
    <div>
      {Object.keys(qs).length > 0 ? (
        <JsonView
          src={qs}
          collapseStringMode="directly"
          collapseStringsAfterLength={20}
        />
      ) : (
        <span className="text-purple-700">no query string found</span>
      )}
    </div>
  )
}
