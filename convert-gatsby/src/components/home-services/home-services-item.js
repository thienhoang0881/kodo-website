import React from 'react'

const HomeServicesItem = ({
  title,
  content,
  icon,
  active
}) => (
    <div className={`home-services-item mtop-70 ${active}`}>
      <i className={icon}></i>
      <h5 className="services-title">{title}</h5>
      <p>{content}</p>
    </div>
  )

export default HomeServicesItem