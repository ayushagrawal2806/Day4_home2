import Card from "./components/card"
import Details from './data.json'
import './index.css'
function App() {
  return (
    <div className="cont">
      {
        Details.map((ele , index) => {
         return <Card smallBanner = {ele["small-banner"]} name = {ele.name} yearDirector = {ele["year-director"]} duration = {ele.duration} genre = {ele.genre} summary = {ele.summary} mainBanner = {ele["main-banner"]} key = {index}/>
        })
      }
    </div>
  )
}

export default App
