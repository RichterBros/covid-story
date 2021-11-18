import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to</span>
        <span className="headerTitleLg">Covid Stories</span>
      </div>
      <img
        src="https://res.cloudinary.com/deuggojsi/image/upload/v1637260726/covid-world_vxbqrx.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
