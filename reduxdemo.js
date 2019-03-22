import React, { Component } from 'react';
import {createStore } from 'redux';


class Reduxdemo extends Component{
    render(){
//step 2 create reduce
const reducer = function(state,action){
        if(action.type==="ATTACK"){
            return action.payload 
        }
        if(action.type===" GREENATTACK"){
            return action.payload 
        }
        return state;
    };
//step 1 store : reduucer & state
const store =createStore(reducer,"peace");
// step 3 Subscribe
store.subscribe(()=>{
    console.log("store is now",store.getState());
})
// step 4 dispatch action
store.dispatch({type:"ATTACK",payload:"IronMan"})
store.dispatch({type:"GREENATTACK",payload:"Halk"})
return(
          <div>
          test
          </div>
        );

    }
};

export default Reduxdemo;