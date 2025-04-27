document.addEventListener("DOMContentLoaded", function() {
    const projectAreas = document.querySelectorAll(".project"); // Changed variable name to be plural
    const container = document.querySelector(".container"); // Added container variable

    const videoSrcBg = "background_vid.mp4";
    const videoElement = document.createElement("video");
          videoElement.src = videoSrcBg;
          videoElement.autoplay = true;
          videoElement.loop = true;
          videoElement.muted = true; // Important for autoplay in many browsers
          videoElement.style.position = "fixed";
          videoElement.style.top = "0";
          videoElement.style.left = "0";
          videoElement.style.minWidth = "100%";
          videoElement.style.minHeight = "100%";
          videoElement.style.zIndex = "-999"; // Place it behind other content

    projectAreas.forEach(btn => {
      btn.addEventListener("click", () => {
        container.classList.add("blur"); // Add blur effect to the container when a project is clicked
        
        setTimeout(() => {
          document.body.appendChild(videoElement); // Append video element to body
          videoElement.play(); // Play the background video
        }, 3); // Delay to allow for the blur effect 
        const name = btn.dataset.name; // Access dataset of the specific hovered button
        let videoSrc = ""; // Initialize videoSrc variable
        
        switch (name) {
          case "NetConnect":
            videoSrc = "netconnect.mp4"; // Set video source for NetConnect
            break;
          case "PcShop":
            videoSrc = "pcshop.mp4"; // Set video source for PcShop
            break;
          case "Upmate":
            videoSrc = "upmate.mp4";
            break;
          case "eFantasy":
            videoSrc = "efantasy.mp4";
            break;
          case "IonianMode":
            videoSrc = "ionianmode.mp4";
            break;
          case "Maknep":
            videoSrc = "maknep.mp4";
            break;
          default:
            imageSrc = ""; // Default case if needed
        }



        const div = document.createElement("div");
        div.className = "modal";
        div.innerHTML = `
            <div class="modal-content" style="border:none;">
            <span class="close">&times;</span>
            </div>
            <div class="modal-header" style="display:flex; justify-content:center; align-items:center;"></div>
            <video autoplay loop muted playsinline class="video" style="display:flex; justify-content:center; align-self:center; width: 100%; height: auto;">
              <source src="${videoSrc}" type="video/mp4">
            </video>
            
            `;
        
        
  
        div.style.display = "block";
        div.style.position = "fixed";
        div.style.top = "50%";
        div.style.left = "50%";
        div.style.transform = "translate(-50%, -50%)";
        div.style.width = "70%";
        div.style.height = "100%";
        div.style.borderRadius = "5px";
        // div.style.backgroundColor = "rgb(102, 24, 104)";
        div.style.boxSizing = "border-box";
        div.style.padding = "20px";
        div.style.overflow = "hidden";
        div.style.boxShadow = "-50px 0px 50px rgba(102, 24, 104), 50px 0px 50px rgb(102, 24, 104)";      
        div.style.padding = "20px";
        div.style.zIndex = "1000";

        document.body.appendChild(div);
  
        const closeBtn = div.querySelector(".close");
        closeBtn.addEventListener("click", () => {
          container.classList.remove("blur");
          document.body.removeChild(videoElement);
          document.body.removeChild(div);
        });
      });
    });
  });