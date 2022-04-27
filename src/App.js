import React, { Component } from 'react'

export class App extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        person:[
          {
            fullName: 'Oyinkansola Sarah Aderibigbe',
            bio: 'professionally as Ayra Starr, is a Nigerian singer, songwriter and model. Born in Cotonou, Ayra Starr began a fashion career at the age of 16 with Quove Model Management before deciding to pursue music.',
            imgSrc: 'https://www.ubetoo.com/wp-content/uploads/2021/01/ayra-starr-biography-real-name-record-label-age-boyfriend-networth-state-of-origin-2021-01-26_12-45-42_472100-ubetoo.jpg',
            profession: 'Nigerian singer-songwriter',
          }
        ],

        show: false

      }
    }

    showHandler = (e) => {
      this.setState(prevstate => ({show: !prevstate.show}))
    }
    render() {

    const { fullName , bio, imgSrc , profession} = this.state.person[0];

    return (
      <div>
        {
          this.state.show &&
        <div className="profile" style={{textAlign: 'center'}}>
          <img src={imgSrc} style={{width: '300px'}} alt="" />
          <h2>{fullName}</h2>
          <h3>{profession}</h3>
          <p style={{width: '600px', margin: '1rem auto'}}>{bio}</p>
        </div>
        }
         <button onClick={this.showHandler}>ShowProfile</button>
      </div>
    )
  }
}

export default App
