import React from "react";
function ChatTab() {
    return ( 
        <div>
            <div className="main-page" style={{display: "flex"}}>
            <div className="leftSide" style={{width: "30%"}}>
                <div style={{
                    fontFamily: 'Roboto, sans-serif', 
                    fontSize: '2.5rem', 
                    position: 'sticky', 
                    top:0,
                    letterSpacing: 1, 
                    fontWeight: "bold",
                    backgroundColor:'white',
                    width:'30vw',
                    height:75,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop:30
                    }}>
                    Pocket Notes
                </div>
                <div>
                        <div style={{display:'flex', height:90, marginTop:50, marginLeft:20, backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20, backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                   
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20,backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20,backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20,backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20,backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20,backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20,backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20,backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                        <div style={{display:'flex', height:90, marginTop:10, marginLeft:20,backgroundColor:'whitesmoke', width:'28vw'}}>
                            <div className="profileName">MN</div>
                            <div className="noteTitle" style={{color:'black', fontWeight:'bolder'}}>My Notes</div>
                        </div>
                </div>
         <button 
                style={{
                    fontSize: '4rem', 
                    color: 'white', 
                    backgroundColor: '#16008B', 
                    width: '65px', 
                    height: '65px', 
                    borderRadius: '50%',
                    bottom:30,
                    left:400, 
                    position: 'fixed', 
                    border: 'none', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: 0, 
                    textAlign: 'center',
                    zIndex: 1000 
                }}
                >
                +
         </button>
            </div>  
            <div className="rightSide" style={{backgroundColor: "#DAE5F5", width: "70%"}}>
               <header>
                    <div style={{display:'flex', backgroundColor:'#001F8B', height:90, position: 'fixed', width: '100%', zIndex: 1000}}>
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
        </div>
        </div> 
);
}

export default ChatTab;