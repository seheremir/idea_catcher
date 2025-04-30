async function gonder() {
    const fikir = document.getElementById("fikirInput").value;
    const cevapDiv = document.getElementById("cevap");
    cevapDiv.innerHTML = "⏳ AI analizi yapılıyor...";
  
    try {
      const response = await fetch("https://seheremir.app.n8n.cloud/webhook-test/idea_catcher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fikir })  // JSON olarak gönderiyoruz
      });
  
      if (!response.ok) throw new Error("AI cevabı alınamadı.");
      const data = await response.json();
      cevapDiv.innerHTML = "🧠 AI Yorumu:<br><br>" + data.analiz;
    } catch (err) {
      cevapDiv.innerHTML = "❌ Hata: " + err.message;
    }
  }
  