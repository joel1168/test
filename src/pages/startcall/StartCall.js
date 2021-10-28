import "./startcall.css"
import Upcoming from "../../components/widgets/Upcoming"
import CreateCall from "../../components/CreateCall"

export default function Home() {
    return (
        <div className="startcall">
           <CreateCall/>
      
      <div className="widgets">
        <Upcoming/>
      </div>
        </div>
    )
}
