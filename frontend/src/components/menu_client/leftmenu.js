// import React from 'react';
// import { Menu, Grid } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// import './style.css'
// const { useBreakpoint } = Grid;

// const LeftMenu = () => {
//   const { md } = useBreakpoint()
//   return (
//     <Menu  mode={md ? "horizontal" : "inline"}>
//       <Menu.Item  key="mail">
//         <a style={{fontFamily:'Kaushan Script, cursive'}} href="">Home</a>
//       </Menu.Item>
//       <SubMenu style={{fontFamily:'Kaushan Script, cursive'}} className="form-text-menu" key="sub1" title={<span>Blogs</span>}>
//         <MenuItemGroup title="Item 1">
//           <Menu.Item key="setting:1">Option 1</Menu.Item>
//           <Menu.Item key="setting:2">Option 2</Menu.Item>
//         </MenuItemGroup>
//         <MenuItemGroup title="Item 2">
//           <Menu.Item key="setting:3">Option 3</Menu.Item>
//           <Menu.Item key="setting:4">Option 4</Menu.Item>
//         </MenuItemGroup>
//       </SubMenu>
//       <Menu.Item key="alipay">
//         <a style={{fontFamily:'Kaushan Script, cursive'}} href="">Contact Us</a>
//       </Menu.Item>
//     </Menu>
//   );
// }

// export default LeftMenu;
import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a style={{color:'Black',fontFamily:'Kaushan Script, cursive'}} href="">Home</a>
      </Menu.Item>
      <SubMenu style={{color:'Black',fontFamily:'Kaushan Script, cursive'}} key="sub1" title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a style={{color:'Black',fontFamily:'Kaushan Script, cursive'}} href="">Contact Us</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;