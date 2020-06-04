import { firestore } from '../firebase/firebase-config';


export const getProducts = () => {
    return firestore.collection('products').get()
        .then((response) => {
            const arrayProduct = [];

            response.docs.forEach(doc => {
                const product = {
                    id: doc.id,
                    ...doc.data()
                };

                arrayProduct.push(product);
            });
            console.log(arrayProduct);
            return arrayProduct;
        })
};