import { firebaseConfig } from "./firestoreConfiguration";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { dispatch } from "../store";
import { storageRecordatorios } from "../store/action";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const subirRecordatorio = async (title: string, description: string) => {
    await setDoc(doc(db, "recordatorios", title), {
        title: title,
        description: description
    });
}

export const traerRecordatorios = async () => {
    const q = query(collection(db, "recordatorios"));
    const querySnapshot = await getDocs(q);
    const listaRecordatorios: any = []
    querySnapshot.forEach((doc) => {
        listaRecordatorios.push(doc.data())
    });
    dispatch(
        storageRecordatorios(listaRecordatorios)
    )
}

export const observadorCambiosTiempoReal = async () => {
    const q = query(collection(db, "recordatorios"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        traerRecordatorios()
    });
}