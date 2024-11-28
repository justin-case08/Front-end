import { Menu } from "antd";
import { AppstoreOutlined, ContainerOutlined, MailOutlined, PieChartOutlined, HomeOutlined, PayCircleOutlined, BarsOutlined, SettingOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom';

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar" >
      <Menu.Item key="home" icon={<PieChartOutlined />}>
        <Link to={'/'}>Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="orders" icon={<AppstoreOutlined />}>
      <Link to={'/orders'}>Orders</Link>
      </Menu.Item>

      {/* <Menu.Item key="home" icon={<ContainerOutlined />}>
        Inventory
      </Menu.Item> */}

      <Menu.SubMenu key = "categories" icon= {<ContainerOutlined />} title="Inventory">
        <Menu.Item key="all-items">
          <Link to ={'/inventory'}>All</Link>
        </Menu.Item>
        <Menu.Item key="category1">NoBrand</Menu.Item>
        <Menu.Item key="category2">Brandy</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="payments" icon={<PayCircleOutlined />}>
      <Link to={'/payments'}>Payments</Link>
      </Menu.Item>
      <Menu.Item key="customers" icon={<MailOutlined />}>
        <Link to={'/customers'}>Customers</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to={'/settings'}>Settings</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
