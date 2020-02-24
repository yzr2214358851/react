import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
  link = () => {
    let a = document.querySelector('.a');
    let num = document.querySelector('.num');
    let price = document.querySelector('.price');
    let danjia = document.querySelector('.danjia');
    console.log(danjia);
    num.innerHTML--;
    price.innerHTML = price.innerHTML - danjia.innerHTML * 1;
    if (num.innerHTML <= 0) {
      a.innerHTML = '';
      this.props.history.push('/home')
    }
  };
  jia = () => {
    let price = document.querySelector('.price');
    let danjia = document.querySelector('.danjia');
    let num = document.querySelector('.num');
    // let zongPrice = document.querySelector('.zongPrice');
    num.innerHTML++;
    price.innerHTML = danjia.innerHTML * num.innerHTML;
  };
  render() {
    let info = this.props.list.find(v => v.id === this.props.match.params.id);
    console.log(info);
    console.log(this.props);
    return (
      <div className="a">
        <ul className="detail">
          <li className='a1'>
            <h1>{info.title}</h1>
          </li>
          <li className='im'>
            <img src={info.imgs} alt="" />
          </li>
          <button className="jian" onClick={this.link}>
            -
          </button>
          <li className='ppp'>总价:<span className="price">{info.price}</span>元</li>
          <button className="jia" onClick={this.jia}>
            +
          </button>
          <li></li>
          <li className='nums'>
            数量：<span className="num">1</span>
          </li>
          <li className="danjia">{info.price}</li>
        </ul>
      </div>
    );
  }
}

let state = state => {
  return {
    list: state.list
  };
};
let dispatch = dispatch => {
  return {};
};
export default connect(state, dispatch)(Detail);
