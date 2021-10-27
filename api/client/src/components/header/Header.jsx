import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to</span>
        <span className="headerTitleLg">Covid Stories</span>
      </div>
      <img
        src="https://res.cloudinary.com/dvzxotcmb/image/upload/v1635355251/covid-world_gnkwxk.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
