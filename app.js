const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => { if(e.key === 'Enter') sendMessage(); });

function addMessage(content, cls){
  const div = document.createElement('div');
  div.className = 'message ' + cls;
  div.textContent = content;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage(){
  const text = userInput.value.trim();
  if(!text) return;
  addMessage(text, 'user');
  userInput.value = '';
  addMessage('Thinking...', 'bot');
  try{
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ message: text, mode: 'friend' })
    });
    const data = await res.json();
    const bots = Array.from(document.querySelectorAll('.bot'));
    bots[bots.length - 1].textContent = data.reply || 'Hmm...';
  }catch(e){
    const bots = Array.from(document.querySelectorAll('.bot'));
    bots[bots.length - 1].textContent = 'Connection error. Try again later.';
  }
}
