import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [click, setClick] = useState(true);

  const nameChange = (val) => {
    console.log(val)
    setName(val)
  }
  const numChange = (val) => {

    setNum(val)
  }
  const handlelick = () => {
    console.log(num,name)
    if(!name){
      alert('name')
      return
    }
    if(!num){
      alert('num')
      return
    }
    setClick(false)
  }
  return (
    <div className="App">
    {
      click ? (
        <>
          <input placeholder="输入学号" name='num' value={num} onChange={(e) => numChange(e.target.value)}/>
          <input placeholder="输入姓名" value={name} onChange={e => nameChange(e.target.value)}/>
          <button onClick={handlelick}>确认</button>
          <div>确认后会立马跳转出凭证，5分钟倒计时</div>
        </>
      ) : (
        <div>tiao</div>
      )
    }
    </div>
  );
}

export default App;
