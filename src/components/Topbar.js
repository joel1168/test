import React from 'react'
import "./Topbar.css";
import { Notifications } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Vodevi Portal</span>
                </div> 
                <div className="topRight">
                    <img src="data:image/jpeg;base64,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 " alt="" className="derpface"/>
                    <div className="topbarIcons">
                        <Notifications/>
                    </div>
                    <div className="topbarIcons">
                        <Notifications/>
                    </div>
                    <div className="topbarIcons">
                        <Notifications/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
