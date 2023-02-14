<script setup lang="ts">
import { ref } from 'vue';

let numStr = ref('');
let result = ref(0);
let nums;
const exp = /[0-9]\d*[.]\d*|[0-9]\d*|[+\-*/\(\)-]/g;
const numpad = function(num:number|string){
  if(num === 'AC'){
    numStr.value = '';
    result.value = 0;
    return;
  }
  if(num != '.' && typeof num === 'string'){
    nums = numStr.value.match(exp);
    if(nums!=null){
      for(let idx = 0;idx<nums.length;idx++){
        let n = nums[idx];
        if(idx === 0){
          result.value = parseFloat(n);
          continue;
        }
        if(isNaN(parseInt(n))){
          const op = n;
          idx++;
          n = nums[idx];
          if(op === '+'){
            result.value += parseFloat(n);
          } else if (op === '-'){
            result.value -= parseFloat(n);
          } else if (op === '*'){
            result.value *= parseFloat(n);
          } else if (op === '/'){
            result.value /= parseFloat(n);
          }
        }
      }
    }
    if(num === '=') return;
  }
  numStr.value += num;
  // alls = exp.exec(numStr.value);
  if(num != '.' && typeof num === 'string'){
    
  }
}
const ac = function(){
  numStr.value = '';
}
const c = function(){
  
}
const calc = function(){
  let result = eval(numStr.value);
  numStr.value = result;
}
const del = function(){
  let numInfo = numStr.value;
  numInfo = numInfo.substring(0,numInfo.length - 1);
  numStr.value = numInfo;
}
</script>

<template>
  <div>
      <input type="text" id="display" v-model="numStr"><br />
      <button @click="numpad('/')">/</button>
      <button @click="ac">AC</button>
      <button @click="c">C</button>
      <button @click="del">Del</button>
      <br/>
      <button @click="numpad(7)">7</button>
      <button @click="numpad(8)">8</button>
      <button @click="numpad(9)">9</button>
      <button @click="numpad('*')">X</button>
      <br/>
      <button @click="numpad(4)">4</button>
      <button @click="numpad(5)">5</button>
      <button @click="numpad(6)">6</button>
      <button @click="numpad('-')">-</button>
      <br/>
      <button @click="numpad(1)">1</button>
      <button @click="numpad(2)">2</button>
      <button @click="numpad(3)">3</button>
      <button @click="numpad('+')">+</button>
      <br/>
      <button>+/-</button>
      <button @click="numpad(0)">0</button>
      <button @click="numpad('.')">.</button>
      <button @click="calc">=</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

input {
  width: 200px;
  height: 50px;
  text-align: right;
  font-size: 30px;
  font-weight: bold;
}

button {
  width: 50px;
  height: 50px;
}
</style>