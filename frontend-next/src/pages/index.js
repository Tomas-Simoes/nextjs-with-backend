import styles from "../styles/Home.module.css";
export default function Home() {
  const callAPI = async () => {
    try {
      console.log(
        "Requesting API over: 'https://backendtest.famousgadget.pt/'"
      );

      const res = await fetch(`https://backendtest.famousgadget.pt/`);

      /*
      console.log("Requesting API over: 'http://localhost:8080'");
      const res = await fetch("http://localhost:8080");
      */

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addToDatabase = async () => {
    try {
      console.log(
        "Requesting API over: 'https://backendtest.famousgadget.pt/add'"
      );

      const res = await fetch(`https://backendtest.famousgadget.pt/add`);

      /*
      console.log("Requesting API over: 'http://localhost:8080/add'");
      const res = await fetch("http://localhost:8080/add");
      */

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const countDatabase = async () => {
    try {
      console.log(
        "Requesting API over: 'https://backendtest.famousgadget.pt/dbcount'"
      );

      const res = await fetch(`https://backendtest.famousgadget.pt/dbcount`);

      /*
        console.log("Requesting API over: 'http://localhost:8080/dbcount'");
        const res = await fetch("http://localhost:8080/dbcount");
      */

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={callAPI}>Make API call</button>
        <button onClick={addToDatabase}>Add item to database</button>
        <button onClick={countDatabase}>Get item count</button>
      </main>
    </div>
  );
}
