import React from 'react'

const FeatureSteps = ({
  count,
  title,
  content
}) => (
    <div>
      <div className="count">
        <span>{count}</span>
      </div>
      <div className="text">
        <h5 className="title">{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  )

export default FeatureSteps