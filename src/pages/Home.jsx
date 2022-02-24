import {
    IonContent,
    IonDatetime,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Home.css';
import React, {useState} from "react";
import BioRythmCard from "../components/BioRythmCard";

const Home = () => {
    const [anniversaire, setAnniversaire] = useState('');
    const targetDate = new Date().toISOString();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">CALCULATOR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonItem>
              <IonLabel position ='stacked'>Date d'anniversaire:</IonLabel>
              <IonDatetime displayFormat = "D MMM YYYY" value = {anniversaire}
              onIonChange = {(event)=>setAnniversaire(event.detail.value)}/>
          </IonItem>
          <BioRythmCard targetDate={targetDate}></BioRythmCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
