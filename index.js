document.addEventListener("DOMContentLoaded", function() {
  const projectAreas = document.querySelectorAll(".project");
  const container = document.querySelector(".container");

  // Create the video element *once* here, outside the loop
  const backgroundVideo = document.createElement("video");
  backgroundVideo.src = "background_vid.mp4"; // Replace with your video path
  backgroundVideo.autoplay = true;
  backgroundVideo.loop = true;
  backgroundVideo.muted = true;
  backgroundVideo.style.position = "fixed";
  backgroundVideo.style.top = "0";
  backgroundVideo.style.left = "0";
  backgroundVideo.style.width = "100%";
  backgroundVideo.style.height = "100%";
  backgroundVideo.style.objectFit = "cover"; // Ensure video covers the whole area
  backgroundVideo.style.zIndex = "-999";
  document.body.appendChild(backgroundVideo); // Append it to the body *once*

  projectAreas.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.add("blur");

      const name = btn.dataset.name;
      let siteUrl = "";

      switch (name) {
        case "NetConnect":
          siteUrl = "https://netconnect.gr";
          break;
        case "PcShop":
          siteUrl = "https://pcshop.gr";
          break;
        case "Upmate":
          siteUrl = "https://www.upmate.gr/";
          break;
        case "eFantasy":
          siteUrl = "https://www.efantasy.gr";
          break;
        case "IonianMode":
          siteUrl = "https://ionianmode.com";
          break;
        case "Maknep":
          siteUrl = "https://maknep.gr";
          break;
        default:
          siteUrl = "";
      }

      const div = document.createElement("div");
      div.className = "modal";
      div.innerHTML = `
        <div class="modal-content" style="border:none;">
          <span class="close">Exit</span>
        </div>
        <iframe
          id="embeddedSite"
          src="${siteUrl}"
          style="width: 100%; height: 100%; border: none;"
          allowfullscreen
        >
        </iframe>
      `;

      div.style.display = "block";
      div.style.position = "fixed";
      div.style.top = "50%";
      div.style.left = "50%";
      div.style.transform = "translate(-50%, -50%)";
      div.style.width = "80%";
      div.style.height = "80%";
      div.style.maxHeight = "90vh";
      div.style.backgroundColor = "inherit";
      div.style.borderRadius = "5px";
      div.style.boxSizing = "border-box";
      div.style.padding = "20px";
      div.style.overflow = "hidden";
      div.style.boxShadow = "-50px 0px 50px rgba(102, 24, 104), 50px 0px 50px rgba(102, 24, 104)";
      div.style.zIndex = "1000";

      document.body.appendChild(div);


      const closeBtn = div.querySelector(".close");
      closeBtn.addEventListener("click", () => {
        container.classList.remove("blur");
        document.body.removeChild(div);
      });
    });
  });
});
