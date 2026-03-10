function speak() {
      const text = document.getElementById("text").value;
      if (!text) return alert("Please enter some text!");

      let utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1;   
      utterance.rate = 1;    
      utterance.volume = 1;  

      
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        utterance.voice = voices[0];
      }
      
      speechSynthesis.speak(utterance);
     
}
