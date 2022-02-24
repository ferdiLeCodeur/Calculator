import {IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, {useState} from "react";

const Home: React.FC = () => {
    const [name, setName] = useState('')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonItem>
              <IonLabel>Nom:</IonLabel>
             < IonInput value = {name} onChange={(event)=>setName(event.target.value)}/>
          </IonItem>
          <p>Name: {name}</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
