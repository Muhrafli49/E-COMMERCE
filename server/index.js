import express from 'express';
import cors from 'cors';
import categoryRouter from './routes/category.js';
import productRouter from './routes/product.js';
import bannerRouter from './routes/banner.js'

const app = express();
const port = 5000;

const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/banner', bannerRouter);

app.listen(port, () => {
    console.log(`Server berjalan di localhost pada port ${port}`);
});
