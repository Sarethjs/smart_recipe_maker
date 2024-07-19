import React, { useRef, useEffect, useState } from 'react';
import MobilenetUtil from '../utils/mobilenet.util';
import decodePrediction from '../utils/decoder.util';


const WebcamComponent = ({ setIngredient }) => {

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const model = new MobilenetUtil();
    model.load();

    const [prediction, setPrediction] = useState('');

    useEffect(() => {
        const getUserMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing the camera: ', error);
            }
        };

        getUserMedia();
    }, []);


    useEffect(() => {
        const interval = setInterval(classify, 1000);
        return () => clearInterval(interval);
    }, []);


    const captureFrame = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, 300, 300);
        return canvas;
    };

    const classify = async () => {
        const canvas = captureFrame();
        const prediction = await model.predict(canvas);

        if (prediction && prediction.length > 0) {
            const firstPrediction = prediction[0];
            const className = firstPrediction.className;
            const probability = firstPrediction.probability;

            // decode the result
            const decodedPred = decodePrediction(className, probability);
            setPrediction(`${decodedPred.pred} - ${decodedPred.prob}%`.toUpperCase());
            setIngredient(decodedPred.pred)
        } else {
            setPrediction('Prediction is undefined');
        }
    }

    return (
        <div className='d-flex flex-column'>
            <video ref={videoRef} className='rounded' autoPlay playsInline
                style={{ width: 500, height: 400 }}>

            </video>
            <canvas ref={canvasRef} width="300" height="300" style={{
                display: 'none'
            }}></canvas>
            <p className='text-center fw-bold'>
                {prediction}
            </p>
        </div>
    );
};

export default WebcamComponent;
