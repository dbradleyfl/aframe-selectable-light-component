## aframe-selectable-component

Selectable Light is a component for [A-Frame](https://aframe.io). It is a fork of [scenevr/selectable-component](https://github.com/scenevr/selectable-component) minus the boundingbox.

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/dbradleyfl/aframe-selectable-light-component/master/dist/aframe-selectable-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-assets></a-assets>
    <a-entity selectable>
      <a-entity geometry="primitive: box" material="color: #C03546"></a-entity>
    </a-entity>

    <a-sky color="#2ca9df"></a-sky>

    <a-entity position="0 1.8 4">
      <a-entity camera="active:true" wasd-controls="" look-controls="" rotation="-24.178818954520754 0.3437746770785027 0" position="0 0 0">
        <a-cursor></a-cursor>
      </a-entity>
    </a-entity>
  </a-scene>
  <script type="text/javascript">
    document.querySelector('a-entity[selectable]').addEventListener('selected', (e) => {
      console.log(e.selected);
    });
  </script>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-selectable-light-component
```

Then register and use.

```js
require('aframe');
require('aframe-selectable-light-component');
```
