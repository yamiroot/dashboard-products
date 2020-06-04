import { firestore } from './firebase-config';


export const getProducts = () => {
    return firestore.collection('products').orderBy('date', 'desc').get()
        .then((response) => {
            const arrayProduct = [];

            response.docs.forEach(doc => {
                const product = {
                    id: doc.id,
                    ...doc.data()
                };

                arrayProduct.push(product);
            });

            return arrayProduct;
        })
};


export const addProduct = product => firestore.collection('products').add(product);


export const deleteProduct = idProduct => firestore.collection('products').doc(idProduct).delete();
