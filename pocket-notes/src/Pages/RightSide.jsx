import React from 'react'

export default function RightSide() {
  return (
    <>
    <div className="rightSide" style={{backgroundColor: "#DAE5F5", width: "70%", display:'flex', flexDirection:'column'}}>
               <header>
                    <div style={{display:'flex', backgroundColor:'#001F8B', height:90, position: 'fixed', width: '70%', zIndex: 1000}}>
                        <div className="profileName">MN</div>
                        <div className="noteTitle">My Notes</div>
                    </div>
               </header>
               <div style={{marginTop:100}}>
               <div className="noteText">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</div>
               <div className="noteText">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</div>
               <div className="noteText">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</div>
               <div className="noteText">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</div>
               <div className="noteText">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</div>
               <div className="noteText">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</div>
               <div className="noteText">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</div>
               </div>
               <div style={{ position: 'sticky', bottom: 0, width: '100%', zIndex: 1000 }}>
                    <textarea
                        placeholder="Here’s the sample text for sample work"
                        name=""
                        id=""
                        style={{
                        width: '68vw',
                        marginLeft:13,
                        height: '18vh',
                        resize: 'none', 
                        fontSize:'1.2rem',
                        padding:15
                        }}
                    ></textarea>
                    <button className="saveBtn"><img src="/enterBtn.png" alt="" style={{}}/></button>
                </div>

            </div>
    </>
    
  )
}
