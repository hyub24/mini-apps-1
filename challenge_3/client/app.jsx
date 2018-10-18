class App extends React.Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);

    this.state = {
      page: 'checkout'
    };
    
    this.accountInfo = {};
  }

  changePage(newPage, formObj) {
    this.setState({
      page: newPage
    })

    this.account = Object.assign(this.accountInfo, formObj);
    console.log(this.accountInfo)
  }

  render() {
    if(this.state.page === 'checkout') {
      return (
        <div>
          <h1>WHAT YOU NEED???</h1>
          <button onClick={() => {this.changePage('form1')}}>Checkout</button>
        </div>
      )
    }
    if(this.state.page === 'form1'){
      return <FormOne changePage={this.changePage} />
    }
    if(this.state.page === 'form2'){
      return <FormTwo changePage={this.changePage} />
    }
    if(this.state.page === 'form3'){
      return <FormThree changePage={this.changePage} />
    }
    if(this.state.page === 'confirm'){
      return <Confirmation changePage={this.changePage} accountInfo={this.accountInfo} />
    }
  }
}

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    if(event.target.name === 'name') {
      this.setState({
        name: event.target.value
      })
    }
    if(event.target.name === 'email') {
      this.setState({
        email: event.target.value
      })
    }
    if(event.target.name === 'password') {
      this.setState({
        password: event.target.value
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // $.ajax({
    //   url: '/formone',
    //   method: 'POST',
    //   data: JSON.stringify(this.state),
    //   contentType: 'application/json',
    //   success: ()=>{},
    //   error: ()=>{}
    // });
    this.props.changePage('form2', this.state);
  }

  render() { 
    return (
      <div>
        <h1>Form 1 </h1>
        <form onSubmit={this.handleSubmit}>
          name<br/>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/><br/>
          email<br/>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br/><br/>
          password<br/>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} /><br/><br/>
          <input type="submit" value="Next" />
        </form>
      </div>
    )  
  }
}

class FormTwo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.name === 'line1') {
      this.setState({
        line1: event.target.value
      })
    }
    if(event.target.name === 'line2') {
      this.setState({
        line2: event.target.value
      })
    }
    if(event.target.name === 'city') {
      this.setState({
        city: event.target.value
      })
    }
    if(event.target.name === 'state') {
      this.setState({
        state: event.target.value
      })
    }
    if(event.target.name === 'zipcode') {
      this.setState({
        zipcode: event.target.value
      })
    }
    if(event.target.name === 'phone') {
      this.setState({
        phone: event.target.value
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: '/formtwo',
      method: 'POST',
      data: JSON.stringify(this.state),
      contentType: 'application/json',
      success: ()=>{},
      error: ()=>{}
    })
    this.props.changePage('form3', this.state);
  }

  render() {
    return (
      <div>
        <h1>Form 2</h1>
        <h2>Shipping Address</h2>
        <form onSubmit={this.handleSubmit}>
          line 1<br/>
          <input type="text" name="line1" onChange={this.handleChange} /><br/><br/>
          line 2<br/>
          <input type="text" name="line2" onChange={this.handleChange} /><br/><br/>
          city<br/>
          <input type="text" name="city" onChange={this.handleChange} /><br/><br/>
          state<br/>
          <input type="text" name="state" onChange={this.handleChange} /><br/><br/>
          zipcode<br/>
          <input type="text" name="zipcode" onChange={this.handleChange} /><br/><br/>
          phone number<br/>
          <input type="text" name="phone" onChange={this.handleChange} /><br/><br/>
          <input type="submit" value="Next" />
        </form>
      </div>
    )
  }
}

class FormThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: '',
      expiration: '',
      cvv: '',
      billing: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.name === "credit") {
      this.setState({
        credit: event.target.value
      })
    }
    if(event.target.name === "expiration") {
      this.setState({
        expiration: event.target.value
      })
    }
    if(event.target.name === "cvv") {
      this.setState({
        cvv: event.target.value
      })
    }
    if(event.target.name === "billing") {
      this.setState({
        billing: event.target.value
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/formthree', {
      method: 'POST',
      headers: {
        contentType: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then()
    .catch();

    this.props.changePage('confirm', this.state);
  }

  render() {
    return (
      <div>
        <h1>Form 3</h1>
        <form onSubmit={this.handleSubmit}>
          credit card number<br/>
          <input type="text" name="credit" onChange={this.handleChange} /><br/><br/>
          expiration date<br/>
          <input type="text" name="expiration" onChange={this.handleChange} /><br/><br/>
          cvv<br/>
          <input type="text" name="cvv" onChange={this.handleChange} /><br/><br/>
          billing zipcode<br/>
          <input type="text" name="billing" onChange={this.handleChange} /><br/><br/>
          <input type="submit" value="Next" />
        </form>
      </div>
    )
  }
}

var Confirmation = (props) => (
  <div>
    <h1>Confirmation Page</h1>
    <div>
      name: {props.accountInfo.name} <br/>
      email: {props.accountInfo.email} <br/>
      password: {props.accountInfo.password} <br/>
      <h2>Shipping Address</h2>
      line 1: {props.accountInfo.line1} <br/>
      line 2: {props.accountInfo.line2} <br/>
    </div>
    <button onClick={() => props.changePage('checkout')}>Purchase</button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));