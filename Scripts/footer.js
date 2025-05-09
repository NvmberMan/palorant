const footerHTML = `
<div class="footer">
  <div class="left">
    <div  class="title">
      <h1>Palorant</h1>
      <img src="Resources/Logo.png" alt="" />
    </div>
    <p>
      Palorant is a tactical FPS by Giot Games, where two teams of five battle
      to attack or defend. Pick an Agent with unique abilities, strategize, and
      outplay your opponents in Competitive, Unranked, Deathmatch, and Spike
      Rush.
    </p>
    <div class="buttons">
      <button onclick="changePage('https://playvalorant.com/id-id/', true)" class="button1">Download Game</button>
      <button onclick="changePage('index.html#infogame')" class="button2">More Info</button>
    </div>
  </div>
  <div class="right">
    <div class="upper">
      <div class="navigation">
        <h1>Profesional & Minimalis</h1>
        <ul>
          <li onclick="changePage('index.html#infogame')" >About Us</li>
          <li onclick="changePage('report.html')">Contact Us</li>
          <li onclick="changePage('report.html')">Support & Help</li>
        </ul>
      </div>
      <div class="help">
        <h1>Giot Games</h1>
        <ul>
          <li>Play with strategy, win with skill.</li>
          <li>Evolving games, endless action.</li>
          <li>Compete, adapt, and conquer.</li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      © 2020-2025 Giot Games, Inc. GIOT GAMES, PALORANT, and all related logos
      are trademarks, service marks, and/or registered trademarks of Giot Games,
      Inc.
    </div>
  </div>
  <div class="background"></div>
</div>
`;

function loadFooter() {
    document.getElementById("footer-container").innerHTML = footerHTML;
}

document.addEventListener("DOMContentLoaded", loadFooter);