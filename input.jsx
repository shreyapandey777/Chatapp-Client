import React from 'react'

const Input = (prop) => {

    let speechRecognition = window.webkitSpeechRecognition
    let recognition = new speechRecognition()
    recognition.continous = true

    recognition.onstart = () => {
    }

    recognition.onspeechend = () => {
        recognition.stop()
    }

    recognition.onerror = () => {
    }
    recognition.onresult = (event) => {
        let current = event.resultIndex;
        let transcript = event.results[current][0].transcript
        prop.setMessage(transcript)
        let tmp = document.getElementById('message-box')
        tmp.value = transcript
    }

    recognition.onsoundstart = () => {
    }

    return (
        <form>
            <div id="input">
                <textarea id="message-box" type='text' className="input" placeholder='Message' onChange={(event) => prop.setMessage(event.target.value)} onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        prop.sendMessage(event);
                        let tarea = document.getElementsByTagName('textarea');
                        tarea[0].value = "";
                    }
                }
                } />
                <button onClick={(event) => {
                    event.preventDefault()
                    try{
                    recognition.start()}
                    catch(e){
                        alert(e)
                    }
                }}>Record</button>
                <button type='submit' onClick={(event) => {
                    prop.sendMessage(event); let tarea = document.getElementsByTagName('textarea');
                    tarea[0].value = "";
                }}>Send</button>
            </div>
        </form>
    )
}

export default Input;
