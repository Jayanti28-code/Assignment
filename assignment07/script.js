function getRandomImageUrl() {
      const width = 300;
      const height = 200;
      return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
    }

    function loadImages() {
      const container = document.getElementById("imageContainer");
      const spinner = document.getElementById("spinner");

      container.innerHTML = "";            
      container.classList.add("hidden");    
      spinner.style.display = "block";     

      let loadedCount = 0;
      for (let i = 0; i < 6; i++) {
        const img = document.createElement("img");
        img.src = getRandomImageUrl();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === 6) {
            spinner.style.display = "none";       
            container.classList.remove("hidden");  
          }
        };
        container.appendChild(img);
      }
    }

    window.onload = loadImages;