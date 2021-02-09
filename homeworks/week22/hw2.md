## 請列出 React 內建的所有 hook，並大概講解功能是什麼

### useState：

```js
const [count, setCount] = useState(initalState);
```

- `useState` 後面放得是第一次 render 出來的初始值，可以是 string、number 或是一個陣列。這樣就可以在 component 中儲存 state。如果要更改 count 的值，可以用 `setCount(newState)` 的方式來做修改。
  另外 state 的更動都會讓相關的 component re-render，只要每改動一次 state，就會再 render 一次畫面。

### useRef：

```js
const id = useRef(initalState);
```

- `useRef` 可用於存取 id 之類的和 DOM 的相關資訊。
- `useRef` 會回傳一個物件，所以再修改值時不會觸發 re-render。
- `useRef` 需要再後面加上 `.current` 才可以改變他的 state。

### useEffect：

```js
useEffect(() => {
  // 初次 render 完後，會執行裡面的行為
  return () => {
    // 當 component 被移除，或者有 re-render 事件發生時，就會先執行裡面的行為
  }
}[
  // 裡面的 state 有被改動的話，就會重新執行一次 useEffect，若是 []的話代表只在初次 render 時就執行)
])
```

### useMemo：

```js
const s = useMemo(() => {
  return {
    color: value ? "red" : "blue",
  };
}, [value]);
```

主要在防止"資料"重新 re-render，常使用於複雜的運算。只有當 value 有更動時才會 re-render，再回傳一個新的 object。

### memo：

```js
function Button(a, b) {
  // ...
}
const MemoButton = memo(Button);
```

主要在防止 "component" 重新 re-render。只有當 a or b 的值有更動時，才會 re-render。

### useCallback：

```js
const handleButtonClick = useCallback(() => {
  // ...
}, [value]);
```

`useMemo` 回傳的是值，而 `useCallback`則回傳一個 function，如果 value 值有改變，才會重新呼叫 useCallback 這函式進行 re-render。

## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點

### mount：

在 component 被 render 出來前，第一次創建 component 並掛到 DOM 上。

生命週期順序：

1. `constructor()` ：初始化
2. `static getDerivedStateFromProps()`
3. `render()` ：渲染
4. `componentDidMount()`： 掛載 DOM

### updating：

當 `props` 或 `state` 有變化時，就會更新狀態並且重新渲染。

生命週期順序：

1. `shouldComponentUpdate`： 回傳布林值，決定狀態改變後是否 render
2. `render()` ：渲染
3. `componentDidUpdate()` ：component 更新完畢

### Unmount：

當一個 component 被從 DOM 中移除時則會呼叫 `componentWillUnmount()`

參考資料：https://medium.com/coding-hot-pot/react-lifecycle-%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F-a48683ae3922

## 請問 class component 與 function component 的差別是什麼？

初始化與存取 state 差異：

- class component ： 要先在 constructor 做初始化動作，因為 this 會改變，需要使用閉包才能捕獲 props。存取 state 方式使用 `this.state={initalState}`來設置。

- function component ：無需 constructor 初始化，直接傳入即可。state 存取方式則是使用 `useState` 來設置。

`class component` 與 `function component`關注點的差異：

- class component ：關注在進入每個 lifecycle 要做什麼事

- function component ：關注當 function 重新 render 後要做什麼事情，或當 function render 完後每個 state 改變時要做什麼事情。

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？

- Controlled：受 React 所控制的資料
- Uncontrolled：不受 React 所控制的資

EX：`<input />` 這類的表單元素本身就可以保有自己的資料狀態。如果是 `Uncontrolle` 的話，就像之前所學的，可以透過 js 選到該 input 元素後，再取出該元素的值。反之如果是 `Controlled` 的話，會把資料交給 React 來處理，所以會先透過 `useState` 來創建一個可以儲存 input 資料的地方，接著再透過 `onChange` 事件來取得該元素當前的值。
