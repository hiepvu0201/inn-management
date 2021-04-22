import React from 'react'
import './style.css'
import Menu_AdminPage from "./../../../components/menu_adminpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlug } from "@fortawesome/free-solid-svg-icons";
import { faSave, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import {
  Select,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
  DatePicker,
  Space,
  Radio,
  Upload,
  Button,
  Table,
  InputNumber,
} from "antd";
function Contract() {
    return (
        <div>
            <div className="sum_box">
                <div style={{height:"120px"}}>
                    <Menu_AdminPage/>
                </div>
            </div>
        </div>
    )
}
export default Contract
