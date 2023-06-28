"use client";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Loja", "1", <PieChartOutlined />),
  getItem("Bagulhos", "2", <DesktopOutlined />),
  getItem("Proibidos", "3", <ContainerOutlined />),
  getItem("Cacarecos", "sub1", <MailOutlined />, [
    getItem("Lixo", "5"),
    getItem("Quebrados", "6"),
    getItem("Furtados", "7"),
    getItem("Incompletos", "8"),
  ]),
  getItem("Desconhecidos", "sub2", <AppstoreOutlined />, [
    getItem("Inúteis", "9"),
    getItem("Incompreensiveis", "10"),
    getItem("XXX", "sub3", null, [
      getItem("Fetiches", "11"),
      getItem("Deep Ones", "12"),
    ]),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default App;
