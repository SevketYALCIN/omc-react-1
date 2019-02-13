import * as React from 'react';
import './App.css';
import {
  Container,
  Header,
  Input,
  Button
} from '../node_modules/semantic-ui-react';
import { AppState, Gif } from './AppState';
import { ChangeEvent } from 'react';
import GifContainer from "./components/gif-container";

const apiKey = `5o7PjsuezPxksXHSm0Vp2QFTM34L50Pp`;

class App extends React.Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      searchText: '',
      gifs: []
    };
  }

  updateSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.target.value });
  };

  fetchGifs = async () => {
    const request = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${
        this.state.searchText
      }&api_key=${apiKey}&limit=10`,
      {
        method: 'GET'
      }
    );
    const results = await request.json();
    this.setState({ gifs: results.data });
  };

  render() {
    return (
      <Container>
        <h1>GIF Library</h1>
        <Container>
          <Input
            type="text"
            onChange={this.updateSearchText}
            value={this.state.searchText}
          />
          <Button
            primary
            style={{ marginLeft: '10px' }}
            onClick={this.fetchGifs}
          >
            Search
          </Button>
        </Container>
        <Container className="gifs">
          {this.state.gifs.map(gif => (
            <GifContainer key={gif.id} id={gif.id} title={gif.title} embed_url={gif.embed_url}/>
          ))}
        </Container>
      </Container>
    );
  }
}

export default App;
