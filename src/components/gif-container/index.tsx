import * as React from 'react';
import { Gif } from '../../AppState';

const GifContainer = (props: Gif) => (
  <div>
    <h2>{props.title}</h2>
    <iframe
      src={props.embed_url}
      width="480"
      height="360"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    />
  </div>
);

export default GifContainer;
