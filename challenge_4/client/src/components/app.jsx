import React from 'react';

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return(
      <div>
        <table>
          <tbody>{{for(){}}}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;