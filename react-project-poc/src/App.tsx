import './App.css'
import { useAppDispatch, useAppSelector } from './store/hook'
import { selectCurrentCount, setDecreaseCount, setIncreaseCount } from './store/features/count/countSlice'

function App() {
  const currentCount = useAppSelector(selectCurrentCount)
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p data-testid="current_count">count is {currentCount}</p>
        <button onClick={() => {
          dispatch(setIncreaseCount(1))
        }}>
          Add
        </button>
        <button onClick={() => {
          dispatch(setDecreaseCount(1))
        }}>
          Subtract
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
