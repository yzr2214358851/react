import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import {NavLink} from 'react-router-dom'

function getlist(next){
axios.get('/list').then(res=>{
  next({type:'SET_LIST',list:res.data})
    })
}

class Home extends Component {
  state = {
    rels:''
  }
  componentDidMount(){
    this.props.getlist()
  }

  link = (id)=>{
    // 跳详情
    this.props.history.push('/detail/'+id)
  }

  change=(e)=>{
    this.setState({
      rels:e.target.value
    })
  }

  render() {
    let list = this.props.list.filter(v=>v.title.includes(this.state.rels))
    return (
      <div className="home">
        <div className="header">
          <NavLink to="/home" activeClassName="active-link" ><h1>首页</h1></NavLink>
          <NavLink to="/getan" activeClassName="active-link" ><h1>歌坛</h1></NavLink>
        </div>
        <input type="text" onChange ={this.change} />
        {
          list.map(v=>{
            return <ul key={v.id} className="items" onClick={()=>this.link(v.id)}>
          <li><h2>{v.title}</h2></li>
          <li>{v.price}</li>
          <li><img src={v.imgs} alt=""/></li>
            </ul>
          })
        }
      </div>
    )
  }
}
let state = state=>{
  return {
    list:state.list
  }
}
let dispatch = dispatch=>{
  return {
    getlist:()=>{
      dispatch(getlist)
    }
  }
}
export default connect(state,dispatch)(Home)