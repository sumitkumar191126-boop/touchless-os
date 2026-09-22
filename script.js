// Touchless OS Website Interactive Script

document.addEventListener("DOMContentLoaded", () => {
  // 1. Simulate Live Cursor Telemetry in the Preview Box
  const telemetryEl = document.querySelector(".hud-telemetry");
  const reticleEl = document.querySelector(".reticle");

  if (telemetryEl && reticleEl) {
    let t = 0;
    setInterval(() => {
      t += 0.05;
      const x = Math.round(1280 + Math.sin(t) * 180);
      const y = Math.round(720 + Math.cos(t * 1.2) * 120);

      // Random action cycle
      let action = "🖐️ Moving";
      let actionClass = "text-muted";
      const mod = Math.floor(t * 2) % 10;
      if (mod === 3) {
        action = "⚡ Left Click (🤏 Pinch)";
        actionClass = "action-glow";
      } else if (mod === 7) {
        action = "📜 Scrolling (✌️ Two Fingers)";
        actionClass = "action-glow";
      }

      telemetryEl.innerHTML = `
        <span>CURSOR: (${x}, ${y})</span>
        <span class="${actionClass}">ACTION: ${action}</span>
      `;
    }, 100);
  }

  // 2. Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 3. Download Button Toast / Tracking
  const downloadBtn = document.getElementById("download-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      console.log("TouchlessOS download initiated!");
    });
  }
});
