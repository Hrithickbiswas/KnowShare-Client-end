import React from 'react'
import './RightSidebar.css'
import comment from "../../assets/massage2.svg"
import pen from "../../assets/pen.svg"
import blackLogo from "../../assets/blacklogo3.svg"


const Widget = () => {
  return (
    <div className='Widget'>

      <h4>The Overflow Blog</h4>
      <div className='right-side-div-1'>

        <div className='right-side-div-2'>
          <img src={pen} alt="pen" width={17}/>
          <p>The AI that writes music from text (Ep. 535)</p>
        </div>
        
        <div className='right-side-div-2'>
          <img src={pen} alt="pen" width={17}/>
          <p>Engineering’s hidden bottleneck: pull requests</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-side-div-1'>

        <div className='right-side-div-2'>
          <img src={comment} alt="comment" width={17}/>
          <p>Accessibility Update: Colors</p>
        </div>

        <div className='right-side-div-2'>
          <img src={blackLogo} alt="blacklogo" width={17}/>
          <p>Collectives: The next iteration</p>
        </div>

        <div className='right-side-div-2'>
          <img src={blackLogo} alt="blacklogo" width={17}/>
          <p>Temporary policy: ChatGPT is banned</p>
        </div>
        
        <div className='right-side-div-2'>
          <img src={blackLogo} alt="blacklogo" width={17}/>
          <p>The [balance] tag is being burninated</p>
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