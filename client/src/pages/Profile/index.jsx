import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Profile(userDetails) {
  const user = userDetails.user;
  console.log(user);
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading_class}>
          <div className={styles.heading1}>Profile</div>
          <Link to="/dashboard">
            <div className={styles.heading2}>Dashboard</div>
          </Link>
        </div>
        <div className={styles.form_container}>
          <div className={styles.left}>
            <img
              className="object-cover h-full w-full"
              src="./images/profile.jpg"
              alt="login"
            />
          </div>
          <div className={styles.right}>
            <h2 className={styles.from_heading}>Profile</h2>
            <img
              src={user._json.picture}
              alt="profile"
              className={styles.profile_img}
            />
            <input
              type="text"
              defaultValue={user._json.name}
              className={styles.input}
              placeholder="UserName"
            />
            <input
              type="text"
              defaultValue={user._json.email}
              className={styles.input}
              placeholder="Email"
            />
            <button className={styles.btn} onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
