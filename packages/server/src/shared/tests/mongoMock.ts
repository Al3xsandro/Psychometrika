import mongoose from 'mongoose';

class MongoMock {
    connect() {
        try {
            mongoose.connect(`${process.env.MONGO_URL}`, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }, () => {
                console.log(`+ database connected`);
            });
        } catch (err) {
            throw new Error(`Error on connect database: ${err}`);
        };
    };

    close() {
        mongoose.disconnect((err) => {
            throw new Error(`Error on connect database: ${err}`);
        });
    };
};

export { MongoMock };