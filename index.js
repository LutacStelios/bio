document.addEventListener("DOMContentLoaded", function() {
  const projectAreas = document.querySelectorAll(".project");
  const container = document.querySelector(".container");
  const language = document.querySelector(".language");
  const languageSwitcher = document.getElementById("language-switcher");
  let currentLanguage = document.documentElement.lang;
    
    if(languageSwitcher.textContent == "" && currentLanguage == "el") {
      languageSwitcher.textContent = "Μετάφραση στα Αγγλικά";
    } 
    else if (languageSwitcher.textContent == "" && currentLanguage == "en") {
      languageSwitcher.textContent = "Switch to Greek";
    }
  
  languageSwitcher.addEventListener("click", (e) => {
    e.preventDefault();
    const elementsToUpdate = [
      { selector: ".profile-card p", property: "textContent" },
      { selector: ".profile-card h1", property: "textContent" },
      { selector: ".aboutme p", property: "textContent" },
      { selector: "#projects", property: "textContent" },
      { selector: ".content h2", property: "textContent" },
      { selector: ".contactinfo h2", property: "textContent" }
    ];

    elementsToUpdate.forEach(({ selector }) => {
      const element = document.querySelector(selector);
      if (element) {
        // Remove the styles to reset the animation
        element.style.transition = "none";
        element.style.transform = "none";
        element.style.opacity = "1";
    
        // Force a reflow to apply the reset styles
        void element.offsetWidth;
    
        // Apply the transition and animation again
        element.style.transition = "transform 1.5s ease-in, opacity 1.5s ease-in";
        element.style.transform = "rotate(360deg)";
        element.style.opacity = "0";
      }
    });

    setTimeout(() => {
      if (currentLanguage === "el") {
        currentLanguage = "en";
        document.documentElement.lang = "en";
        languageSwitcher.textContent = "Μετάφραση στα Αγγλικά";
        document.querySelector(".contactinfo h2").textContent = "Contact Info";
        document.getElementById("projects").textContent = "My Projects";
        document.querySelector(".content h2").textContent = "About Me";
        document.querySelector(".profile-card h1").textContent = "Stelios Loutatidis";
        document.querySelector(".aboutme p").textContent = "👋 Hi! I'm Stelios, a web developer from Thessaloniki. I really enjoy creating beautiful and easy-to-use websites. I pay close attention to detail, from writing clean HTML and CSS to making the pages interactive with JavaScript and ensuring the backend works well with PHP and MySQL.I have experience with WordPress and Elementor, and I like building websites that are easy for clients to use and update. I've also worked a lot with OpenCart, especially with the Journal theme, and I've created various plugins to meet business needs, making online stores run smoothly.I enjoy building nice user interfaces with ReactJS and more complex applications with Angular. I'm always looking to learn new technologies and improve my skills. For me, web development isn't just a job, it's something I really enjoy doing and constantly learning about.When I'm not coding, I like playing video games 💻, playing pool 🎱, or spending time with my family. If you'd like to collaborate on building something awesome, let me know!";
        document.querySelector(".profile-card p").textContent = "I'm a web developer who's really passionate about building websites. I work with the latest technologies to create websites that are both beautiful and easy to use. I always try to make my code clean and efficient so that users have a good experience.";
      } else {
        currentLanguage = "el";
        document.documentElement.lang = "el";
        languageSwitcher.textContent = "Translate Greek";
        document.querySelector(".contactinfo h2").textContent = "Επικοινωνία";
        document.getElementById("projects").textContent = "Τα Έργα Μου";
        document.querySelector(".content h2").textContent = "Μερικά Λόγια για Εμένα";
        document.querySelector(".profile-card h1").textContent = "Στέλιος Λουτατίδης";
        document.querySelector(".aboutme p").textContent = "👋 Γεια σας! Είμαι ο Στέλιος, ένας προγραμματιστής ιστοσελίδων από τη Θεσσαλονίκη. Μου αρέσει πολύ να φτιάχνω όμορφες και εύχρηστες ιστοσελίδες. Δίνω μεγάλη προσοχή στη λεπτομέρεια, από το να γράφω καθαρό HTML και CSS, μέχρι να κάνω τις σελίδες να αλληλεπιδρούν με JavaScript και να δουλεύει σωστά το backend με PHP και MySQL.Έχω εμπειρία με το WordPress και το Elementor, και μου αρέσει να φτιάχνω ιστοσελίδες που είναι εύκολες στη χρήση και στην ενημέρωση από τους πελάτες. Έχω επίσης δουλέψει πολύ με το OpenCart, ειδικά με το θέμα Journal, και έχω φτιάξει διάφορα πρόσθετα για να καλύψω τις ανάγκες των επιχειρήσεων, κάνοντας τα ηλεκτρονικά καταστήματα να λειτουργούν άψογα.Μου αρέσει να φτιάχνω ωραία γραφικά με το ReactJS και πιο σύνθετες εφαρμογές με το Angular. Πάντα ψάχνω να μάθω καινούργιες τεχνολογίες και να γίνω καλύτερος. Για μένα, η δημιουργία ιστοσελίδων δεν είναι απλώς δουλειά, αλλά κάτι που μου αρέσει πολύ να κάνω και να μαθαίνω συνεχώς.Όταν δεν προγραμματίζω, μου αρέσει να παίζω βιντεοπαιχνίδια 💻, να παίζω μπιλιάρδο 🎱 ή να περνάω χρόνο με την οικογένειά μου. Αν θέλετε να συνεργαστούμε για να φτιάξουμε κάτι ωραίο, πείτε μου!";
        document.querySelector(".profile-card p").textContent = "Είμαι ένας προγραμματιστής ιστοσελίδων που μου αρέσει πολύ να φτιάχνω ιστοσελίδες. Δουλεύω με τις πιο σύγχρονες τεχνολογίες για να φτιάχνω ιστοσελίδες που είναι όμορφες και εύκολες στη χρήση. Προσπαθώ πάντα ο κώδικάς μου να είναι καθαρός και να δουλεύει γρήγορα, για να έχουν οι χρήστες μια καλή εμπειρία.";
      }

      elementsToUpdate.forEach(({ selector }) => {
        const element = document.querySelector(selector);
        if (element) {
          element.style.opacity = "1";
        }
      });
    }, 1500);
  });
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
      language.classList.add("blur");
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
        language.classList.remove("blur");
        document.body.removeChild(div);
      });
    });
  });
});
