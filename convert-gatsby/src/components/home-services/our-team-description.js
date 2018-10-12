import React from 'react'

const OurTeamDescription = ({
  title,
  content,
  conditions
}) => (
    <div>
      <div className="left-heading">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="left-text">
        <p className="dark">{content}</p>
        <ul>
          <li>{conditions.con1}</li>
          <li>{conditions.con2}</li>
          <li>{conditions.con3}</li>
        </ul>
      </div>
    </div>
  )

export default OurTeamDescription