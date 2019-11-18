// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import ExampleVideoData from '../src/data/exampleVideoData.js';

ReactDOM.render(<App videos={ExampleVideoData}/>, document.getElementById('app'));