
AFRAME.registerComponent('set-color', {
        dependencies: ['material'],
        init: function() {
          var bigbox = document.querySelector('#entity--box--menu4');
          this.el.addEventListener('click', () => {
            bigbox.el.setAttribute('material', 'color', '#00008B');
          });
        }
      });
     
       
AFRAME.registerComponent('set-sky', {
        init: function() {
          var sky = document.querySelector('a-sky');
          this.el.addEventListener('click', () => {
            sky.setAttribute('src', this.data);
          });
        }
      });

