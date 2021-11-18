import React, { Component } from "react";
import Data from "./list.json";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      visible: false,                             
    };
  }

  handleModal = (results) => {
    this.setState({
      visible: true,
      Bahan:results.bahan,
      Cara:results.cara,
      Avatar:results.avatar
    });
  };
  handleModal2 = ()=>{
    this.setState({
      visible2:true,
    })
  }


  render() {
    return (
      <div>
        <div className="boxWhite">
          <center>
            <h1>RESEP MASAKAN</h1>
          </center>
          <Button
            className="button ml-5 mr-5 rounded mb-2"
            onClick={() => {this.handleModal2()}}
            >
            Profil Saya
            </Button>

          <Modal
            title="Bahan dan Cara Pembuatan"
            centered
            visible={this.state.visible}
            onOk={() => this.setState({ visible: false })}
            onCancel={() => this.setState({ visible: false })}
            width={500}
          >
            <div style={{ textAlign: "center" }}>
            <img src={this.state.Avatar} class="image" width="300px" height="200px"></img>
                <p>{this.state.Bahan} </p>
                <p>{this.state.Cara} </p>
    
            </div>
          </Modal>
          <Modal
          title = "Profil"
          centered
          visible={this.state.visible2}
          onOk={()=> this.setState({visible2:false})}
          onCancel={()=> this.setState({visible2:false})}
          width={500}
          >
            <div className="text-center">
              <h4> Haii Bunda!! </h4>
              <img class="image" src="koki512.png" ></img>
              <p>Nama : Dessinta Dwi Rahmadani </p>
              <p>NIM  : 21120118120020 </p>

            </div>
        

          </Modal>

           {Data.Resep.map((results, index) => {
            return (
              <div className="card" 
              key={results.id}>
                <div className="card-body">
                  <h6 className="card-title">
                   {results.nama} </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                   {results.desc} </h6>
                </div>
                <button
                  className="button"
                  onClick={() => this.handleModal(results)}
                >
                  {" "}
                  Mulai Masak
              
                  
                </button>
              </div>
            );
          })} 
        </div>
      </div>
    );
  }
}
