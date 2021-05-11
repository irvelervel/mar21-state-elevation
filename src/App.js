import { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyList from './components/MyList'
import { Col, Container, Row } from 'react-bootstrap'
import MyAlert from './components/MyAlert'

class App extends Component {
  state = {
    selectedCharacter: null,
  }

  // Promise.all
  // it's a way of dealing with multiple promises at a time
  // the advantage of using Promise.all is that all the "fetches" will be done in PARALLEL

  componentDidMount = async () => {
    console.log('mounted!')

    const myHeaders = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkwNzRkMTdmNzQ0NTAwMTU1OGIxMTEiLCJpYXQiOjE2MjAwNzk4MjYsImV4cCI6MTYyMTI4OTQyNn0.THfeqovKBETJeyWfyRVQb2RRHrxlfjdkmAHU3OAV0Ck',
    }

    // let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/1621579832', {
    //   headers: myHeaders,
    // })

    // if(response.ok) {
    //   let comments = await response.json()
    // }

    let allTheResponses = await Promise.all([
      fetch('https://striveschool-api.herokuapp.com/api/comments/1621579832', {
        headers: myHeaders,
      }),
      fetch('https://striveschool-api.herokuapp.com/api/comments/0307742482', {
        headers: myHeaders,
      }),
      fetch('https://striveschool-api.herokuapp.com/api/comments/0525512179', {
        headers: myHeaders,
      }),
    ])

    console.log(allTheResponses)
    let allTheComments = await Promise.all(allTheResponses.map((resp) => resp.json()))
    console.log(allTheComments)
  }

  chooseCharacter = (e) => {
    this.setState({ selectedCharacter: e.target.textContent }) // innerText is the text content of our HTML element
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <MyList chooseCharacter={this.chooseCharacter} selectedCharacter={this.state.selectedCharacter} />
              </Col>
              <Col className="my-auto">
                <MyAlert selectedCharacter={this.state.selectedCharacter} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
