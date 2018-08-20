import React, { Component } from 'react';
import './App.css';
import ModalVideo from 'react-modal-video'

class App extends Component {
  
  constructor() {
    super()
    
    this.state = {
  
      items: [
        {
          name: "Pax3",
          thumbnail: "http://www.smartshop-seedshop.com/site/wp-content/uploads/pax3vaporizerA.jpg",
          video: "gB2YEKu2sSo",
          isOpen: false,
        },
        {
          name: "Magical Butter",
          thumbnail: "https://www.marijuanapackaging.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/magical-butter-machine-1.jpg",
          video: "yFEHiKkOOk0",
          isOpen: false,
        },
        {
          name: "Juul",
          thumbnail: "https://www.smokearsenal.com/wp-content/uploads/2018/01/juul.jpg",
          video: "BYt2aouHVbk",
          isOpen: false,
        },
      ],
    }

    this.openModal = this.openModal.bind(this)
  }
  
  openModal() {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center">Haven Smokes</h1> 
          <p className="text-center">Click to find out more about any of our products</p> 
        </div>
          <div className = "container">
              <div className="row">
                  {this.state.items.map((item, index) => {
                      return (
                        <div>
                          <div className = "col-xs-6 col-md-4">
                              <div className="panel panel-default" onClick={this.openModal}>
                                <div className="panel-heading text-center">{item.name}</div>
                                <div className="panel-body"><img src={item.thumbnail} alt={item.name} /></div>
                              </div>
                          </div>
                          <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='gB2YEKu2sSo' onClose={() => this.setState({isOpen: false})} />
                        </div>
                      )
                  })}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
