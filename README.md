# Zoom with hover (Vanilla JS | React)

<img alt="Zoom (Vanilla | React)" src="https://media.discordapp.net/attachments/794015985450352661/976484997118709840/unknown.png?width=1295&height=656"/>
<img src="https://cdn.discordapp.com/attachments/794015985450352661/976487611826843708/Screenshot_2022-05-18_11_12_32.png"/>

## React 
Component
<hr/>

```javascript
import Image from './image.jpg';
import {Zoom} from "./zoom";

function() App {
    return (
        <div className="App">
            <Zoom
                image={Image}
            />
        </div>
    );
}
```

## Vanilla JS
HTML
<hr/>
```css
.zoom {
    cursor: default;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url("image.jpg");
}
```
```javascript
<body>
    <div class="App">
        <div class="container">
            <figure class="zoom">
                <img alt="zoom" src="image.jpg" class="image__preview"/>
            </figure>
        </div>
    </div>
    
    <script type="text/javascript" src="zoom/index.js"></script>
</body>
```
<hr/>

#### react-zoom

`npm i or yarn install` 

`npm start or yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


#### vanilla-zoom

Open [index.html](https://github.com/HectorFront/template-zoom-javascript/blob/main/vanilla-zoom/index.html) to view it in your browser.
<hr/>

**About**

A Zoom functionality that follows the mouse direction via hover with examples in React and Vanilla JS.

**@authors: <a href="https://github.com/HectorFront">Hector Rodrigues da Silva</a>**
