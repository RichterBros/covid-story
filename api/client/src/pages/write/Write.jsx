import { useContext, useState, useEffect } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  console.log("test");
  console.log(url);
  console.log("test");

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test");
    console.log(url);
    console.log("test");

    const newPost = {
      username: user.username,
      title,
      desc,
      photo: url,
    };

    console.log(newPost);
    if (image) {
      const data = new FormData();
      const imageName = Date.now() + image.name;
      data.append("name", imageName);
      data.append("file", image);
      data.append("upload_preset", "blogApp");
      data.append("cloud_name", "dvzxotcmb");

      console.log(newPost);
      console.log(user);
      await fetch("https://api.cloudinary.com/v1_1/dvzxotcmb/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          setUrl(res.url);
          console.log(res.url);
          newPost.photo = res.url;
        })
        .catch((err) => {
          console.log(err);
        });

      try {
        await axios.post("/upload", data);
        console.log(data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      console.log(newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  console.log(image);
  return (
    <div className="write">
      {image && (
        <img className="writeImg" src={URL.createObjectURL(image)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            name="image"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
