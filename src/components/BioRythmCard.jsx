import React, {useState} from 'react';
import {
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

const BioRythmCard = ({targetDate}) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{targetDate}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
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
            </IonContent>
        </IonPage>
    );
};

export default BioRythmCard;
