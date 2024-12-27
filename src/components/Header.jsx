import icon  from "../assets/chef-claude-icon.png"
export default function Header() {
  return (
    <header className="header">
      <img  className="icon" src={icon} alt="Robot Chef Logo"/>
      <h1 className="Title">Chef Claude</h1>
    </header>
  )
}
