import './App.css';
import images from './images.js'
import ImageCard from './components/ImageCard/ImageCard';


const App = () => {

  const l = images.length

  const imageStack = images.map( (img, i) => {
    return (
      <ImageCard
        key={i}
        src={img.src}
        i={i}
        l={l}
      />
    )
  })

  return (
    <div className="App">
      <div className="main-content">

        <div className='flex-left'>
        </div>

        <div className='flex-center'>
          {imageStack}
        </div>

        <div className='flex-right'>
        </div>

      </div>
    </div>
  );
}

export default App;
