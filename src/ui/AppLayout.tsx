import { Layout, Menu, theme } from "antd"
import { PropsWithChildren } from "react"

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { Header, Content, Footer } = Layout
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            { key: "time", label: "営業時間" },
            { key: "place", label: "所在地" },
            { key: "policy", label: "こだわり" },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            height: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>&copy; おにぎりまさし</Footer>
    </Layout>
  )
}
