import {db} from "../Firebase/services/firebase-config";

import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";

const questionCollectionRef = collection(db,"Quiz");


class QuizDataService{
    addQuestion=(newQuestion)=>{
        return addDoc(questionCollectionRef,newQuestion);
    };
    updateDoc=(id,updateQuestion)=>{
        const QuestionDoc = doc(db,"Quiz",id);//checking availablity
        return updateDoc(QuestionDoc,updateDoc);
    };
    deleteDoc=(id)=>{
        const QuestionDoc=doc(db,"Quiz",id);//checking availablity
        return deleteDoc(QuestionDoc);
    };
    getAllQuestions=()=>{
        return getDocs(questionCollectionRef);
    };
    getQuestion=(id)=>{
        const questionDoc=doc(db,"Quiz",id);
        return getDoc(questionDoc);
    }
}

export default new QuizDataService();