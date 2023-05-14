import React from 'react'
import './RightSidebar.css'
import comment from "../../assets/massage2.svg"
import pen from "../../assets/pen.svg"
import blackLogo from "../../assets/blacklogo3.svg"


const Widget = () => {
  return (
    <div className='Widget'>

      <h4>The KnowShare Blog</h4>
      <div className='right-side-div-1'>

        <div className='right-side-div-2'>
          <img src={pen} alt="pen" width={17}/>
          <p>A conversation with the folks building Google’s AI models and I/O releases...</p>
        </div>
        
        <div className='right-side-div-2'>
          <img src={pen} alt="pen" width={17}/>
          <p>Stung by OWASP? Chatting with the creator of the most popular web app scanner...</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-side-div-1'>

        <div className='right-side-div-2'>
          <img src={comment} alt="comment" width={17}/>
          <p>We are updating our Code of Conduct and we would like your feedback</p>
        </div>

        <div className='right-side-div-2'>
          <img src={blackLogo} alt="blacklogo" width={17}/>
          <p>Take the 2023 Developer Survey</p>
        </div>

        <div className='right-side-div-2'>
          <img src={blackLogo} alt="blacklogo" width={17}/>
          <p>Temporary policy: ChatGPT is banned</p>
        </div>
        
        <div className='right-side-div-2'>
          <img src={blackLogo} alt="blacklogo" width={17}/>
          <p>The [connect] tag is being burninated</p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className='right-side-div-1'>

        <div className='right-side-div-2'>
          <p>9</p>
          <p>Ambiguity comes with an expensive [price] tag</p>
        </div>

        <div className='right-side-div-2'>
          <p>119</p>
          <p>Should the string 'noob' be added to the blacklist for question titles?</p>
        </div>
      </div>

    </div>
  
  )
}

export default Widget