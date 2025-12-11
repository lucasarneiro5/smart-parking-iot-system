document.addEventListener("DOMContentLoaded", () => {

  // --- Enviar Credenciais Wi-Fi ---
  const wifiForm = document.getElementById("wifiForm");
  wifiForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const ssid = document.getElementById("ssid").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/config", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ ssid, password })
    });

    document.getElementById("wifiStatus").innerText =
      response.ok ? "Credenciais salvas!" : "Erro ao salvar.";
  });

  // --- Consultar status da vaga pelo vaga_id ---
  async function consultarVaga() {
    try {
      const res = await fetch("/status");
      const data = await res.json();

      // Espera:
      // { vaga_id: 1, status: "livre", distancia: 51 }

      document.getElementById("vaga_id_title").innerText = data.vaga_id;
      document.getElementById("vaga_id_display").innerText = data.vaga_id;
      document.getElementById("vaga_status").innerText = data.status;

    } catch (err) {
      console.log("Erro ao consultar status:", err);
    }
  }

  document.getElementById("refresh").addEventListener("click", consultarVaga);

  // Atualiza automaticamente ao abrir
  consultarVaga();
});
