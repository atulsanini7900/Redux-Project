import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <main className={styles.main}>
      <AddUser/>
      <UserList/>

    </main>
  );
}
