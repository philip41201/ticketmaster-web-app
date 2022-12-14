import { db } from "../firebaseConfig";
import { collection, query, getDocs, orderBy } from "firebase/firestore";

export async function fetchEvents() {
  const snapshot = await getDocs(
    query(
      collection(db, "events"),
      orderBy("event.name", "asc"),
      orderBy("event.dates.start.localDate", "asc")
    )
  );
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
