import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

require('./events');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
		  <img id="skypic1" src="https://c3.staticflickr.com/2/1475/26239222850_cabde81c39_k.jpg"/>
		  <img id="skypic2" src="https://c2.staticflickr.com/2/1688/25044226823_53c979f8a1_k.jpg"/>
        </a-assets>

        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>

        
		
		<Entity id="entity--plane--menu"
		  geometry={{primitive: 'plane', height: 1, width: 3.5}}
		  position= {{x: 0.1, y: 2.4, z: -3}}
		  material={{color: '#778899', opacity: 0.6}}>
		</Entity>
		
		<Entity id="entity--box--menu1"
		  geometry={{primitive: 'box'}}
		  position= {{x: -1.1, y: 2.4, z: -3}}
		  scale = {{x: 0.5, y: 0.5, z: 0.1}}
		  material={{color: '#DC143C'}}
		  set-sky >
		</Entity>
		
		<Entity id="entity--box--menu2"
		  geometry={{primitive: 'box'}}
		  position= {{x: -0.3, y: 2.4, z: -3}}
		  scale = {{x: 0.5, y: 0.5, z: 0.1}}
		  material={{color: '#00FFFF'}}
		  set-particle >
		</Entity>
		
		<Entity id="entity--box--menu3"
		  geometry={{primitive: 'box'}}
		  position= {{x: 0.5, y: 2.4, z: -3}}
		  scale = {{x: 0.5, y: 0.5, z: 0.1}}
		  material={{color: '#00008B'}}
		  set-color1 >
		</Entity>
		
		<Entity id="entity--box--menu4"
		  geometry={{primitive: 'box'}}
		  position= {{x: 1.3, y: 2.4, z: -3}}
		  scale = {{x: 0.5, y: 0.5, z: 0.1}}
		  material={{color: '#FF8C00'}}	
		  set-color2 >
		</Entity>
		 
		<Entity id="big-box"
          geometry={{primitive: 'box'}}
          material={{color: '#24CAFF', opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -3}}>
          <Entity id="small-box" animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#24CAFF'}}/>
        </Entity>
		
		<Entity id="the-sky" primitive="a-sky" src="#skypic1" />

		<Entity id="particles" particle-system={{preset: 'snow', particleCount: 2000}}/>

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
