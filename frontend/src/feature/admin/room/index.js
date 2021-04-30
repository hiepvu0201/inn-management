import React from 'react'
import './style.css'
import Menu_AdminPage from './../../../components/menu_adminpage'
function Room() {
    return (
        <div>
            <div style={{height:"100vmax",width:"100%",backgroundColor:"#efefef"}}>
                <div style={{height:"100px"}}>
                    <Menu_AdminPage/>
                </div>
            </div>
        </div>
    )
}
export default Room