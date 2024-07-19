import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs-backend-cpu';
import * as tf from '@tensorflow/tfjs'

/* 
* References
* Image Classification API With NodeJS, TensorflowJS, And MobileNet Model
* https://itnext.io/image-classification-api-with-nodejs-tensorflowjs-and-mobilenet-model-45e3a79a5876
*
* Mobilenet NPM
* https://www.npmjs.com/package/@tensorflow-models/mobilenet
*
*/

class MobilenetUtil {


    constructor() {
        this.model = null;

        if (typeof MobilenetUtil.instance === 'object') {
            return MobilenetUtil.instance;
        }

        MobilenetUtil.instance = this;
        return this;
    }


    async load() {

        if (!this.model) {
            this.model = await mobilenet.load({
                version: 2,
                alpha: 1.0,
                modelUrl: 'v2_model/model.json'
            });
        }
        return this.model;
    }

    async predict(inputData) {
        if (this.model) {
            return await this.model.classify(inputData);
        }

        else {
            console.log('loadig model again')
            await this.load();
            this.predict(inputData);
        }
    }
}

export default MobilenetUtil;