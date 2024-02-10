import { Typography, Flex } from "antd"
import onigiriLogo from "./assets/onigiri-log.svg"
import onigiriIcon from "./assets/onigiri-icon.svg"
import "./App.css"
import { AppLayout } from "./ui/AppLayout"

function App() {
  return (
    <AppLayout>
      <Flex align="middle" style={{ marginTop: "20%" }}>
        <div style={{ width: "25vh" }}>
          <img src={onigiriIcon} alt="logo" />
        </div>
        <div style={{ width: "70vh" }}>
          <img src={onigiriLogo} alt="logo" />
        </div>
      </Flex>
      <Flex
        align="middle"
        style={{ marginTop: "48px" }}
        vertical
        justify="center"
      >
        <div>
          <Typography.Title>塩むすび単独に注力</Typography.Title>
        </div>
        <div>
          <Typography.Title level={3}>
            特にこだわっていないその辺の塩でおいしくつくる、まさしのこだわり
          </Typography.Title>
        </div>
      </Flex>
    </AppLayout>
  )
}

export default App
