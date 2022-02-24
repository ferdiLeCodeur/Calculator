import React, {useState} from 'react';
import dayjs from 'dayjs';
import {
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY');
}

const BioRythmCard = ({targetDate}) => {

    return (
        <IonPage>

            <IonContent fullscreen>
                <IonCard className="ion-text-center">
                    <IonCardHeader>
                        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
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
