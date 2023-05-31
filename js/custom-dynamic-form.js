                  const texts = ['Daily Meal Box?', 'Corporate Luncheon?', 'Birthday Celebration?', 'Anniversary Dinner?'];
                  const slow =70;
      const pause = 800; // <--- the longer delay between text direction changes
      
      function typeWriter(i=0, index=1, direction=1) {
        let displayed = texts[i].slice(0, index);
        document.querySelector("#dynamicform").textContent = displayed;
      
        if (displayed.length >= texts[i].length) { // start removing after pause
          setTimeout(() => typeWriter(i, index-1, -1), pause);
        } else if (displayed.length === 0) { // go to next text after pause
          setTimeout(() => typeWriter((i+1) % texts.length), pause);
        } else { // continue in the current direction
          setTimeout(() => typeWriter(i, index+direction, direction), slow);
        }
      }
      
      typeWriter();