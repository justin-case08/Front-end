import { useState } from "react";
import { Button, Layout, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/orders";
import Payments from "./pages/payments"
import Customers from "./pages/customers"
import Settings from "./pages/settings";
import Inventory from "./pages/inventoryAll";


const { Header, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router> 
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className="sidebar"
        >
          <Logo/>
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header className="header" darkTheme={darkTheme} style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type='text'
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          <Routes> 
            <Route path="/" element={<Dashboard />} /> 
            <Route path="/orders" element={<Orders />} /> 
            <Route path="/inventory" element={<Inventory />} /> 
            <Route path="/payments" element={<Payments />} /> 
            <Route path="/customers" element={<Customers />} /> 
            <Route path="/settings" element={<Settings />} /> 
          </Routes>

        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
