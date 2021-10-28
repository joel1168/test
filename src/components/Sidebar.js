import "./Sidebar.css"
import { Notifications } from '@mui/icons-material';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarList">
                    <div className="sidemenuTitle">
                    <Notifications className="sidemenuIcon"/>
                    Statistics
                    </div>
                    <div className="sidemenuTitle">
                        <Notifications className="sidemenuIcon"/>
                        Call Management
                    </div>
                    <div className="sidemenuTitle">
                        <Notifications className="sidemenuIcon"/>    
                        Call History</div>
                    <div className="sidemenuTitle">
                        <Notifications className="sidemenuIcon"/>
                        Start Call</div>
                    <div className="sidemenuTitle">
                        <Notifications className="sidemenuIcon"/>                        
                        Settings</div>
                    <div className="sidemenuTitle">
                        <Notifications className="sidemenuIcon"/>
                        Log out</div>
                    
                </div>

            </div>
        </div>
    )
}


