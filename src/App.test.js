import App from './App';

it ('testing calculator', ()=>{
  let action = this.state.value('10/2+6*8-3')
  let newState  = App(action)
  expect(newState.state.result).toBe(50)
})
