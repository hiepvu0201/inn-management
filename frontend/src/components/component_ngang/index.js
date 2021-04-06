import React from 'react'
import './style.css'
import {Images} from '../../config/image'
function Component_Ngang(props) {
    return (
        <div>
            <div className="box-ngang">
                <img style={{height:"60px", width:"auto"}} src={props.img}/>
                <div style={{display:"flex",justifyContent:"center"}}>
                <div className="topic">
                {/* Quản lý mọi lúc, mọi nơi */}
                {props.topic}
                </div>
                </div>
                <div  style={{display:"flex",justifyContent:"center"}}>
                <div className="content-n">
                {/* Chủ trọ có thể quản lý nhà trọ mọi lúc mọi nơi, dữ liệu được quản lý tập trung, bảo mật, và an toàn tuyệt đối. */}
                {props.content}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Component_Ngang
