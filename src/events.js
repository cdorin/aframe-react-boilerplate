
window.AFRAME.registerComponent('set-color1', {
        dependencies: ['material'],
        init: function() {
          var bigbox = document.querySelector('#big-box');
          this.el.addEventListener('click', () => {
            bigbox.setAttribute('material', 'color', getRandomColor());
          });
        }
      });

window.AFRAME.registerComponent('set-color2', {
        dependencies: ['material'],
        init: function() {
          var bigbox = document.querySelector('#small-box');
          this.el.addEventListener('click', () => {
            bigbox.setAttribute('material', 'color', getRandomColor());
          });
        }
      });	  
       
window.AFRAME.registerComponent('set-particle', {
       
        init: function() {
          var particles = document.querySelector('#particles');
          this.el.addEventListener('click', () => {
            particles.setAttribute('particle-system', 'particle-count', getRandomNum());
          });
        }
      });

window.AFRAME.registerComponent('set-sky', {
        init: function() {
          var sky = document.querySelector('#the-sky');
          this.el.addEventListener('click', () => {
			if(sky.getAttribute('src') == '#skypic2')
			{
				sky.setAttribute('src', '#skypic1');
			}
			else 
			{
				sky.setAttribute('src', '#skypic2');
			}
          });
        }
      });


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomNum() {
  const letters = '0123456789ABCDEF';
  var num = '#';
  for (var i = 0; i < 20; i++ ) {
    num += letters[Math.floor(Math.random() * 100)];
  }
  return num;
}