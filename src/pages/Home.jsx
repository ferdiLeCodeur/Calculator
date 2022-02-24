import {
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonContent,
    IonDatetime,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, {useState} from "react";

const Home = () => {
    const [name, setName] = useState('')
    const [anniversaire, setAnniversaire] = useState('');
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

          {/*<IonItem>
              <IonLabel position ='stacked'>Nom:</IonLabel>
              <IonInput value = {name} onIonChange={(event)=>setName(event.detail.value)}/>
          </IonItem>*/}

          <IonItem>
              <IonLabel position ='stacked'>Date d'anniversaire:</IonLabel>
              <IonDatetime displayFormat = "D MMM YYYY" value = {anniversaire}
              onIonChange = {(event)=>setAnniversaire(event.detail.value)}/>
          </IonItem>
          <IonCard className="ion-text-center">
              <IonCardHeader>
                  <IonCardTitle>Titre</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                  <p>Physical: 83%</p>
                  <p>Emotional: 45%</p>
                  <p>Intellectual: 52%</p>

              </IonCardContent>
          </IonCard>

          {/*<p>Name: {name}</p>
          <p>Date d'anniversaire: {anniversaire}</p>*/}
      </IonContent>

    </IonPage>
  );
};

export default Home;
