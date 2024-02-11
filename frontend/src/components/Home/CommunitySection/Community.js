import React from 'react'
import CSS from './Community.module.css'
import CommunityCard from './CommunityCard/CommunityCard'
const Community = () => {
  return (
    <div className={`${CSS['community-container']} container-fluid`}>
        <div className='container'>
            <h1 className={CSS['community-title']}>Join our Community</h1>
            <CommunityCard/>
        <CommunityCard />
        <CommunityCard />

        </div>
    </div>
  )
}

export default Community