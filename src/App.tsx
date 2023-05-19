import { BrowserRouter } from 'react-router-dom'
import ConfigRoutes from './configs/routes'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ConfigRoutes />
    </BrowserRouter>
  )
}

export default App
