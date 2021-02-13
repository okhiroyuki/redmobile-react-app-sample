import { Component } from 'react';
import { CardMedia, Grid, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import axios from 'axios';

class App extends Component {
  state = {
    data: '',
    endpoint: 'http://127.0.0.1:1880/api/photo'
  };

  handleClick = () => {
    axios
      .get(this.state.endpoint)
      .then((results) => {
        this.setState({data :results.data});
      },
    )
    .catch((error) => {
      alert(error.message);
    });
  }

  handleChangeEndPoint = (props) => {
    this.setState({
      endpoint: props.target.value
    });
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <TextField
            style={{
              margin: '10px 0px 0px 0px',
              width: '100%'
            }}
            id="endpoint"
            label="Endpoint"
            value={this.state.endpoint}
            onChange={(props) => this.handleChangeEndPoint(props)}
            // inputProps= {{fullWidth: true}}
          />
          <Button
            style={{margin: '20px 20px 20px 20px '}}
            onClick= {() => this.handleClick()}
            variant="contained"
          >
              Take a Picture
          </Button>
          <CardMedia 
            component='img'
            src={this.state.data} 
          />
        </Grid>
      </Container>
    );
  }


}

export default App;
